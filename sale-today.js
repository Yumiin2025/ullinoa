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
  date:       "2026-08-06",
  date_end:   null,

  product_de: "FRESH toner calm + FRESH cream rich",
  product_en: "FRESH toner calm + FRESH cream rich",

  shop_url:   "https://priller.ringana.com/angebote/",

  // ── STRIP ─────────────────────────────────────────────────
  desc_de: "FRESH toner calm · FRESH cream rich · Pflege die einzieht · je -20%",
  desc_en: "FRESH toner calm · FRESH cream rich · skincare that absorbs · each -20%",

  tagline_de: "Erst der Toner, dann die Creme. Die klassische Abend-Routine, wenn die Haut Ruhe braucht.",
  tagline_en: "Toner first, then cream. The classic evening routine when your skin needs to recover.",

  // ── WHATSAPP ──────────────────────────────────────────────
  wa_text_de: "Hallo%20Noa%2C%20ich%20hab%20eine%20Frage%20zu%20toner%20calm%20und%20cream%20rich%20im%20Summer%20Sale%20%E2%98%80%EF%B8%8F",
  wa_text_en: "Hi%20Noa%2C%20I%20have%20a%20question%20about%20toner%20calm%20and%20cream%20rich%20in%20the%20Summer%20Sale%20%E2%98%80%EF%B8%8F",

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
      name:        "FRESH toner calm",
      emoji:       "🌱",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-toner-calm/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-toner-calm/?lang=en",
      image_de:    null,
      image_en:    null,
      text_de: "Ein Sommertag macht mit der Haut mehr, als man denkt. Morgens Sonnencreme, tagsüber Hitze, dazwischen Klimaanlage im Büro, Zug oder Auto, abends vielleicht noch Chlor oder Salzwasser. Und irgendwann steht man vorm Spiegel und die Haut fühlt sich gleichzeitig fettig und gespannt an.<br><br>Klingt widersprüchlich, ist es aber nicht. Man nennt das dehydrierte Haut: Ihr fehlt nicht Fett, sondern Wasser. Und weil sie diesen Verlust ausgleichen will, produziert sie mehr Talg. Ergebnis: glänzende T-Zone und trotzdem ein Spannungsgefühl.<br><br>Toner haben den Ruf, verzichtbar zu sein. Sind sie aber nicht: Sie bringen die Haut nach der Reinigung ins Gleichgewicht, damit Serum und Creme danach überhaupt richtig aufgenommen werden. Ohne diesen Schritt liegt die Pflege eher auf der Haut, als dass sie einzieht.<br><br>Der FRESH toner calm kann aber noch etwas Besonderes: 3 % eines neurokosmetischen Wirkstoffs aus Milchsäurebakterien, in wissenschaftlich untersuchter Konzentration, wirkt den Auswirkungen von Stress auf die Haut entgegen und unterstützt gleichzeitig das emotionale Wohlbefinden. Dazu 2 % Maulbeerblätter-Extrakt für die Anpassung an Umweltveränderungen und 1 % Süßholzwurzel-Extrakt gegen Rötungen und Irritationen. Plus Aloe Vera Frischpflanzensaft.<br><br>Aufsprühen oder mit einem Wattepad auftragen, vorher schütteln. Funktioniert auch am ganzen Körper, zum Beispiel nach einem Tag in der Sonne.",
      text_en: "A summer day does more to your skin than you might think. Sunscreen in the morning, heat throughout the day, air conditioning in the office, train or car, then maybe chlorine or salt water in the evening. At some point you look in the mirror and your skin feels simultaneously oily and tight.<br><br>That sounds contradictory, but it is not. It is called dehydrated skin: it is not lacking oil, it is lacking water. And because it wants to compensate for this loss, it produces more sebum. Result: a shiny T-zone and still a feeling of tightness.<br><br>Toners have a reputation for being optional. But they are not: they rebalance the skin after cleansing so that serum and cream can actually be absorbed afterwards. Without this step, skincare tends to sit on top of the skin rather than sinking in.<br><br>The FRESH toner calm does something else too: 3% of a neurocosmetic active from lactic acid bacteria, in a scientifically researched concentration, counteracts the effects of stress on the skin while also supporting emotional wellbeing. Plus 2% mulberry leaf extract to help the skin adapt to environmental changes and 1% liquorice root extract to calm redness and irritation. With fresh aloe vera plant juice.<br><br>Spray on or apply with a cotton pad, shake first. Works on the whole body too, for example after a day in the sun.",
    },
    {
      name:        "FRESH cream rich",
      emoji:       "✨",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-cream-rich/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-cream-rich/?lang=en",
      image_de:    null,
      image_en:    null,
      text_de: "Klingt erstmal falsch, ist aber der ehrlichste Tipp, den ich für den Sommer habe: tagsüber etwas Leichtes, abends aber ist die FRESH cream rich genau richtig, um der Haut zurückzugeben, was der Tag ihr genommen hat.<br><br>2,5 % verkapselter Ceramid-Komplex stärkt die Hautbarriere, 12 % NMF (der hauteigene Feuchthaltefaktor) bindet Feuchtigkeit in den tieferen Hautschichten. Dazu 9 Pflanzenöle wie Nachtkerze, Borretsch und Wiesenschaumkraut sowie Cupuacu- und Sheabutter für intensive Pflege ohne schweres Gefühl. Konservierungsmittelfrei, frisch hergestellt.<br><br>Besonders sinnvoll, wenn deine Haut zu Trockenheit oder Spannungsgefühlen neigt oder gerade sensibler reagiert als sonst. Erst der Toner, dann die Creme: das ist die klassische Abend-Routine, wenn die Haut Ruhe braucht und einen extra Wohlfühl-Moment verdient.",
      text_en: "It sounds counterintuitive, but it is honestly one of my best summer tips: something light during the day, but in the evening the FRESH cream rich is exactly what your skin needs to recover from everything the day threw at it.<br><br>2.5% encapsulated ceramide complex strengthens the skin barrier, 12% NMF (the skin's own natural moisturising factor) binds moisture in the deeper skin layers. Plus 9 plant oils including evening primrose, borage and meadowfoam, as well as cupuacu and shea butter for intensive care without a heavy feeling. Preservative-free, freshly made.<br><br>Especially helpful if your skin tends towards dryness or tightness, or is reacting more sensitively than usual. Toner first, then cream: that is the classic evening routine when your skin needs to rest and deserves a moment of care.",
    },
  ],

};
