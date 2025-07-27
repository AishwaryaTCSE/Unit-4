
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      <Navbar activePage={activePage} onNavClick={setActivePage} />
      <Pages activePage={activePage} />
    </div>
  );
}

export default App;
