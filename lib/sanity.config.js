import { deskTool } from "sanity/desk";
import { article } from "./schema/article";
import { ssx3radio } from "./schema/ssx3radio";
import { song } from "./schema/song";

export const config = {
  projectId: "6buf1n6f",
  dataset: "production",
  apiVersion: "2021-10-21",
  title: "Sanity Studio",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: [article, song, ssx3radio],
  },
};
