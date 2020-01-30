import React, { Component } from "react";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signInnnn(this.state);
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          <div className="red-text center">
            {this.props.authError ? <h5>{this.props.authError}</h5> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { authError: state.auth.authError, auth: state.firebase.auth };
};

const mapDispatchToProps = dispatch => {
  return { signInnnn: creds => dispatch(signIn(creds)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
