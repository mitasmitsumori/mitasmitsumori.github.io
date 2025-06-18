// Firebase 初期化
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase設定（あなたの設定をここに反映）
const firebaseConfig = {
  apiKey: "AIzaSyAN1cDb1yBdYBzEXQ2CD8anlih7YuPXggo",
  authDomain: "mitas-estimate.firebaseapp.com",
  projectId: "mitas-estimate",
  storageBucket: "mitas-estimate.appspot.com",
  messagingSenderId: "889863551826",
  appId: "1:889863551826:web:71577461b5b9d810d4188b",
  measurementId: "G-Y0H10QQQ16"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 保存関数
export async function saveEstimate(data) {
  try {
    const docRef = await addDoc(collection(db, "estimates"), {
      ...data,
      createdAt: serverTimestamp()
    });
    console.log("保存成功: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("保存失敗: ", e);
    throw e;
  }
}