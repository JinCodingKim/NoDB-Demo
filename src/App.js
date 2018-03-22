import React, { Component } from "react";
import axios from "axios";
import Character from "./components/Character/Character";
import AddCharacter from "./components/AddCharacter/AddCharacter";
import "./App.css";
import logo from "./logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
    this.updateCharacter = this.updateCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.newCharacter = this.newCharacter.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/characters")
      .then(res => {
        console.log(res);
        this.setState({
          characters: res.data
        });
      })
      .catch(console.log);
  }

  updateCharacter(id, name, birth_year) {
    axios
      .put(`/api/character/${id}`, { name, birth_year })
      .then(res => {
        this.setState({
          characters: res.data
        });
      })
      .catch(console.log);
  }

  deleteCharacter(id) {
    axios
      .delete(`/api/character/${id}`)
      .then(res => {
        this.setState({
          characters: res.data
        });
      })
      .catch(console.log);
  }

  newCharacter(name, birth_year) {
    axios
      .post("/api/characters", { name, birth_year })
      .then(res => {
        this.setState({
          characters: res.data
        });
      })
      .catch(console.log);
  }

  render() {
    const { characters } = this.state;
    let charList = characters.map(character => {
      let id = character.url.split("/")[5];
      return (
        <Character
          key={id}
          id={id}
          name={character.name}
          birth={character.birth_year}
          updateCharacter={this.updateCharacter}
          deleteCharacter={this.deleteCharacter}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img id="logo" src={logo} alt="" />
        </header>
        <div className="App-body">
          <div className="add-container">
            <AddCharacter newCharacter={this.newCharacter} />
          </div>
          <h3>Character List</h3>
          <div className="card-container">{charList}</div>
        </div>
      </div>
    );
  }
}

export default App;
