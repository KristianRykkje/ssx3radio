import { createClient } from "next-sanity";

const client = createClient({
  projectId: "6buf1n6f",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});

export default client;
