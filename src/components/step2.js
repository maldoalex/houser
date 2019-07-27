import React, { Component } from "react";
import { Link } from "react-router-dom";

class stepTwo extends Component {
  constructor() {
    super();
    this.state = {
      image_url: "",
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.image_url}
            onChange={e => this.handleImageUrl(e.target.value)}
          />
          <Link to="/wizard/step1">
            <button onClick={() => this.saveChanges()} className="next_button">
              Previous
            </button>
          </Link>
          <Link to="/wizard/step3">
            <button onClick={() => this.saveChanges()} className="next_button">
              Next
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default stepTwo;
