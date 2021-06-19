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
      <ul style={{ listStyle: "none" }}>
        {state?.map((hero) => (
          <li key={hero.id}>
            <img
              src={`http://cdn.dota2.com/apps/dota2/images/heroes/${
                hero?.name?.split("npc_dota_hero_")[1]
              }_vert.jpg`}
              alt="heronames"
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
