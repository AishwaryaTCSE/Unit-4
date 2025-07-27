
import React from 'react';

function App() {
  const topics = ["React", "JavaScript", "CSS"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dynamic List of Topics</h1>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
