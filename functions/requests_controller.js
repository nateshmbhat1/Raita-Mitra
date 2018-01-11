const admin = require("firebase-admin") ; 
const bodyparser = require("body-parser") ; 
const app = require("express")() ; 
const urlencodedParser =bodyparser.urlencoded({extended : true}) ;
// const posthandler = require("posthandler") ;
// const gethandler = require("gethandler") ;


var serviceAccount = require("C:/Users/Natesh/Documents/raita-mitra-2018-firebase-adminsdk (acnt nateshmbhat1).json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://raita-mitra-2018.firebaseio.com"
});



//Validates POST request body and checks if the request contains all the keys('strings') in the array sent as keys argument
function validatePostBody(req , res , keys ){
    for(i in keys){
        if(!(keys[i] in req.body))
        {
            console.log("invalid post request returning ! ") ; 
            return false ; 
        }
    }
    return true ; 
}



module.exports = function Handle_requests(app)
{
	console.log('Request Handler started ! ') ;

	app.get('/' , (req , res)=>{
		res.sendFile(__dirname + '/index.html') ; 
	})

	app.get('/home' , (req , res)=>{
		res.sendFile(__dirname + '/index.html') ; 
	})


	app.post('/putNPK', urlencodedParser ,(req , res)=>{
		if(!validatePostBody(req , res , ['fertilizer' ,'crop' , 'nitrogen' , 'phone' , 'phosphorus' , 'potassium'])) return ;  

		ref = admin.database().ref('/users/' + req.body.phone) ; 
		ref.set(req.body) ;
		console.log("Added to firebase database") ;
		res.status(200).redirect('/') ;
		
		admin.messaging().sendToTopic('global' , {
			notification : {
				title : 'Farmer Project' ,
				body : 'notification body'
			} , 
			data : {
				nitrogen : req.body.nitrogen
			}
		})

	} )

}