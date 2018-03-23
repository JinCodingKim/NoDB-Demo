const axios = require("axios");
//Initial values
let characters = [];
let newId = 9999;

module.exports = {
  getCharacters: (req, res) => {
    //If characters does not have a length, go fetch characters from the swapi api and send the response
    if (!characters.length) {
      axios
        .get(`http://swapi.co/api/people`)
        .then(list => {
          characters = list.data.results;
          res.status(200).json(characters);
        })
        .catch(res => res.status(500).json(res));
    } else {
      //Otherwise just send the characters
      res.status(200).json(characters);
    }
  },
  postCharacter: (req, res) => {
    const { name, birth_year } = req.body;
    //Setting url variable to be the string with the newId value passed within it - because swapi api does not give numbers to refer to a character
    let url = `https://swapi.co/api/people/${newId}/`;
    //Adding a new object with a url,name,birth_year properties and values
    characters.push({ url, name, birth_year });
    newId++;
    //Then send the characters
    res.status(200).json(characters);
  },
  updateCharacter: (req, res) => {
    const { id } = req.params;
    const { name, birth_year } = req.body;
    //From characters, find the object that has the matching id as the parameter, then give name and birth_year property new values
    characters.forEach(person => {
      if (person.url.split("/")[5] === id) {
        person.name = name;
        person.birth_year = birth_year;
      }
    });
    //Then send the characters
    res.status(200).json(characters);
  },
  deleteCharacter: (req, res) => {
    const { id } = req.params;
    //From characters, find the index of the object where its id matches the id on the parameter, then take that object out
    let index = characters.findIndex(person => person.url.split("/")[5] === id);
    characters.splice(index, 1);
    //Then send the characters
    res.status(200).json(characters);
  }
};
