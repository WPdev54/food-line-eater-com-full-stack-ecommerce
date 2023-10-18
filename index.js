const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.port || 5500;

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

    const menuCollection = client.db("eaterDB").collection("menu")

    app.get('/menu' , async(req , res) =>{
        const result = await menuCollection.find().toArray()
        res.send(result)
    })

    await client.db("admin").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

/*
!UserName : eater
*Password: XuFWph5eQYgoom51
 */

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Boss is Coming From Port ${port}`);
});

app.listen(port, () => {
  console.log(`Boss is Coming From Port ${port}`);
});
