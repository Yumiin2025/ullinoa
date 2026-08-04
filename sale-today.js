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
  date:       "2026-08-05",
  date_end:   null,

  product_de: "COMPLETE d-eat + FRESH body milk light",
  product_en: "COMPLETE d-eat + FRESH body milk light",

  shop_url:   "https://priller.ringana.com/angebote/",

  // ── STRIP ─────────────────────────────────────────────────
  desc_de: "COMPLETE d-eat · FRESH body milk light · von innen & außen · je -20%",
  desc_en: "COMPLETE d-eat · FRESH body milk light · inside & out · each -20%",

  tagline_de: "Von innen satt, von außen geschmeidig. Zwei Produkte, eine Sommerroutine.",
  tagline_en: "Nourished inside, smooth outside. Two products, one summer routine.",

  // ── WHATSAPP ──────────────────────────────────────────────
  wa_text_de: "Hallo%20Noa%2C%20ich%20hab%20eine%20Frage%20zu%20d-eat%20und%20body%20milk%20light%20im%20Summer%20Sale%20%F0%9F%8C%BF",
  wa_text_en: "Hi%20Noa%2C%20I%20have%20a%20question%20about%20d-eat%20and%20body%20milk%20light%20in%20the%20Summer%20Sale%20%F0%9F%8C%BF",

  more_url:      "",
  more_label_de: "",
  more_label_en: "",

  image_de:       null,
  image_en:       null,
  image_fallback: null,
  shades:         [],
  tip_de:         null,
  tip_en:         null,

  // ── PRODUKTE ──────────────────────────────────────────────
  products: [
    {
      name:        "COMPLETE d-eat",
      emoji:       "🌱",
      shop_url_de: "https://priller.ringana.com/produkt/complete-d-eat/",
      shop_url_en: "https://priller.ringana.com/produkt/complete-d-eat/?lang=en",
      image_de:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_COMPLETE-d-eat.jpg",
      image_en:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_COMPLETE-d-eat.jpg",
      text_de: "Kennst du das? Der Tag ist voll, du greifst schnell zu Semmel oder Riegel, bist kurz satt und eine Stunde später wieder müde. Schnelle Snacks liefern oft wenig Ballaststoffe, Proteine oder Mikronährstoffe. Der Blutzucker schießt hoch, fällt genauso schnell wieder ab, und schon bist du im Hungerloch.<br><br>COMPLETE d-eat von RINGANA ist eine vollwertige vegane Trinkmahlzeit, fertig in 2 Minuten. Kein Zuckerzusatz, keine künstlichen Aromen, konservierungsmittelfrei: Erbsen- und Reisprotein liefern alle essentiellen Aminosäuren in guter Bioverfügbarkeit, Guarkern- und Citrusfasern für einen hohen Ballaststoffgehalt und eine gesunde Verdauung, DHA aus Mikroalgen trägt zur Erhaltung einer normalen Gehirnfunktion bei, Vitamine und Mineralstoffe aus natürlichen Quellen.<br><br>Ob Mahlzeitersatz, Meal Prep, vegane Ernährung oder einfach ein stressiger Tag: d-eat ist eine echte Mahlzeit, keine Notlösung. Als Matcha Latte, mit Kokosmilch und frischen Früchten oder klassisch mit Zimt und Kakao.',
      text_en: "Know the feeling? Your day is packed, you grab a quick snack, feel full for an hour and then crash again. Fast snacks often deliver little fibre, protein or micronutrients. Blood sugar spikes, drops just as fast, and you're in an energy dip.<br><br>COMPLETE d-eat by RINGANA is a complete vegan meal replacement drink, ready in 2 minutes. No added sugar, no artificial flavours, preservative-free: pea and rice protein deliver all essential amino acids with good bioavailability, guar bean and citrus fibres for high fibre content and healthy digestion, DHA from microalgae contributes to normal brain function, vitamins and minerals from natural sources.<br><br>Whether you're replacing meals, meal prepping, eating vegan or just having a busy day: d-eat is a real meal, not a compromise. Try it as a matcha latte, with coconut milk and fresh fruit, or classic with cinnamon and cacao.",
    },
    {
      name:        "FRESH body milk light",
      emoji:       "💧",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-body-milk-light/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-body-milk-light/?lang=en",
      image_de:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-body-milk-light.jpg",
      image_en:    "assets/images/Summer-Sale_26_Partner-Templates-4x5_EN_FRESH-body-milk-light.jpg",
      text_de: "Unser Gesicht bekommt die volle Pflege-Aufmerksamkeit, die Körperhaut geht oft leer aus. Dabei ist sie durch Duschen, Kleidung, Sonne und Salzwasser genauso belastet. Wird die Hautbarriere schwächer, verliert die Haut Feuchtigkeit und wirkt schnell trocken und fahl.<br><br>Die FRESH body milk light von RINGANA ist ultraleicht und zieht sofort ein: 5-fach Hyaluron und Silberohrpilz für intensive Tiefenfeuchtigkeit, Moringasamen-Extrakt und Exosome stärken die Hautbarriere, Macadamiaöl, Haferöl und Sheabutter pflegen nachhaltig ohne zu fetten. Konservierungsmittelfrei, frisch hergestellt.<br><br>Geschmeidige Körperhaut ohne klebriges Gefühl, perfekt an heißen Tagen, nach dem Duschen oder nach dem Rasieren, auch bei sensibler und trockener Haut.",
      text_en: "Our face gets all the skincare attention, while our body skin is often neglected. Yet it faces just as much stress from showering, clothing, sun and salt water. When the skin barrier weakens, moisture is lost and skin quickly feels dry and dull.<br><br>The FRESH body milk light by RINGANA is ultra-lightweight and absorbs instantly: 5-fold hyaluronic acid and snow mushroom for deep, intensive hydration, moringa seed extract and exosomes strengthen the skin barrier, macadamia oil, oat oil and shea butter nourish without greasiness. Preservative-free, freshly made.<br><br>Smooth body skin with no sticky feeling, perfect on hot days, after showering or shaving, and gentle enough for sensitive and dry skin.",
    },
  ],

};
