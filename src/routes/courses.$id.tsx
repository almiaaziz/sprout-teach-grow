import { createFileRoute } from "@tanstack/react-router";
import { CourseDetail } from "@/components/maak/public-pages";

export const Route = createFileRoute("/courses/$id")({
  head: () => ({ meta: [
    { title: 'Course details — MAAK' }, { name: "description", content: 'See what you will learn, the curriculum and the teacher behind this course.' },
    { property: "og:title", content: 'Course details — MAAK' }, { property: "og:description", content: 'See what you will learn, the curriculum and the teacher behind this course.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  const p = Route.useParams();
  return <CourseDetail id={p.id}/>;
}
