import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/maak/teacher-admin";

export const Route = createFileRoute("/admin/audit-logs")({
  head: () => ({ meta: [
    { title: 'Admin audit-logs — MAAK' }, { name: "description", content: 'MAAK administration workspace.' },
    { property: "og:title", content: 'Admin audit-logs — MAAK' }, { property: "og:description", content: 'MAAK administration workspace.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <AdminPage section="audit-logs"/>;
}
