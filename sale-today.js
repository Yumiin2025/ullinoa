// ============================================================
//  🌞 SUMMER SALE — TÄGLICH UPDATEN
//
//  Morgens wenn das Angebot bekannt ist:
//  1. Felder unten anpassen
//  2. git commit -am "Sale: [Produktname]" → in ~30 Sek. live
//
//  Mehrere Produkte: products[] Array füllen
//  Ein Produkt: products[] leer lassen, shades[] / body nutzen
// ============================================================

window.SALE_TODAY = {

  // ── DATUM & PRODUKT ────────────────────────────────────────
  date:       "2026-08-04",
  date_end:   null,

  product_de: "CAPS move + SPORT endurance",
  product_en: "CAPS move + SPORT endurance",

  shop_url:   "https://priller.ringana.com/angebote/",

  // ── STRIP ─────────────────────────────────────────────────
  desc_de: "CAPS move · SPORT endurance · Gelenke, Muskeln, Energie · je -20%",
  desc_en: "CAPS move · SPORT endurance · joints, muscles, energy · each -20%",

  tagline_de: "Bewegung, die deinen Körper wirklich unterstützt.",
  tagline_en: "Movement that really supports your body.",

  // ── WHATSAPP ──────────────────────────────────────────────
  wa_text_de: "Hallo%20Noa%2C%20ich%20hab%20eine%20Frage%20zu%20CAPS%20move%20und%20SPORT%20endurance%20im%20Summer%20Sale%20%F0%9F%8C%BF",
  wa_text_en: "Hi%20Noa%2C%20I%20have%20a%20question%20about%20CAPS%20move%20and%20SPORT%20endurance%20in%20the%20Summer%20Sale%20%F0%9F%8C%BF",

  more_url:      "",
  more_label_de: "",
  more_label_en: "",

  image_de:       null,
  image_en:       null,
  image_fallback: null,
  shades:         [],

  tip_de: null,
  tip_en: null,

  // ── MEHRERE PRODUKTE ──────────────────────────────────────
  products: [
    {
      name:        "CAPS move",
      emoji:       "🦴",
      shop_url_de: "https://priller.ringana.com/produkt/caps-move/",
      shop_url_en: "https://priller.ringana.com/produkt/caps-move/?lang=en",
      image_de:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_CAPS-move.jpg",
      image_en:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_CAPS-move.jpg",
      text_de: "Wusstest du, dass langes Sitzen deinen Gelenken fast genauso zusetzt wie intensiver Sport, nur andersrum? Zu wenig Bewegung bedeutet: Knorpel wird schlechter versorgt. Zu viel Belastung bedeutet: zu wenig Zeit für Regeneration. Beides fordert deinen Bewegungsapparat auf seine Weise.<br><br>CAPS move von RINGANA gibt deinen Gelenken genau das zurück, was sie brauchen: MSM liefert Schwefel für Knorpel und Gelenkflüssigkeit, AprèsFlex® (Weihrauch) und CurcuRouge® (Kurkuma) unterstützen dein Gelenkwohlbefinden, Vitamin C trägt zu einer normalen Kollagenbildung bei, Vitamin D und K tragen zur Erhaltung normaler Knochen bei.<br><br>Ob du viel sitzt, intensiv trainierst oder langfristig beweglich bleiben willst: CAPS move setzt an mehreren Stellen gleichzeitig an.",
      text_en: "Did you know that sitting for long periods puts almost as much stress on your joints as intense sport, just in the opposite way? Too little movement means cartilage is less nourished. Too much stress means too little time for regeneration. Both challenge your musculoskeletal system in their own way.<br><br>CAPS move by RINGANA gives your joints exactly what they need: MSM provides sulphur for cartilage and synovial fluid, AprèsFlex® (frankincense) and CurcuRouge® (turmeric) support joint wellbeing, Vitamin C contributes to normal collagen formation, Vitamins D and K contribute to the maintenance of normal bones.<br><br>Whether you sit a lot, train intensively, or simply want to stay mobile long-term: CAPS move works on multiple levels at once.",
    },
    {
      name:        "SPORT endurance",
      emoji:       "💧",
      shop_url_de: "https://priller.ringana.com/produkt/sport-endurance/",
      shop_url_en: "https://priller.ringana.com/produkt/sport-endurance/?lang=en",
      image_de:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_SPORT-endurance.jpg",
      image_en:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_SPORT-endurance.jpg",
      text_de: "Bei Hitze oder intensiver Belastung verlierst du bis zu 1,5 Liter Schweiß pro Stunde, und mit ihm wichtige Elektrolyte wie Magnesium, Kalium und Natrium. Genau das führt zu Krämpfen, Müdigkeit und Leistungsabfall.<br><br>SPORT endurance ist die natürliche Isotoniker-Formel von RINGANA: Kohlenhydrate für konstante und schnelle Energie, Elektrolyte für deinen Flüssigkeitshaushalt, Magnesium und Kalium für die Muskelfunktion, Eisen, Selen und Vitamin C für Zellschutz und Regeneration. Kein Zucker-Overkill, keine künstlichen Aromen, alles konservierungsmittelfrei und frisch.<br><br>1 Sachet in 500 ml Wasser (isotonisch, für längere Einheiten) oder bis zu 700 ml (für kürzere, intensive Trainings).",
      text_en: "In heat or during intense exercise, you can lose up to 1.5 litres of sweat per hour, along with key electrolytes like magnesium, potassium and sodium. This is exactly what leads to cramps, fatigue and performance drops.<br><br>SPORT endurance is RINGANA's natural isotonic formula: carbohydrates for consistent and rapid energy, electrolytes for hydration balance, magnesium and potassium for muscle function, iron, selenium and vitamin C for cell protection and recovery. No sugar overload, no artificial flavours, preservative-free and freshly made.<br><br>Mix 1 sachet in 500 ml water (isotonic, for longer sessions) or up to 700 ml (for shorter, intense workouts).",
    },
  ],

};
