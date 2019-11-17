import firebase from 'firebase';


const askForPermissionToReceiveNotifications = async (messaging) => {
  try {
    if(localStorage.getItem('fbToken')) {
      console.log('already have token, not initializing token');
      console.log('fbToken : ', localStorage.getItem('fbToken'));
      return Promise.resolve(true);
    } else {
      return messaging.requestPermission()
        .then(permission => {
          console.log('got permission');
          console.log(permission);
          return messaging.getToken()
        })
        .then(token => {
          console.log('token acquired');
          console.log('fbToken : ', token);
          localStorage.setItem('fbToken', token);
        }).catch(error => console.log('error from firebase ' + error.toString()))
    }
  } catch (error) {
    console.error(error);
  }
}

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
      askForPermissionToReceiveNotifications(messaging)
        .then(token => {
          console.log('starting onMessage');
          messaging.onMessage(message => {
            console.log('got message');
            console.log(message);
          })
        });
    });
};
