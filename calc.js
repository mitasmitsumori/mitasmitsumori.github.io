function calculateEstimate(data, settings) {
  const rows = [];
  let total = 0;

  function add(label, qty, unit, unitPrice) {
    const amount = Math.round(qty * unitPrice);
    total += amount;
    rows.push([label, qty, unit, unitPrice, amount]);
  }

  // 解体工事費
  const unitPrice = settings.demolitionUnitPrices[data.structure] || 0;
  add("解体工事費", data.area, "㎡", unitPrice);

  // 足場工事費
  add("足場工事費", data.scaffold, "㎡", settings.scaffoldUnitPrice);

  // 重機回送費（仮で距離10km以上を想定）
  add("重機回送費", 1, "式", settings.heavyMachineryTransportFee["10km以上"]);

  // アスベスト調査費
  add("アスベスト調査費", 1, "式", settings.asbestosSurveyFee);

  // 産廃処分費
  add("木くず（処分費）", data.woodWaste, "kg", settings.wasteDisposalUnitPrices["木くず"]);
  add("ボード類", data.boardWaste, "kg", settings.wasteDisposalUnitPrices["ボード類"]);
  add("廃プラ類", data.plasticWaste, "kg", settings.wasteDisposalUnitPrices["廃プラ類"]);
  add("ガラ", data.rubbleWaste, "kg", settings.wasteDisposalUnitPrices["ガラ"]);
  add("ガラス", data.glassWaste, "kg", settings.wasteDisposalUnitPrices["ガラス"]);
  add("陶器", data.ceramicWaste, "kg", settings.wasteDisposalUnitPrices["陶器"]);

  return { total, rows };
}