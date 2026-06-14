import { ReactNode } from "react";

export function LegalPage({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <section className="relative pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display text-5xl md:text-7xl mt-6"><em>{title}</em></h1>
        <div className="mt-10 w-24 h-px bg-gradient-to-r from-[var(--color-bronze)] to-transparent" />
        <div className="mt-12 space-y-6 font-serif text-lg leading-loose text-[var(--color-cream-dim)] [&_h2]:font-display [&_h2]:text-[var(--color-cream)] [&_h2]:tracking-[0.2em] [&_h2]:text-sm [&_h2]:uppercase [&_h2]:mt-10 [&_h2]:mb-2 [&_a]:text-[var(--color-bronze-bright)] [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </div>
    </section>
  );
}
