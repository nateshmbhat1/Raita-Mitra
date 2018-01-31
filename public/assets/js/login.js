
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
const loginButton = document.getElementById('login_btn');
loginButton.addEventListener('click',e=>{
        const email = txtemail.value;
        const pass = txtpassword.value;
        const auth = firebase.auth();
        const promise  = auth.signInWithEmailAndPassword(email,pass);

});
firebase.auth().onAuthStateChanged(firebaseUserv=>{
    if(firebaseUserv){
        console.log(firebaseUserv);
        document.getElementById('loginform').submit();

    }else{
        console.log("No such user ...");
    }
});