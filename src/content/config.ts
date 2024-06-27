import { z, defineCollection } from "astro:content";
import { toZonedTime } from "date-fns-tz";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((str) => toZonedTime(str, "Asia/Tokyo")),
    image: z.string().optional(),
    category: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
