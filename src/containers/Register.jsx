/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerRequest } from "../actions";

import Header from "../components/Header";
import googleIcon from "../assets/static/logo-google.png";
import facebookIcon from "../assets/static/logo-facebook.png";
import "../assets/styles/components/Register.scss";

const Register = (props) => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header />
      <section className="register">
        <div className="register__container">
          <h2>Registrar</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre y Apellido"
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Registrar</button>
          </form>
          <section className="register__container--social-media">
            <div>
              <img src={facebookIcon} alt="Facebook" />
              Registrate con Facebook
            </div>
            <div>
              <img src={googleIcon} alt="Google" />
              Registrate con Google
            </div>
          </section>
          <Link className="register__container--login" to="/login">
            Iniciar sesión
          </Link>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
