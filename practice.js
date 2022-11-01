// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAi58a5znMVS9f_CSAThVW8cB4IWKozGXo",
    authDomain: "class-93-quitter.firebaseapp.com",
    databaseURL: "https://class-93-quitter-default-rtdb.firebaseio.com",
    projectId: "class-93-quitter",
    storageBucket: "class-93-quitter.appspot.com",
    messagingSenderId: "147719887222",
    appId: "1:147719887222:web:f3bab2555ad944e6058257"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
    var username= document.getElementById("username").value
    firebase.database().ref("/").child(username).update(
        {
            purpose:"adding user",
            queyet:"owpasd"
        }
    )
  }