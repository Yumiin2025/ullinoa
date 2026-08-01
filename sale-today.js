// ============================================================
//  🌞 SUMMER SALE — TÄGLICH UPDATEN
//
//  Morgens wenn das Angebot bekannt ist:
//  1. Felder unten anpassen
//  2. git commit -am "Sale: [Produktname]" → in ~30 Sek. live
//
//  Bild: in assets/images/ ablegen, Pfad in image_de / image_en eintragen
//  Mehrere Produkte: products[] Array füllen
//  Ein Produkt: products[] leer lassen, alle anderen Felder füllen
// ============================================================

window.SALE_TODAY = {

  // ── DATUM & PRODUKT ────────────────────────────────────────
  date:       "2026-08-01",
  date_end:   "2026-08-02", // "bis 2.8 24 Uhr" im Strip anzeigen

  product_de: "3 Skincare-Highlights",
  product_en: "3 Skincare Highlights",

  // Produktseite im Shop (für Strip-Button)
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

  // ── MEHR INFOS LINK ───────────────────────────────────────
  more_url:      "",
  more_label_de: "",
  more_label_en: "",

  // ── KOMBI-TIPP (optional) ─────────────────────────────────
  tip_de: "Kombi-Tipp: hydro serum + ADDS glow für extra Feuchtigkeit und Glow.",
  tip_en: "Combination tip: hydro serum + ADDS glow for extra moisture and glow.",

  // ── MEHRERE PRODUKTE ──────────────────────────────────────
  // Wenn gefüllt, zeigt der Deal-Card mehrere Produkt-Blöcke.
  // Leer lassen [] für Einzel-Produkt-Modus.
  products: [
    {
      name:     "FRESH hydro serum",
      emoji:    "💧",
      shop_url: "https://priller.ringana.com/produkt/fresh-hydro-serum/",
      image_de: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-hydro-serum.jpg",
      image_en: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-hydro-serum.jpg",
      text_de:  "Wusstest du, dass Hyaluronsäure bis zum 1000-fachen ihres Eigengewichts an Wasser binden kann? Das hydro serum enthält gleich 6 verschiedene Hyaluronsäure-Typen, die in unterschiedlichen Hautschichten wirken, tief, mitteltief und oberflächlich, genau das, was deine Haut nach einem Tag in der Sonne braucht. Dazu ein Triple Peptide Komplex für die Kollagenbildung und Job's tears Ferment, das Rötungen beruhigt.<br><em>In der RINGANA Studie: bis zu +97% mehr Feuchtigkeit nach nur 15 Minuten.</em> Einfach direkt nach dem Tonic auftragen, morgens und abends.",
      text_en:  "Did you know that hyaluronic acid can bind up to 1,000 times its own weight in water? The hydro serum contains 6 different hyaluronic acid types working at different skin depths — deep, mid and surface — exactly what your skin needs after a day in the sun. Plus a triple peptide complex for collagen production and Job's tears ferment to calm redness.<br><em>RINGANA study: up to +97% more moisture after just 15 minutes.</em> Apply after your toner, morning and evening.",
    },
    {
      name:     "ADDS repair",
      emoji:    "💚",
      shop_url: "https://priller.ringana.com/produkt/adds-repair/",
      image_de: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_ADDS-repair.jpg",
      image_en: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_ADDS-repair.jpg",
      text_de:  "Unreinheiten kommen oft nicht nur von zu viel Talg, sondern auch von einem aus dem Gleichgewicht geratenen Hautmikrobiom, Hitze, Schwitzen und Sonnencreme können im Sommer zusätzlich mitspielen. Süßholzwurzel-Extrakt beruhigt, Niacinamid reguliert Talg und verfeinert Poren, Weidenrinden-Extrakt wirkt sanft exfolierend.<br><em>Studie: bis zu 91% weniger sichtbare Unreinheiten.</em> Unter dein Serum mischen oder pur als Spot Treatment auftragen.",
      text_en:  "Breakouts often come not just from excess sebum, but from an imbalanced skin microbiome — heat, sweating and sunscreen can add to this in summer. Liquorice root extract soothes, niacinamide regulates sebum and refines pores, willow bark extract gently exfoliates.<br><em>Study: up to 91% fewer visible blemishes.</em> Mix into your serum or dab on as a spot treatment.",
    },
    {
      name:     "ADDS glow",
      emoji:    "🌟",
      shop_url: "https://priller.ringana.com/produkt/adds-glow/",
      image_de: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_ADDS-glow.jpg",
      image_en: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_ADDS-glow.jpg",
      text_de:  "Gerade im Sommer ist UV-Strahlung einer der Hauptgründe für Pigmentflecken und einen unruhigen Teint, umso wichtiger, der Haut jetzt gezielt entgegenzuwirken. 15% Vitamin C und 5% Niacinamid bringen Ausgleich, dazu grüner Tee-Extrakt und dreifache Hyaluronsäure für Feuchtigkeit.<br><em>Studie: über 81% zeigten nach 4 Wochen ein sichtbar strahlenderes Hautbild.</em> Pur auf dunkle Flecken auftragen oder mit Serum mischen (2 Pumpstöße Serum + 1 Pumpstoß ADDS).",
      text_en:  "UV radiation in summer is one of the main causes of pigmentation spots and an uneven complexion — all the more reason to give your skin targeted support now. 15% Vitamin C and 5% Niacinamide bring balance, plus green tea extract and triple hyaluronic acid for moisture.<br><em>Study: over 81% showed a visibly more radiant complexion after 4 weeks.</em> Apply directly on dark spots or mix with your serum (2 pumps serum + 1 pump ADDS).",
    },
  ],

};
