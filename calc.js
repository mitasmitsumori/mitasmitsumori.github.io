// 計算用関数
function calculateEstimate(data, settings) {
  const prices = settings.unitPrices;
  let rows = [];
  let total = 0;

  const demolitionUnit = prices.demolition[data.structure] || 0;
  const demolition = Math.round(data.area * demolitionUnit);
  rows.push(["解体工事費", data.area, "㎡", demolitionUnit, demolition]);
  total += demolition;

  const scaffold = Math.round(data.scaffold * prices.scaffold);
  rows.push(["足場工事費", data.scaffold, "㎡", prices.scaffold, scaffold]);
  total += scaffold;

  const wasteItems = [
    ["木くず", data.woodWaste, prices.waste["木くず"]],
    ["ボード類", data.boardWaste, prices.waste["ボード類"]],
    ["廃プラ類", data.plasticWaste, prices.waste["廃プラ類"]],
    ["ガラ", data.rubbleWaste, prices.waste["ガラ"]],
    ["ガラス", data.glassWaste, prices.waste["ガラス"]],
    ["陶器", data.ceramicWaste, prices.waste["陶器"]]
  ];

  for (const [label, qty, unitPrice] of wasteItems) {
    const amount = Math.round(qty * unitPrice);
    rows.push([`${label}（処分費）`, qty, "kg", unitPrice, amount]);
    total += amount;
  }

  return { rows, total };
}