import { useEffect, useRef } from "react";

interface EmbersProps {
  count?: number;
  speedMultiplier?: number;
}

export function Embers({ count = 24, speedMultiplier = 1 }: EmbersProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    class EmberParticle {
      x!: number;
      y!: number;
      size!: number;
      speedY!: number;
      speedX!: number;
      opacity!: number;
      maxOpacity!: number;
      fadeSpeed!: number;
      wobbleSpeed!: number;
      wobbleVal!: number;

      constructor() {
        this.reset();
        // Distribute initial embers randomly along the height
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = 0.8 + Math.random() * 1.5; // Very tiny: 0.8px to 2.3px
        this.speedY = -(0.4 + Math.random() * 0.5) * speedMultiplier; // Slow rise
        this.speedX = (Math.random() - 0.5) * 0.25; // Subtle side drift
        this.opacity = 0;
        this.maxOpacity = 0.3 + Math.random() * 0.5; // Soft glow intensity
        this.fadeSpeed = 0.005 + Math.random() * 0.01;
        this.wobbleSpeed = 0.005 + Math.random() * 0.01;
        this.wobbleVal = Math.random() * 100;
      }

      update() {
        this.y += this.speedY;
        this.wobbleVal += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobbleVal) * 0.15;

        // Fade in as they rise from the bottom
        if (this.opacity < this.maxOpacity && this.y > height * 0.1) {
          this.opacity += this.fadeSpeed;
        } else if (this.y <= height * 0.2) {
          // Fade out near the top
          this.opacity -= this.fadeSpeed * 1.2;
        }

        // Reset if out of bounds or completely faded
        if (this.y < -10 || this.opacity <= 0 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }

      draw(c: CanvasRenderingContext2D) {
        if (this.opacity <= 0) return;

        c.save();
        // Radial gradient for a beautiful blurred warm glow
        const grad = c.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 2.2
        );

        // Premium warm embers (bronze/orange: rgb(232, 112, 58))
        grad.addColorStop(0, `rgba(232, 112, 58, ${this.opacity})`);
        grad.addColorStop(0.3, `rgba(232, 112, 58, ${this.opacity * 0.45})`);
        grad.addColorStop(1, "rgba(232, 112, 58, 0)");

        c.fillStyle = grad;
        c.beginPath();
        c.arc(this.x, this.y, this.size * 2.2, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    const particles: EmberParticle[] = Array.from({ length: count }, () => new EmberParticle());

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
    };

    // Initialize dimensions on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [count, speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
    />
  );
}

