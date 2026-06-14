import { useEffect, useRef } from "react";

export function SmokeEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class SmokeParticle {
      x!: number;
      y!: number;
      vx!: number;
      vy!: number;
      alpha!: number;
      radius!: number;
      growth!: number;
      life!: number;
      maxLife!: number;
      wobbleSpeed!: number;
      wobbleRange!: number;

      constructor() {
        this.reset();
        // Distribute initial particles across the screen height
        this.y = Math.random() * height;
        this.alpha = 0;
      }

      reset() {
        this.x = width * 0.25 + Math.random() * (width * 0.5); // Spawn in central region
        this.y = height + 100; // Spawn below bottom edge
        this.vx = (Math.random() - 0.5) * 0.2; // Very slight side drift
        this.vy = -0.35 - Math.random() * 0.45; // Very slow upward motion
        this.alpha = 0;
        this.radius = 100 + Math.random() * 120; // Soft puff radius
        this.growth = 0.06 + Math.random() * 0.08; // Expansion rate
        this.life = 0;
        this.maxLife = 500 + Math.random() * 300; // Long-lived puffs
        this.wobbleSpeed = 0.003 + Math.random() * 0.004; // Frequency of side-sway
        this.wobbleRange = 0.15 + Math.random() * 0.25; // Amplitude of side-sway
      }

      update() {
        this.x += this.vx + Math.sin(this.life * this.wobbleSpeed) * this.wobbleRange;
        this.y += this.vy;
        this.radius += this.growth;
        this.life++;

        // Smooth fade-in then slow fade-out
        const halfLife = this.maxLife * 0.4;
        if (this.life < halfLife) {
          this.alpha = this.life / halfLife;
        } else {
          this.alpha = 1 - (this.life - halfLife) / (this.maxLife - halfLife);
        }

        if (this.life >= this.maxLife || this.y < -this.radius) {
          this.reset();
        }
      }

      draw(c: CanvasRenderingContext2D) {
        if (this.alpha <= 0) return;

        c.save();
        // Create radial gradient for a realistic soft, smoky cloud
        const grad = c.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );

        // Warm cream/amber tint for cinematic luxury smoke
        const baseAlpha = this.alpha * 0.04; // Extremely subtle and luxurious
        grad.addColorStop(0, `rgba(232, 220, 200, ${baseAlpha})`);
        grad.addColorStop(0.3, `rgba(232, 220, 200, ${baseAlpha * 0.6})`);
        grad.addColorStop(0.6, `rgba(232, 220, 200, ${baseAlpha * 0.25})`);
        grad.addColorStop(1, "rgba(232, 220, 200, 0)");

        c.fillStyle = grad;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    // Initialize 20 smoke particles for an elegant, non-intrusive look
    const particles: SmokeParticle[] = Array.from({ length: 20 }, () => new SmokeParticle());

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen z-[4]"
      style={{ opacity: 0.85 }}
    />
  );
}
