import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/maak/auth-checkout";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [
    { title: 'Reset password — MAAK' }, { name: "description", content: 'Reset password on MAAK, the learning marketplace for families.' },
    { property: "og:title", content: 'Reset password — MAAK' }, { property: "og:description", content: 'Reset password on MAAK, the learning marketplace for families.' },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() {
  return <AuthPage mode="forgot-password"/>;
}
