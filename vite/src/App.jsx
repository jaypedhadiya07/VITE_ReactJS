import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Increment_Decrement_Operator/Home";
import Test from "./TestFolder/Test"
import Form from "./Form_Project/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home></Home> */}
      {/* <Test/> */}
      <Form></Form>
    </>
  );
}

export default App;