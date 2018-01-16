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


	app.post('/updateSampleDetails' ,urlencodedParser , (req ,res)=>{
		console.log(req.body) ; 
		//TODO : validate the post request 
		ref = admin.database().ref('/Soil Sample/' + req.body.sampleno) ;

		data = req.body ; 
		delete data.sample_no ; 
		delete data.collected_data ; 	

		// data.status = "completed" ; 
		console.log("Data is : ") ; 
		console.log(data) ;
		ref.update(data) ; 

		console.log("updated to firebase database") ;
		res.status(200).redirect('UntestedSoil.html') ;


	})


	app.post('/addTestSample', urlencodedParser ,(req , res)=>{
		if(!validatePostBody(req , res , ['phone' ,'survey_num' , 'khasra_num' , 'irrigated' , 'position' , 'farm_size'])) return ;  

		ref = admin.database().ref('/Soil Sample/' + req.body.survey_num) ; 

		data = req.body ; 
		today = new Date() ; 
		data.collected_data =  today.toDateString() ; 
		delete data.survey_num ;
		
		[ "pH" , "nitrogen" , "phosphorus" , "potassium" , "cropSuggested" , "fertilizerComb1" , "fertilizerComb2","EC", 
		"sulphur" , "zinc" , "boron" , "iron" , "manganese" , "copper"].forEach(ele=>{
			data[ele] = '' ; 
		})
		data.status = "pending" ; 

		console.log(data) ;
		ref.set(data) ; 


		console.log("Added to firebase database") ;
		res.status(200).redirect('index3.html') ;
		
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