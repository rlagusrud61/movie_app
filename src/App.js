import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I am a {name}</h1>
      <h2>Rating : {rating}</h2>
      <img src={picture} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    name: "김치찌개",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fppss.kr%2Fwp-content%2Fuploads%2F2019%2F08%2F0-87.jpg&f=1&nofb=1",
    rating: 4.5,
  },
  {
    name: "마파두부",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8Ei56Dj3z3g%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 5,
  },
];

function App() {
  return (
    <div>
      <h1>뭐먹을까요오오오</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
