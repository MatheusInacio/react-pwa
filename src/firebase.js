import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAebICQ-sUbHE0ayMNcjveUBVp1NDV3MXI",
  authDomain: "jornada-milhas-a6395.firebaseapp.com",
  projectId: "jornada-milhas-a6395",
  storageBucket: "jornada-milhas-a6395.firebasestorage.app",
  messagingSenderId: "1081974736542",
  appId: "1:1081974736542:web:f7425ec9e1ac6e3d6bdd8f",
};

initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BHm5JN9GIsss3phNha5bRVkAOA03Ru3NA2AOlLzupL3pq1EwckMscttdeHQ6y5V4HVOjZwc44AtV4iwgp59hsPc",
    });
    if (currentToken) {
      console.log(currentToken);
    } else {
      console.log("Nenhum token recebido");
    }
  } catch (err) {
    console.log(err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Notificação em primeiro plano", payload.notification);
      resolve(payload);
    });
  });