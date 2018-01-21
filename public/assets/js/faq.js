var config = {
  apiKey: "AIzaSyB-HyJyq5vB3kPf3rKYOtdQwpLmZX8v_PA",
  authDomain: "kisanmitra-3895b.firebaseapp.com",
  databaseURL: "https://kisanmitra-3895b.firebaseio.com",
  projectId: "kisanmitra-3895b",
  storageBucket: "kisanmitra-3895b.appspot.com",
  messagingSenderId: "523180486596"
};
firebase.initializeApp(config);



ref = firebase.database().ref('/Query') ;
console.log("This is doing ! ") ;
ref.once('value', snap=>{
obj = snap.val() ;
Object.keys(obj).map((key , index) =>{
  var i =1;
  data = obj[key] ;
  console.log("value obtained !") ;
  console.log(data.qestion) ;

  $('#questionanswerentries').append(`
  <tr>
    <td>${i++}</td>
    <td>${data.qestion}</td>
    <td>${data.answer}</td>

    </tr>
`) ;


})

})
