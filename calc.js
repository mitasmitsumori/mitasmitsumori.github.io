// calc.js

function calculateEstimate(data, settings) {
  const prices = settings.unitPrices;
  const rows = [];

  // 解体工事費
  const unitPrice = prices[data.structure] || 0;
  const amount = Math.round(data.area * unitPrice);
  rows.push(["解体工事費", data.area, "㎡", unitPrice, amount]);

  // 足場工事費
  const scaffoldAmount = Math.round(data.scaffold * prices["足場"]);
  rows.push(["足場工事費", data.scaffold, "㎡", prices["足場"], scaffoldAmount]);

  // アスベスト調査費（固定）
  rows.push(["アスベスト調査費", 1, "式", prices["アスベスト調査費"], prices["アスベスト調査費"]]);

  // 重機回送費（例：10km以内の想定。将来は自動切替）
  const machineFee = prices["重機回送費_10km以内"];
  rows.push(["重機回送費", 1, "式", machineFee, machineFee]);

  // 産廃処分費
  const wastes = [
    { label: "木くず", key: "woodWaste", unit: "kg" },
    { label: "ボード類", key: "boardWaste", unit: "kg" },
    { label: "廃プラ類", key: "plasticWaste", unit: "kg" },
    { label: "ガラ", key: "rubbleWaste", unit: "kg" },
    { label: "ガラス", key: "glassWaste", unit: "kg" },
    { label: "陶器", key: "ceramicWaste", unit: "kg" }
  ];

  wastes.forEach(item => {
    const qty = parseFloat(data[item.key] || 0);
    const unitPrice = prices[item.label] || 0;
    const amount = Math.round(qty * unitPrice);
    rows.push([`${item.label}（処分費）`, qty, item.unit, unitPrice, amount]);
  });

  // 有価物買取（例：鉄・アルミ。将来的に追加）
  rows.push(["鉄（有価物）", 0, "kg", prices["鉄"], 0]);
  rows.push(["アルミ（有価物）", 0, "kg", prices["アルミ"], 0]);

  return { rows };
}