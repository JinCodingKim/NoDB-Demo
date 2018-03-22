import React, { Component } from "react";
import "./Character.css";

class Character extends Component {
  constructor(props) {
    super();
    //Set initial state of the name and birth to be the name and birth passed down in props
    //The inputSwitch will create conditional rendering - like a light switch
    this.state = {
      name: props.name,
      birth: props.birth,
      inputSwitch: false
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleBirth = this.handleBirth.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleSwitch() {
    //Conditional rendering depending on whether inputSwitch is truthy/falsy
    this.setState({
      inputSwitch: !this.state.inputSwitch
    });
  }

  handleName(val) {
    //Change value of name state with input value
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
    const { updateCharacter, id } = this.props;
    const { name, birth } = this.state;
    //Invoke the updateCharacter method passed down in props, passing in the id, name, and birth, then set the inputSwitch state to be opposite of its initial value
    updateCharacter(id, name, birth);
    this.setState({
      inputSwitch: !this.state.inputSwitch
    });
  }

  render() {
    const { deleteCharacter, id } = this.props;
    const { inputSwitch, name, birth } = this.state;
    return (
      <div className="card-main">
        {/*If inputSwitch state is false, display this*/}
        {!inputSwitch ? (
          <div>
            <h4>{this.props.name}</h4>
            <p>{this.props.birth}</p>
            {/*Invoke the handleSwitch method onClick*/}
            <button className="card-button" onClick={this.handleSwitch}>
              Edit
            </button>
            {/*Invoke the deleteCharacter method pass in props, passing in the id that was passed in props, as well*/}
            <button className="card-button" onClick={() => deleteCharacter(id)}>
              Delete
            </button>
          </div>
        ) : (
          <div>
            {/*If inputSwitch state is true, display this*/}
            {/*Input Name onChange invoke handleName with the changed value passed in*/}
            <input
              className="card-input"
              value={name}
              onChange={e => this.handleName(e.target.value)}
            />
            {/*Input Birth onChange invoke handleBirth with the changed value passed in*/}
            <input
              className="card-input"
              value={birth}
              onChange={e => this.handleBirth(e.target.value)}
            />
            {/*Invoke the handleSwitch method onClick*/}
            <button className="card-button" onClick={this.handleSwitch}>
              Cancel
            </button>
            {/*Invoke the handleConfirm method onClick*/}
            <button className="card-button" onClick={this.handleConfirm}>
              Confirm
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Character;
