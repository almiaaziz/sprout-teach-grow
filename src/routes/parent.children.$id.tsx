import { createFileRoute } from "@tanstack/react-router";
import { ParentPage } from "@/components/maak/parent-learning";

export const Route = createFileRoute("/parent/children/$id")({
  head: () => ({ meta: [
    { title: 'Child learning profile — MAAK' }, { name: "description", content: "Follow your child's courses and progress." },
    { property: "og:title", content: 'Child learning profile — MAAK' }, { property: "og:description", content: "Follow your child's courses and progress." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  const p = Route.useParams();
  return <ParentPage section="child" id={p.id}/>;
}
