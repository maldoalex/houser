import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import stepTwo from "./step2";

class stepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: 0,
      rent: 0,
      image_url: "",
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  handleComplete = () => {
    axios.post("/api/houses", this.state).then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.image_url}
            onChange={e => this.handleImageUrl(e.target.value)}
          />
          <input
            value={this.state.image_url}
            onChange={e => this.handleImageUrl(e.target.value)}
          />

          <button className="complete" onClick={this.handleComplete}>
            Complete
          </button>
          <Link to="/wizard/step2">
            <button onClick={() => this.saveChanges()} className="next_button">
              Previous
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default stepTwo;
