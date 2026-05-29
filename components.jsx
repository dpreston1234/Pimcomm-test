/* PimComm marketing site — shared components.
   Exports Icon, Button, Nav, Footer, ValuePropStrip, ConnectingStrip to window. */

const LOGO = (window.__resources && window.__resources.logo) || "assets/logos/pimcomm-logo-full.png";

/* ------------------ Icon library (Lucide-flavored inline SVGs) ------------------ */
function Icon({ name, className = "", size }) {
  const s = size ? { width: size, height: size } : undefined;
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    style: s,
  };
  switch (name) {
    case "arrow-right":
      return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "wifi":
      return <svg {...common}><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>;
    case "gauge":
      return <svg {...common}><path d="M12 14l4-4"/><path d="M3.5 12a8.5 8.5 0 0 1 17 0"/><path d="M3.5 12v3"/><path d="M20.5 12v3"/></svg>;
    case "users":
      return <svg {...common}><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9" r="2.6"/><path d="M3 19c.6-3 3-5 6-5s5.4 2 6 5"/><path d="M15 19c.4-2 1.8-3.4 4-3.4"/></svg>;
    case "home":
      return <svg {...common}><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></svg>;
    case "pin":
      return <svg {...common}><path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.6"/></svg>;
    case "phone":
      return <svg {...common}><path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.1a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.3 1l-2 2a16 16 0 0 0 6.5 6.5l2-2a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .7 1z"/></svg>;
    case "graduation":
      return <svg {...common}><path d="M22 10L12 4 2 10l10 6 10-6z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>;
    case "stethoscope":
      return <svg {...common}><path d="M5 4v6a5 5 0 0 0 10 0V4"/><path d="M5 4h2M13 4h2"/><circle cx="19" cy="14" r="2.5"/><path d="M10 15v2a4 4 0 0 0 8 0v-1.5"/></svg>;
    case "store":
      return <svg {...common}><path d="M3 9l1.5-5h15L21 9"/><path d="M3 9h18"/><path d="M5 9v11h14V9"/><path d="M9 14h6v6H9z"/></svg>;
    case "spark":
      return <svg {...common}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14 0 17.5M12 3c-3 3.5-3 14 0 17.5"/></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case "play":
      return <svg {...common}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/></svg>;
    case "controller":
      return <svg {...common}><path d="M6 10h12a4 4 0 0 1 4 4v2a4 4 0 0 1-7 2.5L12 16l-3 2.5A4 4 0 0 1 2 16v-2a4 4 0 0 1 4-4z"/><path d="M7 14h2M8 13v2"/><circle cx="16" cy="14" r="1"/></svg>;
    case "monitor":
      return <svg {...common}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
    case "smartphone":
      return <svg {...common}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>;
    case "laptop":
      return <svg {...common}><rect x="4" y="5" width="16" height="11" rx="1"/><path d="M2 19h20"/></svg>;
    case "cloud":
      return <svg {...common}><path d="M7 18a5 5 0 0 1 1-9.9A6 6 0 0 1 20 9.5a4.5 4.5 0 0 1-1 8.5z"/></svg>;
    case "facebook":
      return <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={s}><path d="M13.5 22v-8H16l.5-3.5h-3V8.4c0-1 .3-1.7 1.8-1.7H17V3.6c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6v2.4H7V14h2.8v8z"/></svg>;
    case "instagram":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor"/></svg>;
    case "linkedin":
      return <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={s}><path d="M5 3.5A1.5 1.5 0 1 1 5 6.5 1.5 1.5 0 0 1 5 3.5zM3.7 8h2.6v12H3.7zM9 8h2.5v1.7c.4-.7 1.4-1.9 3.4-1.9 3 0 3.5 2 3.5 4.5V20h-2.6v-7c0-1.6-.5-2.4-1.8-2.4-1.4 0-2 1-2 2.4V20H9z"/></svg>;
    case "leaf":
      return <svg {...common}><path d="M21 3c-7 0-12 4-14 9s-1 8-1 8 3 0 8-1 9-7 9-14"/><path d="M5 20s4-9 16-17"/></svg>;
    case "check":
      return <svg {...common}><path d="M5 12l5 5L20 7"/></svg>;
    case "check-circle":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>;
    case "plus":
      return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus":
      return <svg {...common}><path d="M5 12h14"/></svg>;
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></svg>;
    case "heart":
      return <svg {...common}><path d="M12 21s-7-4.5-9.5-9.5C1 7.5 4 4 7.5 4c2 0 3.5 1 4.5 2.5C13 5 14.5 4 16.5 4 20 4 23 7.5 21.5 11.5 19 16.5 12 21 12 21z"/></svg>;
    case "tower":
      return <svg {...common}><path d="M5 21l3-12M19 21l-3-12M9 9h6"/><circle cx="12" cy="5" r="2"/><path d="M8 4c-1.2 1-1.2 3 0 4M16 4c1.2 1 1.2 3 0 4"/></svg>;
    case "fiber":
      return <svg {...common}><path d="M3 12c4-4 14 4 18 0"/><path d="M3 7c4-4 14 4 18 0"/><path d="M3 17c4-4 14 4 18 0"/></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>;
    case "alert":
      return <svg {...common}><path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17v.5"/></svg>;
    case "message":
      return <svg {...common}><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-5a8 8 0 1 1 16-3z"/></svg>;
    case "map":
      return <svg {...common}><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/></svg>;
    case "dollar":
      return <svg {...common}><path d="M12 3v18"/><path d="M17 7H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H7"/></svg>;
    case "briefcase":
      return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

/* ------------------ Button ------------------ */
function Button({ variant = "primary", icon = "arrow-right", iconBubble = true, children, onClick, type = "button" }) {
  const cls = `btn btn--${variant}`;
  return (
    <button type={type} className={cls} onClick={onClick}>
      <span>{children}</span>
      {icon && iconBubble && (
        <span className="arrow"><Icon name={icon} /></span>
      )}
      {icon && !iconBubble && <Icon name={icon} size={16} />}
    </button>
  );
}

/* ------------------ Nav ------------------ */
function Nav({ active = "Home" }) {
  const links = [
    { label: "Residential", href: "residential.html", match: ["Plans"] },
    { label: "Business",    href: "business.html",    match: ["Business"] },
    { label: "Coverage",    href: "coverage.html",    match: ["Coverage"] },
    { label: "About",       href: "about.html",       match: ["About"] },
    { label: "Support",     href: "support.html",     match: ["Support"] },
    { label: "Contact",     href: "contact.html",     match: ["Contact"] },
  ];
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="index.html" aria-label="PimComm — home">
          <img src={LOGO} alt="PimComm logo" />
        </a>
        <nav className="nav__links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`nav__link${l.match.includes(active) ? " active" : ""}`}
            >
              {l.label}
              {l.label === "Plans" && (
                <span className="nav__link-caret" aria-hidden="true">▾</span>
              )}
            </a>
          ))}
        </nav>
        <a href="sign-up.html" className="btn btn--primary" style={{ textDecoration: "none" }}>
          <span>Get Connected</span>
          <Icon name="arrow-right" size={16} />
        </a>
      </div>
    </header>
  );
}

