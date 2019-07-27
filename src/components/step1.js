import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  UPDATE_PROPERTY_NAME,
  UPDATE_ADDRESS,
  UPDATE_STATE,
  UPDATE_CITY,
  UPDATE_ZIP
} from "../store";
import axios from "axios";

class stepOne extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      property_name: reduxState.property_name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     const reduxState = store.getState();
  //     this.setState({
  //       property_name: reduxState.property_name,
  //       address: reduxState.address,
  //       city: reduxState.city,
  //       state: reduxState.state,
  //       zip: reduxState.zip
  //     });
  //   });
  // }

  componentDidMount() {
    if (this.props.match.params.id) {
      axios.get(`/api/houses/${this.props.match.params.id}`).then(results => {
        const { property_name, address, city, state, zip } = results.data[0];
        console.log(results.data[0]);
        this.setState({
          property_name,
          address,
          city,
          state,
          zip
        });
        console.log(this.props);
      });
    }
  }

  handlePropertyName = addedPropertyName => {
    this.setState({ property_name: addedPropertyName });
  };

  handleAddress = addedAddress => {
    this.setState({ address: addedAddress });
  };

  handleState = addedState => {
    this.setState({ state: addedState });
  };
  handleCity = addedCity => {
    this.setState({ city: addedCity });
  };

  handleZip = addedZip => {
    this.setState({ zip: addedZip });
  };

  saveChanges() {
    store.dispatch({
      type: UPDATE_PROPERTY_NAME,
      payload: this.state.property_name
    });
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    });
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    });
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    });
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.property_name}
            onChange={e => this.handlePropertyName(e.target.value)}
          />
          <input
            value={this.state.address}
            onChange={e => this.handleAddress(e.target.value)}
          />
          <input
            value={this.state.city}
            onChange={e => this.handleCity(e.target.value)}
          />
          <input
            value={this.state.state}
            onChange={e => this.handleState(e.target.value)}
          />
          <input
            value={this.state.zip}
            onChange={e => this.handleZip(e.target.value)}
          />
          <Link to="/wizard/step2">
            <button onClick={() => this.saveChanges()} className="next_button">
              Next
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default stepOne;
