const { MongoClient } = require('mongodb');
import path from 'path'; require('dotenv').config({path: path.join(__dirname, "..", "env", ".env")})

const client = new MongoClient(process.env.DB_CONN_STRING);

export const dbConnect = async (req, _, next) => {
  console.log("Connecting..."); 
  client.connect()
    .then(clientConnection => {console.log("...cluster found"); return clientConnection.db(process.env.DB_NAME)})
    .then(db => {console.log("...db found"); return db.collection(process.env.COLLECTION_NAME)})
    .then(collection => {console.log("...collection found"); return collection.find({}).toArray()})
    .then(data => {console.log("...data found"); req.body.db = data})
    .catch(err => {console.log(`...error encountered:\n\t${err.message}`); return req.body.error = err.message})
    .finally(() => {client.close(); console.log('Connection attempt ended\n'); return next()})
}