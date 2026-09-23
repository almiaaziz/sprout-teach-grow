import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/maak/teacher-admin";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [
    { title: 'Admin dashboard — MAAK' }, { name: "description", content: 'MAAK administration workspace.' },
    { property: "og:title", content: 'Admin dashboard — MAAK' }, { property: "og:description", content: 'MAAK administration workspace.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <AdminPage section="dashboard"/>;
}
