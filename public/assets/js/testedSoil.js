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



ref = firebase.database().ref('/Soil Sample') ;
console.log("This is doing ! ") ;
ref.once('value', snap=>{
  obj = snap.val() ;
  Object.keys(obj).map((sample_no , index) =>{
    data = obj[sample_no] ;
    console.log("value obtained !") ;
    console.log(data.status) ; 
    
    $('#soil_data_entries').append(`
    <tr>
      <td>${sample_no}</td>
      <td><a href="javascript: void(0);" target="_blank" data-toggle="modal" data-id=${sample_no} data-target="#addDetails">${"NAME"}</a></td>
      <td>${data.phone}</td>
      ${(data.status=="pending")?`<td><span class="label label-danger">pending</span></td></tr>
    `:`<td><span class="label label-success">${data.status}</span></td>`}
      </tr>
  `) ; 

   
  })
  
})