function calculateEstimate(data, settings) {
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

  const rows = [];

  // 解体工事費
  const unitPrice = settings.structureUnitPrices[structure] || 0;
  const demolition = Math.round(area * unitPrice);
  rows.push(["解体工事費", area, "㎡", unitPrice, demolition]);

  // 足場費
  const scaffoldPrice = Math.round(scaffold * settings.scaffoldUnitPrice);
  rows.push(["足場工事費", scaffold, "㎡", settings.scaffoldUnitPrice, scaffoldPrice]);

  // 重機回送費（仮：10km以内）
  const transportFee = settings.machineTransportFee["10km以内"];
  rows.push(["重機回送費", 1, "式", transportFee, transportFee]);

  // アスベスト調査費（固定）
  const asbestosFee = settings.asbestosSurveyFee;
  rows.push(["アスベスト調査費", 1, "式", asbestosFee, asbestosFee]);

  // 産廃処分費
  const disposalItems = [
    ["木くず", woodWaste],
    ["ボード類", boardWaste],
    ["廃プラ類", plasticWaste],
    ["ガラ", rubbleWaste],
    ["ガラス", glassWaste],
    ["陶器", ceramicWaste]
  ];

  disposalItems.forEach(([label, qty]) => {
    const unit = "kg";
    const price = settings.disposalUnitPrices[label] || 0;
    const amount = Math.round(qty * price);
    rows.push([`${label}（処分費）`, qty, unit, price, amount]);
  });

  const totalAmount = rows.reduce((sum, row) => sum + row[4], 0);

  return { rows, totalAmount };
}