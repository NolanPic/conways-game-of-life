import React, { useState } from "react";
import Main from "./life/main";
import Controls from "./components/Controls";

function App() {
  const [genCount, setGenCount] = useState(0);

  return (
    <div className="App">
      <Controls
        currentGen={genCount}
        stepOneGen={() => {}}
        setControls={() => {}}
      />
      <Main genCount={genCount} setGenCount={setGenCount} />
    </div>
  );
}

export default App;
