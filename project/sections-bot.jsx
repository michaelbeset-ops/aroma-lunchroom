/* global React, Placeholder, Stars, PHOTOS */

const REVIEWS = [
  {
    quote: "Heerlijke lunch, heerlijke bougatsa en pita gyros. We komen al jaren in Griekenland en de bougatsa was van hoge kwaliteit. Vriendelijke bediening.",
    name: "Henk Boluijt",
    meta: "Google review · 3 maanden geleden",
  },
  {
    quote: "Nieuwe plek in Gorinchem is echt een aanrader! Lekker eten voor weinig geld. Pita Gyros is echt een aanrader en voor vega/vegan is de Pita gegrilde groenten erg lekker. Kindvriendelijk met speelhoekje bij de trap.",
    name: "Rianneke",
    meta: "Google review · 5 maanden geleden",
  },
  {
    quote: "Aroma lunchroom is zeker aan te raden :) Heel lekker Grieks eten aan een voordelige prijs met vriendelijke bediening. We aten een lekkere lunch voor maar €13 per persoon.",
    name: "Lien Claes",
    meta: "Google review · 4 maanden geleden",
  },
  {
    quote: "Heel gezellig! Lekker eten en een goeie sfeer. Zeker een aanrader.",
    name: "Demi Bleijenberg",
    meta: "Google review · 5 maanden geleden",
  },
  {
    quote: "Twee maal hier geweest om te lunchen en als halve Griek ben ik ontzettend blij dat deze plek er is. De freddo cappuccino is top en de bougatsa is echt heerlijk. Absoluut een aanrader!",
    name: "Petros",
    meta: "Google review · 4 maanden geleden",
  },
  {
    quote: "Lekkere Cappuccino met Bougatsa op. Heerlijk! Ziet er simpel uit, maar was heel smaakvol.",
    name: "Jenny Van Asch",
    meta: "Google review · 5 maanden geleden",
  },
  {
    quote: "Lekker doen! Heerlijke echte Illy koffie ook. Dan weet je wat lekkere koffie is. Neem vooral iets lekkers bij de koffie — vers en vriendelijk.",
    name: "Astrid Kemp - van Rijn",
    meta: "Google review · 3 maanden geleden",
  },
  {
    quote: "Hele gezellige en leuke plek in hartje Gorkum, vriendelijk personeel en heerlijk eten. Zeker waard om hier eens iets lekkers te komen eten!",
    name: "Lotte van Asch",
    meta: "Google review · 5 maanden geleden",
  },
  {
    quote: "Heerlijk eten, lieve mensen en een speelhoekje. Top dus!",
    name: "Lianne Alblas",
    meta: "Google review · 5 maanden geleden",
  },
  {
    quote: "Super lekker en vriendelijke bediening.",
    name: "Marie-jeanne Samyn",
    meta: "Google review · recent",
  },
  {
    quote: "Heerlijk gebak en veel lekkere lunchgerechten.",
    name: "Maartje Maas",
    meta: "Google review · recent",
  },
  {
    quote: "Goede kwaliteit eten, lekker gekruid en gezellig. Aanrader.",
    name: "Hugo Beker",
    meta: "Google review · recent",
  },
];

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Wat gasten zeggen</span>
            <h2 style={{ marginTop: 14 }}>
              ★ 5,0 op Google.<br/>
              <span style={{ color: 'var(--ink-3)', fontSize: '0.6em' }}>33 reviews — en groeiende.</span>
            </h2>
          </div>
          <p className="lead">
            Echte reacties van gasten die langs zijn geweest. Kom je ook proeven?
          </p>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <article key={i} className="review-card">
              <Stars n={5} />
              <p className="review-quote">{r.quote}</p>
              <div className="review-foot">
                <span className="review-name">{r.name}</span>
                <span className="review-meta">{r.meta}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="reviews-footer">
          <strong>5,0 / 5</strong> op Google · gebaseerd op 33 reviews
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="location" id="locatie">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Locatie &amp; Contact</span>
            <h2 style={{ marginTop: 14 }}>Plan je bezoek.</h2>
          </div>
          <p className="lead">
            We zitten in de Arkelstraat — een steenworp van het centrum van Gorinchem.
            Parkeren in de buurt, terras voor de deur.
          </p>
        </div>
        <div className="location-grid">
          <div className="location-map" aria-label="Kaart van Aroma Lunchroom">
            <div className="map-streets"></div>
            <div className="map-river"></div>
            <div className="map-pin">
              <div className="map-pin-label">Aroma · Arkelstraat 33</div>
              <div className="map-pin-dot"></div>
            </div>
            <div className="map-overlay-label">Gorinchem · Hartje Gorcum</div>
          </div>
          <div className="location-info" id="reserveer">
            <h2 style={{ fontSize: '34px', marginBottom: 8 }}>Aroma Lunchroom</h2>
            <p style={{ color: 'var(--ink-2)', marginBottom: 20 }}>
              <span className="open-dot" style={{ color: '#2e7d32', fontWeight: 600 }}>Nu geopend</span>
              <span style={{ color: 'var(--ink-3)' }}> · Sluit om 17:00</span>
            </p>
            <div className="contact-list">
              <div className="contact-row">
                <span className="contact-label">Adres</span>
                <span className="contact-val">Arkelstraat 33, 4201 KA Gorinchem</span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Telefoon</span>
                <span className="contact-val"><a href="tel:+31000000000">+31 (0)183 — 00 00 00</a></span>
              </div>
              <div className="contact-row">
                <span className="contact-label">E-mail</span>
                <span className="contact-val"><a href="mailto:hallo@aromalunchroom.nl">hallo@aromalunchroom.nl</a></span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Openingstijden</span>
                <span className="contact-val hours-mini">
                  Ma–Vr&nbsp;&nbsp;08:00 — 17:00<br/>
                  Zaterdag&nbsp;&nbsp;09:00 — 17:00<br/>
                  Zondag&nbsp;&nbsp;<span style={{ color: 'var(--ink-3)' }}>Gesloten</span>
                </span>
              </div>
              <div className="contact-row">
                <span className="contact-label">Goed om te weten</span>
                <span className="contact-val" style={{ fontSize: 14, color: 'var(--ink-2)' }}>
                  Wifi · Kindermenu · Honden welkom · Terras
                </span>
              </div>
            </div>
            <div className="socials" aria-label="Social media">
              <a href="https://www.instagram.com/aromalunchroom/" className="social-btn" aria-label="Instagram" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587025765053" className="social-btn" aria-label="Facebook" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.5-2 2-2h2V2.2C16.6 2.1 15.4 2 14.3 2 11.7 2 10 3.7 10 6.9V10H7v4h3v8h3z"/></svg>
              </a>
              <a href="https://www.google.com/search?sca_esv=c18721e5b7b34c1a&sxsrf=ANbL-n5GlNj7qOUMfp2ePul6_m3VIiHCWg:1780055797424&q=aroma+lunchroom&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObMkIjTX6LDKlvXRafoAq5URweI7k0hEAaWsJmIBGAoBz56oiNsadH6Ck04zAlamY5c7FU8%3D&uds=ALYpb_n_EM_B_ErB9c5NX69H4GoWVWHlVzce4ttQBIIF4RZ6pKxlbtJt4Ui1MkLMdlGa2hObSHlP_AA6TeyDLvl-M-5szXcFaYIu2JMj4Tj989gL8-hrqS4&sa=X&ved=2ahUKEwjInPHLuN6UAxX-gf0HHSAXO-MQ3PALegQIFRAE&biw=1920&bih=911&dpr=1" className="social-btn" aria-label="Google" target="_blank" rel="noopener">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 11v3h5c-.4 2-2.3 3.5-5 3.5-3 0-5.5-2.5-5.5-5.5S9 6.5 12 6.5c1.4 0 2.6.5 3.5 1.4l2.2-2.2C16 4.2 14.1 3.5 12 3.5 7.3 3.5 3.5 7.3 3.5 12s3.8 8.5 8.5 8.5c4.9 0 8.2-3.4 8.2-8.3 0-.6-.1-1.1-.2-1.7H12z"/></svg>
              </a>
            </div>
            <div className="location-cta">
              <a href="tel:+31000000000" className="btn btn-primary">Bel om te reserveren →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const INSTA_TILES = [
  { label: "Foto · gyros van boven", src: "ig1" },
  { label: "Foto · koffie & dessert", src: "ig2" },
  { label: "Foto · vers fruit ontbijt", src: "ig3" },
  { label: "Foto · vitrine bougatsa", src: "ig4" },
  { label: "Foto · terras zonnig", src: "ig5" },
  { label: "Foto · team in de keuken", src: "ig6" },
];

