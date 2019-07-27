import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import routes from "../routes";
import step1 from "./step1";
import step2 from "./step2";
import step3 from "./step3";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/wizard/step1" component={step1} />
    <Route exact path="/wizard/step2" component={step2} />
    <Route exact path="/wizard/step3" component={step3} />
  </Switch>
);

// class Wizard extends Component {
// constructor() {
//   super();
//   this.state = {
//     property_name: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: 0
//   };
// }

// componentDidMount() {
//   if (this.props.match.params.id) {
//     axios.get(`/api/houses/${this.props.match.params.id}`).then(results => {
//       const { property_name, address, city, state, zip } = results.data[0];
//       console.log(results.data[0]);
//       this.setState({
//         property_name,
//         address,
//         city,
//         state,
//         zip
//       });
//       console.log(this.props);
//     });
//   }
// }

// handlePropertyName = addedPropertyName => {
//   this.setState({ property_name: addedPropertyName });
// };

// handleAddress = addedAddress => {
//   this.setState({ address: addedAddress });
// };

// handleState = addedState => {
//   this.setState({ state: addedState });
// };
// handleCity = addedCity => {
//   this.setState({ city: addedCity });
// };

// handleZip = addedZip => {
//   this.setState({ zip: addedZip });
// };

// handleCancel = () => {
//   this.setState({
//     property_name: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: 0
//   });
// };

// handleComplete = () => {
//   axios.post("/api/houses", this.state).then(response => {
//     console.log(response.data);
//   });
// };

// render() {
//   return (
//     <div>
//       <h2>Wizard</h2>
//       <form>

//         ;
{
  /* <input
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
          /> */
}
// <Link to="/">
//   <button className="cancel" onClick={this.handleCancel}>
//     Cancel
//   </button>
// </Link>
{
  /* <button className="complete" onClick={this.handleComplete}>
            Complete
          </button> */
}
//         </form>
//       </div>
//     );
//   }
// }

// export default Wizard;
