import { createFileRoute } from "@tanstack/react-router";
import { TeacherPage } from "@/components/maak/teacher-admin";

export const Route = createFileRoute("/teacher/courses")({
  head: () => ({ meta: [
    { title: 'Teacher courses — MAAK' }, { name: "description", content: 'Create courses, follow students and track sales on MAAK.' },
    { property: "og:title", content: 'Teacher courses — MAAK' }, { property: "og:description", content: 'Create courses, follow students and track sales on MAAK.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <TeacherPage section="courses"/>;
}
