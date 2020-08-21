/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "../actions";

import Header from "../components/Header";
import googleIcon from "../assets/static/logo-google.png";
import facebookIcon from "../assets/static/logo-facebook.png";
import "../assets/styles/components/Login.scss";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header />
      <section className="login">
        <div className="login__container">
          <h2>Inicia sesion</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              aria-label="Correo"
              className="input"
              type="email"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              aria-label="Contraseña"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Iniciar sesion</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="checkbos" />
                Recuerdame
              </label>
              <a href="/">Olvide mi Contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} alt="facebook" />
              Inicia sesion con Facebook
            </div>
            <div>
              <img src={facebookIcon} alt="Google" />
              Inicia sesion con Google
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta
            <Link to="/register">Registrame</Link>
          </p>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
