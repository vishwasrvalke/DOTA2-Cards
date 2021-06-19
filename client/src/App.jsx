import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [state, setstate] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("/test");
    if (res.status !== 200) {
      return new Error("API INACCESSIBLE");
    }
    const body = await res?.data;
    setstate(body?.result?.heroes);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <ul>
        {state?.map((hero) => (
          <li key={hero.id}>{hero?.name?.split("npc_dota_hero_")[1]}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
