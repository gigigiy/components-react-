import React, { Component } from "react";

class Const extends Component {
  render() {
    return (
      <div class="const">
        <div class="bar">
          <p>(123)456-7890</p>
        </div>
        <button class="ww" type="button" onclick="alert('Hello world!')">
          Request Consultation
        </button>
      </div>
    );
  }
}

export default Const;
