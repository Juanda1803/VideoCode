/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { logoutRequest } from "../actions";

import gravatar from "../utils/gravatar";
import "../assets/styles/components/Header.scss";
import userIcon from "../assets/static/anonymous.png";

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link className="header__link" to="/">
        <div className="header-img__container">
          <img
            className="header__img"
            src="https://img.icons8.com/dusk/64/000000/video-card.png"
          />
          <h1>
            Video
            <strong>Code</strong>
          </h1>
        </div>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to="/">{user.name}</Link>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
