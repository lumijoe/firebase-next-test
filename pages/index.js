// index.js(エントリポイント)
import firebaseApp from "./fire"; // fire.jsをインポート
import getDataFromFirestore from "./api/getData";
import React from "react";

// Firebaseを初期化
const app = firebaseApp;

// getDataFromFirestore を使用
//　データの取得
getDataFromFirestore().then((data) => {
  
  // データをconsole.logで表示
  console.log(data);
  
});

function MyPage() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a sample React component.</p>
    </div>
  );

}
export default MyPage;