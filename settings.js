const SETTINGS = {
  demolitionUnitPrices: {
    "木造": 33000,
    "RC造": 50000,
    "S造": 33000,
    "軽量鉄骨造": 33000
  },
  scaffoldUnitPrice: 600, // 円／㎡
  surveyFee: 90000, // アスベスト調査費（固定）
  machineTransportFee: {
    under10km: 14000,
    over10km: 18000,
    over50km: 35000
  },
  wasteUnitPrices: {
    "木くず": 16,
    "ボード類": 35,
    "廃プラ類": 50,
    "ガラ": 2,
    "ガラス": 10,
    "陶器": 20
  },
  recyclableUnitPrices: {
    "鉄": 25,
    "アルミ": 100
  },
  transportFeesPerCubicMeter: {
    "木くず": 2000,
    "コンクリート": 1000,
    "廃プラ": 2000,
    "ガラス・陶器": 2000,
    "石膏ボード": 2000
  }
};