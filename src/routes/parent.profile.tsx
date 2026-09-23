import { createFileRoute } from "@tanstack/react-router";
import { ParentPage } from "@/components/maak/parent-learning";

export const Route = createFileRoute("/parent/profile")({
  head: () => ({ meta: [
    { title: 'Parent profile — MAAK' }, { name: "description", content: 'Manage your children, courses and orders in one parent account.' },
    { property: "og:title", content: 'Parent profile — MAAK' }, { property: "og:description", content: 'Manage your children, courses and orders in one parent account.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <ParentPage section="profile"/>;
}
