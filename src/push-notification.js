import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBe8YQqiuD7-RYggrzteB6XywS3WK7SUsE",
    authDomain: "qoco-f93fb.firebaseapp.com",
    databaseURL: "https://qoco-f93fb.firebaseio.com",
    projectId: "qoco-f93fb",
    storageBucket: "qoco-f93fb.appspot.com",
    messagingSenderId: "333546165863",
    appId: "1:333546165863:web:8c2a3e708e872dcf9666c2",
    measurementId: "G-KWN0DYZZK2"
  });

  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/worker.js`)
    .then((registration) => {
      console.log('registering service worker');
      const messaging = firebase.messaging();
      messaging.useServiceWorker(registration);

      messaging.onMessage(message => {
        console.log('got message');
        console.log(message);
      })
    });
}

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}

