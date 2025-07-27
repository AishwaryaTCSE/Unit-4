import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Reusable Card Components</h1>

      <Card title="React">
        <p>React makes it painless to create interactive UIs.</p>
      </Card>

      <Card title="JavaScript">
        <p>JavaScript is the language of the web.</p>
      </Card>

      <Card title="CSS">
        <p>CSS handles styling and layout beautifully.</p>
      </Card>
    </div>
  );
}

export default App;
