import {db} from "./connectDB.js"

export async function getAllPlants(req, res) {
  const plants = await db.collection("plants").find({}).toArray();

  res.send(plants);
}

export async function addPlant(req, res) {
  const newPlant = req.body
  await db.collection("plants").insertOne(newPlant);
  res.status(201).send({message: "new plant added"});
}