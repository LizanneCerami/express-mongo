import {db} from "./connectDB.js";
import { ObjectId } from "mongodb";

const coll = db.collection("plants");

// CRUD: GET - read
export async function getAllPlants(req, res) {
  const plants = await coll.find({}).toArray();
  res.send(plants);
}

// CRUD: POST - create
export async function addPlant(req, res) {
  const newPlant = req.body;
  await coll.insertOne(newPlant);
  res.status(201).send({message: "new plant added"});
}

// CRUD: DELETE - delete
export async function deletePlant(req, res) {
  const docId = { "_id": new ObjectId(req.params.docId) };

  await coll.deleteOne(docId);
  res.status(201).send( {message: "plant has been deleted"});
}

