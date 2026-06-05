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
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>· ontbijt · koffie · lunch</span>
          </div>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(17px, 1.5vw, 22px)', fontStyle: 'italic', color: 'var(--ink-2)', marginBottom: 10 }}>
            "Een stukje Griekenland, gemaakt met liefde."
          </p>
          <p style={{ fontSize: 15, color: 'var(--ink-3)', maxWidth: 560 }}>
            Aroma is de nieuwe ontbijt-, koffie- en lunchspot van Chrysa. Geboren in Griekenland, inmiddels vijf jaar in Nederland en nu samen met haar partner en twee dochters neergestreken in onze binnenstad.
          </p>
        </div>
        <div className="over-grid">
          <div className="over-photo">
            <Placeholder src={PHOTOS.founder} label="Foto · Chrysa achter de toonbank" />
          </div>
          <div className="over-text">
            <span className="eyebrow">Het verhaal achter Aroma</span>
            <h2>
              Een gastvrije plek<br/>waar je je thuis voelt.
            </h2>
            <p>
              Wij zijn een gastvrije plek voor koffie, een rustige lunch of iets lekkers. Bij Aroma worden Nederlandse eetmomenten gemixt met Griekse smaken.
            </p>
            <p>
              Chrysa werkt zoveel mogelijk met Griekse ingrediënten: extra vierge olijfolie uit eigen productie, honing, yoghurt, Griekse kazen en nog veel meer. Het grootste deel van het eten bereidt ze zelf, met heel veel liefde voor de keuken waar ze mee is opgegroeid.
            </p>
            <p>
              Op de kaart staan vegetarische en vegan opties, halal keuzes en genoeg lekkers voor kinderen. De zaak is kind- én hondvriendelijk, dus ga vooral met het hele gezin langs! Je kunt er terecht voor ontbijt, lunch, koffie, zoetigheden en hartige bladerdeegspecialiteiten.
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

