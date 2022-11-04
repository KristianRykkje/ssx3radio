import { defineType, defineField } from "sanity";

export const song = defineType({
  name: "song",
  type: "document",
  title: "Song",
  fields: [
    defineField({
      name: "song",
      type: "string",
      title: "Song",
    }),
    defineField({
      name: "artist",
      type: "string",
      title: "Artist",
    }),
    defineField({
      name: "album",
      type: "string",
      title: "Album",
    }),
    defineField({
      name: "year",
      type: "string",
      title: "Year",
    }),
    defineField({
      name: "mp3file",
      type: "file",
      title: "MP3 File",
    }),
  ],
});
