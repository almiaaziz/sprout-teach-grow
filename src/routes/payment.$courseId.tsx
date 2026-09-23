import { createFileRoute } from "@tanstack/react-router";
import { PaymentPage } from "@/components/maak/auth-checkout";

export const Route = createFileRoute("/payment/$courseId")({
  validateSearch: (s: Record<string, unknown>) => ({ state: typeof s['state'] === 'string' ? s['state'] : undefined }),
  head: () => ({ meta: [
    { title: 'Payment status — MAAK' }, { name: "description", content: 'Check the status of your MAAK course payment.' },
    { property: "og:title", content: 'Payment status — MAAK' }, { property: "og:description", content: 'Check the status of your MAAK course payment.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  const p = Route.useParams();
  const s = Route.useSearch();
  return <PaymentPage id={p.courseId} state={s.state??"pending"}/>;
}
