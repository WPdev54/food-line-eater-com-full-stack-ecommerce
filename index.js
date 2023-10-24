const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const port = process.env.port || 5000;
// const ObjectId = require('mongodb').ObjectID

//middlewares

app.use(cors());
app.use(express.json());

//verifyJWT

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: 'forbidden access' })
  }

  //bearer token
  const token = authorization.split(' ')[1]

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: true, message: 'forbidden access' })
    }
    req.decoded = decoded;
    next()
  })


}

//using MongoDB ⏬

const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process?.env?.DB_USER}:${process.env.DB_PASS}@cluster0.xrv2f5n.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//Using Mongodb ⬆️

async function run() {
  try {
    await client.connect();


    //All collections

    const usersCollection = client.db("eaterDB").collection("user")
    const menuCollection = client.db("eaterDB").collection("menu")
    const cartCollection = client.db("eaterDB").collection("carts")

    // JWT POST API

    const verifyAdmin = async (req , res , next) => {
      const email = req.decoded.email
      const query =  {email : email}
      const user = await usersCollection.findOne(query)
      if(user?.role !== 'admin'){
        res.status(403).send({error: true , message: 'forbidden Access'})
      }
      next()
    }

    app.post('/jwt', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,)
      res.send({ token })
    })

    // menu item api

    app.get('/menu', async (req, res) => {
      const result = await menuCollection.find().toArray()
      res.send(result)
    })



    // cart collection api

    app.get('/carts', verifyJWT, async (req, res) => {
      const email = req.query.email;



      if (!email) {
        res.send([])
      }

      const decodedEmail = req.decoded.email
      if (email !== decodedEmail) {
        return res.status(403).send({ error: true, message: 'forbidden access' })
      }

      const query = { email: email }
      const result = await cartCollection.find(query).toArray();
      res.send(result)
    })

    //add to cart api

    app.post('/carts', async (req, res) => {
      const item = req.body
      // console.log(item);
      const result = await cartCollection.insertOne(item)
      res.send(result)
    })

    //getting user api

    app.get('/user', verifyJWT , verifyAdmin , async (req, res) => {
      const result = await usersCollection.find().toArray()
      res.send(result)
    })

    //get admin user // verify admin user

    app.get('/user/admin/:email', verifyJWT, async (req, res) => {
      const email = req.params.email

      if (req.decoded.email !== email) {
        res.send({ admin: false })
      }

      const query = { email: email }
      const user = await usersCollection.findOne(query)
      const result = { admin: user?.role === 'admin' }
      res.send(result)
    })

    //Add user data

    app.post('/user', async (req, res) => {
      const user = req.body
      // console.log(item);
      const result = await usersCollection.insertOne(user)
      res.send(result)
    })

    //update user role to admin

    app.patch('/user/admin/:id', async (req, res) => {
      const _id = req.params.id;
      console.log(_id);
      const filter = { _id: new ObjectId(_id) };
      const options = { upsert: true };

      // Specify the update to set a value for the plot 

      const updateDoc = {
        $set: {
          role: 'admin'
        },
      };

      const result = await usersCollection.updateOne(filter, updateDoc, options);
      res.send(result);

    })


    // delete from cart

    app.delete('/carts/:id', async (req, res) => {
      const _id = req.params.id;
      const query = { _id: new ObjectId(_id) };
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

// Security

/* 
!UserName : eater
Password: XuFWph5eQYgoom51
 */


app.get("/", (req, res) => {
  res.send(`Boss is Coming From Port ${port}`);
});


app.listen(port, () => {
  console.log(`Boss is Coming From Port ${port}`);
});
