import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Stripe Invoice Auto-Chase — Stop Chasing Invoices Manually",
  description: "Automatically chase overdue Stripe invoices with escalating follow-up emails and payment links. Built for B2B SaaS and freelancers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cf92e481-8866-42f3-957d-ab95c13143e4"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
