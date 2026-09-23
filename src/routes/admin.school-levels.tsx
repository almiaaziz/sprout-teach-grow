import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/maak/teacher-admin";

export const Route = createFileRoute("/admin/school-levels")({
  head: () => ({ meta: [
    { title: 'Admin school-levels — MAAK' }, { name: "description", content: 'MAAK administration workspace.' },
    { property: "og:title", content: 'Admin school-levels — MAAK' }, { property: "og:description", content: 'MAAK administration workspace.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <AdminPage section="school-levels"/>;
}
