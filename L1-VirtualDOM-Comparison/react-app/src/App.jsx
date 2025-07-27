import React, { useState } from "react";

function App() {
  const [reactTitle, setReactTitle] = useState("React Title");
  const [reactDomUpdates, setReactDomUpdates] = useState(0);

  const handleReactClick = () => {
    setReactTitle((prev) => prev + "!");
    setReactDomUpdates((count) => count + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>{reactTitle}</h2>
      <p><strong>React DOM Updates:</strong> {reactDomUpdates}</p>
      <button onClick={handleReactClick}>Change Title (React)</button>
    </div>
  );
}

export default App;
