// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const articleCollection = defineCollection({
  /* ... */
});
const newsletterCollection = defineCollection({
  type: "content",
  schema: z.object({
    description: z.string(),
    edition: z.number(),
    isDraft: z.boolean(),
    publishDate: z.date(),
    thumbnail: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    title: z.string(),
  }),
});
const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
    isDraft: z.boolean(),
    links: z.object({
      demo: z.string().url(),
      repo: z.string().url(),
      youtube: z.string().url(),
    }),
    publishDate: z.date(),
    tags: z.array(z.string()),
    thumbnail: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    title: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  article: articleCollection,
  newsletter: newsletterCollection,
  project: projectCollection,
};
