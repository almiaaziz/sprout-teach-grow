import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/maak/teacher-admin";

export const Route = createFileRoute("/admin/courses/pending")({
  head: () => ({ meta: [
    { title: 'Pending courses — MAAK' }, { name: "description", content: 'Review courses waiting for approval.' },
    { property: "og:title", content: 'Pending courses — MAAK' }, { property: "og:description", content: 'Review courses waiting for approval.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <AdminPage section="pending"/>;
}
