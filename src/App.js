import React from "react";

function Food({ fav }) {
  return <h1>I am a {fav}</h1>;
}
function App() {
  return (
    <div>
      <h1>Herroooo</h1>
      <Food fav="kimchi" />
      <Food fav="라면" />
      <Food fav="왕한국어도된다 개신기해" />
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
