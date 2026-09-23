import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/maak/public-pages";

export const Route = createFileRoute("/courses")({
  head: () => ({ meta: [
    { title: 'Browse courses — MAAK' }, { name: "description", content: 'Find affordable recorded courses by subject, school level, price and rating.' },
    { property: "og:title", content: 'Browse courses — MAAK' }, { property: "og:description", content: 'Find affordable recorded courses by subject, school level, price and rating.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <CataloguePage/>;
}
