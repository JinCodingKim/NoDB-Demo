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
    //Change value of birth state with input value
    this.setState({
      name: val
    });
  }

  handleBirth(val) {
    //Change value of birth state with input value
    this.setState({
      birth: val
    });
  }

  handleConfirm() {
    const { newCharacter } = this.props;
    const { name, birth } = this.state;
    //Invoke the newCharacter method that was passed down in props, passing in the new name and birth from state, then set the states back to empty strings
    newCharacter(name, birth);
    this.setState({
      name: "",
      birth: ""
    });
  }

  render() {
    const { name, birth } = this.state;
    return (
      <div className="add-main">
        <h3>Create Character</h3>
        {/*Input Name onChange invoke handleName with the changed value passed in*/}
        <input
          className="add-input"
          placeholder="Name"
          value={name}
          onChange={e => this.handleName(e.target.value)}
        />
        {/*Input Birth onChange invoke handleBirth with the changed value passed in*/}
        <input
          className="add-input"
          placeholder="Birth Year"
          value={birth}
          onChange={e => this.handleBirth(e.target.value)}
        />
        {/*onClick invoke handleConfirm method*/}
        <button className="add-button" onClick={this.handleConfirm}>
          Create
        </button>
      </div>
    );
  }
}

export default AddCharacter;
