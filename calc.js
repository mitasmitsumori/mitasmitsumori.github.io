function calculateEstimate(data, settings) {
  const { unitPrices } = settings;

  const rows = [];

  function add(label, qty, unit, unitKey) {
    const unitPrice = unitPrices[unitKey] || 0;
    const amount = Math.round(qty * unitPrice);
    rows.push([label, qty, unit, unitPrice, amount]);
  }

  add("解体工事費", data.area, "㎡", data.structure);
  add("足場工事費", data.scaffold, "㎡", "足場");
  add("木くず（処分費）", data.woodWaste, "kg", "木くず");
  add("ボード類", data.boardWaste, "kg", "ボード類");
  add("廃プラ類", data.plasticWaste, "kg", "廃プラ類");
  add("ガラ", data.rubbleWaste, "kg", "ガラ");
  add("ガラス", data.glassWaste, "kg", "ガラス");
  add("陶器", data.ceramicWaste, "kg", "陶器");

  return { rows };
}