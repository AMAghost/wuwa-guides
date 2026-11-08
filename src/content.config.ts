import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    element: z.string(),
    weapon: z.string(),
    rarity: z.union([z.string(), z.number()]),
    role: z.string(),
    description: z.string(),
    avatar: z.string().optional(),
  }),
});

export const collections = { guides };