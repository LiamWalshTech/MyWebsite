// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const articleCollection = defineCollection({ /* ... */ });
const newsletterCollection = defineCollection({
  type: 'content',
  schema: z.object({
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
const projectCollection = defineCollection({ /* ... */ });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'article': articleCollection,
  'newsletter': newsletterCollection,
  'project': projectCollection,
};
