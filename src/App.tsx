import React, { useState } from "react";

import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  function greeter(person: string) {
    console.log("Hello, " + person);
  }

  const userArr = ["John", "Joanne", "Brandon", "Cathy"];

  return (
    <div className="container4">
      {userArr.map(item => greeter(item))}

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default App;
