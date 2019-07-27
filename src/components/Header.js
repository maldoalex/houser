import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Houser
        <nav>
          <Link to="/wizard/step1" className="links">
            <button>Add New Property</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
