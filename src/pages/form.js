import React, { Component } from "react";

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
          <input name="name" placeholder="Alexo Bezos" type="text" />
          <button type="button" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    );
  }
}
