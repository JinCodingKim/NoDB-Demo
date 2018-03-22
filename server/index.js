const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const charCtrl = require("./controllers/characters_controller");

app.use(json());
app.use(cors());

app.get("/api/characters", charCtrl.getCharacters);
app.post("/api/characters", charCtrl.postCharacter);
app.put("/api/character/:id", charCtrl.updateCharacter);
app.delete("/api/character/:id", charCtrl.deleteCharacter);

app.listen(port, () => console.log(`Listening on: ${port}`));
