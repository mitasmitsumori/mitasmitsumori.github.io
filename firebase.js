// Firebase初期化
const firebaseConfig = {
  apiKey: "AIzaSyAN1cDb1yBdYBzEXQ2CD8anlih7YuPXggo",
  authDomain: "mitas-estimate.firebaseapp.com",
  projectId: "mitas-estimate",
  storageBucket: "mitas-estimate.appspot.com",
  messagingSenderId: "889863551826",
  appId: "1:889863551826:web:71577461b5b9d810d4188b",
  measurementId: "G-Y0H10QQQ16"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 保存処理
function saveEstimateToFirebase(data) {
  return db.collection("estimates").add(data);
}

// 一覧取得
function fetchEstimatesFromFirebase() {
  return db.collection("estimates").orderBy("timestamp", "desc").get();
}

// ID指定で取得
function fetchEstimateById(id) {
  return db.collection("estimates").doc(id).get();
}

// ID指定で更新
function updateEstimateById(id, data) {
  return db.collection("estimates").doc(id).update(data);
}