import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import styled from "styled-components";

const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    width: 258px;
    margin: 15px auto;
  }

  .card-login {
    width: 348px;
    border: 1px solid #e6e6e6 !important;
    border-radius: 1px;
  }

  .form-input {
    background: #fafafa;
    border: 1px solid #efefef;
    border-radius: 3px;
    padding: 0 1rem;
    margin-bottom: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    width: 95%;
  }

  .login-button {
    background-color: #3897f0;
    font-weight: 600;
    margin-top: 15px;
    width: 95%;
  }
`;

const LoginPage = ({ login }) => {
  return (
    <StyledLoginPage className="text-center">
      <Card className="card-login">
        <CardBody>
          <img alt="" srcSet="./img/logo.svg" width="175px" />
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
    </StyledLoginPage>
  );
};

export default LoginPage;
