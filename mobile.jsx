/* PimComm — Home page sections + shared layout (responsive).
   Used by app.jsx (HomePage) and mobile-pages.jsx (MobilePage shell).
   Depends on components.jsx for Icon + LOGO. */

const M_HERO_BG = "assets/photography/speedtest-cross-lake.jpg";

/* ============================================================
   Responsive top nav
   Desktop (≥768px): logo + nav links + CTA.
   Mobile (<768px):  logo + CTA button + hamburger.
   ============================================================ */
function MNav({ active = "Home", onMenu }) {
  const desktopLinks = [
    { label: "Residential", href: "#/residential", match: "Plans" },
    { label: "Business",    href: "#/business",    match: "Business" },
    { label: "Coverage",    href: "#/coverage",    match: "Coverage" },
    { label: "About",       href: "#/about",       match: "About" },
    { label: "Support",     href: "#/support",     match: "Support" },
    { label: "News",        href: "#/news",         match: "News" },
  ];
  return (
    <header className="m-nav">
      <div className="m-nav__row">
        <a className="m-nav__brand" href="#/" aria-label="PimComm — home">
          <img src={LOGO} alt="PimComm logo" />
        </a>

        {/* Desktop nav links — hidden on mobile via CSS */}
        <nav className="m-nav__desktop-links" aria-label="Main navigation">
          {desktopLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`m-nav__desktop-link${l.match === active ? " active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="m-nav__actions">
          <a className="m-nav__cta" href="#/get-connected">
            Get Connected
          </a>
          {/* Hamburger — hidden on desktop via CSS */}
          <button className="m-nav__menu" aria-label="Open menu" onClick={onMenu}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   Slide-in drawer (mobile menu)
   ============================================================ */
function MDrawer({ open, onClose, active = "Home" }) {
  const links = [
    { label: "Home",         href: "#/" },
    { label: "Residential",  href: "#/residential" },
    { label: "Business",     href: "#/business" },
    { label: "Coverage",     href: "#/coverage" },
    { label: "About",        href: "#/about" },
    { label: "Support",      href: "#/support" },
    { label: "Contact",      href: "#/contact" },
    { label: "News",         href: "#/news" },
  ];

  const matchLabels = {
    Home: "Home",
    Plans: "Residential",
    Business: "Business",
    Coverage: "Coverage",
    About: "About",
    Support: "Support",
    Contact: "Contact",
    News: "News",
  };
  const activeLabel = matchLabels[active] || active;

  return (
    <React.Fragment>
      <div className={`m-drawer-backdrop${open ? " open" : ""}`} onClick={onClose} />
      <aside className={`m-drawer${open ? " open" : ""}`}>
        <button className="m-drawer__close" onClick={onClose} aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18"/>
          </svg>
        </button>
        <div className="m-drawer__brand">
          <img src={LOGO} alt="" />
          <span>PimComm</span>
        </div>
        <nav className="m-drawer__links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`m-drawer__link${l.label === activeLabel ? " active" : ""}`}
              onClick={onClose}
            >
              <span>{l.label}</span>
              <Icon name="arrow-right" />
            </a>
          ))}
        </nav>
        <div className="m-drawer__cta">
          <a href="#/get-connected" className="m-btn m-btn--primary m-btn--block" onClick={onClose}>
            <span>Get Connected</span>
            <span className="arrow"><Icon name="arrow-right" /></span>
          </a>
          <div className="m-drawer__phone">
            <Icon name="phone" size={14} />
            <span>
              Call us<br />
              <span className="num">1-800-773-3336</span>
            </span>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function MHero() {
  return (
    <section className="m-hero">
      <div className="m-hero__photo" style={{ backgroundImage: `url(${M_HERO_BG})` }} />
      <div className="m-hero__copy">
        <h1 className="m-hero__title">
          High-speed internet for our <em>community<span className="period">.</span></em>
        </h1>
        <p className="m-hero__subtitle">
          Reliable. Affordable. Community-owned. Built for Northern Manitoba.
        </p>
        <div className="m-hero__ctas">
          <a href="#/get-connected" className="m-btn m-btn--primary">
            <span>Get Connected</span>
            <span className="arrow"><Icon name="arrow-right" /></span>
          </a>
          <a href="#/residential" className="m-btn m-btn--on-photo">
            <span>See plans</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Value props (2×2 mobile → 4-column desktop)
   ============================================================ */
function MValueProps() {
  const items = [
    { variant: "blue-soft",  icon: "gauge", title: "Reliable",        body: "Built for northern conditions." },
    { variant: "blue",       icon: "users", title: "Affordable",      body: "Plans for every household." },
    { variant: "yellow",     icon: "home",  title: "Community-Owned", body: "100% Indigenous-owned." },
    { variant: "red",        icon: "pin",   title: "Local Support",   body: "Real people, right here." },
  ];
  return (
    <div className="m-vp">
      {items.map((it) => (
        <div key={it.title} className="m-vp__cell">
          <span className={`m-medallion m-medallion--${it.variant}`}><Icon name={it.icon} /></span>
          <h3>{it.title}</h3>
          <p>{it.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   Trust bar
   ============================================================ */
function MTrustBar() {
  const items = [
    { num: "200 km", label: "Dedicated fibre backbone" },
    { num: "1,400+", label: "Homes connected in Cross Lake" },
    { num: "100%",   label: "Indigenous-owned and operated" },
  ];
  return (
    <section className="m-trust">
      <div className="m-container m-trust__row">
        {items.map((it) => (
          <div key={it.num} className="m-trust__cell">
            <div className="m-trust__num">{it.num}</div>
            <div className="m-trust__label">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Home plan card
   ============================================================ */
function MPlanCard({ name, color, mbps, headline, use, price, popular }) {
  return (
    <article className={`m-plan${popular ? " m-plan--popular" : ""}`}>
      {popular && <span className="m-plan__ribbon">Most popular</span>}
      <div className={`m-plan__head m-plan__head--${color}`}>{name}</div>
      <div className="m-plan__body">
        <div>
          <span className="m-plan__speed">{mbps}</span>
          <span className="m-plan__unit">Mbps</span>
        </div>
        <div className={`m-plan__tag m-plan__tag--${color}`}>{headline}</div>
        <div className="m-plan__use">{use}</div>
      </div>
      <div className={`m-plan__price m-plan__price--${color}`}>
        <div className="m-plan__price-val">${price}<small>/mo</small></div>
        <div className="m-plan__price-note">+ taxes</div>
      </div>
      <div className="m-plan__cta">
        <a href={`#/get-connected?plan=${encodeURIComponent(name)}`}>Choose {name}</a>
      </div>
    </article>
  );
}

function MPlans() {
  const plans = [
    { name: "Pim 50",  color: "blue", mbps: 50,  headline: "Light use",       use: "Browsing, email, social.",           price: "100" },
    { name: "Pim 100", color: "red",  mbps: 100, headline: "Most households", use: "Streaming, work, video calls.",      price: "115" },
    { name: "Pim 250", color: "blue", mbps: 250, headline: "Busy homes",      use: "Multi-stream, gaming, home office.", price: "125", popular: true },
    { name: "Pim 500", color: "red",  mbps: 500, headline: "Maximum speed",   use: "Everything, all at once.",           price: "150" },
  ];
  return (
    <section className="m-section">
      <div className="m-container">
        <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>Residential plans</span>
        <h2 className="m-h2 m-h2--center">Internet for every need<span className="m-h2-underline"></span></h2>
      </div>
      <div className="m-container m-plans-list">
        {plans.map((p) => <MPlanCard key={p.name} {...p} />)}
      </div>
      <div className="m-plan-cta-row">
        <a href="#/residential" className="m-btn m-btn--ghost">
          <span>Compare all plans</span>
          <Icon name="arrow-right" size={14} />
        </a>
      </div>
    </section>
  );
}

/* ============================================================
   Built for the North
   ============================================================ */
function MBuilt() {
  return (
    <section className="m-split">
      <div className="m-split__photo" role="img" aria-label="Field rep at a Cross Lake home" />
      <div className="m-split__copy">
        <span className="m-eyebrow">Built for the North</span>
        <h2>Connecting our community.<br />Building our future.</h2>
        <span className="m-split__accent"></span>
        <p>
          PimComm is 100% Indigenous-owned and operated. We're proud to deliver
          high-speed internet that connects us to what matters most — education,
          healthcare, business, and each other.
        </p>
        <a href="#/about" className="m-btn m-btn--secondary">
          <span>About PimComm</span>
          <span className="arrow"><Icon name="arrow-right" /></span>
        </a>
      </div>
    </section>
  );
}

/* ============================================================
   How it works
   ============================================================ */
function MHowItWorks() {
  const steps = [
    { n: 1, icon: "map",  title: "Check your area",  body: "Confirm fibre is live where you live, or join the rollout queue.", href: "#/coverage",       linkText: "Check coverage" },
    { n: 2, icon: "home", title: "Pick your plan",   body: "Four residential plans, three business plans. Month-to-month.",   href: "#/residential",    linkText: "See plans" },
    { n: 3, icon: "wifi", title: "Get connected",    body: "Submit your details. We call within 2 business days.",            href: "#/get-connected",  linkText: "Start signup" },
  ];
  return (
    <section className="m-section m-section--warm">
      <div className="m-container">
        <span className="m-eyebrow m-eyebrow--center" style={{ display: "block" }}>How it works</span>
        <h2 className="m-h2 m-h2--center">Three steps from interested to online.</h2>
        <div className="m-steps">
          {steps.map((s) => (
            <div key={s.n} className="m-step">
              <span className="m-step__num">{s.n}</span>
              <div className="m-step__head">
                <span className="m-step__icon"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3>
              </div>
              <p>{s.body}</p>
              <a className="m-step__link" href={s.href}>{s.linkText} <Icon name="arrow-right" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Availability check
   ============================================================ */
function MAvailability({ address, setAddress, onCheck }) {
  return (
    <section className="m-avail m-section--cool">
      <div className="m-container">
        <span className="m-eyebrow">Let's get you connected</span>
        <h2 className="m-h2" style={{ fontSize: 24 }}>Check availability in your area today.</h2>
        <p className="m-lead">Enter your address and we'll show you the plans available where you live.</p>
        <form className="m-avail__form" onSubmit={(e) => { e.preventDefault(); onCheck && onCheck(address); }}>
          <div className="m-avail__input">
            <Icon name="pin" />
            <input
              type="text"
              placeholder="Address or community"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="m-btn m-btn--primary m-btn--block">
            <span>Check availability</span>
            <span className="arrow"><Icon name="arrow-right" /></span>
          </button>
        </form>
        <div className="m-avail__contact">
          <span className="ico"><Icon name="phone" /></span>
          <div>
            <span className="lab">Questions? Call us</span>
            <span className="num">1-800-773-3336</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   News strip
   ============================================================ */
function MNews() {
  const posts = [
    { cat: "Coverage update",    date: "May 22, 2026", title: "Northern reserve roads now active",         excerpt: "Crews finished ahead of schedule. 86 new homes are live this week.", photo: "assets/photography/speedtest-cross-lake.jpg" },
    { cat: "Community news",     date: "May 14, 2026", title: "Cross Lake Library digital-skills program", excerpt: "Six-week evening program on cloud apps and online safety.",             photo: "assets/photography/education-online-class.jpg" },
    { cat: "Service notice",     date: "May 8, 2026",  title: "Planned maintenance, Wed May 22, 1–3am",   excerpt: "Routing equipment upgrade. Expect a brief interruption.",               photo: "assets/photography/remote-work-video.jpg" },
  ];
  return (
    <section className="m-section">
      <div className="m-container">
        <div className="m-news-head">
          <div>
            <span className="m-eyebrow">From the network</span>
            <h2>Latest news</h2>
          </div>
          <a href="#/news" className="m-news-link">
            See all <Icon name="arrow-right" />
          </a>
        </div>
      </div>
      <div className="m-container m-news-list">
        {posts.map((p, i) => (
          <a key={i} className="m-news-card" href="#/news">
            <div className="m-news-card__photo" style={{ backgroundImage: `url(${p.photo})` }}>
              <span className="m-news-card__category">{p.cat}</span>
            </div>
            <div className="m-news-card__body">
              <div className="m-news-card__date">{p.date}</div>
              <h3 className="m-news-card__title">{p.title}</h3>
              <p className="m-news-card__excerpt">{p.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Connecting strip
   ============================================================ */
function MConnecting() {
  const items = [
    { icon: "graduation",  title: "Education",  body: "Supporting students and online learning." },
    { icon: "stethoscope", title: "Healthcare", body: "Enabling access to care and resources." },
    { icon: "store",       title: "Business",   body: "Helping local businesses grow." },
    { icon: "users",       title: "Our Future", body: "Investing for generations to come." },
  ];
  return (
    <section className="m-connecting">
      <div className="m-container m-connecting__grid">
        {items.map((it) => (
          <div key={it.title} className="m-connecting__cell">
            <span className="m-medallion m-medallion--navy" style={{ width: 38, height: 38 }}>
              <Icon name={it.icon} size={18} />
            </span>
            <div>
              <h4>{it.title}</h4>
              <p>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Footer (responsive: stacked mobile → 5-column desktop)
   ============================================================ */
function MFooter() {
  return (
    <footer className="m-footer">
      <div className="m-container">
        <div className="m-footer__top-grid">

          {/* Column 1: Brand */}
          <div className="m-footer__brand-col">
            <a className="m-footer__brand" href="#/" style={{ textDecoration: "none" }}>
              <img src={LOGO} alt="" />
              <span className="m-footer__brand-name">PimComm</span>
            </a>
            <div className="m-footer__tag">Bridging the digital divide.</div>
            <div className="m-footer__phones">
              <div><Icon name="phone" size={14} /> 1-800-773-3336</div>
              <div><Icon name="phone" size={14} /> 1-204-975-3873</div>
            </div>
            <div className="m-footer__social">
              <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="#" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </div>

          {/* Columns 2 + 3: Services & Company (2-col on mobile, individual on desktop) */}
          <div className="m-footer__col-group">
            <div className="m-footer__col">
              <h5>Services</h5>
              <ul>
                <li><a href="#/residential">Residential</a></li>
                <li><a href="#/business">Business</a></li>
                <li><a href="#/coverage">Coverage</a></li>
                <li><a href="#/get-connected">Get Connected</a></li>
              </ul>
            </div>
            <div className="m-footer__col">
              <h5>Company</h5>
              <ul>
                <li><a href="#/about">About</a></li>
                <li><a href="#/news">News</a></li>
                <li><a href="#/support">Support</a></li>
                <li><a href="#/contact">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="m-footer__col m-footer__col--legal">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Acceptable Use</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="m-footer__newsletter">
            <h5>Newsletter</h5>
            <p>Service updates and community news, sent occasionally.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

        </div>

        <div className="m-footer__territory">
          PimComm operates on the traditional territory of Pimicikamak Cree Nation. 100% Indigenous-owned and operated.
        </div>
        <div className="m-footer__bottom">
          <div className="m-footer__seal-row">
            <span>100% Indigenous-owned</span>
            <span className="seal"><Icon name="leaf" /></span>
          </div>
          <span>© 2026 PimComm. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Sticky bottom CTA (mobile only — hidden on desktop via CSS)
   ============================================================ */
function MStickyCta() {
  return (
    <div className="m-stickybar">
      <div className="m-stickybar__lab">
        Ready to connect?
        <small>4 plans, no contracts</small>
      </div>
      <a href="#/get-connected" className="m-btn m-btn--primary">
        <span>Get started</span>
        <span className="arrow"><Icon name="arrow-right" /></span>
      </a>
    </div>
  );
}

/* ============================================================
   Availability modal (home page)
   ============================================================ */
function MAvailabilityModal({ data, onClose }) {
  return (
    <div className="m-modal-backdrop" onClick={onClose}>
      <div className="m-modal" onClick={(e) => e.stopPropagation()}>
        <div className="m-modal__grip"></div>
        <div className="m-modal__icon"><Icon name="check" /></div>
        <h3>Service is available!</h3>
        <p>
          We can deliver fibre to <strong>{data.address}</strong>. These plans are ready to install:
        </p>
        <ul>
          {data.plans.map((p) => <li key={p}><span className="dot"></span>{p}</li>)}
        </ul>
        <a href="#/residential" className="m-btn m-btn--primary m-btn--block" onClick={onClose}>
          <span>See plan details</span>
          <span className="arrow"><Icon name="arrow-right" /></span>
        </a>
      </div>
    </div>
  );
}

Object.assign(window, {
  MNav, MDrawer, MHero, MValueProps, MTrustBar, MPlans, MPlanCard, MBuilt,
  MHowItWorks, MAvailability, MNews, MConnecting, MFooter,
  MStickyCta, MAvailabilityModal,
});
