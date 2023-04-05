import express from "express";
import cors from "cors";

import { getAllPlants, addPlant, deletePlant} from "./src/plants.js";

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/plants", getAllPlants);
app.post("/plants", addPlant);
app.delete("/plants", deletePlant);

// api points / routes will go here...

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`)
});