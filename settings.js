// settings.js

const PRICES = {
  demolitionPerTsubo: {
    "木造": 33000,
    "RC造": 50000,
    "S造": 33000,
    "軽量鉄骨造": 33000,
  },
  scaffoldPerM2: 600,
  asbestosSurvey: 90000,
  machineTransport: {
    short: 14000,  // 10km以内
    medium: 18000, // 10km以上
    long: 35000,   // 50〜60km
  },
  wasteDisposal: {
    wood: 16,
    board: 35,
    plastic: 50,
    rubble: 2,
    glass: 10,
    ceramic: 20,
  },
  resaleMaterials: {
    iron: 25,
    aluminum: 100,
  },
  transportation: {
    wood: 2000,
    concrete: 1000,
    plastic: 2000,
    glassCeramic: 2000,
    board: 2000,
  }
};