// AUTO-GENERATED — run with: node scripts/sale-20260807.js
// Updates sale-today.js for August 7, 2026

const fs = require('fs');
const path = require('path');

const content = `// ============================================================
//  🌞 SUMMER SALE — TÄGLICH UPDATEN
// ============================================================

window.SALE_TODAY = {

  date:       "2026-08-07",
  date_end:   null,

  product_de: "FRESH Sonnenpflege & light legs",
  product_en: "FRESH Suncare & light legs",

  shop_url:   "https://priller.ringana.com/angebote/",

  desc_de: "after sun · sunscreen SPF 30 · sunscreen SPF 25 · light legs · je -20%",
  desc_en: "after sun · sunscreen SPF 30 · sunscreen SPF 25 · light legs · each -20%",

  tagline_de: "Vier Sommer-Favoriten heute mit -20%. Mineralischer Sonnenschutz, natürliche Bräune, leichte Beine.",
  tagline_en: "Four summer favourites at -20% today. Mineral sun protection, natural tan, light legs.",

  wa_text_de: "Hallo%20Noa%2C%20ich%20hab%20eine%20Frage%20zur%20Sonnenpflege%20im%20Summer%20Sale%20%E2%98%80%EF%B8%8F",
  wa_text_en: "Hi%20Noa%2C%20I%20have%20a%20question%20about%20the%20suncare%20Summer%20Sale%20%E2%98%80%EF%B8%8F",

  more_url:      "",
  more_label_de: "",
  more_label_en: "",

  image_de:       null,
  image_en:       null,
  image_fallback: null,
  shades:         [],
  tip_de:         null,
  tip_en:         null,

  products: [
    {
      name:        "FRESH after sun & tan booster",
      emoji:       "💧",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-after-sun/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-after-sun/?lang=en",
      image_de:    null,
      image_en:    null,
      text_de: "Bis zu 80 % der sichtbaren Hautalterung entsteht durch UV-Strahlung, nicht durchs Alter. Falten, Pigmentflecken, Elastizitätsverlust: das ist meist Photoaging. After-Sun-Pflege ist deshalb keine Luxus-Routine, sondern sinnvoller Better-Aging-Schutz.<br><br>Der FRESH after sun & tan booster kann zwei Dinge gleichzeitig: Rotalgen-Extrakt aktiviert die Hautbräunung auf natürliche Weise, Erythrulose (ein natürlicher Zucker) sorgt für eine sanfte Tönung ganz ohne UV. Gleichzeitig geben Buriti-Öl, Hyaluronsäure und Ectoin der Haut zurück, was die Sonne ihr genommen hat.<br><br>Nach drei bis vier Tagen regelmäßiger Anwendung baut sich eine leichte, natürliche Bräune auf, die sich mit der Zeit vertieft. Tipp: vorher mit dem FRESH scrub peelen, dann wird es gleichmäßiger und hält länger.",
      text_en: "Up to 80% of visible skin ageing comes from UV radiation, not from age. Wrinkles, pigmentation, loss of elasticity: that is mostly photoageing. After-sun care is not a luxury routine, it is effective better-ageing protection.<br><br>The FRESH after sun & tan booster does two things at once: red algae extract activates skin tanning naturally, erythrulose (a natural sugar) adds a gentle colour without any UV. At the same time, buriti oil, hyaluronic acid and ectoin replenish what the sun has taken from the skin.<br><br>After three to four days of regular use, a light, natural tan builds up and deepens over time. Tip: exfoliate with the FRESH scrub beforehand for a more even, longer-lasting result.",
    },
    {
      name:        "FRESH sunscreen face SPF 30",
      emoji:       "☀️",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-sunscreen-face/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-sunscreen-face/?lang=en",
      image_de:    null,
      image_en:    null,
      text_de: "Wusstest du, dass Oxybenzon, einer der weltweit meistverwendeten chemischen UV-Filter, in Hawaii, Palau, Aruba und Teilen von Thailand und Mexiko verboten ist? Er baut sich nicht ab, löst Korallenbleiche aus und kann als photoreaktiver Stoff freie Radikale bilden.<br><br>Die Alternative: mineralischer Zinkoxid-Sonnenschutz. Er wird nicht in die Haut aufgenommen, sondern legt sich wie winzige Spiegel darauf und reflektiert die Strahlung. Hormonfrei, riff-freundlich, gut verträglich, auch in der Schwangerschaft und bei sensibler Haut.<br><br>Der FRESH sunscreen face SPF 30 vereint täglichen Sonnenschutz mit Gesichtspflege: mattes Finish ohne Fettfilm, funktioniert auch als Make-up-Base. Mungobohnenextrakt schützt vor Infrarot und Blue Light, Astaxanthin wirkt gegen oxidativen Stress, Hyaluronsäure pflegt. COSMOS-zertifiziert.",
      text_en: "Did you know that oxybenzone, one of the world's most widely used chemical UV filters, is banned in Hawaii, Palau, Aruba and parts of Thailand and Mexico? It does not break down, triggers coral bleaching, and as a photoreactive substance can form free radicals.<br><br>The alternative: mineral zinc oxide sun protection. It is not absorbed into the skin but sits on the surface like tiny mirrors, reflecting radiation. Hormone-free, reef-friendly, well-tolerated, including during pregnancy and on sensitive skin.<br><br>The FRESH sunscreen face SPF 30 combines daily sun protection with skincare: matte finish without a greasy feel, works as a make-up base too. Mung bean extract protects against infrared and blue light, astaxanthin fights oxidative stress, hyaluronic acid hydrates. COSMOS certified.",
    },
    {
      name:        "FRESH sunscreen SPF 25",
      emoji:       "🌞",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-sunscreen/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-sunscreen/?lang=en",
      image_de:    null,
      image_en:    null,
      text_de: "Der Rundumschutz für Gesicht und Körper, wasserfest, mit mineralischem Zinkoxid, Astaxanthin, Karanja-Extrakt als natürlichem UV-Zusatzschutz und Curcuma-Extrakt, der reizlindernd wirkt.<br><br>Wichtig zu wissen: Ein mineralischer Filter liegt auf der Haut, nicht in ihr. Das macht ihn so verträglich, heißt aber auch, dass er durch Wasser, Schwitzen oder Abrieb mechanisch entfernt wird. Der Schutz lässt nicht nach, er ist buchstäblich nicht mehr da. Deshalb nach dem Schwimmen, Abtrocknen oder längerer Zeit in der Sonne einfach nachcremen.",
      text_en: "All-over sun protection for face and body, water-resistant, with mineral zinc oxide, astaxanthin, karanja extract as natural UV support and turmeric extract for its soothing properties.<br><br>Worth knowing: a mineral filter sits on the skin, not in it. That is what makes it so well-tolerated, but it is also mechanically removed by water, sweat or towel friction. Protection does not fade because it stops working, it fades because some of it is literally no longer there. Reapply after swimming, drying off or extended time in the sun.",
    },
    {
      name:        "FRESH light legs",
      emoji:       "🌰",
      shop_url_de: "https://priller.ringana.com/produkt/fresh-light-legs/",
      shop_url_en: "https://priller.ringana.com/produkt/fresh-light-legs/?lang=en",
      image_de:    null,
      image_en:    null,
      text_de: "Hitze setzt nicht nur der Haut zu. Bei 30 Grad, langem Stehen oder Reisen werden die Beine schwer, müde, geschwollen. Wärme erweitert die Blutgefäße, das Blut fließt langsamer zurück.<br><br>Rosskastanie wird seit Jahrhunderten bei müden, schweren Beinen eingesetzt. Im FRESH light legs stecken außerdem Zypresse für die Mikrozirkulation, Magnesiumsalz (entspannend und angenehm kühlend), Witch Hazel und Mäusedorn zur Beruhigung der Haut sowie Minze und Ingwer für den sofortigen Frischekick.<br><br>Einfach aufsprühen, kein Einmassieren nötig. Perfekt nach einem langen Tag im Stehen, auf Reisen oder wenn die Beine bei 30 Grad einfach schwer werden.",
      text_en: "Heat does not only affect your skin. After a day of standing, travelling or simply 30-degree weather, legs often feel heavy, tired and swollen. Heat dilates blood vessels and slows the return of blood.<br><br>Horse chestnut has been used for centuries to support tired, heavy legs. The FRESH light legs spray also contains cypress for microcirculation, magnesium salt (relaxing and pleasantly cooling), witch hazel and butcher's broom to soothe the skin, plus mint and ginger for an instant freshness boost.<br><br>Simply spray on, no rubbing in required. Perfect after a long day on your feet, while travelling, or whenever your legs feel heavy in the heat.",
    },
  ],

};
`;

const target = path.join(__dirname, '..', 'sale-today.js');
fs.writeFileSync(target, content, 'utf8');
console.log('Written: sale-today.js');
