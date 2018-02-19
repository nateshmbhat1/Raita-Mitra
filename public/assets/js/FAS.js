
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


  ref = firebase.database().ref('/Farm Advisory Statistics/') ;
  console.log("This is doing great in FarmerList.html ! ") ;
  ref.once('value', snap=>{
  obj = snap.val() ;
  var i =1;
  Object.keys(obj).map((key , index) =>{
    i = i +1;
    data = obj[key] ;
    console.log("value obtained !") ;
    console.log(data.name);

    
   
    $('#farmerEntries').append(`
    <tr>
    <td class="text-center">1</td>
    <td>${data.name}
        <br/><span class="text-muted">Texas, Unitedd states</span></td>
    <td>Visual Designer
        <br/><span class="text-muted">Past : teacher</span></td>
    <td>${data.email}
        <br/><span class="text-muted">999 - 444 - 555</span></td>
    <td>15 Mar 1988
        <br/><span class="text-muted">10: 55 AM</span></td>
    <td>
    ${data.category}
    </td>
    <td>
        <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-key"></i></button>
        <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-trash"></i></button>
        <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-5"><i class="ti-pencil-alt"></i></button>
        <button type="button" class="btn btn-info btn-outline btn-circle btn-lg m-r-20"><i class="ti-upload"></i></button>
    </td>
</tr>
    
  
  `) ;
  
  })
  
  $('#mainTable').editableTableWidget().numericInputExample().find('td:first').focus();
  // $('#editable-datatable').editableTableWidget().numericInputExample().find('td:first').focus(); //This makes the table editable
  $(document).ready(function () {
      $('#editable-datatable').DataTable();
  });
  
  })
  
    