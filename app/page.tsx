import Radio from "src/components/Radio";
import { getSongsData } from "@src/data/getSongsData";
import React from "react";

const Home = async () => {
  const songsData = await getSongsData();

  return <Radio songsData={songsData} />;
};

export default Home;
