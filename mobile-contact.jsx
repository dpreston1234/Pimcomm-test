/* Mobile contact page. Depends on components.jsx (Icon) and mobile-pages.jsx (MobilePage, MPageHero). */

function MContactPage() {
  const [sent, setSent] = React.useState(false);
  return (
    <MobilePage active="Contact">
      <MPageHero
        eyebrow="Contact"
        title="Get in touch with PimComm."
        subtitle="Call us, visit our office in Cross Lake, or send a message. Real people answer — we'll get back to you within one business day."
      />

      <section className="m-section m-section--cool">
        <div className="m-container">
          <div className="m-contact">
            <span className="m-contact__icon m-contact__icon--red"><Icon name="phone" /></span>
            <h3>Call us</h3>
            <p>Our team answers in person Mon–Fri, 8am–6pm. Outside hours, leave a message and we'll call back the next business day.</p>
            <a href="tel:18007733336" className="m-contact__phone big">1-800-773-3336</a>
            <a href="tel:12049753873" className="m-contact__phone">1-204-975-3873</a>
            <div className="m-contact__hours">Monday–Friday · 8am–6pm CT</div>
          </div>

          <div className="m-contact">
            <span className="m-contact__icon" style={{ background: "var(--pc-blue-50)", color: "var(--pc-blue)" }}><Icon name="pin" /></span>
            <h3>Visit our office</h3>
            <p>Drop by to pay a bill, ask about service, or talk through a business build with our team.</p>
            <div style={{ fontFamily: "var(--pc-font-display)", fontWeight: 600, fontSize: 15, color: "var(--pc-fg-strong)", lineHeight: 1.5, marginBottom: 8 }}>
              PimComm Community Office<br />
              Cross Lake, Manitoba<br />
              Pimicikamak Cree Nation
            </div>
            <div className="m-contact__hours">Walk-ins Monday–Friday · 9am–5pm CT</div>
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
    </MobilePage>
  );
}

Object.assign(window, { MContactPage });
