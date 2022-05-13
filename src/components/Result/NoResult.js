import React, { Component } from "react";
import { ErrorPage } from "../../customStyle";

export class NoResult extends Component {
  render() {
    return (
      <ErrorPage>
        <span className="error-icon"></span>
        <h2 className="error-heading">No flights found</h2>
        <p className="error-message">No flights found on this route for the requested date.</p>
      </ErrorPage>
    );
  }
}

export default NoResult;
