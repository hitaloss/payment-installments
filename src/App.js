import "./app.css";
import "./global.css";
import { useState } from "react";
import Input from "./components/Input";
import Results from "./components/Results";

function App() {
  const [payment, setPayment] = useState({});

  return (
    <>
      <div className="result-board">
        <Input setPayment={setPayment} payment={payment} />
        <Results payment={payment} />
      </div>
    </>
  );
}

export default App;
