import { defineType, defineField } from "sanity";

export const ssx3radio = defineType({
  name: "ssx3radio",
  type: "document",
  title: "SSX3 Radio",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "This is the title that will be used internally",
    }),
    defineField({
      name: "songlist",
      type: "array",
      title: "Song List",
      of: [
        {
          type: "reference",
          to: [{ type: "song" }],
        },
      ],
    }),
  ],
});

export const ssx3radioGroq = `*[_type == "ssx3radio"]{
  title,
  songlist[]->{
    song,
    artist,
    album,
    year,
    "mp3fileUrl": mp3file.asset->url
  }
}`;
