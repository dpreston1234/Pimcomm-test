/* Support page sections. */

function SupportHero() {
  return (
    <PageHero
      eyebrow="Support"
      title="Real help, from real people, in Cross Lake."
      subtitle="Network status, common questions, and a direct line to our team. If you can't find what you need, give us a call — we answer in person."
    />
  );
}

function NetworkStatus() {
  return (
    <section className="section section--snug" id="status">
      <div className="container">
        <div className="status-card">
          <div className="status-card__pulse"><Icon name="check" /></div>
          <div>
            <div className="status-card__label">Current network status</div>
            <h3 className="status-card__title">All systems operational</h3>
            <div className="status-card__sub">Last updated 4 minutes ago · No active incidents · 99.97% uptime over the last 30 days</div>
          </div>
          <div className="status-card__cta">
            <a href="#" className="btn btn--secondary" style={{ textDecoration: "none" }}>
              <span>View full status page</span>
              <span className="arrow"><Icon name="arrow-right" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactOptions() {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="section section--snug">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">Get in touch</span>
          <h2 className="section__title">Two ways to reach our team</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-card__icon" style={{ background: "var(--pc-red-50)", color: "var(--pc-red)" }}><Icon name="phone" /></span>
            <h3>Call us</h3>
            <p>Our support team answers in person Monday to Friday, 8am to 6pm. Outside hours, leave a message and we'll call back next business day.</p>
            <div className="contact-card__phones">
              <a href="tel:18007733336">1-800-773-3336</a>
              <a href="tel:12049753873">1-204-975-3873</a>
            </div>
            <div className="contact-card__hours">Monday–Friday · 8am–6pm CT</div>
          </div>
          <div className="contact-card">
            <span className="contact-card__icon"><Icon name="message" /></span>
            <h3>Send a message</h3>
            <p>Not urgent? Drop us a note and we'll respond within one business day.</p>
            {sent ? (
              <div style={{ padding: "16px 18px", background: "var(--pc-blue-50)", borderRadius: "var(--pc-radius-sm)", color: "var(--pc-fg-strong)", fontFamily: "var(--pc-font-display)", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 10 }}>
                <Icon name="check-circle" size={20} />
                Message sent — we'll be in touch within one business day.
              </div>
            ) : (
              <form className="contact-card__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <input className="field__input" placeholder="Your name" required />
                <input className="field__input" placeholder="Phone or email" required />
                <textarea className="field__textarea" rows="3" placeholder="What can we help with?" required></textarea>
                <button type="submit" className="btn btn--primary" style={{ alignSelf: "flex-start" }}>
                  <span>Send message</span>
                  <span className="arrow"><Icon name="arrow-right" /></span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportFaq() {
  const categories = [
    {
      label: "Getting started",
      items: [
        { q: "How do I sign up for PimComm?",                  a: "Submit the Get Connected form with your name, phone, plan choice, and home location. Our team calls you within 2 business days to confirm. You can also call us directly at 1-800-773-3336 and we'll fill out the form together." },
        { q: "How will the installer find my home?",            a: "We use What3Words and your home description — no street address needed. Tell us what your home looks like (\"blue house, red truck out front\") and we'll find you on the first try." },
        { q: "Is there a contract or commitment?",              a: "No. All PimComm plans are month-to-month. You can change plans or cancel any time without a fee." },
      ],
    },
    {
      label: "My service",
      items: [
        { q: "What speeds can I expect on my plan?",           a: "PimComm fibre is symmetric — your upload speed matches your download speed, and you get the speed we quote at peak hours. If you're consistently seeing less than 80% of your plan speed on a wired connection, call us." },
        { q: "What do I do if my internet goes down?",          a: "First, check the status of our network at the top of this page. If we're up, try unplugging the ONT (the white box at your wall) for 30 seconds and plugging it back in. Still not working? Call 1-800-773-3336 and we'll dispatch a technician." },
        { q: "Can I upgrade my plan later?",                    a: "Yes — you can move up or down any time. We pro-rate the change so you only pay for what you use." },
        { q: "What equipment do I need at home?",               a: "Nothing on your end. We provide a fibre ONT (the optical terminal at your wall) and a Wi-Fi router as part of installation. You can use your own router if you prefer — we'll help you set it up." },
      ],
    },
    {
      label: "Billing",
      items: [
        { q: "How do I pay my bill?",                           a: "Bills go out on the first of every month. You can pay by e-transfer, credit card, or in person at our Cross Lake office. Once our self-service portal is live, you'll also be able to pay and manage your account online." },
        { q: "When is my first bill?",                          a: "Your first bill is pro-rated from your installation date to the end of that month. You'll pay only for the days you had service." },
      ],
    },
    {
      label: "Technical",
      items: [
        { q: "What is symmetric fibre, and why does it matter?", a: "Symmetric means your upload speed matches your download speed. It matters for video calls, file uploads, backups, and anything that sends data out — which is most things in 2026." },
        { q: "Will weather affect my service?",                 a: "Fibre is buried for most of its route and is not affected by ice, snow, or wind the way satellite or older copper service is. Our team monitors the network continuously and dispatches local crews when any segment goes down." },
      ],
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">Frequently asked</span>
          <h2 className="section__title">Quick answers, organized by topic.</h2>
        </div>
        <div className="faq">
          {categories.map((c, ci) => (
            <React.Fragment key={c.label}>
              <div className="faq__category">{c.label}</div>
              {c.items.map((it, i) => (
                <FaqItem key={c.label + i} q={it.q} a={it.a} startOpen={ci === 0 && i === 0} />
              ))}
            </React.Fragment>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 40, fontSize: 15, color: "var(--pc-fg-muted)" }}>
          Don't see your question?{" "}
          <a href="tel:18007733336" style={{ color: "var(--pc-red)", fontWeight: 600, textDecoration: "none" }}>Call 1-800-773-3336</a>
          {" "}— we'll get you an answer.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { SupportHero, NetworkStatus, ContactOptions, SupportFaq });
