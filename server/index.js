const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const app = express();

//Port
const port = 3001;

//Importing characters_controllers for endpoints
const charCtrl = require("./controllers/characters_controller");

//Middlewares
app.use(json());
app.use(cors());

//Endpoints
app.get("/api/characters", charCtrl.getCharacters);
app.post("/api/characters", charCtrl.postCharacter);
app.put("/api/character/:id", charCtrl.updateCharacter);
app.delete("/api/character/:id", charCtrl.deleteCharacter);

//Server Listening
app.listen(port, () => console.log(`Listening on: ${port}`));
