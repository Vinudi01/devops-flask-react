import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Backend not available"));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
