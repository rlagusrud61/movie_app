import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    {
      /* It's not nice to use this.state.count (bad practice). You want to get the current state first with a function. 
      Every time I call setState , React will call render function with the new state. With this.state, that won't happen.  */
    }
    console.log("added");
  };

  subtract = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    console.log("subtracted");
  };
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        {/* this.add() will immediately call the function, this.add will only happen onClick*/}
        <button onClick={this.subtract}>Subtract</button>
        {/* If we add () after the functions, React will execute add() while executing render() and the return value is stored in onClick.
        "this.add is just like a video, and this.add() is like pressing play." */}
      </div>
    );
  }
}

/** FOR STATIC DATA TYPES */

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I am a {name}</h1>
//       <h2>Rating : {rating}</h2>
//       <img src={picture} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// const foodILike = [
//   {
//     name: "김치찌개",
//     image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fppss.kr%2Fwp-content%2Fuploads%2F2019%2F08%2F0-87.jpg&f=1&nofb=1",
//     rating: 4.5,
//   },
//   {
//     name: "마파두부",
//     image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8Ei56Dj3z3g%2Fmaxresdefault.jpg&f=1&nofb=1",
//     rating: 5,
//   },
// ];

// function App() {
//   return (
//     <div>
//       <h1>뭐먹을까요오오오</h1>
//       {foodILike.map((dish) => (
//         <Food name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

export default App;
