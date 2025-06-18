function calculateEstimate(data, SETTINGS) {
  const rows = [];

  // 解体工事費
  const demolitionUnit = SETTINGS.demolitionUnitPrices[data.structure] || 0;
  const demolitionAmount = Math.round(data.area * demolitionUnit);
  rows.push(["解体工事費", data.area, "㎡", demolitionUnit, demolitionAmount]);

  // 足場工事費
  const scaffoldAmount = Math.round(data.scaffold * SETTINGS.scaffoldUnitPrice);
  rows.push(["足場工事費", data.scaffold, "㎡", SETTINGS.scaffoldUnitPrice, scaffoldAmount]);

  // アスベスト調査費（固定）
  const surveyFee = SETTINGS.surveyFee;
  rows.push(["アスベスト調査費", 1, "式", surveyFee, surveyFee]);

  // 重機回送費（仮に10km未満とする）
  const transportFee = SETTINGS.machineTransportFee.under10km;
  rows.push(["重機回送費", 1, "式", transportFee, transportFee]);

  // 産廃処分費（各種）
  const wasteTypes = {
    "木くず": data.woodWaste,
    "ボード類": data.boardWaste,
    "廃プラ類": data.plasticWaste,
    "ガラ": data.rubbleWaste,
    "ガラス": data.glassWaste,
    "陶器": data.ceramicWaste
  };
  for (const [type, qty] of Object.entries(wasteTypes)) {
    const unitPrice = SETTINGS.wasteUnitPrices[type] || 0;
    const amount = Math.round(qty * unitPrice);
    rows.push([`${type}（処分費）`, qty, "kg", unitPrice, amount]);
  }

  // 有価物買取（ここでは仮に0kgとする）
  const recyclableTypes = SETTINGS.recyclableUnitPrices;
  for (const [type, unitPrice] of Object.entries(recyclableTypes)) {
    rows.push([`${type}（買取）`, 0, "kg", unitPrice, 0]);
  }

  // 発生材運搬費（ここでは仮に0㎥とする）
  const transportTypes = SETTINGS.transportFeesPerCubicMeter;
  for (const [type, unitPrice] of Object.entries(transportTypes)) {
    rows.push([`${type}運搬費`, 0, "㎥", unitPrice, 0]);
  }

  return { rows };
}