import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/maak/teacher-admin";

export const Route = createFileRoute("/admin/courses/pending/$id")({
  head: () => ({ meta: [
    { title: 'Review course — MAAK' }, { name: "description", content: 'Approve or reject a submitted course.' },
    { property: "og:title", content: 'Review course — MAAK' }, { property: "og:description", content: 'Approve or reject a submitted course.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  const p = Route.useParams();
  return <AdminPage section="review" id={p.id}/>;
}
