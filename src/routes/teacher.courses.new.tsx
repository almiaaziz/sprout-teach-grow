import { createFileRoute } from "@tanstack/react-router";
import { CourseBuilder } from "@/components/maak/teacher-admin";

export const Route = createFileRoute("/teacher/courses/new")({
  head: () => ({ meta: [
    { title: 'Create a course — MAAK' }, { name: "description", content: 'Build your course step by step and submit it for review.' },
    { property: "og:title", content: 'Create a course — MAAK' }, { property: "og:description", content: 'Build your course step by step and submit it for review.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <CourseBuilder/>;
}
