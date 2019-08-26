import React, { useState } from "react";

import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container4">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default App;
