import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    characterId: z.string().optional(),
    title: z.string(),
    element: z.string().optional(),
    weaponType: z.string().optional(),
    rarity: z.union([z.string(), z.number()]).optional(),
    role: z.string().optional(),
    description: z.string().optional(), // <-- Добавлено .optional()
    fullArt: z.string().optional(),

    baseStats: z.object({
      hp: z.number(),
      atk: z.number(),
      def: z.number(),
    }).optional(),
    statPriorities: z.array(z.string()).optional(),
    skillPriority: z.array(z.string()).optional(),

    recommendedWeapons: z.array(z.string()).optional(),
    recommendedEchoSets: z.array(z.string()).optional(),

    teams: z.array(
      z.object({
        name: z.string(),
        memberIds: z.array(z.string()),
      })
    ).optional(),

    resonances: z.array(
      z.object({
        sequence: z.number(),
        name: z.string(),
        description: z.string(),
        utilityReview: z.string(),
      })
    ).optional(),

    skills: z.array(
      z.object({
        name: z.string(),
        type: z.string(),
        description: z.string(),
      })
    ).optional(),
  }),
});

// Не забудьте остальные коллекции (characters, weapons, echoSets), если они объявлены
export const collections = { guides /*, characters, weapons, echoSets */ };