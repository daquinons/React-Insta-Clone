import React from "react";
import LoginPage from "../components/Login/LoginPage";

const withAuthenticate = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        auth: this.isLogged()
      };
    }

    login() {
      window.localStorage.setItem("loggedIn", "username");
      console.log("Login");
      this.setLogin(true);
      this.props.callback(true);
    }

    isLogged() {
      if (window.localStorage.getItem("loggedIn")) {
        return true;
      } else {
        return false;
      }
    }

    setLogin(state) {
      this.setState({ auth: state });
    }

    render() {
      if (this.state.auth) {
        return <Component {...this.props} />;
      } else {
        return <LoginPage login={this.login.bind(this)} />;
      }
    }
  };
};

export default withAuthenticate;
