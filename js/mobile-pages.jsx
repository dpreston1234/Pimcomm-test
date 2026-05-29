/* PimComm — Mobile inner pages.
   Depends on components.jsx (Icon, LOGO) and mobile.jsx (MNav, MDrawer, MFooter, MStickyCta).
   Exports a set of *Page components and a MobilePage shell.
*/

/* ============================================================
   Shared shell — wraps any page with nav + footer + drawer
   ============================================================ */
function MobilePage({ active, children, sticky = true }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <React.Fragment>
      <MNav active={active} onMenu={() => setMenuOpen(true)} />
      <main>{children}</main>
      <MFooter />
      {sticky && <MStickyCta />}
      <MDrawer open={menuOpen} onClose={() => setMenuOpen(false)} active={active} />
    </React.Fragment>
  );
}

/* ============================================================
   Page hero — simple non-photo header used by inner pages
   ============================================================ */
function MPageHero({ eyebrow, title, subtitle, accent = "red" }) {
  return (
    <section className={`m-page-hero m-page-hero--${accent}`}>
      <div className="m-container">
        <span className="m-eyebrow">{eyebrow}</span>
        <h1 className="m-page-hero__title">{title}</h1>
        {subtitle && <p className="m-page-hero__sub">{subtitle}</p>}
      </div>
    </section>
  );
}

/* ============================================================
   Reusable FAQ accordion
   ============================================================ */
function MFaqItem({ q, a, startOpen = false }) {
  const [open, setOpen] = React.useState(startOpen);
  return (
    <div className={`m-faq__item${open ? " open" : ""}`}>
      <button className="m-faq__q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="m-faq__ico"><Icon name={open ? "minus" : "plus"} size={14} /></span>
      </button>
      {open && <div className="m-faq__a">{a}</div>}
    </div>
  );
}

/* ============================================================
   PLANS PAGE
   ============================================================ */
const M_RESIDENTIAL_PLANS = [
  { name: "Pim 50",  color: "blue", mbps: 50,  headline: "Light use",       use: "Browsing, email, social.",           price: "100" },
  { name: "Pim 100", color: "red",  mbps: 100, headline: "Most households", use: "Streaming, work, video calls.",      price: "115" },
  { name: "Pim 250", color: "blue", mbps: 250, headline: "Busy homes",      use: "Multi-stream, gaming, home office.", price: "125", popular: true },
  { name: "Pim 500", color: "red",  mbps: 500, headline: "Maximum speed",   use: "Everything, all at once.",           price: "150" },
];

function MPlansPage() {
  const compareRows = [
    ["Download / upload",   "50 Mbps", "100 Mbps", "250 Mbps", "500 Mbps"],
    ["Monthly fee",         "$100",    "$115",     "$125",     "$150"],
    ["Install fee*",        "$100",    "$150",     "$150",     "$150"],
    ["Contract",            "None",    "None",     "None",     "None"],
    ["Data cap",            "Unltd",   "Unltd",    "Unltd",    "Unltd"],
    ["Devices",             "1–2",     "3–5",      "5–10",     "10+"],
  ];

  return (
    <MobilePage active="Plans">
      <MPageHero
        eyebrow="Residential plans"
        title="Plans built for your home."
        subtitle="Symmetric fibre speeds. No throttling. No long-term contracts."
      />

      <section className="m-section m-section--cool">
        <div className="m-container m-plans-list">
          {M_RESIDENTIAL_PLANS.map((p) => <MPlanCard key={p.name} {...p} />)}
        </div>

        <div className="m-container" style={{ marginTop: 24 }}>
          <div className="m-callout">
            <span className="m-callout__icon"><Icon name="briefcase" /></span>
            <div>
              <strong>Running a business?</strong>
              <p>Dedicated business plans — 150 to 600 Mbps symmetric.</p>
              <a href="#/business" className="m-callout__link">
                See business plans <Icon name="arrow-right" size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Side-by-side</span>
          <h2 className="m-h2 m-h2--center">Compare all four plans</h2>
          <div className="m-compare">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="m-compare__h m-compare__h--blue">Pim 50</th>
                  <th className="m-compare__h m-compare__h--red">Pim 100</th>
                  <th className="m-compare__h m-compare__h--blue">Pim 250</th>
                  <th className="m-compare__h m-compare__h--red">Pim 500</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => <td key={j}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="m-fineprint">*Installation fee is quoted on-site. Above is standard with no extra work needed.</p>
        </div>
      </section>

      <section className="m-section m-section--cool">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Common questions</span>
          <h2 className="m-h2 m-h2--center">Before you sign up</h2>
          <div className="m-faq">
            <MFaqItem q="Can I upgrade my plan later?" a="Yes — you can move up or down any time. We pro-rate the change so you only pay for what you use." startOpen />
            <MFaqItem q="Is there a contract or term?" a="No. PimComm plans are month-to-month. Cancel any time without a fee." />
            <MFaqItem q="What equipment do I need at home?" a="Nothing — we provide a fibre ONT and a Wi-Fi router as part of your install. You only need to plug it in." />
          </div>
          <div className="m-center" style={{ marginTop: 24 }}>
            <a href="#/support" className="m-btn m-btn--secondary">
              <span>See all FAQs</span>
              <span className="arrow"><Icon name="arrow-right" /></span>
            </a>
          </div>
        </div>
      </section>
    </MobilePage>
  );
}

