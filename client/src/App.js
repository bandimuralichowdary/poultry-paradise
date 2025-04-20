import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      const data = await fetchData();
      setMessage(data);
    };

    getMessage();
  }, []);

  return (
    <div className="App">
      <h1>Poultry Paradise</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
