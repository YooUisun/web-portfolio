import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBy6Du5vXn5sbK93Sqe__xKLaYL59lODXw",
  authDomain: "uisun-s-portfolio.firebaseapp.com",
  projectId: "uisun-s-portfolio",
  storageBucket: "uisun-s-portfolio.appspot.com",
  messagingSenderId: "750271347532",
  appId: "1:750271347532:web:c1d275b60c3696ffe02de9",
  measurementId: "G-MHC9PTGCFD"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 방문자 수 읽기
export const getVisitorCount = async () => {
  const countRef = ref(database, 'visitorCount');
  const snapshot = await get(countRef);
  return snapshot.val() || 0; // 없으면 0으로 초기화
};

// 방문자 수 증가시키기
export const incrementVisitorCount = async () => {
  const countRef = ref(database, 'visitorCount');
  const currentCount = await getVisitorCount();
  
  // 현재 방문자 수에 1을 더한 값을 저장
  await set(countRef, currentCount + 1);
};

export { database, ref, set, get };
