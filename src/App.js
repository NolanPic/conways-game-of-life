import React from "react";
import Grid from "./components/Grid";
import generate from "./life/generate";

const size = 100;
const firstGen = generate(null, size);

function App() {
  return (
    <div className="App">
      <Grid generation={firstGen} size={size} />
    </div>
  );
}

export default App;
