// ============================================================
//  🌞 SUMMER SALE — TÄGLICH UPDATEN
//
//  Morgens wenn das Angebot bekannt ist:
//  1. Felder unten anpassen
//  2. git commit -am "Sale: [Produktname]" → in ~30 Sek. live
//
//  Mehrere Produkte: products[] Array füllen
//  Ein Produkt: products[] leer lassen, alle anderen Felder füllen
// ============================================================

window.SALE_TODAY = {

  // ── DATUM & PRODUKT ────────────────────────────────────────
  date:       "2026-08-01", // bis 02.08.2026 24 Uhr
  date_end:   "2026-08-02",

  product_de: "3 Skincare-Highlights",
  product_en: "3 Skincare Highlights",

  shop_url:   "https://priller.ringana.com/angebote/",

  // ── BILD (nur bei Einzel-Produkt nötig) ───────────────────
  image_de:       null,
  image_en:       null,
  image_fallback: null,

  // ── KURZBESCHREIBUNG (Strip-Untertitel, 1 Zeile) ──────────
  desc_de: "FRESH hydro serum · ADDS repair · ADDS glow · je -20%",
  desc_en: "FRESH hydro serum · ADDS repair · ADDS glow · each -20%",

  // ── TAGLINE (Headline im Deal-Card) ───────────────────────
  tagline_de: "Deine Haut liebt Feuchtigkeit, Klarheit und Strahlkraft.",
  tagline_en: "Your skin loves moisture, clarity, and radiance.",

  // ── WHATSAPP PRE-FILL TEXT ────────────────────────────────
  wa_text_de: "Hallo%20Noa%2C%20ich%20hab%20eine%20Frage%20zu%20den%20Skincare-Highlights%20im%20Summer%20Sale%20%F0%9F%8C%BF",
  wa_text_en: "Hi%20Noa%2C%20I%20have%20a%20question%20about%20the%20skincare%20highlights%20in%20the%20Summer%20Sale%20%F0%9F%8C%BF",

  more_url:      "",
  more_label_de: "",
  more_label_en: "",

  // ── KOMBI-TIPP ─────────────────────────────────────────────
  tip_de: "Kombi-Tipp: hydro serum + ADDS glow für extra Feuchtigkeit und Strahlkraft im Sommer.",
  tip_en: "Combination tip: hydro serum + ADDS glow for extra moisture and summer radiance.",

  // ── MEHRERE PRODUKTE ──────────────────────────────────────
  products: [
    {
      name:        "FRESH hydro serum",
      emoji:       "💧",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-hydro-serum/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-hydro-serum/?lang=en",
      image_de:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-hydro-serum.jpg",
      image_en:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-hydro-serum.jpg",
      text_de: "Das FRESH hydro serum von RINGANA ist ein konservierungsmittelfreies Hyaluron-Serum mit gleich 6 verschiedenen Hyaluronsäure-Typen, die in verschiedenen Hautschichten wirken: tief, mitteltief und oberflächlich. Hyaluronsäure kann bis zum 1000-fachen ihres Eigengewichts an Wasser binden und polstert die Haut von innen auf. Dazu kommen ein Triple Peptide Komplex für die Kollagenbildung und Job's tears Ferment zur Beruhigung von Rötungen. Ideal für trockene, strapazierte oder sonnengestresste Haut.<br><em>RINGANA Studie: bis zu +97% mehr Feuchtigkeit nach nur 15 Minuten.</em> Direkt nach dem Tonic auftragen, morgens und abends.",
      text_en: "The FRESH hydro serum by RINGANA is a preservative-free hyaluronic acid serum featuring 6 different molecular weights of hyaluronic acid — working at deep, mid and surface skin levels. Hyaluronic acid can bind up to 1,000 times its own weight in water, visibly plumping and hydrating the skin. A triple peptide complex supports collagen production, while Job's tears ferment calms redness. Perfect for dry, stressed or sun-damaged skin.<br><em>RINGANA study: up to +97% more moisture after just 15 minutes.</em> Apply after toner, morning and evening.",
    },
    {
      name:        "FRESH ADDS repair",
      emoji:       "💚",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-adds-repair/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-adds-repair/?lang=en",
      image_de:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_ADDS-repair.jpg",
      image_en:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_ADDS-repair.jpg",
      text_de: "FRESH ADDS repair ist das RINGANA Serum für unreine, porige oder zu Ausbrüchen neigende Haut. Unreinheiten entstehen oft nicht nur durch Talg, sondern auch durch ein gestörtes Hautmikrobiom, was im Sommer durch Hitze, Schweiß und Sonnencreme noch verstärkt wird. Süßholzwurzel-Extrakt beruhigt gereizte Haut, Niacinamid reguliert die Talgproduktion und verfeinert Poren, Weidenrinden-Extrakt wirkt sanft exfolierend ohne die Hautbarriere zu schwächen. Konservierungsmittelfrei, frisch hergestellt.<br><em>Studie: bis zu 91% weniger sichtbare Unreinheiten.</em> Unter das Serum mischen oder pur als Spot Treatment auftragen.",
      text_en: "FRESH ADDS repair is the RINGANA serum for blemish-prone, congested or breakout-prone skin. Breakouts often come not just from excess sebum, but from an imbalanced skin microbiome — heat, sweating and sunscreen can compound this in summer. Liquorice root extract soothes irritation, niacinamide regulates sebum production and refines pores, willow bark extract gently exfoliates without compromising the skin barrier. Preservative-free, freshly made.<br><em>Study: up to 91% fewer visible blemishes.</em> Mix into your serum or apply directly as a spot treatment.",
    },
    {
      name:        "FRESH ADDS glow",
      emoji:       "🌟",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-adds-glow/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-adds-glow/?lang=en",
      image_de:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_ADDS-glow.jpg",
      image_en:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_ADDS-glow.jpg",
      text_de: "FRESH ADDS glow ist das RINGANA Vitamin-C-Serum gegen Pigmentflecken, unruhigen Teint und sonnenbedingten Hautschäden. UV-Strahlung im Sommer ist einer der Hauptgründe für Hyperpigmentierung und Hautalterung. 15% Vitamin C (stabil, hochkonzentriert) wirken aufhellend und antioxidativ, 5% Niacinamid bringen den Teint in Balance und verfeinern das Hautbild. Dazu grüner Tee-Extrakt als Antioxidans und dreifache Hyaluronsäure für Feuchtigkeit. Strahlende Haut, ohne Irritation. Konservierungsmittelfrei.<br><em>Studie: über 81% zeigten nach 4 Wochen ein sichtbar strahlenderes Hautbild.</em> Pur auf dunkle Flecken oder mit Serum mischen (2 Pumpstöße + 1 Pumpstoß ADDS).",
      text_en: "FRESH ADDS glow is the RINGANA vitamin C serum targeting pigmentation spots, uneven skin tone and sun-induced skin damage. UV exposure in summer is one of the leading causes of hyperpigmentation and premature skin aging. 15% stable, high-concentration vitamin C brightens and protects against free radicals. 5% niacinamide evens skin tone and refines texture. Green tea extract adds antioxidant power, triple hyaluronic acid keeps skin hydrated. Radiant skin, no irritation. Preservative-free.<br><em>Study: over 81% showed a visibly more radiant complexion after 4 weeks.</em> Apply on dark spots or mix with your serum (2 pumps serum + 1 pump ADDS).",
    },
  ],

};
