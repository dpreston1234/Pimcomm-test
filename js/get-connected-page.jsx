/* Get Connected — primary conversion page. */

function GetConnectedHero() {
  return (
    <PageHero
      eyebrow="Get connected"
      title="A few quick details and we'll set up your install."
      subtitle="Our team will call you within 2 business days to confirm your location and schedule installation. Prefer to call? 1-800-773-3336."
    />
  );
}

function SignupForm({ initialPlan }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState({
    name: "", phone: "", email: "",
    plan: initialPlan || "Pim 100",
    description: "", w3w: "", band: "", notes: ""
  });
  const update = (k) => (e) => setData({ ...data, [k]: e.target.value });

  if (submitted) {
    return (
      <section className="section section--cool">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="confirmation">
            <span className="confirmation__icon"><Icon name="check" /></span>
            <h2>Thanks, {data.name.split(" ")[0] || "neighbour"} — we got it.</h2>
            <p>
              We received your request and will call you at <strong>{data.phone || "your phone"}</strong> within 2 business days to confirm your installation. If you don't hear from us, give us a call at 1-800-773-3336.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap", justifyContent: "center" }}>
              <a href="index.html" className="btn btn--secondary" style={{ textDecoration: "none" }}>
                <span>Back to home</span><span className="arrow"><Icon name="arrow-right" /></span>
              </a>
              <a href="residential.html" className="btn btn--ghost" style={{ textDecoration: "none" }}>
                <span>See all plans</span><Icon name="arrow-right" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--cool">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 32, alignItems: "start" }}>
        <form className="formcard" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div className="formcard__grid">
            <div className="formcard__row">
              <div className="field">
                <label className="field__label field__label--req">Full name</label>
                <input className="field__input" value={data.name} onChange={update("name")} required placeholder="Sarah Cook" />
              </div>
              <div className="field">
                <label className="field__label field__label--req">Phone number</label>
                <input className="field__input" type="tel" value={data.phone} onChange={update("phone")} required placeholder="(204) 555-1234" />
                <div className="field__hint">We'll use this to confirm your installation before any work begins.</div>
              </div>
            </div>

            <div className="field">
              <label className="field__label">Email address <span style={{ fontWeight: 400, color: "var(--pc-fg-muted)" }}>(optional)</span></label>
              <input className="field__input" type="email" value={data.email} onChange={update("email")} placeholder="you@example.com" />
              <div className="field__hint">Used for account communications. We will not add you to marketing emails.</div>
            </div>

            <div className="field">
              <label className="field__label field__label--req">Choose a plan</label>
              <div className="radio-group">
                {[
                  { name: "Pim 50",   price: "$100/mo" },
                  { name: "Pim 100",  price: "$115/mo" },
                  { name: "Pim 250",  price: "$125/mo" },
                  { name: "Pim 500",  price: "$150/mo" },
                  { name: "Business", price: "Quote" },
                ].map((p) => (
                  <label key={p.name} className={`radio${data.plan === p.name ? " radio--checked" : ""}`}>
                    <input type="radio" name="plan" value={p.name} checked={data.plan === p.name} onChange={update("plan")} />
                    {p.name}
                    <small>{p.price}</small>
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label className="field__label field__label--req">Your location</label>
              <div className="field__hint">Click your home on the map, or search your What3Words address. No street address needed.</div>
              <div className="w3w-picker">
                <div className="w3w-picker__map"></div>
                <div className="w3w-picker__pin"><Icon name="pin" /></div>
                <div className="w3w-picker__search">
                  <Icon name="search" size={16} />
                  <input
                    type="text"
                    placeholder="///search a what3words address"
                    value={data.w3w}
                    onChange={update("w3w")}
                  />
                </div>
                <div className="w3w-picker__result">
                  <span className="dot"></span>
                  <span>///<strong>{data.w3w || "spruce.cabin.lake"}</strong></span>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="field__label field__label--req">Describe your home</label>
              <div className="field__hint">Helps our installer find you. Example: "Blue house, second from the corner, red truck in the driveway."</div>
              <textarea className="field__textarea" rows="3" value={data.description} onChange={update("description")} required />
            </div>

            <div className="formcard__row">
              <div className="field">
                <label className="field__label">Band membership number <span style={{ fontWeight: 400, color: "var(--pc-fg-muted)" }}>(optional)</span></label>
                <input className="field__input" value={data.band} onChange={update("band")} />
                <div className="field__hint">Helps us verify your address faster against band housing records.</div>
              </div>
              <div className="field">
                <label className="field__label">Anything else? <span style={{ fontWeight: 400, color: "var(--pc-fg-muted)" }}>(optional)</span></label>
                <input className="field__input" value={data.notes} onChange={update("notes")} placeholder="Access notes, dogs, gate code…" />
              </div>
            </div>

            <div className="form__submit">
              <div className="secondary-note">Prefer to call? <a href="tel:18007733336">1-800-773-3336</a> or <a href="tel:12049753873">1-204-975-3873</a></div>
              <button type="submit" className="btn btn--primary">
                <span>Send my request</span>
                <span className="arrow"><Icon name="arrow-right" /></span>
              </button>
            </div>
          </div>
        </form>

        <aside style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "white", borderRadius: "var(--pc-radius-lg)", border: "1px solid var(--pc-border)", padding: 24 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
              <span className="medallion medallion--blue" style={{ width: 36, height: 36 }}><Icon name="check" size={16} /></span>
              <div style={{ fontFamily: "var(--pc-font-display)", fontWeight: 700, fontSize: 16, color: "var(--pc-fg-strong)" }}>What happens next</div>
            </div>
            <ol style={{ padding: 0, listStyle: "none", margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              <Step n={1} title="We call to confirm" body="Within 2 business days, at the number you give us." />
              <Step n={2} title="We schedule your install" body="A local crew runs fibre to the side of your home." />
              <Step n={3} title="Plug in and go" body="We hand you the router and confirm your speed before we leave." />
            </ol>
          </div>
          <div style={{ background: "var(--pc-navy)", color: "white", borderRadius: "var(--pc-radius-lg)", padding: 24 }}>
            <div style={{ fontFamily: "var(--pc-font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--pc-yellow)" }}>Need help filling this out?</div>
            <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.8)" }}>Call us and we'll fill out the form together. We're a small team, in town, and we know the addresses.</div>
            <a href="tel:18007733336" style={{ display: "block", marginTop: 14, fontFamily: "var(--pc-font-display)", fontWeight: 800, fontSize: 22, color: "white", textDecoration: "none" }}>1-800-773-3336</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Step({ n, title, body }) {
  return (
    <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ width: 28, height: 28, borderRadius: 999, background: "var(--pc-yellow)", color: "var(--pc-navy)", fontFamily: "var(--pc-font-display)", fontWeight: 800, fontSize: 13, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{n}</span>
      <div>
        <div style={{ fontFamily: "var(--pc-font-display)", fontWeight: 700, fontSize: 14, color: "var(--pc-fg-strong)" }}>{title}</div>
        <div style={{ fontSize: 13, color: "var(--pc-fg-muted)", lineHeight: 1.45 }}>{body}</div>
      </div>
    </li>
  );
}

function getInitialPlan() {
  const m = window.location.search.match(/[?&]plan=([^&]+)/);
  if (!m) return null;
  return decodeURIComponent(m[1]);
}

Object.assign(window, { GetConnectedHero, SignupForm, getInitialPlan });
