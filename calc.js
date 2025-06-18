function calculateEstimate(data, settings) {
  const result = {
    rows: []
  };

  // 解体工事費
  const demolitionUnitPrice = settings.demolitionUnitPrices[data.structure] || 0;
  const demolitionAmount = Math.round(data.area * demolitionUnitPrice);
  result.rows.push(["解体工事費", data.area, "㎡", demolitionUnitPrice, demolitionAmount]);

  // 足場工事費
  const scaffoldAmount = Math.round(data.scaffold * settings.scaffoldUnitPrice);
  result.rows.push(["足場工事費", data.scaffold, "㎡", settings.scaffoldUnitPrice, scaffoldAmount]);

  // 産廃処分費（各項目）
  const wasteItems = [
    ["木くず", data.woodWaste],
    ["ボード類", data.boardWaste],
    ["廃プラ類", data.plasticWaste],
    ["ガラ", data.rubbleWaste],
    ["ガラス", data.glassWaste],
    ["陶器", data.ceramicWaste]
  ];

  for (const [label, qty] of wasteItems) {
    const unitPrice = settings.wasteDisposalUnitPrices[label] || 0;
    const amount = Math.round(qty * unitPrice);
    result.rows.push([`${label}（処分費）`, qty, "kg", unitPrice, amount]);
  }

  return result;
}