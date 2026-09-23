import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage } from "@/components/maak/auth-checkout";

export const Route = createFileRoute("/checkout/$courseId")({
  head: () => ({ meta: [
    { title: 'Checkout — MAAK' }, { name: "description", content: 'Complete your order. Courses are available to all children in your account.' },
    { property: "og:title", content: 'Checkout — MAAK' }, { property: "og:description", content: 'Complete your order. Courses are available to all children in your account.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  const p = Route.useParams();
  return <CheckoutPage id={p.courseId}/>;
}
