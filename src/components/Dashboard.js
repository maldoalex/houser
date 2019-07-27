import React, { Component } from "react";
import House from "./House";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      homes: []
    };
  }

  updateHomeListings = updatedHomeList => {
    this.setState({ homes: updatedHomeList });
  };

  componentDidMount() {
    axios
      .get("/api/houses")
      .then(results => {
        this.setState({ homes: results.data });
      })
      .catch(error => {
        console.log("error");
        this.setState({ error: "error" });
      });
  }

  render() {
    let home = this.state.homes.map(home => {
      return (
        <House
          key={home.id}
          home={home}
          updateHomeListings={this.updateHomeListings}
          homes={this.homes}
        />
      );
    });
    return (
      <div>
        <h1>Houser</h1>
        {home}
      </div>
    );
  }
}

export default Dashboard;
