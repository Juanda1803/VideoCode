import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--icon"
              src="https://img.icons8.com/nolan/64/play.png"
              alt="play"
            />
          </Link>

          {isList ? (
            <img
              className="carousel-item__details--icon"
              src="https://img.icons8.com/dusk/100/000000/filled-trash.png"
              alt="remove"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--icon"
              src="https://img.icons8.com/nolan/64/plus-math.png"
              alt="plus"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="caWrousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
