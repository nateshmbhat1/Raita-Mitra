
// firebase =  require("firebase") ; 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-HyJyq5vB3kPf3rKYOtdQwpLmZX8v_PA",
    authDomain: "kisanmitra-3895b.firebaseapp.com",
    databaseURL: "https://kisanmitra-3895b.firebaseio.com",
    projectId: "kisanmitra-3895b",
    storageBucket: "kisanmitra-3895b.appspot.com",
    messagingSenderId: "523180486596"
  };
firebase.initializeApp(config);


const txtemail = document.getElementById('email');
const txtpassword = document.getElementById('password');

function myFunction() {
    
    const email = txtemail.value;
    const pass = txtpassword.value;
    const auth = firebase.auth();
    const promise  = auth.signInWithEmailAndPassword(email,pass);
    alert(email);
}
        

firebase.auth().onAuthStateChanged(firebaseUserv=>{
    if(firebaseUserv){
        console.log(firebaseUserv);
        document.getElementById("loginform").action = "dashboard.html";

    }else{
        console.log("No such user ...");
        document.getElementById("loginform").action = "error";
    }
});