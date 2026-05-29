/* PimComm — Single-page app router.
   Reads window.location.hash to render the correct page.
   Hash format: #/page-name  e.g. #/residential, #/about */

function getHashPage() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash.split("?")[0] || "home";
}

function PimCommApp() {
  const [page, setPage] = React.useState(getHashPage);

  React.useEffect(() => {
    const onHash = () => {
      setPage(getHashPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  switch (page) {
    case "residential":
    case "plans":
      return <MPlansPage />;
    case "business":
      return <MBusinessPage />;
    case "coverage":
      return <MCoveragePage />;
    case "about":
      return <MAboutPage />;
    case "support":
      return <MSupportPage />;
    case "contact":
      return <MContactPage />;
    case "news":
      return <MNewsPage />;
    case "get-connected":
    case "sign-up":
      return <MGetConnectedPage />;
    default:
      return <HomePage />;
  }
}

function HomePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [modal, setModal] = React.useState(null);

  const handleCheck = (addr) => {
    const a = (addr || address || "").trim();
    setModal({ address: a || "Your community", plans: ["Pim 100", "Pim 250", "Pim 500"] });
  };

  return (
    <React.Fragment>
      <MNav active="Home" onMenu={() => setMenuOpen(true)} />
      <main>
        <MHero />
        <MValueProps />
        <MTrustBar />
        <MPlans />
        <MBuilt />
        <MHowItWorks />
        <MAvailability address={address} setAddress={setAddress} onCheck={handleCheck} />
        <MNews />
        <MConnecting />
      </main>
      <MFooter />
      <MStickyCta />
      <MDrawer open={menuOpen} onClose={() => setMenuOpen(false)} active="Home" />
      {modal && <MAvailabilityModal data={modal} onClose={() => setModal(null)} />}
    </React.Fragment>
  );
}

Object.assign(window, { PimCommApp, HomePage });