/* ------------------ Value-prop strip ------------------ */
function ValuePropStrip() {
  const items = [
    { variant: "outline", icon: "gauge", title: "Reliable",        body: "Built for northern conditions with strong, consistent performance." },
    { variant: "blue",    icon: "users", title: "Affordable",       body: "Plans for every household and business." },
    { variant: "yellow",  icon: "home",  title: "Community-Owned",  body: "100% Indigenous-owned and operated. Revenue stays in our community." },
    { variant: "outline", icon: "pin",   title: "Local Support",    body: "Real people, local support, right here when you need us." },
  ];
  return (
    <div className="valueprop">
      <div className="container">
        <div className="valueprop__panel">
          {items.map((it) => (
            <div key={it.title} className="valueprop__cell">
              <span className={`medallion medallion--${it.variant}`}><Icon name={it.icon} /></span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------ Connecting strip (yellow band) ------------------ */
function ConnectingStrip() {
  const items = [
    { icon: "graduation",  title: "Connecting Education",  body: "Supporting students and online learning." },
    { icon: "stethoscope", title: "Connecting Healthcare", body: "Enabling access to care and resources." },
    { icon: "store",       title: "Connecting Business",   body: "Helping local businesses grow and thrive." },
    { icon: "users",       title: "Connecting Our Future", body: "Investing in technology for generations to come." },
  ];
  return (
    <section className="connecting">
      <div className="container connecting__grid">
        {items.map((it) => (
          <div key={it.title} className="connecting__cell">
            <span className="medallion medallion--navy" style={{ width: 44, height: 44 }}><Icon name={it.icon} size={20} /></span>
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

/* ------------------ Footer ------------------ */
function Footer() {
  return (
    <footer className="footer footer--dark">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="index.html" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <img src={LOGO} alt="PimComm logo" />
              <span className="footer__brand-name">PimComm</span>
            </a>
            <div className="footer__tag">Bridging the digital divide.</div>
            <div className="footer__phones">
              <div><Icon name="phone" size={14} /> 1-800-773-3336</div>
              <div><Icon name="phone" size={14} /> 1-204-975-3873</div>
            </div>
            <div className="footer__social">
              <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="#" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </div>
          <div className="footer__col">
            <h5>Services</h5>
            <ul>
              <li><a href="residential.html">Residential Plans</a></li>
              <li><a href="business.html">Business Services</a></li>
              <li><a href="coverage.html">Coverage</a></li>
              <li><a href="sign-up.html">Get Connected</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About PimComm</a></li>
              <li><a href="news.html">News &amp; Updates</a></li>
              <li><a href="support.html">Support</a></li>
              <li><a href="support.html#status">Network Status</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Acceptable Use Policy</a></li>
            </ul>
          </div>
          <div className="footer__newsletter">
            <h5>Newsletter</h5>
            <p>Service updates and community news, sent occasionally.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer__territory">
          PimComm operates on the traditional territory of Pimicikamak Cree Nation. We are a 100% Indigenous-owned and operated internet service provider.
        </div>
        <div className="footer__bottom">
          <span>© 2026 PimComm. All rights reserved.</span>
          <div className="right">
            <span>100% Indigenous-owned &amp; operated</span>
            <span className="seal"><Icon name="leaf" /></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------ Page hero (compact, used on every non-Home page) ------------------ */
function PageHero({ eyebrow, title, subtitle, tint = "navy", children }) {
  return (
    <section className={`pagehero pagehero--${tint}`}>
      <div className="container">
        {eyebrow && <span className="pagehero__eyebrow">{eyebrow}</span>}
        <h1 className="pagehero__title">{title}</h1>
        {subtitle && <p className="pagehero__subtitle">{subtitle}</p>}
        {children && <div className="pagehero__extra">{children}</div>}
      </div>
    </section>
  );
}

/* ------------------ FAQ accordion item (shared) ------------------ */
function FaqItem({ q, a, startOpen = false }) {
  const [open, setOpen] = React.useState(startOpen);
  return (
    <div className={`faq__item${open ? " faq__item--open" : ""}`}>
      <button className="faq__button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq__icon"><Icon name={open ? "minus" : "plus"} /></span>
      </button>
      <div className="faq__answer">{a}</div>
    </div>
  );
}

Object.assign(window, { Icon, Button, Nav, Footer, ValuePropStrip, ConnectingStrip, PageHero, FaqItem, LOGO });
