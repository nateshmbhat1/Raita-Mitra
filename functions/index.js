const admin = require("firebase-admin") ; 
const express = require("express") ; 
const app = require("express")() ; 
const bodyparser = require("body-parser") ; 
const functions = require("firebase-functions") ;
const request_controller = require("./requests_controller") ; 


app.use(express.static('../public')) ;
app.use(express.static('../public/assets')) ; 

request_controller(app) ; 

// app.use((req ,res , next)=>{
//     res.status(404).redirect('404.html') ; 
// })

app.listen(8000) ; 

exports.app = functions.https.onRequest(app) ;