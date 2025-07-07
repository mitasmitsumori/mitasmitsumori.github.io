// MiTASアプリ用 自動計算ロジック

function calculateEstimate(data, settings) {
  const result = { rows: [] };

  const up = settings.unitPrices;
  const fc = settings.fixedCosts;

  // 解体費
  const demolition = Math.round(data.area * (up[data.structure] || 0));
  result.rows.push(["解体工事費", data.area, "㎡", Math.round(up[data.structure] || 0), demolition]);

  // 足場費
  const scaffold = Math.round(data.scaffold * up["足場"]);
  result.rows.push(["足場工事費", data.scaffold, "㎡", up["足場"], scaffold]);

  // 重機回送費
  result.rows.push(["重機回送費", "-", "-", fc["重機回送費"], fc["重機回送費"]]);

  // アスベスト調査費
  result.rows.push(["アスベスト調査費", "-", "-", fc["アスベスト調査費"], fc["アスベスト調査費"]]);

  // 産廃費
  const wastes = [
    ["木くず", data.woodWaste, up.木くず],
    ["ボード類", data.boardWaste, up.ボード類],
    ["廃プラ類", data.plasticWaste, up.廃プラ類],
    ["ガラ", data.rubbleWaste, up.ガラ],
    ["ガラス", data.glassWaste, up.ガラス],
    ["陶器", data.ceramicWaste, up.陶器]
  ];

  for (const [label, qty, unitPrice] of wastes) {
    const cost = Math.round(qty * unitPrice);
    result.rows.push([`${label}（処分費）`, qty, "kg", unitPrice, cost]);
  }

  return result;
}