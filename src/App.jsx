import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Card userName="SHUBHAM"/>
    <br/>
    <Card userName="NARAYAN" />
     
    </>
  );
}

export default App;
