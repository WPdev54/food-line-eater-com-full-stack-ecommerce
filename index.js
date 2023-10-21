const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.port || 5000;
// const ObjectId = require('mongodb').ObjectID

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process?.env?.DB_USER}:${process.env.DB_PASS}@cluster0.xrv2f5n.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const usersCollection = client.db("eaterDB").collection("user")
    const menuCollection = client.db("eaterDB").collection("menu")
    const cartCollection = client.db("eaterDB").collection("carts")

    app.get('/menu', async (req, res) => {
      const result = await menuCollection.find().toArray()
      res.send(result)
    })



    //*cart collection

    app.get('/carts' , async (req,res) => {
      const email = req.query.email;
      if(!email){
        res.send([])
      }
      const query = {email: email}
      const result = await cartCollection.find(query).toArray();
      res.send(result)
    })

    app.post('/carts', async (req, res) => {
      const item = req.body
      // console.log(item);
      const result = await cartCollection.insertOne(item)
      res.send(result)
    })
    app.post('/user', async (req, res) => {
      const user = req.body
      // console.log(item);
      const result = await usersCollection.insertOne(user)
      res.send(result)
    })

    app.delete('/carts/:id', async (req, res) => {
      const _id = req.params.id;
      const query = { _id: new ObjectID(_id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    })



    await client.db("admin").command({ ping: 1 });

    /* console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    ); */
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

/*
!UserName : eater
*Password: XuFWph5eQYgoom51
 */


app.get("/", (req, res) => {
  res.send(`Boss is Coming From Port ${port}`);
});

app.listen(port, () => {
  console.log(`Boss is Coming From Port ${port}`);
});
