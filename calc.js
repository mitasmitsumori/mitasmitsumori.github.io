// calc.js

function calculateEstimate(data, SETTINGS) {
  const {
    structure,
    area,
    scaffold,
    woodWaste,
    boardWaste,
    plasticWaste,
    rubbleWaste,
    glassWaste,
    ceramicWaste
  } = data;

  const unitPrices = SETTINGS.unitPrices;

  const rows = [];

  function add(label, qty, unit, unitPrice) {
    const amount = Math.round(qty * unitPrice);
    rows.push([label, qty, unit, unitPrice, amount]);
  }

  add("解体工事費", area, "㎡", unitPrices[structure] || 0);
  add("足場工事費", scaffold, "㎡", unitPrices["足場"]);
  add("木くず（処分費）", woodWaste, "kg", unitPrices["木くず"]);
  add("ボード類", boardWaste, "kg", unitPrices["ボード類"]);
  add("廃プラ類", plasticWaste, "kg", unitPrices["廃プラ類"]);
  add("ガラ", rubbleWaste, "kg", unitPrices["ガラ"]);
  add("ガラス", glassWaste, "kg", unitPrices["ガラス"]);
  add("陶器", ceramicWaste, "kg", unitPrices["陶器"]);

  return { rows };
}