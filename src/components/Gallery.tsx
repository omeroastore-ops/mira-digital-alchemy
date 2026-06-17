import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = Array.from({ length: 10 }, (_, i) => i + 1);

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getImageUrl = (id: number) => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
    return `${basePath}/images/gallery-${id}.jpg`;
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) =>
      prev !== null ? (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1) : null,
    );
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) =>
      prev !== null ? (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1) : null,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="galerie" className="gallery-section scroll-mt-32 px-6 md-px-12">
      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal stagger={true} delay={0.15}>
            <ScrollRevealItem>
              <div className="eyebrow">Galerie</div>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="display text-5xl md-text-7xl mt-6">
                Impressionen aus dem <em>MIRAÉ</em>
              </h2>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <div
                className="mt-8 mx-auto w-24 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--color-amber), transparent)",
                }}
              />
            </ScrollRevealItem>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <ScrollReveal stagger={true} delay={0.1}>
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((id, idx) => (
              <ScrollRevealItem key={id}>
                <div
                  className="gallery-item"
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Bild ${id} vergrößern`}
                >
                  <img src={getImageUrl(id)} alt={`MIRAÉ Galerie Bild ${id}`} loading="lazy" />
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            {/* Close button */}
            <button
              className="lightbox-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Schließen"
            >
              <X size={18} />
              <span>Schließen</span>
            </button>

            {/* Navigation buttons */}
            <button
              className="lightbox-nav-btn prev"
              onClick={handlePrev}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageUrl(GALLERY_IMAGES[activeIndex])}
                alt={`MIRAÉ Galerie Detail ${GALLERY_IMAGES[activeIndex]}`}
                className="lightbox-image"
              />
            </motion.div>

            <button
              className="lightbox-nav-btn next"
              onClick={handleNext}
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
