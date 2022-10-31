import { supabase } from "../../config/supabase";

export const getAudioData = async () => {
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

  return data;
};

export const getTrackUrlFromData = (name: string) => {
  return supabase.storage.from("music").getPublicUrl("ssx3radio/" + name);
};
