function calculateEstimate(data, settings) {
  const rows = [];

  // 解体工事費
  const structureUnitPrice = settings.demolitionUnitPrices[data.structure] || 0;
  const demolitionAmount = Math.round(data.area * structureUnitPrice);
  rows.push(["解体工事費", data.area, "㎡", structureUnitPrice, demolitionAmount]);

  // 足場工事費
  const scaffoldAmount = Math.round(data.scaffold * settings.scaffoldUnitPrice);
  rows.push(["足場工事費", data.scaffold, "㎡", settings.scaffoldUnitPrice, scaffoldAmount]);

  // アスベスト調査費（固定）
  rows.push(["アスベスト調査費", 1, "式", settings.asbestosSurveyFee, settings.asbestosSurveyFee]);

  // 重機回送費（仮に10km以内とする）
  rows.push(["重機回送費", 1, "式", settings.machineTransportFee.within10km, settings.machineTransportFee.within10km]);

  // 産廃処分費
  const sanpai = settings.sanpaiPrices;
  rows.push(["木くず（処分費）", data.woodWaste, "kg", sanpai.wood, Math.round(data.woodWaste * sanpai.wood)]);
  rows.push(["ボード類", data.boardWaste, "kg", sanpai.board, Math.round(data.boardWaste * sanpai.board)]);
  rows.push(["廃プラ類", data.plasticWaste, "kg", sanpai.plastic, Math.round(data.plasticWaste * sanpai.plastic)]);
  rows.push(["ガラ", data.rubbleWaste, "kg", sanpai.rubble, Math.round(data.rubbleWaste * sanpai.rubble)]);
  rows.push(["ガラス", data.glassWaste, "kg", sanpai.glass, Math.round(data.glassWaste * sanpai.glass)]);
  rows.push(["陶器", data.ceramicWaste, "kg", sanpai.ceramic, Math.round(data.ceramicWaste * sanpai.ceramic)]);

  // 有価物買取
  const recycled = settings.recyclablePrices;
  rows.push(["鉄（有価物）", data.ironWeight, "kg", recycled.iron, -Math.round(data.ironWeight * recycled.iron)]);
  rows.push(["アルミ（有価物）", data.aluminumWeight, "kg", recycled.aluminum, -Math.round(data.aluminumWeight * recycled.aluminum)]);

  return { rows };
}