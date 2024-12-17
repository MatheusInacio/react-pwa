/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAebICQ-sUbHE0ayMNcjveUBVp1NDV3MXI",
  authDomain: "jornada-milhas-a6395.firebaseapp.com",
  projectId: "jornada-milhas-a6395",
  storageBucket: "jornada-milhas-a6395.firebasestorage.app",
  messagingSenderId: "1081974736542",
  appId: "1:1081974736542:web:f7425ec9e1ac6e3d6bdd8f",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Notificação em segundo plano", payload.notification);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});