import { getSongs, getMetaDataByName, getTrackUrlFromData } from "./helpers";

export const getSongsData = async () => {
  const songsDataArr = [];
  const data = await getSongs();

  for (let i = 0; i < data.length; i++) {
    const songData = data[i];
    const metaData = getMetaDataByName(songData.name);
    const trackUrl = getTrackUrlFromData(songData.name);
    const coverUrl = "/ssx3cover.jpg";
    const song = {
      ...songData,
      ...metaData,
      trackUrl,
      coverUrl,
      active: false,
    };
    if (i === 0) {
      song.active = true;
    }
    songsDataArr.push(song);
  }

  return songsDataArr;
};
