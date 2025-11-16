import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/hello`)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMsg("Backend not available");
      });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
