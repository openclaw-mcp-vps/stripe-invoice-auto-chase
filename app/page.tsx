export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Invoice Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop chasing overdue invoices manually
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Stripe account and let automated, escalating follow-up emails recover unpaid invoices — while you focus on your work.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Stripe Webhooks", desc: "Instantly detects when invoices become overdue via real-time Stripe events." },
            { title: "Escalating Emails", desc: "Sends polite reminders that grow firmer over time, with direct payment links." },
            { title: "Chase Dashboard", desc: "Track every invoice, email sent, and payment recovered in one place." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited Stripe invoice monitoring",
              "Customizable chase email templates",
              "Escalating urgency sequences",
              "Direct Stripe payment links in emails",
              "Recovery analytics dashboard",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does it connect to Stripe?",
              a: "You register a Stripe webhook endpoint in your Stripe dashboard. The app listens for invoice.payment_overdue and related events to trigger chase sequences automatically."
            },
            {
              q: "Can I customize the follow-up emails?",
              a: "Yes. You can edit the subject, body, and timing of each step in the chase sequence — from a gentle first reminder to a firm final notice."
            },
            {
              q: "What happens when an invoice is paid?",
              a: "The chase sequence stops immediately. Stripe sends a payment success event and the app marks the invoice as resolved, so your customer never receives another email."
            }
          ].map((item) => (
            <div key={item.q} className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-10">
        &copy; {new Date().getFullYear()} Stripe Invoice Auto-Chase. All rights reserved.
      </footer>
    </main>
  )
}
