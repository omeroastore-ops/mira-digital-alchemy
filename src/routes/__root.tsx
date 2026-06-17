import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MIRAÉ Lounge — Hookah Bar München" },
      {
        name: "description",
        content:
          "Erlebe entspannte Momente, ausgewählte Shishas und besondere Drinks in stilvollem Ambiente. MIRAÉ Hookah Lounge in München.",
      },
      { name: "theme-color", content: "#0a0807" },
      { property: "og:title", content: "MIRAÉ Lounge — Hookah Bar München" },
      { property: "og:description", content: "Cinematic Hookah Lounge im Herzen Münchens." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body className="film-grain">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </QueryClientProvider>
  );
}

function NotFoundComponent() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden py-24">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,137,90,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(184,137,90,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <h1 className="font-display text-5xl md:text-6xl text-[var(--color-bronze-bright)] mb-4">
        404
      </h1>
      <h2 className="font-serif text-2xl text-[var(--color-cream)] mb-6">Seite nicht gefunden</h2>
      <p className="text-[var(--color-cream-dim)] mb-10 max-w-md leading-relaxed">
        Die von Ihnen gesuchte Seite scheint im Rauch verschwunden zu sein. Kehren Sie zurück in
        unsere Lounge.
      </p>
      <Link to="/" className="btn-bronze">
        <span>Zur Startseite</span>
      </Link>
    </div>
  );
}
