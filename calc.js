function calculateEstimate(data, settings) {
  const rows = [];

  // 解体工事費
  const demolitionUnit = settings.demolitionUnitPrice[data.structure] || 0;
  const demolitionAmount = Math.round(data.area * demolitionUnit);
  rows.push(["解体工事費", data.area, "㎡", demolitionUnit, demolitionAmount]);

  // 足場工事費
  const scaffoldAmount = Math.round(data.scaffold * settings.scaffoldUnitPrice);
  rows.push(["足場工事費", data.scaffold, "㎡", settings.scaffoldUnitPrice, scaffoldAmount]);

  // アスベスト調査費（固定）
  const surveyAmount = settings.surveyCost;
  rows.push(["アスベスト調査費", 1, "式", surveyAmount, surveyAmount]);

  // 重機回送費（仮：10km以内）
  const transportAmount = settings.machineTransportCost.short;
  rows.push(["重機回送費", 1, "式", transportAmount, transportAmount]);

  // 産廃処分費
  const wasteTypes = [
    ["木くず", data.woodWaste],
    ["ボード類", data.boardWaste],
    ["廃プラ類", data.plasticWaste],
    ["ガラ", data.rubbleWaste],
    ["ガラス", data.glassWaste],
    ["陶器", data.ceramicWaste]
  ];

  for (const [type, qty] of wasteTypes) {
    const unitPrice = settings.wasteUnitPrice[type] || 0;
    const amount = Math.round(qty * unitPrice);
    rows.push([`${type}（処分費）`, qty, "kg", unitPrice, amount]);
  }

  // 合計計算（値引き・有価物は別処理）
  const total = rows.reduce((sum, row) => sum + row[4], 0);

  return { rows, total };
}
