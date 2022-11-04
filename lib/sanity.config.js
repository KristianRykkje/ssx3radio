import { deskTool } from "sanity/desk";
import { defineType, defineField } from "sanity";

export const config = {
  projectId: "6buf1n6f",
  dataset: "production",
  apiVersion: "2021-10-21",
  title: "Sanity Studio",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: [
      defineType({
        name: "article",
        type: "document",
        title: "Article",
        fields: [
          defineField({
            name: "internalTitle",
            type: "string",
            title: "Internal Title",
            description: "This is the title that will be used internally",
          }),
          defineField({
            name: "title",
            type: "string",
            title: "Article Title",
            description: "This is the title that will be used externally",
          }),
          defineField({
            name: "slug",
            type: "slug",
            title: "Aritcle Slug",
            options: {
              source: "title",
            },
          }),
          defineField({
            name: "body",
            type: "array",
            title: "Article Body",
            of: [
              {
                type: "block",
              },
            ],
          }),
        ],
      }),
    ],
  },
};
