/* Business page sections. */

const BUSINESS_PLANS = [
  { name: "PimBiz 150", color: "blue",   mbps: 150, headline: "Small storefronts & offices",     price: "250", uses: ["Email, cloud apps, point of sale", "Up to 10 users", "Symmetric uploads for backups"] },
  { name: "PimBiz 300", color: "red",    mbps: 300, headline: "Healthcare, education, retail",   price: "350", uses: ["Telehealth, video classes, EFT", "Up to 25 users", "Priority support window"],         popular: true },
  { name: "PimBiz 600", color: "yellow", mbps: 600, headline: "High-volume operations",          price: "400", uses: ["Multi-site, large transfers", "25+ users", "Dedicated account manager"] },
];

function BusinessHero() {
  return (
    <PageHero
      eyebrow="Business services"
      title="Internet built for your business."
      subtitle="Consistent fibre connectivity designed for local businesses in Cross Lake. Symmetric speeds. No slowdowns. Local support."
    />
  );
}

function WhyBusiness() {
  const items = [
    { icon: "fiber",       title: "Symmetric speeds",      body: "Uploads as fast as downloads — built for cloud, video calls, point of sale, and large file transfers." },
    { icon: "gauge",       title: "No peak-hour slowdown", body: "Dedicated fibre means consistent performance during business hours, not just overnight." },
    { icon: "users",       title: "Local support team",    body: "When you call, you reach someone in Cross Lake. We know the network and we know the community." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">Why PimComm for business</span>
          <h2 className="section__title">Built for how you actually work</h2>
        </div>
        <div className="why-grid">
          {items.map((it) => (
            <div className="why" key={it.title}>
              <span className="why__icon"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BizPlanCard({ plan }) {
  const headColor = plan.color;
  return (
    <article className={`plan${plan.popular ? " plan--popular" : ""}`} style={{ position: "relative" }}>
      {plan.popular && <div className="plan__ribbon">Most popular</div>}
      <div className={`plan__head plan__head--${headColor === "yellow" ? "yellow" : headColor}`}>{plan.name}</div>
      <div className="plan__body">
        <div>
          <span className="plan__speed">{plan.mbps}</span>
          <span className="plan__unit">/{plan.mbps} Mbps</span>
        </div>
        <div className={`plan__tag plan__tag--strong-${headColor === "yellow" ? "red" : headColor}`}>{plan.headline}</div>
        <ul style={{ textAlign: "left", padding: "16px 8px 6px", margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {plan.uses.map((u, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "var(--pc-fg)" }}>
              <span style={{ color: "var(--pc-red)", marginTop: 2 }}><Icon name="check" size={16} /></span>
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`plan__price plan__price--${headColor === "yellow" ? "red" : headColor}`}>
        <div className="plan__price-val">${plan.price}<small>/month</small></div>
        <div className="plan__price-note">Installation quoted on site requirements</div>
      </div>
      <div className="plan__cta-row">
        <a href={`sign-up.html?plan=${encodeURIComponent(plan.name)}`}
           className="btn btn--primary"
           style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
          <span>Request a quote</span>
          <span className="arrow"><Icon name="arrow-right" /></span>
        </a>
      </div>
    </article>
  );
}

function BizPlanCards() {
  return (
    <section className="section section--cool">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">Business pricing</span>
          <h2 className="section__title">Three plans for three sizes of business</h2>
        </div>
        <div className="plan-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", maxWidth: 1080, margin: "56px auto 0" }}>
          {BUSINESS_PLANS.map((p) => <BizPlanCard key={p.name} plan={p} />)}
        </div>
        <div className="callout">
          <span className="callout__icon"><Icon name="dollar" /></span>
          <div>
            <strong>About installation fees</strong>
            Business installation is quoted based on your site requirements — building wiring, distance from the demarcation point, and equipment placement. We assess on-site and confirm the cost before any work begins.
          </div>
        </div>
        <div className="callout" style={{ background: "var(--pc-blue-50)", borderLeftColor: "var(--pc-blue)" }}>
          <span className="callout__icon" style={{ background: "var(--pc-blue)", color: "white" }}><Icon name="briefcase" /></span>
          <div>
            <strong>Need something custom?</strong>
            Multi-site, point-to-point, or higher-tier service? Our team will design and quote a custom build. Call <a href="tel:18007733336" style={{ color: "var(--pc-red)", fontWeight: 600 }}>1-800-773-3336</a> or request a quote above.
          </div>
        </div>
      </div>
    </section>
  );
}

function BizUseCases() {
  const items = [
    { icon: "stethoscope", title: "Healthcare",    body: "Reliable connections for virtual appointments, electronic medical records, and patient communication." },
    { icon: "graduation",  title: "Education",     body: "Fast uploads for student assignments and remote learning. No throttling during class hours." },
    { icon: "store",       title: "Commerce",      body: "Consistent connectivity for point of sale, inventory, and online orders. Stays up when it matters." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">Built for community businesses</span>
          <h2 className="section__title">What our customers run on PimComm</h2>
        </div>
        <div className="usecases">
          {items.map((it) => (
            <div className="usecase" key={it.title}>
              <span className="usecase__icon"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BizCallout() {
  return (
    <section className="section section--snug section--navy">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <span className="section__eyebrow" style={{ textAlign: "left", color: "var(--pc-yellow)", marginBottom: 14 }}>Local team. Local accountability.</span>
          <h2 className="section__title" style={{ textAlign: "left", color: "white" }}>Talk to a real person about your business needs.</h2>
          <p style={{ color: "rgba(255,255,255,0.78)", marginTop: 16, fontSize: 17, lineHeight: 1.6, maxWidth: 520 }}>
            Business builds are scoped one-to-one. We'll come look at the site, talk through your equipment, and quote installation and service before any work begins.
          </p>
        </div>
        <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "var(--pc-radius-lg)", padding: 32 }}>
          <div style={{ fontFamily: "var(--pc-font-display)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pc-yellow)", marginBottom: 14 }}>Talk to our team</div>
          <a href="tel:18007733336" style={{ display: "block", fontFamily: "var(--pc-font-display)", fontWeight: 800, fontSize: 30, color: "white", textDecoration: "none", marginBottom: 6 }}>1-800-773-3336</a>
          <a href="tel:12049753873" style={{ display: "block", fontFamily: "var(--pc-font-display)", fontWeight: 700, fontSize: 22, color: "rgba(255,255,255,0.85)", textDecoration: "none", marginBottom: 24 }}>1-204-975-3873</a>
          <a href="sign-up.html" className="btn btn--primary" style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}>
            <span>Request a quote</span>
            <span className="arrow"><Icon name="arrow-right" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BusinessHero, WhyBusiness, BizPlanCards, BizPlanCard, BizUseCases, BizCallout, BUSINESS_PLANS });
