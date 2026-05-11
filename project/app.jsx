/* global React, ReactDOM, Nav, MobileMenu, HeroFull, HeroSplit, HeroAsym, OverOns, Menu, Gallery, Reviews, Location, Instagram, Footer, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor */
const { useState, useEffect } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "olive",
  "fonts": "fraunces",
  "hero": "full"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-palette', t.palette);
    document.body.setAttribute('data-fonts', t.fonts);
  }, [t.palette, t.fonts]);

  // smooth scroll on hash anchors
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href.length < 2) return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const Hero = t.hero === 'split' ? HeroSplit : t.hero === 'asym' ? HeroAsym : HeroFull;

  return (
    <React.Fragment>
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <OverOns />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
        <Instagram />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks · Aroma">
        <TweakSection title="Kleurpalet" />
        <TweakRadio
          label="Palet" value={t.palette}
          options={[
            { value: 'olive', label: 'Olijfgaard' },
            { value: 'taverna', label: 'Taverna' },
            { value: 'aegean', label: 'Egeïsch' },
            { value: 'olive-dark', label: 'Avond' },
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakSection title="Hero" />
        <TweakRadio
          label="Stijl" value={t.hero}
          options={[
            { value: 'full', label: 'Fullscreen' },
            { value: 'split', label: 'Split' },
            { value: 'asym', label: 'Tegels' },
          ]}
          onChange={(v) => setTweak('hero', v)}
        />
        <TweakSection title="Typografie" />
        <TweakRadio
          label="Letters" value={t.fonts}
          options={[
            { value: 'fraunces', label: 'Fraunces + Manrope' },
            { value: 'cormorant', label: 'Cormorant + DM Sans' },
            { value: 'playfair', label: 'Playfair + Inter' },
          ]}
          onChange={(v) => setTweak('fonts', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
