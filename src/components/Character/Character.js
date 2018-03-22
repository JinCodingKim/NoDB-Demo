import React, { Component } from "react";
import "./Character.css";

class Character extends Component {
  constructor(props) {
    super();
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
    this.setState({
      inputSwitch: !this.state.inputSwitch
    });
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
    const { updateCharacter, id } = this.props;
    const { name, birth } = this.state;
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
        {!inputSwitch ? (
          <div>
            <h4>{this.props.name}</h4>
            <p>{this.props.birth}</p>
            <button className="card-button" onClick={this.handleSwitch}>
              Edit
            </button>
            <button className="card-button" onClick={() => deleteCharacter(id)}>
              Delete
            </button>
          </div>
        ) : (
          <div>
            <input
              className="card-input"
              value={name}
              onChange={e => this.handleName(e.target.value)}
            />
            <input
              className="card-input"
              value={birth}
              onChange={e => this.handleBirth(e.target.value)}
            />
            <button className="card-button" onClick={this.handleSwitch}>
              Cancel
            </button>
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
