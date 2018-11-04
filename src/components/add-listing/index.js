import React from "react";

import "./_add-listing.scss";
import Link from "gatsby-link";
const AddListing = props => (
  <section className="addlisting" id="addlisting">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="addlisting-title">Welcome, Name!</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p> Let's get your listing set up with Alexa </p>
        </div>
      </div>
      <Link to="/form">
        <button type="button" className="btn btn-primary">
          Get Started
        </button>
      </Link>
    </div>
  </section>
);

export default AddListing;