const MENU_DATA = [
  {
    id: 'ontbijt', label: 'Ontbijt',
    sections: [
      {
        title: 'Ontbijtplank',
        items: [
          { name: 'Ontbijtplank', desc: 'Koffie, thee of cappuccino · croissant · pistolet met ham-kaas-ei', price: '€ 9,50' },
          { name: 'Ontbijtplank Compleet', desc: 'Koffie, thee of cappuccino · croissant · pistolet met ham-kaas-ei · griekse yoghurt met granola, fruit en honing · mini jus d\'orange', price: '€ 12,90' },
          { name: 'Croissant', desc: 'Optioneel: jam · echte boter · nutella (+€ 0,50 p.st.)', price: '€ 1,50' },
        ]
      },
      {
        title: 'Authentieke Griekse Yoghurt',
        items: [
          { name: 'Granola & tropisch fruit', desc: 'Griekse honing, granola, tropisch fruit', price: '€ 7,50' },
          { name: 'Honing & walnoten', desc: 'Griekse honing, walnoten, gedroogd fruit', price: '€ 7,50' },
        ]
      },
      {
        title: 'Bagels',
        note: 'Vanaf 09:00 tot 16:00',
        items: [
          { name: 'Warme Griekse Bagel', desc: 'Gebakken ei, roomkaas, rucola, gegrilde paprika', price: '€ 7,50' },
          { name: 'Warme Griekse Bagel Fetakaas', desc: 'Tomaat, olijven, fetakaas, ui, pittige smeerkaas', price: '€ 7,90' },
        ]
      },
      {
        title: 'Eat Like a Greek!',
        items: [
          { name: 'Griekse Ontbijtplank', desc: 'Koffie/thee/cappuccino · bladerdeeg (feta of spinazie) · griekse yoghurt met walnoten en honing · mini zelfgemaakte citroenlimonade', price: '€ 14,00' },
          { name: 'Bougatsa', desc: 'Bladerdeegflap met vanille custardvulling', price: '€ 4,00' },
          { name: 'Tsoureki — Griekse yoghurt, honing & walnoten', desc: 'Kruidig briocheachtig paasbrood', price: '€ 5,00' },
          { name: 'Tsoureki — Nutella & gekarameliseerde hazelnoten', desc: 'Kruidig briocheachtig paasbrood', price: '€ 5,00' },
        ]
      },
    ]
  },
  {
    id: 'broodjes', label: 'Broodjes & Tosti',
    sections: [
      {
        title: 'Tosti',
        note: 'Vanaf 09:00 tot 16:00 · wit of bruin brood · geserveerd met groene salade en mayonaise',
        items: [
          { name: 'Tosti Kaas of Ham', desc: '', price: '€ 6,00' },
          { name: 'Tosti Ham en Kaas', desc: '', price: '€ 6,50' },
          { name: 'Tosti Griekse Stijl', desc: 'Gravierakaas, mortadella, tomaat en komkommer', price: '€ 7,00' },
        ]
      },
      {
        title: 'Pita Tosti',
        note: 'Vanaf 09:00 tot 16:00 · warm pita broodje · geserveerd met griekse salade',
        items: [
          { name: 'Pita Tosti Kaas of Ham', desc: '', price: '€ 4,50' },
          { name: 'Pita Tosti Ham en Kaas', desc: '', price: '€ 5,00' },
          { name: 'Pita Tosti Vegetarian', desc: 'Kaas, champignons, paprika, gekarameliseerde uien', price: '€ 6,00' },
        ]
      },
      {
        title: 'Uitsmijters',
        note: 'Vanaf 09:00 tot 16:00 · twee gebakken eieren op warm mais brood · groene salade · extra ei +€ 1,50',
        items: [
          { name: 'Uitsmijter Klassiek', desc: 'Ham en kaas', price: '€ 7,00' },
          { name: 'Uitsmijter Speciaal', desc: 'Griekse kaas, mortadella en champignons', price: '€ 8,00' },
          { name: 'Uitsmijter Griekse Stijl', desc: 'Gekarameliseerde cherrytomaatjes en fetakaas', price: '€ 8,50' },
        ]
      },
      {
        title: 'Broodjes',
        note: 'Vanaf 10:00 tot 16:00',
        items: [
          { name: 'Broodje Gezond', desc: 'Ham, kaas, tomaat, komkommer, ei, mayonaise · pistolet wit', price: '€ 4,90' },
          { name: 'Broodje Homemade Tonijnsalade', desc: 'Tomaat, komkommer, rucola · pistolet wit', price: '€ 5,90' },
          { name: 'Broodje Griekse Salade', desc: 'Olijvenpasta, fetakaas, tomaat, komkommer, ui, olijven · Grieks flatbread', price: '€ 7,90' },
          { name: 'Broodje Mediterrane', desc: 'Pesto, graviera kaas, mortadella, zongedroogde tomaat · Grieks flatbread', price: '€ 7,90' },
        ]
      },
      {
        title: 'Warme Broodjes',
        note: 'Vanaf 10:00 tot 16:00 · geserveerd met groene salade',
        items: [
          { name: 'Broodje Homemade Kipfilet Speciaal', desc: 'Champignons, mozarella, gemarineerde uien, homemade saus · meergranen triangel', price: '€ 10,20' },
          { name: 'Italiaanse Bol', desc: 'Kaas, chorizo, salami, wortels, rode paprika, jalapeños · wit', price: '€ 9,50' },
        ]
      },
      {
        title: "Luxe Warme Pita's",
        note: 'Vanaf 10:00 tot 16:00 · geserveerd met groene salade',
        items: [
          { name: 'Pita met Kip Gyros', desc: 'Tomaat, tzatziki, gemarineerde uien', price: '€ 8,90' },
          { name: 'Pita met Talagani Kaas', desc: 'Vijgenjam, gekarameliseerde uien, tomaten', price: '€ 8,90' },
          { name: 'Pita Vegetarian', desc: 'Olijvenpasta, gegrilde groenten (champignons, paprika, aubergine)', price: '€ 8,90' },
        ]
      },
    ]
  },
  {
    id: 'hartig', label: 'Hartig Grieks',
    sections: [
      {
        title: 'Salades',
        items: [
          { name: 'Griekse Boerensal', desc: 'Tomaat, komkommer, ui, fetakaas, olijven, kappertje, paprika', price: '€ 10,50' },
        ]
      },
      {
        title: 'Soep van de dag',
        note: 'Vanaf 10:00 tot 16:00 · geserveerd met pitabrood',
        items: [
          { name: 'Soep van de dag', desc: 'Zelfgemaakt — vraag naar de soep van vandaag', price: 'v.a. € 5,00' },
        ]
      },
      {
        title: 'Borrelhapjes',
        note: 'Vanaf 10:00 tot 16:00',
        items: [
          { name: 'Grieks Plateau — 1 persoon', desc: 'Tzatziki, pittige smeerkaas, diverse kaas & vleeswaren, zwarte en groene olijven, pitabrood', price: '€ 12,00' },
          { name: 'Grieks Plateau — 2 personen', desc: 'Tzatziki, pittige smeerkaas, diverse kaas & vleeswaren, zwarte en groene olijven, pitabrood', price: '€ 20,00' },
        ]
      },
      {
        title: 'Hartige Bladerdeegspecialiteiten',
        items: [
          { name: 'Tiropita', desc: 'Bladerdeeg met fetakaasvulling', price: '€ 3,30 / € 5,50' },
          { name: 'Bladerdeeg met Griekse kaas & honing', desc: 'Zachte Griekse kaas met honing', price: '€ 4,00' },
          { name: 'Spanakopita', desc: 'Bladerdeeg met spinazievulling', price: '€ 4,00' },
          { name: 'Bladerdeeg Spinazie & Fetakaas', desc: 'Combinatie spinazie en fetakaasvulling', price: '€ 3,30 / € 5,50' },
        ]
      },
    ]
  },
  {
    id: 'zoet', label: 'Zoetigheden',
    sections: [
      {
        title: 'Zelfgemaakte Zoetigheden',
        note: 'Neem gerust een kijkje in de vitrine',
        items: [
          { name: 'Brownies', desc: '', price: '€ 3,50' },
          { name: 'Arretjes Cake', desc: '', price: '€ 2,20' },
          { name: 'Mini Lemon Taart', desc: '', price: '€ 2,00' },
          { name: 'Mini Red Velvet Cake', desc: '', price: '€ 2,00' },
          { name: 'Baklava / Kadaifi', desc: 'Grieks traditioneel zoet gebak', price: '€ 4,50' },
          { name: 'Chocolatina', desc: 'Zachte chocolade taart', price: '€ 4,50' },
          { name: 'Oranje Gebakje', desc: '', price: '€ 2,50' },
          { name: 'Pavlova', desc: 'Meringue, verse aardbeien, rood fruit siroop', price: '€ 2,50' },
          { name: 'Taart / Cookies / Cakes van de dag', desc: 'Vraag naar het aanbod van vandaag', price: 'v.a. € 2,50' },
        ]
      },
    ]
  },
  {
    id: 'dranken', label: 'Koffie & Dranken',
    sections: [
      {
        title: 'Koffie',
        items: [
          { name: 'Koffie', desc: '', price: '€ 3,30' },
          { name: 'Espresso', desc: '', price: '€ 3,30' },
          { name: 'Cappuccino', desc: '', price: '€ 3,70' },
          { name: 'Flat White', desc: '', price: '€ 4,70' },
          { name: 'Latte Macchiato', desc: '', price: '€ 4,20' },
          { name: 'Aroma Koffie', desc: 'Latte macchiato, amaretto syrup, slagroom, gekarameliseerde hazelnoten', price: '€ 6,00' },
        ]
      },
      {
        title: 'ICED Coffee',
        note: 'Met of zonder suiker',
        items: [
          { name: 'Freddo Cappuccino', desc: '', price: 'klein € 3,70 / groot € 5,50' },
          { name: 'Freddo Espresso', desc: '', price: 'klein € 3,30 / groot € 5,30' },
          { name: 'Frappe', desc: '', price: '€ 4,50' },
          { name: 'Aroma Iced', desc: 'Iced cappuccino, amaretto syrup, slagroom, gekarameliseerde hazelnoten', price: '€ 6,00' },
        ]
      },
      {
        title: 'Thee',
        items: [
          { name: 'Thee (diverse smaken)', desc: '', price: '€ 3,10' },
          { name: 'Verse Muntthee / Verse Gemberthee', desc: '', price: '€ 4,00' },
          { name: 'Verse Griekse Thee', desc: 'Diverse smaken', price: '€ 3,60' },
          { name: 'Ice Tea', desc: '', price: '€ 3,30' },
        ]
      },
      {
        title: 'Chocomel',
        items: [
          { name: 'Chocomel', desc: '', price: '€ 3,30' },
          { name: 'Chocomel met slagroom', desc: '', price: '€ 4,30' },
          { name: 'Warme Chocomel', desc: '', price: '€ 3,50' },
          { name: 'Warme Chocomel met slagroom', desc: '', price: '€ 4,50' },
          { name: 'Aroma Chocomel', desc: 'Warme of iced · chocomelk, amaretto syrup, slagroom, gekarameliseerde hazelnoten', price: '€ 6,00' },
        ]
      },
      {
        title: 'Vruchtensap & Frisdranken',
        items: [
          { name: "Verse Jus d'Orange", desc: '', price: '€ 5,00' },
          { name: 'Zelfgemaakte Citroenlimonade', desc: '', price: '€ 5,00' },
          { name: 'Smoothie Bosvruchten', desc: '', price: '€ 6,00' },
          { name: 'Cola / Cola Zero', desc: '', price: '€ 3,30' },
          { name: 'Sprite Zero / Fanta Orange', desc: '', price: '€ 3,30' },
          { name: 'Appelsap / Fristi', desc: '', price: '€ 3,30' },
          { name: 'Tonic', desc: '', price: '€ 3,30' },
          { name: 'Mineraalwater / Bruisend Water', desc: '', price: '€ 3,30' },
          { name: 'Griekse Cassis', desc: '', price: '€ 3,60' },
        ]
      },
      {
        title: 'Extras',
        items: [
          { name: 'Decaf', desc: '', price: '+€ 1,00' },
          { name: 'Shot Espresso', desc: '', price: '+€ 2,00' },
          { name: 'Slagroom', desc: '', price: '+€ 1,00' },
          { name: 'Vegan Melk', desc: '', price: '+€ 1,00' },
        ]
      },
    ]
  },
  {
    id: 'kids', label: 'Kids',
    sections: [
      {
        title: 'Slok Slok Slok…',
        items: [
          { name: "Verse Jus d'Orange", desc: '', price: '€ 3,50' },
          { name: 'Framboos Limonade', desc: '', price: '€ 2,50' },
          { name: 'Babyccino', desc: '', price: '€ 4,00' },
          { name: 'Iced Babyccino', desc: '', price: '€ 4,00' },
        ]
      },
      {
        title: 'Hap Hap Hap…',
        items: [
          { name: 'Bakje Gezond met groenten', desc: '', price: '€ 3,50' },
          { name: 'Kinder Tosti Ham Kaas', desc: '', price: '€ 4,00' },
          { name: 'Kinder Griekse Paasbrood', desc: 'Met nutella en marshmallows', price: '€ 3,00' },
          { name: 'Yoghurt met honing en hagelslag', desc: '', price: '€ 3,50' },
          { name: 'Bougatsa Custard Taart', desc: '', price: '€ 2,50' },
          { name: 'Mini Kip Gyros', desc: 'Met tzatziki, tomaat en uien', price: '€ 4,00' },
        ]
      },
      {
        title: 'Eat Like a Greek Kid',
        items: [
          { name: 'Eat Like a Greek Kid — Compleet', desc: 'Framboos limonade · groentenhapjes · tosti kaas of mini kip gyros · tsoureki met nutella', price: '€ 11,50' },
        ]
      },
    ]
  },
];

