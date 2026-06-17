import { jsx, jsxs } from "react/jsx-runtime";
function LegalPage({
  title,
  eyebrow,
  children
}) {
  return /* @__PURE__ */ jsx("section", { className: "relative pt-40 pb-32 px-6 md-px-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "eyebrow", children: eyebrow }),
    /* @__PURE__ */ jsx("h1", { className: "display text-5xl md-text-7xl mt-6", children: /* @__PURE__ */ jsx("em", { children: title }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "mt-10 w-24 h-px",
        style: { background: "linear-gradient(to right, var(--color-bronze), transparent)" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-6 font-serif text-lg leading-loose text-dim legal-content", children })
  ] }) });
}
export {
  LegalPage as L
};
