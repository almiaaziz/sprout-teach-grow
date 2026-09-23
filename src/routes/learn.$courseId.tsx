import { createFileRoute } from "@tanstack/react-router";
import { LearningPage } from "@/components/maak/parent-learning";

export const Route = createFileRoute("/learn/$courseId")({
  head: () => ({ meta: [
    { title: 'Course player — MAAK' }, { name: "description", content: 'Watch lessons, follow the curriculum and track progress.' },
    { property: "og:title", content: 'Course player — MAAK' }, { property: "og:description", content: 'Watch lessons, follow the curriculum and track progress.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  const p = Route.useParams();
  return <LearningPage id={p.courseId}/>;
}
