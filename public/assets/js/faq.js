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
var i =1;
Object.keys(obj).map((key , index) =>{
  i = i +1;
  data = obj[key] ;
  console.log("value obtained !") ;
  console.log(data.qestion) ;
  var heado = "heading" + i.toString();
  var collapse = "collapse"+ i.toString();
  console.log(heado);
  $('#questionanswerentries').append(`
  <div class="panel panel-default">
  <div class="panel-heading" role="tab" id="${heado}">
      <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#${collapse}" aria-expanded="true" aria-controls="${collapse}" class="font-bold"> ${data.qestion} </a> </h4> </div>
  <div id="${collapse}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="${heado}">
      <div class="panel-body"> ${data.answer}</div>

  </div>
</div>

`) ;

})

$('#mainTable').editableTableWidget().numericInputExample().find('td:first').focus();
// $('#editable-datatable').editableTableWidget().numericInputExample().find('td:first').focus(); //This makes the table editable
$(document).ready(function () {
    $('#editable-datatable').DataTable();
});

})
