import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/maak/public-pages";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'MAAK — Learn more. Spend less. Grow together.' }, { name: "description", content: 'Affordable recorded courses from Tunisian university students for school learners and their families.' },
    { property: "og:title", content: 'MAAK — Learn more. Spend less. Grow together.' }, { property: "og:description", content: 'Affordable recorded courses from Tunisian university students for school learners and their families.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <HomePage/>;
}
