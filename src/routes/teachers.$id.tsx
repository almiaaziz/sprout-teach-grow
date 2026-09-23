import { createFileRoute } from "@tanstack/react-router";
import { TeacherProfile } from "@/components/maak/public-pages";

export const Route = createFileRoute("/teachers/$id")({
  head: () => ({ meta: [
    { title: 'Teacher profile — MAAK' }, { name: "description", content: 'Meet a MAAK teacher and explore their courses.' },
    { property: "og:title", content: 'Teacher profile — MAAK' }, { property: "og:description", content: 'Meet a MAAK teacher and explore their courses.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  const p = Route.useParams();
  return <TeacherProfile id={p.id}/>;
}
