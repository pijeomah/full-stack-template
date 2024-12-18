const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
let db, 
    dbConnectionString = process.env.DB_STRING,//declaring a variable from the env file globally
    dbName='todo',
    collection

    MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to Database`)
        db = client.db(dbName)
        collection = db.collection('todos')
    })