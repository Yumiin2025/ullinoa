// ============================================================
//  🌞 SUMMER SALE — TÄGLICH UPDATEN
//
//  Morgens wenn das Angebot bekannt ist:
//  1. Felder unten anpassen
//  2. git commit -am "Sale: [Produktname]" → in ~30 Sek. live
//
//  Mehrere Produkte: products[] Array füllen
//  Ein Produkt: products[] leer lassen, alle anderen Felder füllen
//  Mehrere Bilder (Nuancen): shades[] Array füllen
// ============================================================

window.SALE_TODAY = {

  // ── DATUM & PRODUKT ────────────────────────────────────────
  date:       "2026-08-03",
  date_end:   null,

  product_de: "FRESH tinted moisturiser SPF 30",
  product_en: "FRESH tinted moisturiser SPF 30",

  shop_url:   "https://priller.ringana.com/produkt/fresh-tinted-moisturiser-n3/",

  // ── TAGLINE ───────────────────────────────────────────────
  tagline_de: "Filter oder Photoshop? Nein, einfach nur tinted moisturiser.",
  tagline_en: "Filter or Photoshop? No, just tinted moisturiser.",

  // ── KURZBESCHREIBUNG (Strip) ──────────────────────────────
  desc_de: "FRESH tinted moisturiser SPF 30 · mineralischer UV-Schutz · 4 Nuancen · -20%",
  desc_en: "FRESH tinted moisturiser SPF 30 · mineral UV protection · 4 shades · -20%",

  // ── WHATSAPP ──────────────────────────────────────────────
  wa_text_de: "Hallo%20Noa%2C%20ich%20hab%20eine%20Frage%20zum%20tinted%20moisturiser%20im%20Summer%20Sale%20%F0%9F%8C%BF",
  wa_text_en: "Hi%20Noa%2C%20I%20have%20a%20question%20about%20the%20tinted%20moisturiser%20in%20the%20Summer%20Sale%20%F0%9F%8C%BF",

  more_url:      "",
  more_label_de: "",
  more_label_en: "",

  // ── EINZEL-PRODUKT FELDER ─────────────────────────────────
  image_de:       null,
  image_en:       null,
  image_fallback: null,

  // ── 4 NUANCEN NEBENEINANDER ───────────────────────────────
  shades: [
    { label: "N1", img: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-tinted-moisturizer-SPF30-N1.jpg" },
    { label: "N2", img: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-tinted-moisturizer-SPF30-N2.jpg" },
    { label: "N3", img: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-tinted-moisturizer-SPF30-N3.jpg" },
    { label: "N4", img: "assets/images/Summer-Sale_26_Partner-Templates-4x5_DE_FRESH-tinted-moisturizer-SPF30-N4.jpg" },
  ],

  // ── FLIESSTEXT (kein products[] — Einzel-Produkt mit body) ─
  body_de: `<p style="font-size:.83rem;line-height:1.7;color:var(--text);margin:.3rem 0 .9rem"><em>Wusstest du, dass bis zu 80% der sichtbaren Hautalterung durch UV-Strahlung entsteht, nicht durchs Alter?</em> Falten, Pigmentflecken, Elastizitätsverlust: das ist oft weniger eine Frage der Jahre als von UVA-Strahlung. Genau deshalb ist tägliches SPF eine der besten Better-Aging-Maßnahmen, die es gibt, gerade jetzt im Sommer besonders wichtig.</p>
<p style="font-size:.83rem;line-height:1.7;color:var(--text);margin:.3rem 0 .9rem"><strong>Was er kann:</strong> Die leichte Textur zieht sofort ein und hinterlässt einen frischen, natürlichen Teint, ganz ohne Make-up-Gefühl. Unebenheiten, Poren und Rötungen werden optisch reduziert, dazu kommt mineralischer SPF 30 Schutz vor UVA und UVB, sanft und ohne Nanopartikel.</p>
<p style="font-size:.83rem;line-height:1.7;color:var(--text);margin:.3rem 0 .9rem"><strong>Was drinsteckt:</strong> 7% Glycerin für intensive Feuchtigkeit · Zinkoxid als mineralischer UV-Filter · CICA (Centella asiatica) beruhigt und glättet · Exosome aus Wassermelone und Grapefruit für Leuchtkraft · Grüntee-Extrakt gegen Umweltstress. Erhältlich in 4 Nuancen, die sich sanft an deinen Hautton anpassen.</p>
<p style="font-size:.83rem;line-height:1.7;color:var(--text);margin:.3rem 0 .9rem"><strong>Anwendung:</strong> Nach der Pflege punktuell auftragen und von der Mitte nach außen verstreichen. Für ein besonders ebenmäßiges Ergebnis: Make-up-Schwamm oder -Pinsel.</p>
<p style="font-size:.8rem;background:var(--cream);border-radius:10px;padding:.7rem 1rem;line-height:1.6;color:var(--sage-dk);margin:.9rem 0">💡 Mein Tipp: Perfekt für den Sommer, ein Schritt statt Creme + Sonnenschutz + Make-up. Schneller geht Routine nicht.</p>`,

  body_en: `<p style="font-size:.83rem;line-height:1.7;color:var(--text);margin:.3rem 0 .9rem"><em>Did you know that up to 80% of visible skin aging is caused by UV radiation, not by age?</em> Wrinkles, pigmentation, loss of elasticity: these are often less a question of years than of UVA exposure. That's exactly why daily SPF is one of the best better-aging steps you can take, especially important right now in summer.</p>
<p style="font-size:.83rem;line-height:1.7;color:var(--text);margin:.3rem 0 .9rem"><strong>What it does:</strong> The lightweight texture absorbs instantly, leaving a fresh, natural complexion with no heavy make-up feel. Uneven texture, pores and redness are visually reduced, plus mineral SPF 30 protection against UVA and UVB, gentle and nanoparticle-free.</p>
<p style="font-size:.83rem;line-height:1.7;color:var(--text);margin:.3rem 0 .9rem"><strong>What's inside:</strong> 7% glycerin for intensive moisture · Zinc oxide as mineral UV filter · CICA (Centella asiatica) soothes and smooths · Exosomes from watermelon and grapefruit for luminosity · Green tea extract against environmental stress. Available in 4 shades that gently adapt to your skin tone.</p>
<p style="font-size:.83rem;line-height:1.7;color:var(--text);margin:.3rem 0 .9rem"><strong>How to use:</strong> Apply after your skincare routine, dot onto the face and blend outward. For an especially even finish, use a make-up sponge or brush.</p>
<p style="font-size:.8rem;background:var(--cream);border-radius:10px;padding:.7rem 1rem;line-height:1.6;color:var(--sage-dk);margin:.9rem 0">💡 My tip: Perfect for summer, one step instead of moisturiser + SPF + make-up. No faster routine exists.</p>`,

  // ── KEIN MULTI-PRODUKT ────────────────────────────────────
  products: [],

};
