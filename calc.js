function calculateEstimate(data, settings) {
  const rows = [];
  let total = 0;

  const demolitionUnitPrice = settings.demolitionUnitPrices[data.structure] || 0;
  const demolitionAmount = Math.round(data.area * demolitionUnitPrice);
  rows.push(["解体工事費", data.area, "㎡", demolitionUnitPrice, demolitionAmount]);
  total += demolitionAmount;

  const scaffoldAmount = Math.round(data.scaffold * settings.scaffoldUnitPrice);
  rows.push(["足場工事費", data.scaffold, "㎡", settings.scaffoldUnitPrice, scaffoldAmount]);
  total += scaffoldAmount;

  const wasteItems = [
    ["木くず", data.woodWaste, "kg", settings.wasteDisposalUnitPrices["木くず"]],
    ["ボード類", data.boardWaste, "kg", settings.wasteDisposalUnitPrices["ボード類"]],
    ["廃プラ類", data.plasticWaste, "kg", settings.wasteDisposalUnitPrices["廃プラ類"]],
    ["ガラ", data.rubbleWaste, "kg", settings.wasteDisposalUnitPrices["ガラ"]],
    ["ガラス", data.glassWaste, "kg", settings.wasteDisposalUnitPrices["ガラス"]],
    ["陶器", data.ceramicWaste, "kg", settings.wasteDisposalUnitPrices["陶器"]]
  ];

  for (const [label, qty, unit, unitPrice] of wasteItems) {
    const amount = Math.round(qty * unitPrice);
    rows.push([`${label}（処分費）`, qty, unit, unitPrice, amount]);
    total += amount;
  }

  return { rows, total };
}