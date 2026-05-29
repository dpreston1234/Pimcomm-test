/* About page sections. */

function AboutHero() {
  return (
    <PageHero
      eyebrow="Our story"
      title="Built by the community. For the community."
      subtitle="PimComm is 100% Indigenous-owned and operated, delivering reliable fibre internet to Cross Lake. Our goal is simple: keep the connection — and the ownership — in our community."
    />
  );
}

function StoryAndTimeline() {
  return (
    <section className="section section--cool">
      <div className="container">
        <div className="story">
          <div className="story__copy">
            <span className="eyebrow-left">Our story</span>
            <h2>From a community belief to a working fibre network.</h2>
            <p>
              PimComm began with a belief: that fast, reliable internet should not be a privilege of southern Canada. For families in Pimicikamak Cree Nation, distance had always meant disconnection — and disconnection had real costs in education, healthcare, and opportunity.
            </p>
            <p>
              Over eight years, that belief turned into a fibre network: backbone, last-mile, equipment, billing, and a local team. Today PimComm is a fully community-owned ISP serving over 1,400 homes in Cross Lake, with revenue staying in the community to fund the next phase of build-out.
            </p>

            <div className="timeline">
              {[
                { year: "2018", title: "The belief",                body: "Community leadership commits to closing the digital divide. PimComm is incorporated as a Nation-owned company." },
                { year: "2021", title: "The Kici Sipi partnership", body: "Construction begins on a $27M dedicated fibre backbone, in partnership with the Kici Sipi consortium. Over 200 km of fibre is laid." },
                { year: "2023", title: "Last-mile to 1,400 homes",  body: "Fibre is delivered to the side of homes across Cross Lake. PimComm begins residential service, replacing satellite and DSL." },
                { year: "2026", title: "Full ISP operations",       body: "PimComm launches its public-facing brand and full ISP operations: residential and business plans, billing, support, and self-service signup." },
              ].map((t) => (
                <div key={t.year} className="timeline__item">
                  <div className="timeline__year">{t.year}</div>
                  <div>
                    <h4 className="timeline__title">{t.title}</h4>
                    <p className="timeline__body">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="story__photo photo-ph"
            style={{ backgroundImage: "url('assets/photography/team-group-2026.png')", backgroundPosition: "center 30%" }}
            role="img" aria-label="The PimComm team in Cross Lake, Manitoba"
          ></div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">Mission &amp; vision</span>
          <h2 className="section__title">What we are doing, and why.</h2>
        </div>
        <div className="mvgrid">
          <div className="mvpanel">
            <div className="mvpanel__label">Our mission</div>
            <h3>Deliver reliable internet that is built by the community, owned by the community, and accountable to the community.</h3>
            <p>Every household and every business in Cross Lake should have the connection it needs to participate fully in education, healthcare, work, and the economy — at a price they can afford.</p>
          </div>
          <div className="mvpanel mvpanel--accent">
            <div className="mvpanel__label">Our vision</div>
            <h3>A Northern Manitoba where the digital divide is closed for good — by the people who live here.</h3>
            <p>We measure success not just in customers connected, but in the long-term value that stays in the community: jobs, infrastructure, training, and the next generation of community-owned utilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { icon: "shield", title: "Reliability",        body: "A network built for Northern conditions. Dedicated fibre, no shared cable, no seasonal slowdowns." },
    { icon: "users",  title: "Accessibility",      body: "Plans that fit every household and business. No long-term contracts. Local support in plain language." },
    { icon: "heart",  title: "Community ownership", body: "100% owned and operated by Pimicikamak Cree Nation. Revenue stays in the community." },
    { icon: "spark",  title: "Opportunity",        body: "Education, healthcare, business, and creative work — built on a connection that doesn't drop." },
  ];
  return (
    <section className="section section--cool">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section__eyebrow">What we stand for</span>
          <h2 className="section__title">Four pillars that guide every decision.</h2>
        </div>
        <div className="pillars">
          {items.map((it) => (
            <div className="pillar" key={it.title}>
              <span className="pillar__icon"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Network() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" }}>
        <div
          className="story__photo photo-ph"
          style={{ minHeight: 420, backgroundImage: "url('assets/photography/door-knock-rep.jpg')" }}
          role="img" aria-label="PimComm fibre infrastructure"
        ></div>
        <div>
          <span className="eyebrow-left">The network</span>
          <h2 className="h2-left">200 kilometres of dedicated fibre, built right here.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--pc-fg)", margin: "0 0 16px" }}>
            PimComm runs on 200 km of dedicated backbone fibre built through the Kici Sipi partnership — and last-mile fibre delivered directly to homes. There is no shared cable in our network, no seasonal slowdowns, and no contention with non-PimComm traffic.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--pc-fg)", margin: 0 }}>
            That's why the speed we quote is the speed you get — peak hours included.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 28 }}>
            <Stat n="200 km" l="Dedicated backbone fibre" />
            <Stat n="1,400+" l="Homes connected" />
            <Stat n="100%"   l="Indigenous-owned" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--pc-font-display)", fontWeight: 800, fontSize: 32, color: "var(--pc-navy)", letterSpacing: "-0.02em" }}>{n}</div>
      <div style={{ fontSize: 13, color: "var(--pc-fg-muted)", marginTop: 4, lineHeight: 1.4 }}>{l}</div>
    </div>
  );
}

function Territory() {
  return (
    <section className="section--snug" style={{ padding: "72px 0", background: "var(--pc-navy)", color: "white" }}>
      <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
        <span style={{ display: "inline-block", fontFamily: "var(--pc-font-display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--pc-yellow)", marginBottom: 16 }}>Territory acknowledgement</span>
        <p style={{ fontFamily: "var(--pc-font-display)", fontWeight: 600, fontSize: 22, lineHeight: 1.5, color: "white", margin: 0, letterSpacing: "-0.005em" }}>
          PimComm operates on the traditional territory of Pimicikamak Cree Nation, in what is now known as Cross Lake, Manitoba. As a Nation-owned company, we are committed to keeping ownership, opportunity, and long-term value within the communities we serve.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { AboutHero, StoryAndTimeline, MissionVision, Pillars, Network, Territory });
