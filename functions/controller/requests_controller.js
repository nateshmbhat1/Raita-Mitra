const admin = require("firbase-admin") ; 
const bodyparser = require("body-parser") ; 
const app = require("express")() ; 
const urlencodedParser =bodyparser.urlencoded({extended : true}) ;

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://raita-mitra-2018.firebaseio.com"
});

module.exports = function Handle_requests()
{



	app.get('/' , (req , res)=>{

		res.sendFile('../views/index.html') ; 

	})

	app.get('/home' , (req , res)=>{
		res.sendFile('../views/index.html') ; 
	})


	app.post('/putNPK', urlencodedParser ,(req , res)=>{
			
	} )


}