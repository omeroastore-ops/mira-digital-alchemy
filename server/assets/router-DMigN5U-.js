import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const appCss = "/mira-digital-alchemy/assets/styles-B8VLqWgH.css";
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: `nav-header ${scrolled ? "nav-header-scrolled" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "container-max py-5 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "group", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-xl tracking-[0.3em] text-cream group-hover-bronze-bright transition", children: "MIRAÉ" }),
      /* @__PURE__ */ jsx("div", { className: "font-display text-[0.55rem] tracking-[0.5em] text-bronze mt-0.5", children: "HOOKAH · LOUNGE" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md-flex items-center gap-10 text-[0.7rem] font-display uppercase tracking-[0.32em] nav-links", children: [
      /* @__PURE__ */ jsx("a", { href: `${"/mira-digital-alchemy/"}#karte`, children: "Die Karte" }),
      /* @__PURE__ */ jsx("a", { href: `${"/mira-digital-alchemy/"}#atmosphaere`, children: "Atmosphäre" }),
      /* @__PURE__ */ jsx("a", { href: `${"/mira-digital-alchemy/"}#galerie`, children: "Galerie" }),
      /* @__PURE__ */ jsx("a", { href: `${"/mira-digital-alchemy/"}#location`, children: "Location" })
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "tel:+4915775068238",
        className: "hidden md-inline text-[0.7rem] font-display uppercase tracking-[0.3em] text-bronze-bright hover-cream transition",
        children: "+49 1577 506 8238"
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "footer-wrap px-6 md-px-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-max grid-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-2xl tracking-[0.25em] text-cream", children: "MIRAÉ" }),
        /* @__PURE__ */ jsx("div", { className: "font-display text-[0.6rem] tracking-[0.5em] text-bronze mt-2", children: "HOOKAH · LOUNGE" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-dim leading-relaxed max-w-xs", children: "Ein verborgener Rückzugsort für Genießer. Geschmack, Rauch und Stille — perfektioniert." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow mb-5", children: "Kontakt" }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-dim space-y-2 leading-relaxed", children: [
          /* @__PURE__ */ jsx("div", { children: "Friedrichshafener Str. 17" }),
          /* @__PURE__ */ jsx("div", { children: "81243 München" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "tel:+4915775068238",
              className: "block mt-3 text-bronze-bright hover-cream transition",
              children: "+49 1577 5068238"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-6", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/mirae.lounge?igsh=MThkNGZoaDNwbTM5bA==",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Instagram",
              className: "social-link",
              children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  className: "text-bronze-bright",
                  children: [
                    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
                    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
                    /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "6.5", r: "0.5", fill: "currentColor" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://wa.me/4915775068238",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "WhatsApp",
              className: "social-link",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "text-bronze-bright",
                  children: /* @__PURE__ */ jsx("path", { d: "M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.8-1.3-1.3-2.9-1.3-4.5C3.6 7.4 7.4 3.6 12 3.6c4.6 0 8.4 3.8 8.4 8.4s-3.8 8.2-8.4 8.2z" })
                }
              )
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow mb-5", children: "Öffnungszeiten" }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-dim space-y-1.5 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Mo – Do" }),
            /* @__PURE__ */ jsx("span", { className: "text-cream", children: "18:00 – 01:00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Fr" }),
            /* @__PURE__ */ jsx("span", { className: "text-cream", children: "18:00 – 03:00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "Sa" }),
            /* @__PURE__ */ jsx("span", { className: "text-cream", children: "17:00 – 03:00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "So" }),
            /* @__PURE__ */ jsx("span", { className: "text-cream", children: "16:00 – 01:00" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " MIRAÉ Lounge. Alle Rechte vorbehalten."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/impressum", className: "hover-bronze-bright transition", children: "Impressum" }),
        /* @__PURE__ */ jsx(Link, { to: "/datenschutz", className: "hover-bronze-bright transition", children: "Datenschutz" }),
        /* @__PURE__ */ jsx(Link, { to: "/cookie-richtlinie", className: "hover-bronze-bright transition", children: "Cookie-Richtlinie" })
      ] })
    ] })
  ] });
}
const KEY = "mirae-cookie-consent";
function useConsent() {
  const [consent, setConsent] = useState(null);
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v === "accepted" || v === "essential") setConsent(v);
    } catch {
    }
  }, []);
  const set = (v) => {
    setConsent(v);
    try {
      if (v) localStorage.setItem(KEY, v);
      else localStorage.removeItem(KEY);
    } catch {
    }
  };
  return { consent, setConsent: set };
}
function CookieBanner() {
  const { consent, setConsent } = useConsent();
  if (consent) return null;
  return /* @__PURE__ */ jsx("div", { className: "cookie-banner-wrap", children: /* @__PURE__ */ jsxs("div", { className: "cookie-banner-content", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-sm leading-relaxed text-dim max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display uppercase tracking-[0.3em] text-[0.65rem] text-bronze mb-2", children: "Cookies & Privatsphäre" }),
      "Wir verwenden Cookies, um Ihr Erlebnis zu verfeinern. Google Maps wird erst geladen, wenn Sie zustimmen.",
      " ",
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/cookie-richtlinie",
          className: "underline underline-offset-4 hover-bronze-bright",
          children: "Mehr erfahren"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 flex-shrink-0", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setConsent("essential"), className: "cookie-banner-btn-secondary", children: "Nur Essentielle" }),
      /* @__PURE__ */ jsx("button", { onClick: () => setConsent("accepted"), className: "cookie-banner-btn-primary", children: "Alle Akzeptieren" })
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MIRAÉ Lounge — Hookah Bar München" },
      {
        name: "description",
        content: "Erlebe entspannte Momente, ausgewählte Shishas und besondere Drinks in stilvollem Ambiente. MIRAÉ Hookah Lounge in München."
      },
      { name: "theme-color", content: "#0a0807" },
      { property: "og:title", content: "MIRAÉ Lounge — Hookah Bar München" },
      { property: "og:description", content: "Cinematic Hookah Lounge im Herzen Münchens." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "de", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "film-grain", children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(CookieBanner, {})
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden py-24", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-10 pointer-events-none",
        style: {
          backgroundImage: "linear-gradient(rgba(184,137,90,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(184,137,90,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-[var(--color-bronze-bright)] mb-4", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl text-[var(--color-cream)] mb-6", children: "Seite nicht gefunden" }),
    /* @__PURE__ */ jsx("p", { className: "text-[var(--color-cream-dim)] mb-10 max-w-md leading-relaxed", children: "Die von Ihnen gesuchte Seite scheint im Rauch verschwunden zu sein. Kehren Sie zurück in unsere Lounge." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-bronze", children: /* @__PURE__ */ jsx("span", { children: "Zur Startseite" }) })
  ] });
}
const $$splitComponentImporter$3 = () => import("./impressum-Nprk3SHo.js");
const Route$3 = createFileRoute("/impressum")({
  head: () => ({
    meta: [{
      title: "Impressum — MIRAÉ Lounge"
    }, {
      name: "description",
      content: "Impressum & Anbieterkennzeichnung der MIRAÉ Hookah Lounge."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./datenschutz-DlJZV0Cd.js");
const Route$2 = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [{
      title: "Datenschutz — MIRAÉ Lounge"
    }, {
      name: "description",
      content: "Datenschutzerklärung der MIRAÉ Hookah Lounge."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./cookie-richtlinie-DqHFZP-e.js");
const Route$1 = createFileRoute("/cookie-richtlinie")({
  head: () => ({
    meta: [{
      title: "Cookie-Richtlinie — MIRAÉ Lounge"
    }, {
      name: "description",
      content: "Cookie-Richtlinie der MIRAÉ Hookah Lounge."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CoQo-Y-p.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "MIRAÉ Lounge — Hookah Bar in München"
    }, {
      name: "description",
      content: "Willkommen in der MIRAÉ Hookah Lounge — cinematic Atmosphäre, kuratierte Shisha-Sorten und feine Drinks in München."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ImpressumRoute = Route$3.update({
  id: "/impressum",
  path: "/impressum",
  getParentRoute: () => Route$4
});
const DatenschutzRoute = Route$2.update({
  id: "/datenschutz",
  path: "/datenschutz",
  getParentRoute: () => Route$4
});
const CookieRichtlinieRoute = Route$1.update({
  id: "/cookie-richtlinie",
  path: "/cookie-richtlinie",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  CookieRichtlinieRoute,
  DatenschutzRoute,
  ImpressumRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: "/mira-digital-alchemy"
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  useConsent as u
};
