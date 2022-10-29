// import fs from "fs";
// import { parseFile } from "music-metadata";

// const sampleStruc = [
//   {
//     id: "1",
//     name: "sample1",
//     url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     duration: 0,
//   },
//   {
//     id: "2",
//     name: "sample2",
//     url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//     duration: 0,
//   },
// ];

// const getAudioMetaData = async (url) => {
//   const metadata = await parseFile(url);
//   const { duration } = metadata.format;
//   const { title, artist, album, year } = metadata.common;
//   return {
//     duration,
//     title,
//     artist,
//     album,
//     year,
//   };
// };

// const generateAudioJson = async () => {
//   const files = await fs.promises.readdir("./public/audio");
//   const audioJson = [];
//   for (let i = 0; i < files.length; i += 1) {
//     const file = files[i];
//     const url = `./public/audio/${file}`;
//     const metadata = await getAudioMetaData(url);
//     audioJson.push({
//       id: i + 1,
//       name: file,
//       url: `/audio/${file}`,
//       ...metadata,
//     });
//   }

//   await fs.promises.writeFile("./public/audio.json", JSON.stringify(audioJson));
// };

// generateAudioJson();
