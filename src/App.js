import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { useState } from "react";
import Section from "./Components/section";
function App() {
  const [first, setfirst] = useState("asim");

  const handleClick = () => {
    setfirst("bia");
  };
  return (
    <div>
      <NavBar handleClick={handleClick} name={first} />
      <Section />

      <Footer />
    </div>
  );
}

export default App;
