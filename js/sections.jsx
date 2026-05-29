/* PimComm marketing site — page sections. Depends on components.jsx. */

const R = (id, path) => (window.__resources && window.__resources[id]) || path;
const HERO_BG = R("heroBg", "assets/photography/hero-connecting-pimicikamak.jpg");

function Hero({ onCheck }) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="hero__overlay" />
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              High-speed<br />internet for our<br />
              <em>community<span className="period">.</span></em>
            </h1>
            <p className="hero__subtitle">
              Reliable. Affordable. Community-owned.<br />Built for Northern Manitoba.
            </p>
            <div className="hero__ctas">
              <a href="sign-up.html" className="btn btn--primary" style={{ textDecoration: "none" }}>
                <span>Get Connected</span>
                <span className="arrow"><Icon name="arrow-right" /></span>
              </a>
              <a href="residential.html" className="btn btn--on-photo" style={{ textDecoration: "none" }}>
                <span>See plans</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Trust bar ----- */
function TrustBar() {
  const items = [
    { num: "200 km", label: "Dedicated fibre backbone" },
    { num: "1,400+", label: "Homes connected in Cross Lake" },
    { num: "100%",   label: "Indigenous-owned and operated" },
  ];
  return (
    <section className="trustbar">
      <div className="container trustbar__row">
        {items.map((it) => (
          <div key={it.num} className="trustbar__cell">
            <div>
              <div className="trustbar__num">{it.num}</div>
              <div className="trustbar__label">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----- How it works ----- */
function HowItWorks() {
  const steps = [
    { n: 1, icon: "map",   title: "Check your area",   body: "Confirm fibre is live where you live, or add your home to the rollout queue.", href: "coverage.html", linkText: "Check coverage" },
    { n: 2, icon: "home",  title: "Pick your plan",    body: "Four residential plans, three business plans. Month-to-month, no contracts.",  href: "residential.html",    linkText: "See plans" },
    { n: 3, icon: "wifi",  title: "Get connected",     body: "Submit your details. We call within 2 business days and schedule your install.", href: "sign-up.html", linkText: "Start signup" },
  ];
  return (
    <section className="section section--warm">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">How it works</span>
          <h2 className="section__title">Three steps from interested to online.</h2>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <span className="step__num">{s.n}</span>
              <span className="step__icon"><Icon name={s.icon} /></span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a className="step__link" href={s.href}>{s.linkText} <Icon name="arrow-right" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- News strip (3 most recent) ----- */
function NewsStrip() {
  const posts = [
    { cat: "Coverage update",     date: "May 22, 2026", title: "Northern reserve roads now active",                       excerpt: "Crews finished ahead of schedule. 86 new homes are live this week.", photo: R("news1", "assets/photography/speedtest-cross-lake.jpg") },
    { cat: "Community news",      date: "May 14, 2026", title: "PimComm partners with Cross Lake Library on digital skills", excerpt: "Six-week evening program covering cloud apps, online safety, and resume-building.", photo: R("news2", "assets/photography/education-online-class.jpg") },
    { cat: "Service announcement", date: "May 8, 2026", title: "Planned maintenance: Wed May 22, 1–3am CT",               excerpt: "Routing equipment upgrade. Expect a brief interruption.", photo: R("news3", "assets/photography/remote-work-video.jpg") },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, maxWidth: "none" }}>
          <div>
            <span className="section__eyebrow" style={{ textAlign: "left", display: "block", margin: 0 }}>From the network</span>
            <h2 className="section__title" style={{ textAlign: "left", marginTop: 8 }}>Latest news &amp; updates</h2>
          </div>
          <a href="news.html" className="btn btn--ghost" style={{ textDecoration: "none" }}>
            <span>See all updates</span>
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
        <div className="news-grid">
          {posts.map((p, i) => (
            <a key={i} href="news.html" className="news-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="news-card__photo" style={{ backgroundImage: `url(${p.photo})` }}>
                <span className="news-card__category">{p.cat}</span>
              </div>
              <div className="news-card__body">
                <div className="news-card__date">{p.date}</div>
                <h3 className="news-card__title">{p.title}</h3>
                <p className="news-card__excerpt">{p.excerpt}</p>
                <span className="news-card__more">Read more <Icon name="arrow-right" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Plan card ----- */
function PlanCard({ name, color, mbps, headline, devicesLabel, useIcons, deviceIcons, price }) {
  return (
    <article className="plan">
      <div className={`plan__head plan__head--${color}`}>{name}</div>
      <div className="plan__body">
        <div>
          <span className="plan__speed">{mbps}</span>
          <span className="plan__unit">Mbps</span>
        </div>
        <div className={`plan__tag plan__tag--strong-${color}`}>{headline}</div>
        <div className="plan__icons">
          {useIcons.map((n, i) => <Icon key={i} name={n} />)}
        </div>
        <div className="plan__use">{describeUse(name)}</div>
        <div className="plan__devices">
          {deviceIcons.map((n, i) => <Icon key={i} name={n} />)}
        </div>
        <div className="plan__device-count">{devicesLabel}</div>
      </div>
      <div className={`plan__price plan__price--${color}`}>
        <div className="plan__price-val">${price}<small>/month</small></div>
        <div className="plan__price-note">+ taxes</div>
      </div>
    </article>
  );
}

function describeUse(name) {
  switch (name) {
    case "Pim 50":  return "Browsing, email, social media";
    case "Pim 100": return "Streaming, work, video calls";
    case "Pim 250": return "Multiple streams, gaming, home office";
    case "Pim 500": return "Everything at once, fastest speeds";
    default: return "";
  }
}

function PlanGrid() {
  const plans = [
    { name: "Pim 50",  color: "blue", mbps: 50,  headline: "Best for light use",     devicesLabel: "1–2 devices",  useIcons: ["globe","mail"],                     deviceIcons: ["smartphone","laptop"],            price: "100",  install: "$100 installation" },
    { name: "Pim 100", color: "red",  mbps: 100, headline: "Most households",        devicesLabel: "3–5 devices",  useIcons: ["play","play","controller"],         deviceIcons: ["smartphone","laptop"],            price: "115",  install: "$150 installation" },
    { name: "Pim 250", color: "blue", mbps: 250, headline: "Busy homes",             devicesLabel: "5–10 devices", useIcons: ["play","controller","cloud"],        deviceIcons: ["smartphone","laptop","monitor"],  price: "125",  install: "$150 installation" },
    { name: "Pim 500", color: "red",  mbps: 500, headline: "Maximum performance",    devicesLabel: "10+ devices",  useIcons: ["play","controller","cloud","home"], deviceIcons: ["smartphone","monitor","laptop"],  price: "150",  install: "$150 installation" },
  ];
  return (
    <section className="section">
      <div className="container">
        <span className="section__eyebrow">Choose the plan that works for your home</span>
        <h2 className="section__title">Internet plans for every need<span className="section__title-underline"></span></h2>
        <div className="plan-grid">
          {plans.map((p) => <PlanCard key={p.name} {...p} />)}
        </div>
        <div className="plan-compare-row">
          <a href="residential.html" className="btn btn--ghost" style={{ textDecoration: "none" }}>
            <span>Compare all plans</span>
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----- Built for the North + Availability split ----- */
function BuiltAndAvailability({ address, setAddress, onCheck }) {
  return (
    <section className="split">
      <div className="split__left">
        <span className="eyebrow" style={{ color: "var(--pc-red)" }}>Built for the North</span>
        <h2>Connecting our community.<br />Building our future.</h2>
        <span className="accent" style={{ background: "var(--pc-red)" }}></span>
        <p>
          PimComm is 100% Indigenous-owned and operated. We're proud to deliver high-speed internet
          that connects us to what matters most—education, healthcare, business, and each other.
        </p>
        <div><a href="about.html" className="btn btn--secondary" style={{ textDecoration: "none" }}>
          <span>About PimComm</span>
          <span className="arrow"><Icon name="arrow-right" /></span>
        </a></div>
      </div>
      <div className="split__photo" role="img" aria-label="Boreal lake at sunset"></div>
    </section>
  );
}

function AvailabilityBlock({ address, setAddress, onCheck }) {
  return (
    <section className="availability">
      <div className="container availability__row">
        <div className="availability__col">
          <span className="eyebrow">Let's get you connected</span>
          <h2>Check availability in your area today.</h2>
          <p style={{ color: "var(--pc-fg-muted)", marginTop: -8, maxWidth: 420 }}>
            Enter your address and we'll show you the plans available where you live.
          </p>
        </div>
        <div className="availability__col">
          <form className="availability__form" onSubmit={(e) => { e.preventDefault(); onCheck && onCheck(address); }}>
            <div className="availability__input">
              <Icon name="pin" />
              <input
                type="text"
                placeholder="Enter your address or community"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Button variant="primary" icon="arrow-right" type="submit">Check availability</Button>
          </form>
          <div className="availability__contact">
            <span className="ico"><Icon name="phone" /></span>
            <div>
              <span className="lab">Questions? Call us</span>
              <span className="num">(204) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, PlanGrid, BuiltAndAvailability, AvailabilityBlock, PlanCard, TrustBar, HowItWorks, NewsStrip });
