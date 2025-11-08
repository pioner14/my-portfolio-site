import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    imageUrl: z.string(),
    tags: z.array(z.string()),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
  blog: blogCollection,
};