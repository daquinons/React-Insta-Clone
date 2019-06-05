import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import "./LoginPage.css";

const LoginPage = ({ login }) => {
  return (
    <div className="login-page text-center">
      <Card className="card-login">
        <CardBody>
          <div className="form-login">
            <input
              type="text"
              name="username"
              id="username-input"
              className="form-input"
              defaultValue="user@email.com"
            />
            <input
              type="password"
              name="password"
              id="password-input"
              className="form-input"
              defaultValue="12345678"
            />
            <Button color="primary" className="login-button" onClick={login}>
              Login
            </Button>{" "}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
