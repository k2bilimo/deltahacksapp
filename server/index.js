const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()
var router = express.Router();
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


  app.post(`/api/pills`,cors(),function(req, res, next){
    console.log("Wowza")
    return res.send('Received a POST HTTP method');
    
})

/*app.set('/', '../src')

const api = require('./api')
app.use('/api', api);
/*client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Abi:<12345>@deltahacks6-1mdlh.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

});*/
//app.set('views', '/Users/Kapil/Desktop/Side Stuff/DeltaHacks/deltahacksapp/src');
console.log(__dirname)
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
//console.log(api)
module.exports = app;