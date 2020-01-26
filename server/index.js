const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000
const app = express()
const assert = require("assert")
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Abi:12345@deltahacks6-1mdlh.gcp.mongodb.net/test?retryWrites=true&w=majority";

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders : (res,path,stat) => {
        res.set('Access-Control-Allow-Methods', 'POST')
        res.set('Access-Control-Allow-Headers','access-control-allow-origin,content-type')
        res.set('Access-Control-Allow-Origin', '*')
    }
  }
app.use(express.static('../',options))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json())
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });


  app.post(`/api/pills`,function(req, res, next){
    console.log(req.body)
    const client = new MongoClient(uri, { useNewUrlParser: true});
    client.connect(err => {
      var collection = client.db("DeltaHacks6DB").collection("Pills");
      
      collection.insertOne({index: 4 , name: req.body.name, description: req.body.description, isDispensed: req.body.isDispensed, times: req.body.Times}, function(err, result){
        console.log(err)
        assert.equal(err, null)
        assert.equal(1, result.insertedCount)
        console.log(result)
      })
      // perform actions on the collection object
      client.close();
})
return res.send(`Successfully sent ${req.body} to the mongoDB`);
});
//app.set('views', '/Users/Kapil/Desktop/Side Stuff/DeltaHacks/deltahacksapp/src');
console.log(__dirname)
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
//console.log(api)
module.exports = app;