// pages/fire.js（設定情報格納ファイル）

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebaseアプリケーションのインスタンスを格納する変数
let firebaseApp; 
// 初期化がまだ行われていない場合
if (!firebaseApp) {
  
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APP_ID,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

}

// firebaseApp をエクスポート
export default firebaseApp;