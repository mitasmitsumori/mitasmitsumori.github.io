// calc.js

function calculateEstimate(data, settings) {
  const { structure, area, scaffold, woodWaste, boardWaste, plasticWaste, rubbleWaste, glassWaste, ceramicWaste } = data;
  const unitPrices = settings.unitPrices;

  const rows = [];

  function add(label, qty, unit, unitKey) {
    const price = unitPrices[unitKey] || 0;
    const amount = Math.round(qty * price);
    rows.push([label, qty, unit, price, amount]);
  }

  add("解体工事費", area, "㎡", structure);
  add("足場工事費", scaffold, "㎡", "足場");
  add("木くず（処分費）", woodWaste, "kg", "木くず");
  add("ボード類", boardWaste, "kg", "ボード類");
  add("廃プラ類", plasticWaste, "kg", "廃プラ類");
  add("ガラ", rubbleWaste, "kg", "ガラ");
  add("ガラス", glassWaste, "kg", "ガラス");
  add("陶器", ceramicWaste, "kg", "陶器");

  return { rows };
}