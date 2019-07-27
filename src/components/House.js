import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class House extends Component {
  delete = id => {
    axios.delete(`/api/houses/${id}`);
    console
      .log(this.props.homes)

      .then(res => {
        console.log(res);
        let index = this.props.homes.findIndex(home => {
          return home.id === id;
        });
        let copyOfHomes = [...this.props.homes];
        copyOfHomes.splice(index, 1);
        console.log(copyOfHomes);
        this.props.updateHomeListings(copyOfHomes);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("error");
        this.setState({ error: "error" });
      });
  };

  render() {
    return (
      <div>
        <div>
          {/* <img src={} /> */}
          <h2>{this.props.home.property_name}</h2>
          <h2>{this.props.home.address}</h2>
          <h2>{this.props.home.state}</h2>
          <h2>{this.props.home.city}</h2>
          <h2>{this.props.home.zip}</h2>
        </div>
        <button
          className="delete"
          onClick={() => {
            this.delete(this.props.home.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default House;
