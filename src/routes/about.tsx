import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/maak/public-pages";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: 'About MAAK' }, { name: "description", content: 'How MAAK connects university student teachers with families.' },
    { property: "og:title", content: 'About MAAK' }, { property: "og:description", content: 'How MAAK connects university student teachers with families.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <AboutPage/>;
}
