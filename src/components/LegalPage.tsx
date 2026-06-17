import { ReactNode } from "react";

export function LegalPage({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-32 px-6 md-px-12">
      <div className="max-w-3xl mx-auto">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display text-5xl md-text-7xl mt-6">
          <em>{title}</em>
        </h1>
        <div
          className="mt-10 w-24 h-px"
          style={{ background: "linear-gradient(to right, var(--color-bronze), transparent)" }}
        />
        <div className="mt-12 space-y-6 font-serif text-lg leading-loose text-dim legal-content">
          {children}
        </div>
      </div>
    </section>
  );
}
