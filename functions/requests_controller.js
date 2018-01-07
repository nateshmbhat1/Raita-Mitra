const admin = require("firebase-admin") ; 
const bodyparser = require("body-parser") ; 
const app = require("express")() ; 
const urlencodedParser =bodyparser.urlencoded({extended : true}) ;

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://raita-mitra-2018.firebaseio.com"
// });




module.exports = function Handle_requests(app)
{
	console.log('Request Handler started ! ') ;

	app.get('/' , (req , res)=>{

		res.sendFile(__dirname + '/views/index.html') ; 

	})

	app.get('/home' , (req , res)=>{
		res.sendFile(__dirname + '/views/index.html') ; 
	})


	app.post('/putNPK', urlencodedParser ,(req , res)=>{
		console.log(req.body) ;	
	} )


}