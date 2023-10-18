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
      <h1>テストページ</h1>
      <h2>Firebase API データ取得, 環境変数設定</h2>
      <p>コンソールログで確認できます</p>
    </div>
  );

}
export default MyPage;