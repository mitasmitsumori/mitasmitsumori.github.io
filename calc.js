function calculateEstimate(data, settings) {
  const rows = [];

  const structure = data.structure;
  const area = data.area;
  const scaffold = data.scaffold;

  const wastes = {
    "木くず": data.woodWaste,
    "ボード類": data.boardWaste,
    "廃プラ類": data.plasticWaste,
    "ガラ": data.rubbleWaste,
    "ガラス": data.glassWaste,
    "陶器": data.ceramicWaste
  };

  // 解体工事費
  if (structure in settings.structureUnitPrice) {
    const unitPrice = settings.structureUnitPrice[structure];
    const amount = Math.round(area * unitPrice);
    rows.push(["解体工事費", area, "㎡", unitPrice, amount]);
  }

  // 足場費
  const scaffoldAmount = Math.round(scaffold * settings.scaffoldUnitPrice);
  rows.push(["足場工事費", scaffold, "㎡", settings.scaffoldUnitPrice, scaffoldAmount]);

  // 産廃
  for (const [wasteName, quantity] of Object.entries(wastes)) {
    if (quantity > 0 && wasteName in settings.wasteUnitPrices) {
      const unitPrice = settings.wasteUnitPrices[wasteName];
      const amount = Math.round(quantity * unitPrice);
      rows.push([`${wasteName}（処分費）`, quantity, "kg", unitPrice, amount]);
    }
  }

  return { rows };
}