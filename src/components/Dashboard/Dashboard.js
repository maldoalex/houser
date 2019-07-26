import React, { Component } from "react";
import House from "./components/House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  render() {
    return (
      <div>
        Dashboard
        <House />
      </div>
    );
  }
}

export default Dashboard;
