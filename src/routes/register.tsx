import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/maak/auth-checkout";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [
    { title: 'Create an account — MAAK' }, { name: "description", content: 'Create an account on MAAK, the learning marketplace for families.' },
    { property: "og:title", content: 'Create an account — MAAK' }, { property: "og:description", content: 'Create an account on MAAK, the learning marketplace for families.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <AuthPage mode="register"/>;
}
