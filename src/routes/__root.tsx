import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
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
      { name: "description", content: "Eine verborgene Welt aus Bronzelicht, samtiger Stille und kuratiertem Rauch. MIRAÉ Hookah Lounge in München." },
      { name: "theme-color", content: "#0a0807" },
      { property: "og:title", content: "MIRAÉ Lounge — Hookah Bar München" },
      { property: "og:description", content: "Cinematic Hookah Lounge im Herzen Münchens." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head><HeadContent /></head>
      <body className="film-grain">{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main><Outlet /></main>
      <Footer />
      <CookieBanner />
    </QueryClientProvider>
  );
}
