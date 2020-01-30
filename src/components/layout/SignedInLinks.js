import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const signedInLinks = props => {
  // console.log("props ", props);
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a href="/" onClick={props.logOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-3">
          {props.userData.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return { logOut: () => dispatch(signOut()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(signedInLinks);
