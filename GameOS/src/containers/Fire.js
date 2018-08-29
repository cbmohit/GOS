import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAgJUavB5gpmpfm0uVu8Vl_FLqskHVhtco",
    authDomain: "gameos-50b28.firebaseapp.com",
    databaseURL: "https://gameos-50b28.firebaseio.com",
    projectId: "gameos-50b28",
    storageBucket: "gameos-50b28.appspot.com",
    messagingSenderId: "990883432414"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
