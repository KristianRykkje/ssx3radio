import { defineType, defineField } from "sanity";

export const article = defineType({
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
});
