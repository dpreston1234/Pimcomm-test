/* News page sections. */

const NEWS_POSTS = [
  {
    cat: "Coverage update",
    date: "May 22, 2026",
    title: "Northern reserve roads now active — last-mile fibre live to 86 homes",
    excerpt: "Crews completed the next rollout segment ahead of schedule. Service is now live for residents on Spruce, Beaver, and Loon Roads.",
    photo: "assets/photography/speedtest-cross-lake.jpg",
  },
  {
    cat: "Community news",
    date: "May 14, 2026",
    title: "PimComm partners with Cross Lake Library on a digital-skills program",
    excerpt: "Six-week evening program covering cloud apps, online safety, and resume-building. Free for all community members.",
    photo: "assets/photography/education-online-class.jpg",
  },
  {
    cat: "Service announcement",
    date: "May 8, 2026",
    title: "Planned maintenance window: Wednesday May 22, 1am–3am CT",
    excerpt: "We're upgrading routing equipment at our Cross Lake POP. Expect a brief interruption of up to 15 minutes between 1am and 3am.",
    photo: "assets/photography/remote-work-video.jpg",
  },
  {
    cat: "Coverage update",
    date: "April 30, 2026",
    title: "We've crossed 1,400 homes connected — and we're still building",
    excerpt: "A quick look at the rollout numbers, what's coming next, and how to add your home to the queue.",
    photo: "assets/photography/hero-connecting-pimicikamak.jpg",
  },
  {
    cat: "Community news",
    date: "April 18, 2026",
    title: "Telehealth partnership goes live with Pimicikamak Health Centre",
    excerpt: "Reliable connections for virtual appointments and patient communication, with on-demand bandwidth during clinic hours.",
    photo: "assets/photography/healthcare-telehealth.jpg",
  },
  {
    cat: "Service announcement",
    date: "April 9, 2026",
    title: "New self-service portal coming this summer",
    excerpt: "Pay your bill, change plans, and check service status from your phone. We're partnering with GLDS BroadHub.",
    photo: "assets/photography/team-portrait.jpg",
  },
  {
    cat: "Community news",
    date: "March 28, 2026",
    title: "Business plans now available — PimBiz 150, 300, and 600",
    excerpt: "Symmetric speeds and local support for small businesses in Cross Lake. Request a quote in minutes.",
    photo: "assets/photography/business-beadwork-store.jpg",
  },
  {
    cat: "Coverage update",
    date: "March 14, 2026",
    title: "What's next: rollout map for spring and summer 2026",
    excerpt: "The streets and zones we're aiming to bring online over the next 90 days, plus how to flag yours for the queue.",
    photo: "assets/photography/door-knock-rep.jpg",
  },
  {
    cat: "Community news",
    date: "March 1, 2026",
    title: "Why we built our own ISP — a letter from PimComm leadership",
    excerpt: "Reflections on eight years of work, the partners who made it possible, and what comes next.",
    photo: "assets/photography/gamers-living-room.jpg",
  },
];

function NewsHero() {
  return (
    <PageHero
      eyebrow="News & updates"
      title="What's happening on the network."
      subtitle="Service announcements, coverage updates, and community news — straight from our team."
    />
  );
}

function NewsGrid() {
  const [page, setPage] = React.useState(1);
  return (
    <section className="section section--cool">
      <div className="container">
        <div className="news-grid">
          {NEWS_POSTS.map((p, i) => (
            <a key={i} href="#" className="news-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="news-card__photo" style={{ backgroundImage: `url(${p.photo})` }}>
                <span className="news-card__category">{p.cat}</span>
              </div>
              <div className="news-card__body">
                <div className="news-card__date">{p.date}</div>
                <h3 className="news-card__title">{p.title}</h3>
                <p className="news-card__excerpt">{p.excerpt}</p>
                <span className="news-card__more">
                  Read more <Icon name="arrow-right" />
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="pagination" aria-label="Pagination">
          <button onClick={() => setPage(1)} className={page === 1 ? "active" : ""}>1</button>
          <button onClick={() => setPage(2)} className={page === 2 ? "active" : ""}>2</button>
          <button onClick={() => setPage(3)} className={page === 3 ? "active" : ""}>3</button>
          <button onClick={() => setPage(Math.min(3, page + 1))} aria-label="Next page" style={{ width: "auto", padding: "0 16px" }}>
            Next <Icon name="arrow-right" size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

function NewsletterCta() {
  return (
    <section className="section section--snug">
      <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
        <span className="section__eyebrow">Stay in the loop</span>
        <h2 className="section__title">Service announcements, sent occasionally.</h2>
        <p style={{ color: "var(--pc-fg-muted)", margin: "16px auto 32px", maxWidth: 520, fontSize: 16, lineHeight: 1.6 }}>
          Coverage milestones, planned maintenance, and community programs — in your inbox once or twice a month. No marketing emails.
        </p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 10, maxWidth: 460, margin: "0 auto" }}>
          <input className="field__input" type="email" placeholder="you@example.com" required style={{ flex: 1, borderRadius: 999, padding: "14px 22px" }} />
          <button type="submit" className="btn btn--primary">
            <span>Subscribe</span>
            <span className="arrow"><Icon name="arrow-right" /></span>
          </button>
        </form>
      </div>
    </section>
  );
}

Object.assign(window, { NewsHero, NewsGrid, NewsletterCta, NEWS_POSTS });