/* ============================================================
   BUSINESS PAGE
   ============================================================ */
const M_BUSINESS_PLANS = [
  { name: "PimBiz 150", color: "blue",   mbps: 150, headline: "Small storefronts & offices",   price: "250", uses: ["Email, cloud apps, POS", "Up to 10 users", "Symmetric uploads"] },
  { name: "PimBiz 300", color: "red",    mbps: 300, headline: "Healthcare, education, retail", price: "350", uses: ["Telehealth, video classes", "Up to 25 users", "Priority support window"], popular: true },
  { name: "PimBiz 600", color: "yellow", mbps: 600, headline: "High-volume operations",        price: "400", uses: ["Multi-site, large transfers", "25+ users", "Dedicated account manager"] },
];

function MBizPlanCard({ plan }) {
  return (
    <article className={`m-bizplan${plan.popular ? " m-bizplan--popular" : ""}`}>
      {plan.popular && <span className="m-plan__ribbon">Most popular</span>}
      <div className={`m-bizplan__head m-bizplan__head--${plan.color}`}>{plan.name}</div>
      <div className="m-bizplan__body">
        <div className="m-bizplan__row">
          <div className="m-bizplan__speed-wrap">
            <span className="m-bizplan__speed">{plan.mbps}</span>
            <span className="m-bizplan__unit">Mbps</span>
            <div className={`m-bizplan__tag m-bizplan__tag--${plan.color}`}>{plan.headline}</div>
          </div>
          <div className={`m-bizplan__price m-bizplan__price--${plan.color}`}>
            <div className="m-bizplan__price-val">${plan.price}<small>/mo</small></div>
            <div className="m-bizplan__price-note">+ install quote</div>
          </div>
        </div>
        <ul className="m-bizplan__uses">
          {plan.uses.map((u, i) => (
            <li key={i}>
              <span className="m-bizplan__check"><Icon name="check" size={12} /></span>
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-bizplan__cta">
        <a href={`#/get-connected?plan=${encodeURIComponent(plan.name)}`} className="m-btn m-btn--primary m-btn--block">
          <span>Request a quote</span>
          <span className="arrow"><Icon name="arrow-right" /></span>
        </a>
      </div>
    </article>
  );
}

function MBusinessPage() {
  const why = [
    { icon: "fiber", title: "Symmetric speeds",       body: "Uploads as fast as downloads — for cloud, video calls, POS, and large transfers." },
    { icon: "gauge", title: "No peak-hour slowdown",  body: "Dedicated fibre means consistent performance during business hours." },
    { icon: "users", title: "Local support team",     body: "When you call, you reach someone in Cross Lake who knows the network." },
  ];
  const cases = [
    { icon: "stethoscope", title: "Healthcare",  body: "Reliable virtual appointments, EMRs, and patient communication." },
    { icon: "graduation",  title: "Education",   body: "Fast uploads for assignments and remote learning. No class-hour throttling." },
    { icon: "store",       title: "Commerce",    body: "Consistent connectivity for POS, inventory, and online orders." },
  ];
  return (
    <MobilePage active="Business">
      <MPageHero
        eyebrow="Business services"
        title="Internet built for your business."
        subtitle="Consistent fibre for local businesses in Cross Lake. Symmetric speeds. No slowdowns."
      />

      <section className="m-section">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Why PimComm for business</span>
          <h2 className="m-h2 m-h2--center">Built for how you work</h2>
          <div className="m-why-list">
            {why.map((it) => (
              <div className="m-why" key={it.title}>
                <span className="m-why__icon"><Icon name={it.icon} /></span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m-section m-section--cool">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Business pricing</span>
          <h2 className="m-h2 m-h2--center">Three plans for three sizes</h2>
          <div className="m-bizplans-list">
            {M_BUSINESS_PLANS.map((p) => <MBizPlanCard key={p.name} plan={p} />)}
          </div>
          <div className="m-callout" style={{ marginTop: 20 }}>
            <span className="m-callout__icon"><Icon name="dollar" /></span>
            <div>
              <strong>About installation fees</strong>
              <p>Business installation is quoted on-site — wiring, distance from demarcation point, equipment placement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Built for community businesses</span>
          <h2 className="m-h2 m-h2--center">What customers run on PimComm</h2>
          <div className="m-usecase-list">
            {cases.map((it) => (
              <div className="m-usecase" key={it.title}>
                <span className="m-usecase__icon"><Icon name={it.icon} /></span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m-biz-callout">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--yellow">Local team. Local accountability.</span>
          <h2 className="m-biz-callout__title">Talk to a real person about your business needs.</h2>
          <p className="m-biz-callout__sub">Business builds are scoped one-to-one. We'll come look at the site and quote installation before any work begins.</p>
          <div className="m-biz-callout__phones">
            <a href="tel:18007733336" className="big">1-800-773-3336</a>
            <a href="tel:12049753873">1-204-975-3873</a>
          </div>
          <a href="#/get-connected" className="m-btn m-btn--primary m-btn--block">
            <span>Request a quote</span>
            <span className="arrow"><Icon name="arrow-right" /></span>
          </a>
        </div>
      </section>
    </MobilePage>
  );
}

/* ============================================================
   COVERAGE PAGE
   ============================================================ */
function MCoveragePage() {
  const [data, setData] = React.useState({ name: "", phone: "", location: "" });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setData({ ...data, [k]: e.target.value });

  return (
    <MobilePage active="Coverage">
      <MPageHero
        eyebrow="Service area"
        title="Serving Cross Lake and surrounding area."
        subtitle="Check if your home is ready below, or send us your details and we'll confirm within 2 business days."
      />

      <section className="m-section">
        <div className="m-container">
          <div className="m-cov-map">
            <div className="m-cov-map__svg" aria-hidden="true">
              <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="water" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M0 4 Q 2 2 4 4 T 8 4" stroke="#9ec3e8" strokeWidth="0.6" fill="none"/>
                  </pattern>
                </defs>
                {/* land */}
                <rect width="320" height="240" fill="#e9edf3"/>
                {/* lake shapes */}
                <path d="M0 140 Q 60 100 120 120 Q 180 145 220 130 Q 280 110 320 130 L 320 240 L 0 240 Z" fill="url(#water)"/>
                <ellipse cx="80" cy="80" rx="60" ry="32" fill="url(#water)"/>
                {/* active fibre zone */}
                <path d="M 30 30 Q 80 10 140 30 Q 180 50 200 90 Q 180 130 110 130 Q 50 110 30 70 Z" fill="rgba(46,127,193,0.18)" stroke="#2e7fc1" strokeWidth="1.4" strokeDasharray="3 3"/>
                <circle cx="120" cy="70" r="5" fill="#c8252d"/>
                <circle cx="120" cy="70" r="11" fill="none" stroke="#c8252d" strokeOpacity="0.4" strokeWidth="1.5"/>
                {/* coming-soon zone */}
                <path d="M 200 140 Q 250 130 290 160 Q 280 200 230 200 Q 200 180 200 140 Z" fill="rgba(243,191,53,0.18)" stroke="#caa024" strokeWidth="1.4" strokeDasharray="3 3"/>
              </svg>
            </div>
            <div className="m-cov-map__legend">
              <span><span className="dot dot--blue"></span>Fibre ready</span>
              <span><span className="dot dot--yellow"></span>Coming soon</span>
              <span><span className="dot dot--water"></span>Water</span>
            </div>
            <div className="m-cov-map__caption">Stylized map · Cross Lake, MB</div>
          </div>
          <p className="m-fineprint">Coverage updates monthly as last-mile fibre rolls out.</p>
        </div>
      </section>

      <section className="m-section m-section--cool">
        <div className="m-container">
          <span className="m-eyebrow">Don't see your area?</span>
          <h2 className="m-h2">Tell us where you live — we'll check.</h2>
          <p className="m-lead">If your home isn't on the map yet, send us your details. We call within 2 business days.</p>
          <ul className="m-checklist">
            {["No address required — describe your home or share What3Words","Two-day turnaround on availability checks","We add your home to the rollout queue if not yet served"].map((t) => (
              <li key={t}>
                <span className="m-checklist__ico"><Icon name="check-circle" size={16} /></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {sent ? (
            <div className="m-confirm">
              <span className="m-confirm__icon"><Icon name="check" /></span>
              <h3>We got your request.</h3>
              <p>Our team will contact you at <strong>{data.phone}</strong> within 2 business days.</p>
            </div>
          ) : (
            <form className="m-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="m-field">
                <label>Your name</label>
                <input value={data.name} onChange={update("name")} required />
              </div>
              <div className="m-field">
                <label>Phone number</label>
                <input type="tel" value={data.phone} onChange={update("phone")} required />
              </div>
              <div className="m-field">
                <label>What3Words address or home description</label>
                <textarea rows="3" value={data.location} onChange={update("location")} required placeholder="///spruce.cabin.lake — or — Blue house, red truck"></textarea>
              </div>
              <button type="submit" className="m-btn m-btn--primary m-btn--block">
                <span>Check my address</span>
                <span className="arrow"><Icon name="arrow-right" /></span>
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="m-section">
        <div className="m-container">
          <div className="m-rollout">
            <span className="m-eyebrow m-eyebrow--yellow">Rollout · May 2026</span>
            <h3>We've connected 1,400+ homes — and we're still expanding.</h3>
            <div className="m-rollout__stat">
              <span className="num">1,400<sub>+</sub></span>
              <span className="lab">homes connected</span>
            </div>
            <p>Want a heads-up when we reach your area? Submit your address using the form above.</p>
          </div>
        </div>
      </section>
    </MobilePage>
  );
}

/* ============================================================
   ABOUT PAGE
   ============================================================ */
function MAboutPage() {
  const timeline = [
    { year: "2018", title: "The belief",                body: "Community leadership commits to closing the digital divide. PimComm is incorporated as a Nation-owned company." },
    { year: "2021", title: "The Kici Sipi partnership", body: "Construction begins on a $27M dedicated fibre backbone. Over 200 km of fibre is laid." },
    { year: "2023", title: "Last-mile to 1,400 homes",  body: "Fibre is delivered to the side of homes across Cross Lake. PimComm begins residential service." },
    { year: "2026", title: "Full ISP operations",       body: "PimComm launches its public brand and full ISP operations: plans, billing, support, and self-signup." },
  ];
  const pillars = [
    { icon: "shield", title: "Reliability",         body: "Built for Northern conditions. Dedicated fibre. No shared cable. No seasonal slowdowns." },
    { icon: "users",  title: "Accessibility",       body: "Plans that fit every household and business. No long-term contracts. Local support." },
    { icon: "heart",  title: "Community ownership", body: "100% owned by Pimicikamak Cree Nation. Revenue stays in the community." },
    { icon: "spark",  title: "Opportunity",         body: "Education, healthcare, business, and creative work — built on a connection that doesn't drop." },
  ];

  return (
    <MobilePage active="About">
      <MPageHero
        eyebrow="Our story"
        title="Built by the community. For the community."
        subtitle="PimComm is 100% Indigenous-owned and operated, delivering reliable fibre internet to Cross Lake."
      />

      <section className="m-section m-section--cool">
        <div className="m-container">
          <span className="m-eyebrow">Our story</span>
          <h2 className="m-h2">From a community belief to a working fibre network.</h2>
          <p className="m-prose">PimComm began with a belief: that fast, reliable internet should not be a privilege of southern Canada. For families in Pimicikamak Cree Nation, distance had always meant disconnection — and disconnection had real costs in education, healthcare, and opportunity.</p>
          <p className="m-prose">Over eight years, that belief turned into a fibre network: backbone, last-mile, equipment, billing, and a local team. Today PimComm serves over 1,400 homes in Cross Lake, with revenue staying in the community.</p>
        </div>
        <div className="m-about-photo" role="img" aria-label="The PimComm team in Cross Lake"></div>
      </section>

      <section className="m-section">
        <div className="m-container">
          <span className="m-eyebrow">Timeline</span>
          <h2 className="m-h2">How we got here.</h2>
          <ol className="m-timeline">
            {timeline.map((t) => (
              <li key={t.year}>
                <div className="m-timeline__year">{t.year}</div>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="m-section m-section--cool">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Mission &amp; vision</span>
          <h2 className="m-h2 m-h2--center">What we are doing, and why.</h2>
          <div className="m-mvpanel">
            <div className="m-mvpanel__lab">Our mission</div>
            <h3>Deliver reliable internet that is built by the community, owned by the community, and accountable to the community.</h3>
            <p>Every household and business in Cross Lake should have the connection it needs to participate fully in education, healthcare, work, and the economy.</p>
          </div>
          <div className="m-mvpanel m-mvpanel--accent">
            <div className="m-mvpanel__lab">Our vision</div>
            <h3>A Northern Manitoba where the digital divide is closed for good — by the people who live here.</h3>
            <p>Success is the long-term value that stays in the community: jobs, infrastructure, training, and the next generation of community-owned utilities.</p>
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>What we stand for</span>
          <h2 className="m-h2 m-h2--center">Four pillars guide every decision.</h2>
          <div className="m-pillars">
            {pillars.map((p) => (
              <div className="m-pillar" key={p.title}>
                <span className="m-pillar__icon"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="m-territory">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--yellow">Territory acknowledgement</span>
          <p>PimComm operates on the traditional territory of Pimicikamak Cree Nation, in what is now known as Cross Lake, Manitoba. As a Nation-owned company, we are committed to keeping ownership, opportunity, and long-term value within the communities we serve.</p>
        </div>
      </section>
    </MobilePage>
  );
}

/* ============================================================
   SUPPORT PAGE
   ============================================================ */
function MSupportPage() {
  const [sent, setSent] = React.useState(false);
  const categories = [
    {
      label: "Getting started",
      items: [
        { q: "How do I sign up for PimComm?",       a: "Submit the Get Connected form with your name, phone, plan choice, and home location. Our team calls within 2 business days. You can also call us at 1-800-773-3336." },
        { q: "How will the installer find my home?", a: "We use What3Words and your home description — no street address needed. Tell us what your home looks like (\"blue house, red truck out front\") and we'll find you." },
        { q: "Is there a contract?",                  a: "No. All plans are month-to-month. Change plans or cancel any time without a fee." },
      ],
    },
    {
      label: "My service",
      items: [
        { q: "What speeds can I expect on my plan?",  a: "PimComm fibre is symmetric — upload equals download, and you get the speed we quote at peak hours. If you're seeing less than 80% on a wired connection, call us." },
        { q: "What if my internet goes down?",         a: "Check the status above. If we're up, unplug the ONT for 30 seconds and plug it back in. Still down? Call 1-800-773-3336." },
        { q: "What equipment do I need at home?",      a: "Nothing. We provide a fibre ONT and a Wi-Fi router as part of install. You can use your own router if you prefer." },
      ],
    },
    {
      label: "Billing",
      items: [
        { q: "How do I pay my bill?",  a: "E-transfer, credit card, or in person at our Cross Lake office. The self-service portal is coming soon." },
        { q: "When is my first bill?", a: "Pro-rated from your install date to month end. You only pay for the days you had service." },
      ],
    },
  ];
  return (
    <MobilePage active="Support">
      <MPageHero
        eyebrow="Support"
        title="Real help, from real people, in Cross Lake."
        subtitle="Status, common questions, and a direct line to our team."
      />

      <section className="m-section">
        <div className="m-container">
          <div className="m-status">
            <div className="m-status__pulse"><Icon name="check" /></div>
            <div className="m-status__body">
              <div className="m-status__lab">Current network status</div>
              <h3>All systems operational</h3>
              <div className="m-status__sub">Updated 4 min ago · No active incidents · 99.97% uptime last 30 days</div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-section m-section--cool">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Get in touch</span>
          <h2 className="m-h2 m-h2--center">Two ways to reach our team</h2>

          <div className="m-contact">
            <span className="m-contact__icon m-contact__icon--red"><Icon name="phone" /></span>
            <h3>Call us</h3>
            <p>Our team answers in person Mon–Fri, 8am–6pm. Outside hours, leave a message and we'll call back next business day.</p>
            <a href="tel:18007733336" className="m-contact__phone big">1-800-773-3336</a>
            <a href="tel:12049753873" className="m-contact__phone">1-204-975-3873</a>
            <div className="m-contact__hours">Monday–Friday · 8am–6pm CT</div>
          </div>

          <div className="m-contact">
            <span className="m-contact__icon"><Icon name="message" /></span>
            <h3>Send a message</h3>
            <p>Not urgent? Drop us a note and we'll respond within one business day.</p>
            {sent ? (
              <div className="m-sent">
                <Icon name="check-circle" size={18} />
                Message sent — we'll be in touch within one business day.
              </div>
            ) : (
              <form className="m-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="m-field"><input placeholder="Your name" required /></div>
                <div className="m-field"><input placeholder="Phone or email" required /></div>
                <div className="m-field"><textarea rows="3" placeholder="What can we help with?" required></textarea></div>
                <button type="submit" className="m-btn m-btn--primary m-btn--block">
                  <span>Send message</span>
                  <span className="arrow"><Icon name="arrow-right" /></span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-container">
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Frequently asked</span>
          <h2 className="m-h2 m-h2--center">Quick answers</h2>

          {categories.map((c, ci) => (
            <div key={c.label} className="m-faq-group">
              <div className="m-faq__category">{c.label}</div>
              <div className="m-faq">
                {c.items.map((it, i) => (
                  <MFaqItem key={c.label + i} q={it.q} a={it.a} startOpen={ci === 0 && i === 0} />
                ))}
              </div>
            </div>
          ))}

          <p className="m-fineprint" style={{ textAlign: "center", marginTop: 20 }}>
            Don't see your question? <a href="tel:18007733336" style={{ color: "var(--pc-red)", fontWeight: 600 }}>Call 1-800-773-3336</a>
          </p>
        </div>
      </section>
    </MobilePage>
  );
}

/* ============================================================
   NEWS PAGE
   ============================================================ */
const M_NEWS_POSTS = [
  { cat: "Coverage update",     date: "May 22, 2026",  title: "Northern reserve roads now active — fibre live to 86 homes", excerpt: "Crews completed ahead of schedule. Service is live on Spruce, Beaver, and Loon Roads.", photo: "assets/photography/speedtest-cross-lake.jpg" },
  { cat: "Community news",      date: "May 14, 2026",  title: "Partnership with Cross Lake Library on digital-skills program", excerpt: "Six-week evening program: cloud apps, online safety, resume-building. Free for the community.", photo: "assets/photography/education-online-class.jpg" },
  { cat: "Service announcement", date: "May 8, 2026",  title: "Planned maintenance: Wed May 22, 1–3am CT", excerpt: "Upgrading routing equipment at our Cross Lake POP. Up to 15 min interruption.", photo: "assets/photography/remote-work-video.jpg" },
  { cat: "Coverage update",     date: "April 30, 2026", title: "We've crossed 1,400 homes connected", excerpt: "A look at the rollout numbers, what's coming, and how to add your home to the queue.", photo: "assets/photography/door-knock-rep.jpg" },
  { cat: "Community news",      date: "April 18, 2026", title: "Telehealth partnership goes live with Pimicikamak Health Centre", excerpt: "Reliable connections for virtual appointments and on-demand bandwidth during clinic hours.", photo: "assets/photography/healthcare-telehealth.jpg" },
  { cat: "Service announcement", date: "April 9, 2026", title: "New self-service portal coming this summer", excerpt: "Pay your bill, change plans, and check status from your phone.", photo: "assets/photography/team-portrait.jpg" },
];

function MNewsPage() {
  return (
    <MobilePage active="News">
      <MPageHero
        eyebrow="News &amp; updates"
        title="What's happening on the network."
        subtitle="Service announcements, coverage updates, and community news — straight from our team."
      />

      <section className="m-section m-section--cool">
        <div className="m-container m-news-list">
          {M_NEWS_POSTS.map((p, i) => (
            <a key={i} className="m-news-card" href="#">
              <div className="m-news-card__photo" style={{ backgroundImage: `url(${p.photo})` }}>
                <span className="m-news-card__category">{p.cat}</span>
              </div>
              <div className="m-news-card__body">
                <div className="m-news-card__date">{p.date}</div>
                <h3 className="m-news-card__title">{p.title}</h3>
                <p className="m-news-card__excerpt">{p.excerpt}</p>
                <span className="m-news-card__more">Read more <Icon name="arrow-right" size={12} /></span>
              </div>
            </a>
          ))}
        </div>
        <div className="m-container">
          <div className="m-pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button className="next">Next <Icon name="arrow-right" size={12} /></button>
          </div>
        </div>
      </section>

      <section className="m-section">
        <div className="m-container" style={{ textAlign: "center" }}>
          <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Stay in the loop</span>
          <h2 className="m-h2 m-h2--center">Service updates, sent occasionally.</h2>
          <p className="m-lead m-lead--center">Coverage milestones, planned maintenance, and community programs. Once or twice a month.</p>
          <form onSubmit={(e) => e.preventDefault()} className="m-newsletter">
            <input type="email" placeholder="you@example.com" required />
            <button type="submit" className="m-btn m-btn--primary">
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </section>
    </MobilePage>
  );
}

/* ============================================================
   GET CONNECTED PAGE
   ============================================================ */
function getInitialPlanMobile() {
  const hash = window.location.hash;
  const m = hash.match(/[?&]plan=([^&]+)/);
  if (!m) return null;
  return decodeURIComponent(m[1]);
}

function MGetConnectedPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState({
    name: "", phone: "", email: "",
    plan: getInitialPlanMobile() || "Pim 100",
    description: "", w3w: "", band: "", notes: ""
  });
  const update = (k) => (e) => setData({ ...data, [k]: e.target.value });

  return (
    <MobilePage active="Home" sticky={false}>
      <MPageHero
        eyebrow="Get connected"
        title="A few details and we'll set up your install."
        subtitle="Our team will call within 2 business days to confirm and schedule. Prefer to call? 1-800-773-3336."
      />

      <section className="m-section m-section--cool">
        <div className="m-container">
          {submitted ? (
            <div className="m-confirm">
              <span className="m-confirm__icon"><Icon name="check" /></span>
              <h3>Thanks, {data.name.split(" ")[0] || "neighbour"} — we got it.</h3>
              <p>We'll call you at <strong>{data.phone || "your phone"}</strong> within 2 business days. If you don't hear from us, call 1-800-773-3336.</p>
              <div className="m-confirm__row">
                <a href="#/" className="m-btn m-btn--secondary">
                  <span>Back to home</span><span className="arrow"><Icon name="arrow-right" /></span>
                </a>
              </div>
            </div>
          ) : (
            <form className="m-form m-form--card" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="m-field">
                <label className="m-field__lab m-field__lab--req">Full name</label>
                <input value={data.name} onChange={update("name")} required placeholder="Sarah Cook" />
              </div>
              <div className="m-field">
                <label className="m-field__lab m-field__lab--req">Phone number</label>
                <input type="tel" value={data.phone} onChange={update("phone")} required placeholder="(204) 555-1234" />
                <div className="m-field__hint">We'll use this to confirm your install before any work begins.</div>
              </div>
              <div className="m-field">
                <label className="m-field__lab">Email <span className="opt">(optional)</span></label>
                <input type="email" value={data.email} onChange={update("email")} placeholder="you@example.com" />
              </div>

              <div className="m-field">
                <label className="m-field__lab m-field__lab--req">Choose a plan</label>
                <div className="m-radio-group">
                  {[
                    { name: "Pim 50",   price: "$100/mo" },
                    { name: "Pim 100",  price: "$115/mo" },
                    { name: "Pim 250",  price: "$125/mo" },
                    { name: "Pim 500",  price: "$150/mo" },
                    { name: "Business", price: "Quote" },
                  ].map((p) => (
                    <label key={p.name} className={`m-radio${data.plan === p.name ? " m-radio--checked" : ""}`}>
                      <input type="radio" name="plan" value={p.name} checked={data.plan === p.name} onChange={update("plan")} />
                      <span className="name">{p.name}</span>
                      <small>{p.price}</small>
                    </label>
                  ))}
                </div>
              </div>

              <div className="m-field">
                <label className="m-field__lab m-field__lab--req">Your location</label>
                <div className="m-field__hint">Search your What3Words address or describe your home — no street address needed.</div>
                <input value={data.w3w} onChange={update("w3w")} placeholder="///spruce.cabin.lake" />
              </div>

              <div className="m-field">
                <label className="m-field__lab m-field__lab--req">Describe your home</label>
                <div className="m-field__hint">Helps our installer find you. e.g. "Blue house, second from corner, red truck."</div>
                <textarea rows="3" value={data.description} onChange={update("description")} required></textarea>
              </div>

              <div className="m-field">
                <label className="m-field__lab">Band membership number <span className="opt">(optional)</span></label>
                <input value={data.band} onChange={update("band")} />
              </div>

              <div className="m-field">
                <label className="m-field__lab">Anything else? <span className="opt">(optional)</span></label>
                <input value={data.notes} onChange={update("notes")} placeholder="Access notes, dogs, gate code…" />
              </div>

              <button type="submit" className="m-btn m-btn--primary m-btn--block">
                <span>Send my request</span>
                <span className="arrow"><Icon name="arrow-right" /></span>
              </button>
              <div className="m-fineprint" style={{ textAlign: "center", marginTop: 14 }}>
                Prefer to call? <a href="tel:18007733336" style={{ color: "var(--pc-red)", fontWeight: 600 }}>1-800-773-3336</a>
              </div>
            </form>
          )}

          <div className="m-next-card">
            <div className="m-next-card__head">
              <span className="m-medallion m-medallion--blue" style={{ width: 32, height: 32 }}><Icon name="check" size={14} /></span>
              <span>What happens next</span>
            </div>
            <ol className="m-next-steps">
              <li><span className="num">1</span><div><strong>We call to confirm</strong><span>Within 2 business days, at the number you give us.</span></div></li>
              <li><span className="num">2</span><div><strong>We schedule your install</strong><span>A local crew runs fibre to the side of your home.</span></div></li>
              <li><span className="num">3</span><div><strong>Plug in and go</strong><span>We hand you the router and confirm your speed.</span></div></li>
            </ol>
          </div>
        </div>
      </section>
    </MobilePage>
  );
}

Object.assign(window, {
  MobilePage, MPageHero, MFaqItem,
  MPlansPage, MBusinessPage, MCoveragePage,
  MAboutPage, MSupportPage, MNewsPage, MGetConnectedPage,
  MBizPlanCard,
});
