// firebase.js

// Firebase初期化（あなたの構成情報）
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

// 保存処理（見積データをFirebaseへ）
async function saveEstimate(data) {
  const docRef = await db.collection("estimates").add({
    ...data,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  return docRef.id;
}

// 取得処理（すべての見積一覧を取得）
async function getAllEstimates() {
  const snapshot = await db.collection("estimates").orderBy("timestamp", "desc").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// 単一取得（ID指定で取得）
async function getEstimateById(id) {
  const doc = await db.collection("estimates").doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
}

// 更新処理（編集・保存）
async function updateEstimate(id, newData) {
  await db.collection("estimates").doc(id).update(newData);
}