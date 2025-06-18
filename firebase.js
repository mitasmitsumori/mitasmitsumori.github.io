// Firebaseの設定（あなたのプロジェクト専用情報）
const firebaseConfig = {
  apiKey: "AIzaSyAN1cDb1yBdYBzEXQ2CD8anlih7YuPXggo",
  authDomain: "mitas-estimate.firebaseapp.com",
  projectId: "mitas-estimate",
  storageBucket: "mitas-estimate.appspot.com",
  messagingSenderId: "889863551826",
  appId: "1:889863551826:web:71577461b5b9d810d4188b",
  measurementId: "G-Y0H10QQQ16"
};

// 初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 見積を保存する
async function saveEstimate(formData) {
  const docRef = await db.collection("estimates").add({
    ...formData,
    timestamp: new Date()
  });
  return docRef.id;
}

// 一覧を取得する
async function getEstimates() {
  const snapshot = await db.collection("estimates").orderBy("timestamp", "desc").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// 1件取得
async function getEstimateById(id) {
  const doc = await db.collection("estimates").doc(id).get();
  return doc.exists ? doc.data() : null;
}

// 見積を更新する
async function updateEstimate(id, data) {
  await db.collection("estimates").doc(id).update(data);
}