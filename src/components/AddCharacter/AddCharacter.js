import React, { Component } from "react";
import "./AddCharacter.css";

class AddCharacter extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      birth: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handleBirth = this.handleBirth.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleName(val) {
    this.setState({
      name: val
    });
  }

  handleBirth(val) {
    this.setState({
      birth: val
    });
  }

  handleConfirm() {
    const { newCharacter } = this.props;
    const { name, birth } = this.state;
    newCharacter(name, birth);
    this.setState({
      name: "",
      birth: ""
    });
  }

  render() {
    return (
      <div className="add-main">
        <h3>Create Character</h3>
        <input
          className="add-input"
          placeholder="Name"
          onChange={e => this.handleName(e.target.value)}
        />
        <input
          className="add-input"
          placeholder="Birth Year"
          onChange={e => this.handleBirth(e.target.value)}
        />
        <button className="add-button" onClick={this.handleConfirm}>
          Create
        </button>
      </div>
    );
  }
}

export default AddCharacter;
