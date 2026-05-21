/* global React, Placeholder, PHOTOS */

const HOURS = [
  { day: "Maandag", time: "08:00 — 17:00" },
  { day: "Dinsdag", time: "08:00 — 17:00" },
  { day: "Woensdag", time: "08:00 — 17:00" },
  { day: "Donderdag", time: "08:00 — 17:00" },
  { day: "Vrijdag", time: "08:00 — 17:00" },
  { day: "Zaterdag", time: "09:00 — 17:00" },
  { day: "Zondag", time: "Gesloten", closed: true },
];

function OverOns() {
  const todayIdx = new Date().getDay(); // 0=Sun
  const mapIdx = todayIdx === 0 ? 6 : todayIdx - 1;
  return (
    <section className="over" id="over">
      <div className="wrap">
        <div style={{ marginBottom: 56, paddingBottom: 40, borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px 16px', marginBottom: 12 }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 400, letterSpacing: '-0.01em' }}>Aroma</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>· zelfstandig naamwoord · uit het Grieks</span>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px, 1.5vw, 22px)', fontStyle: 'italic', color: 'var(--ink-2)', marginBottom: 10 }}>
            "De geur van spijzen, dranken en genotmiddelen."
          </p>
          <p style={{ fontSize: 15, color: 'var(--ink-3)', maxWidth: 560 }}>
            Een reis door Griekenland begint met een geur. Die geur noemen wij Aroma. Onze droom is om de Griekse traditie rondom eten te verbinden met de Nederlandse eetcultuur — Griekse smaken, Nederlandse gewoonten, samen aan tafel.
          </p>
        </div>
        <div className="over-grid">
          <div className="over-photo">
            <Placeholder src={PHOTOS.founder} label="Foto · Chrysa achter de toonbank" />
          </div>
          <div className="over-text">
            <span className="eyebrow">Het verhaal achter Aroma</span>
            <h2>
              Derde generatie,<br/>eerste tafel in Gorinchem.
              <span className="en">Three generations of cooking, one table in Gorcum.</span>
            </h2>
            <p>
              Mijn naam is Chrysa. Ik ben geboren en opgegroeid in Katakolo — een klein kustdorpje
              aan de westkust van Griekenland, vlakbij het Oude Olympia. Een plek bekend om zijn
              vissers, zijn zon en de warme gastvrijheid van zijn bewoners.
            </p>
            <p>
              Ik ben de derde generatie van een familie in de horeca. Ons familierestaurant in
              Griekenland bestaat inmiddels drieënveertig jaar: begonnen door mijn grootouders,
              doorgegeven aan mijn moeder, en nu aan mij. Hopelijk zetten mijn dochters het ooit voort.
            </p>
            <p>
              De afgelopen twintig jaar mocht ik duizenden gasten ontvangen en verwennen met onze
              keuken. Zes jaar geleden bracht het leven mij naar Gorinchem, waar ik nu woon met mijn
              partner en onze twee kleine meiden. Bij Aroma doe ik wat ik altijd heb gedaan: koken,
              mensen ontvangen en iedereen samenbrengen aan tafel. Of je nu in Gorinchem woont of
              hier op bezoek bent — mijn tafel is voor jou.
            </p>
            <div className="over-signature">
              <span>— Chrysa</span>
              <span className="name-label">Eigenaar · Founder</span>
            </div>
            <div className="hours">
              {HOURS.map((h, i) => (
                <div key={h.day} className={`hours-item ${h.closed ? 'closed' : ''} ${i === mapIdx ? 'today' : ''}`}>
                  <span className="day">{h.day}</span>
                  <span className="time">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MENU_ITEMS = [
  { nl: "Pita Gyros", en: "Pork gyros wrap", desc: "Mals varkensvlees van de spies, tzatziki, tomaat, ui en frietjes in een warme pita.", price: "€ 9,50", tags: ["Signature"], photo: "gyros" },
  { nl: "Bougatsa", en: "Phyllo custard pastry", desc: "Krokant filodeeg met romige vanille-custard, kaneel en poedersuiker. Vers gebakken.", price: "€ 5,50", tags: ["Sweet"], photo: "bougatsa" },
  { nl: "Griekse Yoghurt Bowl", en: "Greek yoghurt bowl", desc: "Authentieke Griekse yoghurt met huisgemaakte granola, banaan, blauwe bessen en honing.", price: "€ 7,50", tags: ["Ontbijt", "Veg"], photo: "yogurtBowl" },
  { nl: "Pita Gegrilde Groenten", en: "Grilled vegetable pita", desc: "Geroosterde courgette, aubergine, paprika met feta-spread en verse munt.", price: "€ 9,00", tags: ["Veg", "Vegan opt."], photo: "grilledVeggies" },
  { nl: "Spanakopita", en: "Spinach &amp; feta pie", desc: "Hartige taart van filodeeg, jonge spinazie, feta en lente-ui — zoals oma het maakte.", price: "€ 6,50", tags: ["Veg"], photo: "spanakopita" },
  { nl: "Loukoumades", en: "Greek honey doughnuts", desc: "Warme honingbolletjes met kaneel en walnoot. Onze meest bestelde dessert.", price: "€ 5,00", tags: ["Signature", "Sweet"], photo: "loukoumades" },
];

function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Menu Highlights</span>
            <h2 style={{ marginTop: 14 }}>
              Zes favorieten,<br/>elke ochtend vers gemaakt.
            </h2>
          </div>
          <p className="lead">
            Alles zelfgemaakt — van hartige omelets, soepen en verse salades tot handgemaakte
            Griekse desserts. En voor koffieliefhebbers: van espresso tot een authentieke
            freddo of Griekse warme koffie. Grieks zoals het hoort.
          </p>
        </div>
        <div className="menu-grid">
          {MENU_ITEMS.map((m, i) => (
            <article key={i} className="menu-card">
              <div className="menu-card-photo">
                <Placeholder src={PHOTOS[m.photo]} label={`Foto · ${m.nl.toLowerCase()}`} />
              </div>
              <div className="menu-card-body">
                <div className="menu-card-head">
                  <h3 className="menu-card-title">
                    {m.nl}
                    <span className="en" dangerouslySetInnerHTML={{ __html: m.en }} />
                  </h3>
                  <span className="menu-card-price">{m.price}</span>
                </div>
                <p className="menu-card-desc" dangerouslySetInnerHTML={{ __html: m.desc }} />
                <div className="menu-card-tags">
                  {m.tags.map(t => (
                    <span key={t} className={`menu-tag ${t === 'Veg' || t === 'Vegan opt.' ? 'veg' : ''} ${t === 'Signature' ? 'hot' : ''}`}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="menu-footer">
          <a href="#menu-pdf" className="btn btn-primary">Bekijk volledig menu (PDF) →</a>
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { label: "Foto · interieur, raamzijde", span: "span-2c span-2r", src: "gal1" },
  { label: "Foto · pita gyros close-up", src: "gal2" },
  { label: "Foto · koffie & bougatsa", src: "gal3" },
  { label: "Foto · ontbijtbowl", src: "gal4" },
  { label: "Foto · loukoumades stapel", src: "gal5" },
  { label: "Foto · terras / pui", src: "gal6" },
  { label: "Foto · vers brood & feta", span: "span-2c", src: "gal7" },
  { label: "Foto · servies detail", src: "gal8" },
];

function Gallery() {
  return (
    <section className="gallery" id="sfeer">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Sfeer · Atmosphere</span>
            <h2 style={{ marginTop: 14 }}>Kom even kijken hoe het voelt.</h2>
          </div>
          <p className="lead">
            Houten tafels, ochtendlicht en de geur van versgebakken bougatsa. Een warme plek
            waar Aroma-herinneringen worden gemaakt — kom gerust een uur hangen.
          </p>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <div key={i} className={`gallery-item ${g.span || ''}`}>
              <Placeholder src={PHOTOS[g.src]} label={g.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { OverOns, Menu, Gallery });
