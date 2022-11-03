import Radio from "@lib/components/Radio";
import { getSongsData } from "@lib/data/getSongsData";
import React from "react";

const Home = async () => {
  const songsData = await getSongsData();

  return <Radio songsData={songsData} />;
};

export default Home;
