function calculateEstimate(data, settings) {
  const result = { rows: [] };
  let total = 0;

  // 解体工事費
  const unitPrice = settings.unitPrices[data.structure] || 0;
  const demolitionCost = Math.round(data.area * unitPrice / 3.3);
  result.rows.push(["解体工事費", data.area, "㎡", Math.round(unitPrice/3.3), demolitionCost]);
  total += demolitionCost;

  // 足場費
  const scaffoldCost = Math.round(data.scaffold * settings.unitPrices["足場"]);
  result.rows.push(["足場工事費", data.scaffold, "㎡", settings.unitPrices["足場"], scaffoldCost]);
  total += scaffoldCost;

  // 自動計算した発生材ごとの数量と費用
  const wastes = [
    ["木くず", "woodWaste"],
    ["ボード類", "boardWaste"],
    ["廃プラ類", "plasticWaste"],
    ["ガラ", "rubbleWaste"],
    ["ガラス", "glassWaste"],
    ["陶器", "ceramicWaste"]
  ];

  wastes.forEach(([label, key]) => {
    const qty = Math.round(data.area * settings.kgPerSquareMeter[key]);
    const unitPrice = settings.unitPrices[label];
    const amount = Math.round(qty * unitPrice);
    result.rows.push([`${label}（処分費）`, qty, "kg", unitPrice, amount]);
    total += amount;
  });

  result.total = total;
  return result;
}