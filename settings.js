// 単価設定（変更可能）
const SETTINGS = {
  structureUnitPrices: {
    "木造": 33000,
    "RC造": 50000,
    "S造": 33000,
    "軽量鉄骨造": 33000
  },
  scaffoldUnitPrice: 600, // 円/㎡
  asbestosSurveyFee: 90000, // 固定費

  machineTransportFee: {
    "10km以内": 14000,
    "10km以上": 18000,
    "50〜60km": 35000
  },

  disposalUnitPrices: {
    "木くず": 16,       // 円/kg
    "ボード類": 35,
    "廃プラ類": 50,
    "ガラ": 2,
    "ガラス": 10,
    "陶器": 20
  },

  recyclePurchasePrices: {
    "鉄": 25,    // 円/kg
    "アルミ": 100
  },

  transportVolumePrices: {
    "木くず": 2000,    // 円/㎥
    "コンクリート": 1000,
    "廃プラ": 2000,
    "ガラス・陶器": 2000,
    "石膏ボード": 2000
  }
};