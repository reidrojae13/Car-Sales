import React from "react";
import { useState } from "react";
import SportsCards from "./SportsCard";
function Sports() {
  const [sportsData, setSportsData] = useState({
    sports: [
      {
        sport: "Basketball",
        team: "Lakers",
        rating: 3,
      },
      {
        sport: "Football",
        team: "Patriots",
        rating: 1,
      },
      {
        sport: "Soccer",
        team: "Barcelona",
        rating: 4,
      },
      {
        sport: "Tennis",
        player: "Federer",
        rating: 2,
      },
    ],
    sportsComponents: [],
  });

  const toggleSports = () => {
    const components = sportsData.sports.map(mappingSports);
    setSportsData((prevState) => {
      const clone = { ...prevState };
      clone.sportsComponents = components;
      return clone;
    });
  };
  console.log(toggleSports);

  function mappingSports(sportsState) {
    <SportsCards sport={sportsState.sport} key={sportsState.rating} />;
  }
}

export default Sports;