function Instagram() {
  return (
    <section className="insta" id="instagram">
      <div className="wrap">
        <div className="insta-head">
          <span className="eyebrow center">Volg ons</span>
          <div className="insta-handle">
            <a href="https://www.instagram.com/aromalunchroom/" target="_blank" rel="noopener">@aromalunchroom</a>
          </div>
        </div>
        <div className="insta-strip">
          {INSTA_TILES.map((tile, i) => (
            <a key={i} href="https://www.instagram.com/aromalunchroom/" target="_blank" rel="noopener" className="insta-tile">
              <Placeholder src={PHOTOS[tile.src]} label={tile.label} />
              <span className="insta-tile-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-mark"><img src="assets/logo.png" alt="Aroma" /></div>
            <div className="footer-tagline">
              De geur van Griekenland in hartje Gorcum.
              <span className="en">Breakfast · Lunch · Coffee · Desserts</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Bezoek</h4>
            <ul>
              <li>Arkelstraat 33</li>
              <li>4201 KA Gorinchem</li>
              <li><a href="#locatie">Route plannen</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Open</h4>
            <ul>
              <li>Ma–Vr · 08:00–17:00</li>
              <li>Zaterdag · 09:00–17:00</li>
              <li>Zondag · gesloten</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Volg</h4>
            <ul>
              <li><a href="https://www.instagram.com/aromalunchroom/" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61587025765053" target="_blank" rel="noopener">Facebook</a></li>
              <li><a href="https://www.google.com/search?sca_esv=c18721e5b7b34c1a&sxsrf=ANbL-n5GlNj7qOUMfp2ePul6_m3VIiHCWg:1780055797424&q=aroma+lunchroom&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObMkIjTX6LDKlvXRafoAq5URweI7k0hEAaWsJmIBGAoBz56oiNsadH6Ck04zAlamY5c7FU8%3D&uds=ALYpb_n_EM_B_ErB9c5NX69H4GoWVWHlVzce4ttQBIIF4RZ6pKxlbtJt4Ui1MkLMdlGa2hObSHlP_AA6TeyDLvl-M-5szXcFaYIu2JMj4Tj989gL8-hrqS4&sa=X&ved=2ahUKEwjInPHLuN6UAxX-gf0HHSAXO-MQ3PALegQIFRAE&biw=1920&bih=911&dpr=1" target="_blank" rel="noopener">Google Reviews</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Aroma Lunchroom · KVK 96809957</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Reviews, Location, Instagram, Footer });
