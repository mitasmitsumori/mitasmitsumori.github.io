// calc.js

function calculateEstimate(data, settings) {
  const rows = [];
  const u = settings.unitPrices;

  // 解体工事費
  const tanka = u[data.structure] || 0;
  const amount = Math.round(data.area * tanka);
  rows.push(["解体工事費", data.area, "㎡", tanka, amount]);

  // 足場工事費
  const scaffoldAmt = Math.round(data.scaffold * u["足場"]);
  rows.push(["足場工事費", data.scaffold, "㎡", u["足場"], scaffoldAmt]);

  // アスベスト調査費（固定）
  rows.push(["アスベスト調査費", 1, "式", u["アスベスト調査"], u["アスベスト調査"]]);

  // 重機回送費（仮設定）
  const distanceFee = u["重機回送費_10km以内"]; // ※後で自動切替対応
  rows.push(["重機回送費", 1, "式", distanceFee, distanceFee]);

  // 産廃処分費
  const wastes = [
    ["木くず（処分費）", data.woodWaste, "kg", u["木くず"]],
    ["ボード類", data.boardWaste, "kg", u["ボード類"]],
    ["廃プラ類", data.plasticWaste, "kg", u["廃プラ類"]],
    ["ガラ", data.rubbleWaste, "kg", u["ガラ"]],
    ["ガラス", data.glassWaste, "kg", u["ガラス"]],
    ["陶器", data.ceramicWaste, "kg", u["陶器"]]
  ];
  for (const [label, qty, unit, price] of wastes) {
    rows.push([label, qty, unit, price, Math.round(qty * price)]);
  }

  // 発生材運搬費（仮設定）
  rows.push(["木くず（運搬費）", 1, "㎥", u["木くず_運搬"], u["木くず_運搬"]]);

  // 有価物買取（マイナス項目）
  rows.push(["鉄（買取）", 0, "kg", u["鉄"], 0]);
  rows.push(["アルミ（買取）", 0, "kg", u["アルミ"], 0]);

  return { rows };
}