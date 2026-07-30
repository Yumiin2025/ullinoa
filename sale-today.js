// ============================================================
//  🌞 SUMMER SALE — TÄGLICH UPDATEN
//
//  Morgens wenn das Angebot bekannt ist:
//  1. Felder unten anpassen
//  2. git commit -am "Sale: [Produktname]" → in ~30 Sek. live
//
//  Bild: in assets/images/ ablegen, Pfad in image_de / image_en eintragen
// ============================================================

window.SALE_TODAY = {

  // ── DATUM & PRODUKT ────────────────────────────────────────
  date:       "2026-08-01",

  product_de: "RINGANAdea",
  product_en: "RINGANAdea",

  // Produktseite im Shop (für Strip-Button + "Zum Produkt" im Card)
  shop_url:   "https://priller.ringana.com/produkt/ringanadea/",

  // ── BILD ──────────────────────────────────────────────────
  // Datei in assets/images/ ablegen, dann hier eintragen:
  image_de: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_DRINKS_RINGANAdea.jpg",
  image_en: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_DRINKS_RINGANAdea.jpg", // kein EN-Bild vorhanden, DE wird verwendet
  image_fallback: "assets/images/dea.jpg",

  // ── KURZBESCHREIBUNG (Strip-Untertitel, 1 Zeile) ──────────
  desc_de: "Bewusste Leichtigkeit · Zitronenverbene, Hibiskus, Kaktusfeige · 12-Tages-Kur",
  desc_en: "Conscious lightness · Lemon verbena, hibiscus, cactus fig · 12-day cure",

  // ── TAGLINE (große Headline im Deal-Card) ─────────────────
  tagline_de: "Nimm's leicht, wenn's dir das Leben schwer macht",
  tagline_en: "Take it easy, even when life doesn't",

  // ── ANWENDUNG ─────────────────────────────────────────────
  howto_de: "30 ml in 250–500 ml Wasser gießen, kurz schütteln, frisch trinken. Kein Abmessen, kein Aufwand.",
  howto_en: "Pour one bottle (30 ml) into 250–500 ml of water, shake briefly, and drink fresh. That's it.",

  // ── VORTEILE (max. 4) ─────────────────────────────────────
  benefits_de: [
    "Chrom trägt zur Aufrechterhaltung eines normalen Blutzuckerspiegels bei",
    "Vitamin C unterstützt einen normalen Energiestoffwechsel",
    "Zink hilft bei einem normalen Kohlenhydrat- und Fettsäurestoffwechsel",
    "Ballaststoffe aus Guarkernfaser und FOS sorgen für ein angenehmeres Sättigungsgefühl"
  ],
  benefits_en: [
    "Chromium contributes to maintaining normal blood sugar levels",
    "Vitamin C supports normal energy metabolism",
    "Zinc supports normal carbohydrate and fatty acid metabolism",
    "Fibre from guar bean and FOS supports a comfortable feeling of satiety"
  ],

  // ── MEHR INFOS LINK ───────────────────────────────────────
  more_url: "https://priller.ringana.com/blog/conscious-lightness/",
  more_label_de: "Mehr zum Konzept der bewussten Leichtigkeit",
  more_label_en: "Learn more about conscious lightness",

  // ── WHATSAPP PRE-FILL TEXT ────────────────────────────────
  wa_text_de: "Hallo%20Noa%2C%20ich%20hab%20eine%20Frage%20zum%20RINGANAdea%20im%20Summer%20Sale%20%F0%9F%8C%BF",
  wa_text_en: "Hi%20Noa%2C%20I%20have%20a%20question%20about%20RINGANAdea%20in%20the%20Summer%20Sale%20%F0%9F%8C%BF"

};
