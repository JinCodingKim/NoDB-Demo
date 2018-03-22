const axios = require("axios");
let characters = [];
let newId = 9999;

module.exports = {
  getCharacters: (req, res) => {
    let { number } = req.query;
    if (!number) {
      number = 1;
    }
    if (!characters.length) {
      axios
        .get(`http://swapi.co/api/people/?page=${number}`)
        .then(list => {
          characters = list.data.results;
          res.status(200).json(characters);
        })
        .catch(res => res.status(500).json(res));
    } else {
      res.status(200).json(characters);
    }
  },
  postCharacter: (req, res) => {
    const { name, birth_year } = req.body;
    let url = `https://swapi.co/api/people/${newId}/`;
    characters.push({ url, name, birth_year });
    newId++;
    res.status(200).json(characters);
  },
  updateCharacter: (req, res) => {
    const { id } = req.params;
    const { name, birth_year } = req.body;
    characters.forEach(person => {
      if (person.url.split("/")[5] === id) {
        person.name = name;
        person.birth_year = birth_year;
      }
    });
    res.status(200).json(characters);
  },
  deleteCharacter: (req, res) => {
    const { id } = req.params;
    let index = characters.findIndex(person => person.url.split("/")[5] === id);
    characters.splice(index, 1);
    res.status(200).json(characters);
  }
};
