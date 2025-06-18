// 単価設定ファイル（MiTAS見積アプリ）

const SETTINGS = {
  demolitionPrices: {
    "木造": 33000,
    "RC造": 50000,
    "S造": 33000,
    "軽量鉄骨造": 33000
  },
  scaffoldPrice: 600, // 円/㎡
  asbestosSurvey: 90000, // 固定費

  transportFees: {
    "10km以内": 14000,
    "10km以上": 18000,
    "50〜60km": 35000
  },

  wasteDisposal: {
    "木くず": 16,     // 円/kg
    "ボード類": 35,
    "廃プラ類": 50,
    "ガラ": 2,
    "ガラス": 10,
    "陶器": 20
  },

  valuableMaterials: {
    "鉄": 25,        // 円/kg（買取）
    "アルミ": 100
  },

  otherCosts: {
    "現場管理費": 30000,
    "所管手続費": 20000,
    "ガス撤去費": 30000,
    "土間基礎解体費": 50000
  }
};