import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanity = createClient({
  projectId: "nakftzgg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (source) => builder.image(source);
