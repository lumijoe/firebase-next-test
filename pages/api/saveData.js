// pages/api/saveData.js(データの保存を行うファイル)
import { collection, addDoc } from "firebase/firestore";
import firebaseApp from "../fire"; // Firebaseの設定をインポート

// Firestoreデータベースの参照を取得
const db = getFirestore(firebaseApp);

// `mydata`コレクションへの参照を取得
const mydataCollection = collection(db, "mydata");

// データを保存
async function addDataToFirestore(data) {
  const docRef = await addDoc(mydataCollection, data);
  console.log("Document written with ID: ", docRef.id);
}

export default addDataToFirestore;
