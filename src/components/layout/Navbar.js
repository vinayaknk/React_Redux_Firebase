import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, userData } = props;
  // console.log("auth ", auth);
  const links = auth.uid ? (
    <SignedInLinks userData={userData} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav>
      <div className="nav-wrapper blue darken-3">
        <Link to="/" className="brand-logo">
          VK plan
        </Link>
        {/* <SignedInLinks />
        <SignedOutLinks /> */}
        {auth.isLoaded && links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  // console.log("navbar ", state.firebase.profile);
  return { auth: state.firebase.auth, userData: state.firebase.profile };
};

export default connect(mapStateToProps)(Navbar);
