function calculateEstimate(data, settings) {
  const rows = [];

  // 解体費
  const demoUnitPrice = settings.demolitionUnitPrices[data.structure] || 0;
  const demoAmount = Math.round(data.area * demoUnitPrice);
  rows.push(["解体工事費", data.area, "㎡", demoUnitPrice, demoAmount]);

  // 足場費
  const scaffoldAmount = Math.round(data.scaffold * settings.scaffoldUnitPrice);
  rows.push(["足場工事費", data.scaffold, "㎡", settings.scaffoldUnitPrice, scaffoldAmount]);

  // アスベスト調査費（固定）
  rows.push(["アスベスト調査費", 1, "式", settings.asbestosSurveyFee, settings.asbestosSurveyFee]);

  // 産廃処分費
  const wasteItems = [
    ["木くず", data.woodWaste],
    ["ボード類", data.boardWaste],
    ["廃プラ類", data.plasticWaste],
    ["ガラ", data.rubbleWaste],
    ["ガラス", data.glassWaste],
    ["陶器", data.ceramicWaste]
  ];
  for (const [label, qty] of wasteItems) {
    const unitPrice = settings.wasteUnitPrices[label] || 0;
    const amount = Math.round(qty * unitPrice);
    rows.push([`${label}（処分費）`, qty, "kg", unitPrice, amount]);
  }

  return { rows };
}