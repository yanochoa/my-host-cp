import React, { Component } from "react";
import "../form.scss";
import "../../sass/style.scss";
export default class Form extends Component {
  render() {
    return (
      <div>
        <form
          name="property"
          method="post"
          data-netlify="true"
          data-netlify-bot="bot-field"
        >
          <div className="inputs">
            <div className="form-group">
              <label for="formGroupTypeOfPropertyInputs">
                Type of Property
              </label>
              <select
                className="form-control"
                id="formGroupTypeOfPropertyInput"
              >
                <option>Entire Place</option>
                <option>Private Room</option>
                <option>Shared Room</option>
              </select>

              <label for="formGroupExampleInput">Property Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input"
              />

              <label for="formGroupExampleInput2">Address</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input"
              />
            </div>

            <button>Send</button>
          </div>
        </form>
      </div>
    );
  }
}
