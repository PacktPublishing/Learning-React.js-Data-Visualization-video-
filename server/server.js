const express = require('express');
const mongojs = require('mongojs');

const app = express();
const db = mongojs('ChartsDB',['charts']);

app.get('/chart.json',(req,res) =>{
	db.charts.find({_id:mongojs.ObjectId("578a7c835df8a2cef0428e02")}, (err,r) =>{
		if(err){
			res.sendStatus(404);
		}else{
			res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");
  		res.send(JSON.stringify(r[0]));
		}
	});
});


app.listen(3001, function(){
	console.log("we are running on prot 3001!");
});