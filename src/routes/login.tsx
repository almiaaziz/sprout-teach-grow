import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/maak/auth-checkout";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [
    { title: 'Log in — MAAK' }, { name: "description", content: 'Log in on MAAK, the learning marketplace for families.' },
    { property: "og:title", content: 'Log in — MAAK' }, { property: "og:description", content: 'Log in on MAAK, the learning marketplace for families.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <AuthPage mode="login"/>;
}