function Menu() {
  const [activeTab, setActiveTab] = React.useState('ontbijt');
  const tab = MENU_DATA.find(t => t.id === activeTab);

  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div>
            <span className="eyebrow">Onze menukaart</span>
            <h2 style={{ marginTop: 14 }}>Alles vers, alles met liefde.</h2>
          </div>
          <p className="lead">
            Van Griekse yoghurt en versgebakken bagels tot hartige pita's en zelfgemaakte zoetigheden.
            Alles op de kaart is ook 'to go' te bestellen — gewoon aan de kassa betalen.
          </p>
        </div>

        <div className="menu-tabs" role="tablist">
          {MENU_DATA.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              className={'menu-tab-btn' + (activeTab === t.id ? ' active' : '')}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="menu-tab-content">
          {tab.sections.map((section, si) => (
            <div key={si} className="menu-section">
              <div className="menu-section-header">
                <h3 className="menu-section-title">{section.title}</h3>
                {section.note && <p className="menu-section-note">{section.note}</p>}
              </div>
              <div className="menu-item-list">
                {section.items.map((item, ii) => (
                  <div key={ii} className="menu-item-row">
                    <div className="menu-item-main">
                      <span className="menu-item-name">{item.name}</span>
                      {item.desc && <span className="menu-item-desc">{item.desc}</span>}
                    </div>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-allergen">
          <p><strong>Allergieën?</strong> Laat het ons gerust weten, we helpen je graag verder.</p>
          <p>🌿 vegetarisch &nbsp;·&nbsp; 🌱 veganistisch: geen dierlijke producten &nbsp;·&nbsp; Wifi: <strong>aromalunchroom</strong> · wachtwoord: <strong>aroma2025</strong></p>
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
