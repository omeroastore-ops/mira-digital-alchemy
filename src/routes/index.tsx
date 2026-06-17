import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Atmosphere } from "@/components/Atmosphere";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MIRAÉ Lounge — Hookah Bar in München" },
      {
        name: "description",
        content:
          "Willkommen in der MIRAÉ Hookah Lounge — cinematic Atmosphäre, kuratierte Shisha-Sorten und feine Drinks in München.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Atmosphere />
      <Menu />
      <Gallery />
      <Location />
    </>
  );
}
