const admin = require("firebase-admin") ; 
const bodyparser = require("body-parser") ; 
const app = require("express")() ; 
const urlencodedParser =bodyparser.urlencoded({extended : true}) ;

var serviceAccount = require("C:/Users/Natesh/Documents/raita-mitra-2018-firebase-adminsdk (acnt nateshmbhat1).json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://raita-mitra-2018.firebaseio.com"
});




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

		ref = admin.database().ref('/users/' + req.body.phone) ; 
		ref.set(req.body) ;
		console.log("Added to firebase database") ;
		res.status(200).redirect('/') ;

	} )


}