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
        <div className="over-grid">
          <div className="over-photo">
            <Placeholder src={PHOTOS.founder} label="Foto · Chrysa achter de toonbank" />
          </div>
          <div className="over-text">
            <span className="eyebrow">Over Aroma</span>
            <h2>
              Een stukje Griekenland, gemaakt met liefde.
              <span className="en">A little piece of Greece, made with love.</span>
            </h2>
            <p>
              Aroma opende in november 2025 zijn deuren in de Arkelstraat. Eigenaar Chrysa
              brengt de smaken van haar Griekse keuken naar Gorinchem: authentieke yoghurt
              met granola en vers fruit, knapperige bougatsa, gyros pita en handgemaakte
              loukoumades. Alles zoals oma het maakte — geduldig, eerlijk en met veel olijfolie.
            </p>
            <p>
              We zijn een lichte, ongedwongen plek voor je ochtendkoffie, een rustige lunch
              of zomaar even langs. Kinderen zijn welkom, en je hond mag mee naar binnen.
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
            Een kleine kaart, eerlijke prijzen en alles zelfgemaakt. Van ontbijt tot dessert —
            Grieks zoals het hoort.
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
            Houten tafels, ochtendlicht en de geur van versgebakken bougatsa. Een plek waar
            je gerust een uur blijft hangen.
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
