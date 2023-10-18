// pages/api/getData.js(データの取得を行うファイル)

// getData.js（データの取得を行うファイル）

import { getFirestore, collection, getDocs } from "firebase/firestore"; // getFirestoreを追加
import firebaseApp from "../fire"; // Firebaseの設定をインポート

// Firestoreデータベースの参照を取得
const db = getFirestore(firebaseApp);

// `mydata`コレクションへの参照を取得
const mydataCollection = collection(db, "mydata");

// データの取得
async function getDataFromFirestore() {
  const querySnapshot = await getDocs(mydataCollection);
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}

export default getDataFromFirestore;
