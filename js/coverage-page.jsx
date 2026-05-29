/* Coverage page sections. */

function CoverageHero() {
  return (
    <PageHero
      eyebrow="Service area"
      title="Serving Cross Lake and surrounding area."
      subtitle="PimComm is actively connecting homes across the Pimicikamak Cree Nation territory. Check below to see if your home is ready, or submit your details and we'll confirm within 2 business days."
    />
  );
}

function CoverageMap() {
  return (
    <section className="section section--snug">
      <div className="container">
        <div className="coverage-map coverage-map--svg">
          <CrossLakeMap />
          <div className="coverage-map__callout">
            <span className="dot"></span>
            <div>
              <strong>North Cross Lake</strong>
              <small>Fibre ready — service is live</small>
            </div>
          </div>
          <div className="coverage-map__compass">
            <div className="coverage-map__compass-needle">N</div>
          </div>
          <div className="coverage-map__legend">
            <span className="leg-active">Fibre ready</span>
            <span className="leg-soon">Coming soon</span>
            <span className="leg-water">Water</span>
          </div>
          <div className="coverage-map__attribution">Stylized map · Cross Lake, Manitoba</div>
        </div>
        <p style={{ fontSize: 13, color: "var(--pc-fg-muted)", marginTop: 12, textAlign: "center" }}>
          The map above is a stylized placeholder showing the north section of Cross Lake currently served — a live Mapbox embed will replace it at launch. Coverage updates monthly as last-mile fibre rolls out.
        </p>
      </div>
    </section>
  );
}

function AvailabilityCheck() {
  const [submitted, setSubmitted] = React.useState(false);
  const [data, setData] = React.useState({ name: "", phone: "", location: "" });
  const update = (k) => (e) => setData({ ...data, [k]: e.target.value });

  return (
    <section className="section section--cool">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <span className="eyebrow-left">Don't see your area?</span>
          <h2 className="h2-left">Tell us where you live — we'll check.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--pc-fg)", margin: "0 0 18px", maxWidth: 480 }}>
            If your home isn't on the map yet, send us your details. Our team will check our rollout queue and call you within 2 business days. If you're already in the active zone, we'll skip straight to scheduling your install.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {["No address required — describe your home or share What3Words","Two-day turnaround on availability checks","We add your home to the rollout queue if not yet served"].map((t) => (
              <li key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15, color: "var(--pc-fg-strong)" }}>
                <span style={{ color: "var(--pc-red)", marginTop: 2 }}><Icon name="check-circle" size={18} /></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {submitted ? (
            <div className="confirmation" style={{ padding: "40px 32px" }}>
              <span className="confirmation__icon"><Icon name="check" /></span>
              <h2>We got your request.</h2>
              <p>Our team will contact you at <strong>{data.phone}</strong> within 2 business days to confirm availability at your location.</p>
            </div>
          ) : (
            <form className="formcard" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="formcard__grid">
                <div className="field">
                  <label className="field__label field__label--req">Your name</label>
                  <input className="field__input" value={data.name} onChange={update("name")} required />
                </div>
                <div className="field">
                  <label className="field__label field__label--req">Phone number</label>
                  <input className="field__input" type="tel" value={data.phone} onChange={update("phone")} required />
                </div>
                <div className="field">
                  <label className="field__label field__label--req">What3Words address or home description</label>
                  <textarea className="field__textarea" rows="3" value={data.location} onChange={update("location")} required placeholder="///spruce.cabin.lake  —  or  —  Blue house at the end of Main Rd, red truck out front" />
                </div>
                <button type="submit" className="btn btn--primary" style={{ alignSelf: "flex-start" }}>
                  <span>Check my address</span>
                  <span className="arrow"><Icon name="arrow-right" /></span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Rollout() {
  return (
    <section className="section">
      <div className="container">
        <div className="rollout">
          <div>
            <span style={{ fontFamily: "var(--pc-font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pc-yellow)" }}>Rollout progress · May 2026</span>
            <h3 style={{ marginTop: 10 }}>We've connected over 1,400 homes in Cross Lake — and we're still expanding.</h3>
            <p>
              If your home is not yet connected, we'll add it to our rollout queue. We update this map monthly as new streets and zones come online. Want a heads-up when we reach your area? Submit your address using the form above.
            </p>
          </div>
          <div className="rollout__stat">
            <span className="rollout__stat-num">1,400<sub style={{ fontSize: 36, color: "var(--pc-yellow)" }}>+</sub></span>
            <span className="rollout__stat-label">homes connected</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CoverageHero, CoverageMap, AvailabilityCheck, Rollout });
