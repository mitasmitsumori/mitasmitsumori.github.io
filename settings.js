const SETTINGS = {
  // 解体費（坪単価 → ㎡換算）
  demolitionUnitPrices: {
    木造: 33000 / 3.3,
    RC造: 50000 / 3.3,
    S造: 33000 / 3.3,
    軽量鉄骨造: 33000 / 3.3
  },

  // 足場費（㎡）
  scaffoldUnitPrice: 600,

  // 重機回送費（距離による）
  machineTransportFee: {
    short: 14000,
    long: 18000,
    far: 35000
  },

  // アスベスト調査費（固定）
  asbestosSurveyFee: 90000,

  // 産廃処分費（鹿児島市／kg）
  wasteUnitPrices: {
    木くず: 16,
    ボード類: 35,
    廃プラ類: 50,
    ガラ: 2,
    ガラス: 10,
    陶器: 20
  },

  // 有価物買取（kg）
  valuableItems: {
    鉄: 25,
    アルミ: 100
  },

  // 発生材運搬費（㎥）
  transportCosts: {
    木くず: 2000,
    コンクリート: 1000,
    廃プラ: 2000,
    ガラス・陶器: 2000,
    石膏ボード: 2000
  }
};