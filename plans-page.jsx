/* Plans page sections. */

const RESIDENTIAL_PLANS = [
  { name: "Pim 50",  color: "blue", mbps: 50,  headline: "Best for light use",  devicesLabel: "1–2 devices",  useIcons: ["globe","mail"],                     deviceIcons: ["smartphone","laptop"],            price: "100", install: "$100 installation*" },
  { name: "Pim 100", color: "red",  mbps: 100, headline: "Most households",     devicesLabel: "3–5 devices",  useIcons: ["play","play","controller"],         deviceIcons: ["smartphone","laptop"],            price: "115", install: "$150 installation*", popular: false },
  { name: "Pim 250", color: "blue", mbps: 250, headline: "Busy homes",          devicesLabel: "5–10 devices", useIcons: ["play","controller","cloud"],        deviceIcons: ["smartphone","laptop","monitor"],  price: "125", install: "$150 installation*", popular: true },
  { name: "Pim 500", color: "red",  mbps: 500, headline: "Maximum performance", devicesLabel: "10+ devices",  useIcons: ["play","controller","cloud","home"], deviceIcons: ["smartphone","monitor","laptop"],  price: "150", install: "$150 installation*" },
];

function PlansHeroStats() {
  return (
    <PageHero
      eyebrow="Residential plans"
      title="Plans built for your home."
      subtitle="Symmetric fibre speeds, the same upload as download. No throttling at peak hours. Quoted installation. No long-term contract."
    />
  );
}

function PlanCardFull({ plan }) {
  return (
    <article className={`plan${plan.popular ? " plan--popular" : ""}`}>
      {plan.popular && <div className="plan__ribbon">Most popular</div>}
      <div className={`plan__head plan__head--${plan.color}`}>{plan.name}</div>
      <div className="plan__body">
        <div>
          <span className="plan__speed">{plan.mbps}</span>
          <span className="plan__unit">Mbps</span>
        </div>
        <div className={`plan__tag plan__tag--strong-${plan.color}`}>{plan.headline}</div>
        <div className="plan__icons">{plan.useIcons.map((n, i) => <Icon key={i} name={n} />)}</div>
        <div className="plan__use">{useCopy(plan.name)}</div>
        <div className="plan__devices">{plan.deviceIcons.map((n, i) => <Icon key={i} name={n} />)}</div>
        <div className="plan__device-count">{plan.devicesLabel}</div>
      </div>
      <div className={`plan__price plan__price--${plan.color}`}>
        <div className="plan__price-val">${plan.price}<small>/month</small></div>
        <div className="plan__price-note">Symmetric up &amp; down · no taxes</div>
      </div>
      <div className="plan__install-note">{plan.install}</div>
      <div className="plan__cta-row">
        <a href={`sign-up.html?plan=${encodeURIComponent(plan.name)}`}
           className="btn btn--primary"
           style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
          <span>Get Connected</span>
          <span className="arrow"><Icon name="arrow-right" /></span>
        </a>
      </div>
    </article>
  );
}

function useCopy(name) {
  switch (name) {
    case "Pim 50":  return "Browsing, email, social media";
    case "Pim 100": return "Streaming, work, video calls";
    case "Pim 250": return "Multiple streams, gaming, home office";
    case "Pim 500": return "Everything at once, fastest speeds";
    default: return "";
  }
}

function PlanCardsSection() {
  return (
    <section className="section section--cool">
      <div className="container">
        <div className="plan-grid">
          {RESIDENTIAL_PLANS.map((p) => <PlanCardFull key={p.name} plan={p} />)}
        </div>
        <div className="biz-crosslink">
          <div className="biz-crosslink__icon"><Icon name="briefcase" /></div>
          <div className="biz-crosslink__copy">
            <div className="biz-crosslink__label">Running a business?</div>
            <p>PimComm offers dedicated business plans built for healthcare, education, retail, and small offices. Symmetric speeds from 150 to 600 Mbps.</p>
          </div>
          <a href="business.html" className="btn btn--secondary" style={{ textDecoration: "none" }}>
            <span>See business plans</span>
            <span className="arrow"><Icon name="arrow-right" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const rows = [
    ["Download speed",            "50 Mbps", "100 Mbps", "250 Mbps", "500 Mbps"],
    ["Upload speed (symmetric)",  "50 Mbps", "100 Mbps", "250 Mbps", "500 Mbps"],
    ["Monthly service fee",       "$100",    "$115",     "$125",     "$150"],
    ["Installation fee*",         "$100",    "$150",     "$150",     "$150"],
    ["Contract term",             "None",    "None",     "None",     "None"],
    ["Data cap",                  "Unlimited","Unlimited","Unlimited","Unlimited"],
    ["Peak-hour throttling",      "Never",   "Never",    "Never",    "Never"],
    ["Equipment included",        "ONT + Wi-Fi router","ONT + Wi-Fi router","ONT + Wi-Fi router","ONT + Wi-Fi router"],
    ["Recommended household",     "1–2 devices","3–5 devices","5–10 devices","10+ devices"],
    ["Best for",                  "Browsing, email","Streaming, work","Multi-user, gaming","Everything at once"],
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">Side-by-side</span>
          <h2 className="section__title">Compare all four plans</h2>
        </div>
        <table className="compare">
          <thead>
            <tr>
              <th></th>
              <th className="compare__col-blue"><span className="compare__plan-head">Pim 50<small>Light use</small></span></th>
              <th className="compare__col-red"><span className="compare__plan-head">Pim 100<small>Most households</small></span></th>
              <th className="compare__col-blue"><span className="compare__plan-head">Pim 250<small>Busy homes</small></span></th>
              <th className="compare__col-red"><span className="compare__plan-head">Pim 500<small>Maximum</small></span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: "var(--pc-fg-muted)", marginTop: 14, textAlign: "center" }}>
          *Installation fee is quoted based on site requirements. The amount above is the standard quote when no extra work is required.
        </p>
      </div>
    </section>
  );
}

function PlansFaqTeaser() {
  const qs = [
    { q: "Can I upgrade my plan later?",        a: "Yes — you can move up or down any time. We pro-rate the change so you only pay for what you use." },
    { q: "Is there a contract or term?",        a: "No. PimComm plans are month-to-month. Cancel any time without a fee." },
    { q: "What equipment do I need at home?",   a: "Nothing — we provide a fibre ONT (the optical terminal at your wall) and a Wi-Fi router as part of your install. You only need to plug it in." },
  ];
  return (
    <section className="section section--snug section--cool">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">Common questions</span>
          <h2 className="section__title">Before you sign up</h2>
        </div>
        <div className="faq">
          {qs.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} startOpen={i === 0} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <a href="support.html#faq" className="btn btn--secondary" style={{ textDecoration: "none" }}>
            <span>See all FAQs</span>
            <span className="arrow"><Icon name="arrow-right" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FaqItem_OLD_REMOVED() { return null; }

Object.assign(window, { PlansHeroStats, PlanCardsSection, ComparisonSection, PlansFaqTeaser, RESIDENTIAL_PLANS });
