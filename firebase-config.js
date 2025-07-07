// MiTASアプリ用 Firebase設定ファイル

const firebaseConfig = {
  apiKey: "AIzaSyAN1cDb1yBdYBzEXQ2CD8anlih7YuPXggo",
  authDomain: "mitas-estimate.firebaseapp.com",
  projectId: "mitas-estimate",
  storageBucket: "mitas-estimate.appspot.com",
  messagingSenderId: "889863551826",
  appId: "1:889863551826:web:71577461b5b9d810d4188b",
  measurementId: "G-Y0H10QQQ16"
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();