import fs from "fs";
import { parseFile } from "music-metadata";

const sampleStruc = [
  {
    id: "1",
    name: "sample1",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    duration: 0,
  },
  {
    id: "2",
    name: "sample2",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    duration: 0,
  },
];

const getAudioDurationInSeconds = async (url) => {
  const metadata = await parseFile(url);
  return metadata.format.duration;
};

const generateAudioJson = async () => {
  const files = await fs.promises.readdir("./public/audio");
  const audioJson = [];
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const url = `./public/audio/${file}`;
    const duration = await getAudioDurationInSeconds(url);
    audioJson.push({
      id: i + 1,
      name: file,
      url: `/audio/${file}`,
      duration,
    });
  }

  await fs.promises.writeFile("./public/audio.json", JSON.stringify(audioJson));
};

generateAudioJson();
