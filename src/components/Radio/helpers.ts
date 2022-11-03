import { supabase } from "../../config/supabase";
import { ISong } from "./types";
import { parseBuffer } from "music-metadata";
import { getMetaDataByName } from "./data";

export const getSongs = async () => {
  const { data, error } = await supabase.storage
    .from("music")
    .list("ssx3radio", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.log("error", error);
  }

  return data as unknown as ISong[];
};

export const getTrackUrlFromData = (name: string) => {
  if (!name) return null;
  return supabase.storage.from("music").getPublicUrl("ssx3radio/" + name).data;
};
