// calc.js

function calculateEstimate(data, settings) {
  const rows = [];
  const up = settings.unitPrices;

  function pushRow(label, qty, unit, pricePerUnit) {
    const amount = Math.round(qty * pricePerUnit);
    rows.push([label, qty, unit, pricePerUnit, amount]);
  }

  // 解体費
  pushRow("解体工事費", data.area, "㎡", up[data.structure] || 0);

  // 足場費
  pushRow("足場工事費", data.scaffold, "㎡", up["足場"]);

  // 産廃処分費
  pushRow("木くず（処分費）", data.woodWaste, "kg", up["木くず"]);
  pushRow("ボード類", data.boardWaste, "kg", up["ボード類"]);
  pushRow("廃プラ類", data.plasticWaste, "kg", up["廃プラ類"]);
  pushRow("ガラ", data.rubbleWaste, "kg", up["ガラ"]);
  pushRow("ガラス", data.glassWaste, "kg", up["ガラス"]);
  pushRow("陶器", data.ceramicWaste, "kg", up["陶器"]);

  return { rows };
}