/* Contact page sections — dedicated contact page for the static site. */

function ContactPageHero() {
  return (
    <PageHero
      eyebrow="Contact"
      title="Get in touch with PimComm."
      subtitle="Call us, visit our office in Cross Lake, or send a message. Real people answer — and we'll get back to you within one business day."
    />
  );
}

function ContactMethods() {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="section section--snug">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-card">
            <span className="contact-card__icon" style={{ background: "var(--pc-red-50)", color: "var(--pc-red)" }}><Icon name="phone" /></span>
            <h3>Call us</h3>
            <p>Our team answers in person Monday to Friday, 8am to 6pm. Outside hours, leave a message and we'll call back the next business day.</p>
            <div className="contact-card__phones">
              <a href="tel:18007733336">1-800-773-3336</a>
              <a href="tel:12049753873">1-204-975-3873</a>
            </div>
            <div className="contact-card__hours">Monday–Friday · 8am–6pm CT</div>
          </div>

          <div className="contact-card">
            <span className="contact-card__icon" style={{ background: "var(--pc-blue-50)", color: "var(--pc-blue)" }}><Icon name="pin" /></span>
            <h3>Visit our office</h3>
            <p>Drop by to pay a bill, ask about service, or talk through a business build with our team.</p>
            <div style={{ fontFamily: "var(--pc-font-display)", fontWeight: 600, fontSize: 15, color: "var(--pc-fg-strong)", lineHeight: 1.5, marginBottom: 10 }}>
              PimComm Community Office<br />
              Cross Lake, Manitoba<br />
              Pimicikamak Cree Nation
            </div>
            <div className="contact-card__hours">Walk-ins Monday–Friday · 9am–5pm CT</div>
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

function ContactSignupCta() {
  return (
    <section className="section section--snug">
      <div className="container">
        <div className="split split--reverse" style={{ background: "var(--pc-navy)", borderRadius: "var(--pc-radius-xl)", overflow: "hidden" }}>
          <div className="split__left" style={{ padding: "44px 44px" }}>
            <span className="section__eyebrow" style={{ color: "var(--pc-yellow)", textAlign: "left", display: "block", margin: "0 0 12px" }}>Ready to connect?</span>
            <h2 style={{ fontFamily: "var(--pc-font-display)", fontWeight: 700, fontSize: 30, lineHeight: 1.2, color: "white", margin: "0 0 14px" }}>Skip the call — start your sign-up online.</h2>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.6, margin: "0 0 24px", maxWidth: 460 }}>
              Tell us your plan and where you live. Our team confirms availability and schedules your install within 2 business days.
            </p>
            <a href="sign-up.html" className="btn btn--primary" style={{ textDecoration: "none" }}>
              <span>Get Connected</span>
              <span className="arrow"><Icon name="arrow-right" /></span>
            </a>
          </div>
          <div className="split__photo" style={{ minHeight: 320 }}></div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContactPageHero, ContactMethods, ContactSignupCta });
