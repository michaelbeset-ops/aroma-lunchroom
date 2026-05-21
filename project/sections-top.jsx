/* global React, Placeholder, PHOTOS */
const { useState: useStateTop, useEffect: useEffectTop } = React;

function Nav({ onOpenMenu, onReserve }) {
  const [scrolled, setScrolled] = useStateTop(false);
  useEffectTop(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-brand">
        <span className="nav-brand-mark"><img src="assets/logo.png" alt="Aroma" /></span>
        <span className="nav-brand-text">
          <span className="nav-brand-name">Aroma</span>
          <span className="nav-brand-sub">Lunchroom · Gorcum</span>
        </span>
      </a>
      <nav className="nav-links">
        <a href="#over">Over</a>
        <a href="#menu">Menu</a>
        <a href="#sfeer">Sfeer</a>
        <a href="#reviews">Reviews</a>
        <a href="#locatie">Locatie</a>
      </nav>
      <div className="nav-cta">
        <a href="#menu" className="btn btn-ghost">Bekijk menu</a>
        <a href="#reserveer" className="btn btn-primary always-show" onClick={onReserve}>Reserveren</a>
        <button className="nav-hamburger" onClick={onOpenMenu} aria-label="Open menu"><span></span></button>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <div className="mobile-menu-top">
        <a href="#top" className="nav-brand" onClick={onClose}>
          <span className="nav-brand-mark"><img src="assets/logo.png" alt="Aroma" /></span>
          <span className="nav-brand-text">
            <span className="nav-brand-name">Aroma</span>
            <span className="nav-brand-sub">Lunchroom · Gorcum</span>
          </span>
        </a>
        <button className="nav-hamburger" onClick={onClose} aria-label="Sluit menu" style={{ display: 'inline-flex' }}>×</button>
      </div>
      <div className="mobile-menu-links">
        <a href="#over" onClick={onClose}>Over</a>
        <a href="#menu" onClick={onClose}>Menu</a>
        <a href="#sfeer" onClick={onClose}>Sfeer</a>
        <a href="#reviews" onClick={onClose}>Reviews</a>
        <a href="#locatie" onClick={onClose}>Locatie</a>
      </div>
      <div className="mobile-menu-foot">
        <a href="tel:+31000000000" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Reserveer een tafel</a>
      </div>
    </div>
  );
}

function HeroFull() {
  return (
    <section className="hero hero-full" id="top">
      <div className="hero-media">
        <Placeholder src={PHOTOS.heroInterior} label="Foto · interieur met houten tafels, ochtendlicht" />
      </div>
      <div className="hero-content">
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.85)' }}>
          <span style={{ background: 'rgba(255,255,255,0.85)' }}></span>
          Sinds november 2025 · Arkelstraat 33
        </span>
        <h1 style={{ marginTop: 20 }}>
          De geur van<br/>Griekenland in<br/>Hartje Gorcum.
          <span className="en">A taste of Greece — breakfast, lunch &amp; coffee.</span>
        </h1>
        <p className="hero-sub">
          Van zelfgemaakte ontbijten en handgemaakte desserts tot authentieke Griekse koffie —
          gemaakt met liefde door Chrysa. Welkom aan haar tafel in hartje Gorinchem.
        </p>
        <div className="hero-cta-row">
          <a href="#reserveer" className="btn btn-primary">Reserveer een tafel →</a>
          <a href="#menu" className="btn btn-ghost on-dark">Bekijk het menu</a>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="label">Geopend</span>
            <span className="val">Ma–Za · 08:00 — 17:00</span>
          </div>
          <div className="hero-meta-item">
            <span className="label">Adres</span>
            <span className="val">Arkelstraat 33, Gorinchem</span>
          </div>
          <div className="hero-meta-item">
            <span className="label">Reviews</span>
            <span className="val">★ 5.0 · 33 Google reviews</span>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section className="hero hero-split" id="top">
      <div className="hero-split-text">
        <span className="eyebrow">Sinds nov. 2025 · Arkelstraat 33</span>
        <h1 style={{ marginTop: 24 }}>
          De geur van Griekenland in Hartje Gorcum.
          <span className="en">A taste of Greece — breakfast, lunch &amp; coffee.</span>
        </h1>
        <p className="hero-sub">
          Van zelfgemaakte ontbijten en handgemaakte desserts tot authentieke Griekse koffie —
          gemaakt met liefde door Chrysa.
        </p>
        <div className="hero-cta-row">
          <a href="#reserveer" className="btn btn-primary">Reserveer een tafel →</a>
          <a href="#menu" className="btn btn-ghost">Bekijk het menu</a>
        </div>
      </div>
      <div className="hero-split-media">
        <Placeholder src={PHOTOS.heroFood} label="Foto · signature gerecht of interieurdetail" />
      </div>
    </section>
  );
}

function HeroAsym() {
  return (
    <section className="hero hero-asym" id="top">
      <div>
        <span className="eyebrow">Sinds nov. 2025 · Arkelstraat 33</span>
        <h1 style={{ marginTop: 24 }}>
          Een stukje Griekenland in Hartje Gorcum.
          <span className="en">A taste of Greece, every morning.</span>
        </h1>
        <p className="hero-sub">
          Van zelfgemaakte ontbijten en handgemaakte desserts tot authentieke Griekse koffie —
          gemaakt met liefde door Chrysa.
        </p>
        <div className="hero-cta-row">
          <a href="#reserveer" className="btn btn-primary">Reserveer een tafel →</a>
          <a href="#menu" className="btn btn-ghost">Bekijk het menu</a>
        </div>
      </div>
      <div className="hero-asym-tiles">
        <Placeholder src={PHOTOS.heroTile1} label="Foto · interieur" />
        <Placeholder src={PHOTOS.heroTile2} label="Foto · pita gyros" />
        <Placeholder src={PHOTOS.heroTile3} label="Foto · bougatsa" />
      </div>
    </section>
  );
}

Object.assign(window, { Nav, MobileMenu, HeroFull, HeroSplit, HeroAsym });
