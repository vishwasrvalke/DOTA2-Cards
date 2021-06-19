import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [state, setstate] = useState("");

  const fetchPosts = async () => {
    const res = await axios.get("/test");
    if (res.status !== 200) {
      return new Error("API INACCESSIBLE");
    }
    const body = res?.data;
    setstate(JSON.stringify(body?.result));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <p>{state}</p>
    </div>
  );
};

export default App;