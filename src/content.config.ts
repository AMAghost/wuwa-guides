import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Справочник персонажей
const characters = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/characters" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    avatar: z.string(),
  }),
});

// 2. Справочник оружия
const weapons = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/weapons" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    rarity: z.number(),
    icon: z.string(),
  }),
});

// 3. Справочник Эхо
const echoSets = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/echoSets" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
  }),
});

// 4. Схема гайдов
const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    characterId: z.string(),
    title: z.string(),
    element: z.string(),
    weaponType: z.string(),
    rarity: z.number(),
    role: z.string(),
    description: z.string(), // <-- Вот это поле обязательно
    fullArt: z.string(),

    baseStats: z.object({
      hp: z.number(),
      atk: z.number(),
      def: z.number(),
    }),
    statPriorities: z.array(z.string()),
    skillPriority: z.array(z.string()),

    recommendedWeapons: z.array(z.string()),
    recommendedEchoSets: z.array(z.string()),

    teams: z.array(
      z.object({
        name: z.string(),
        memberIds: z.array(z.string()),
      })
    ),

    resonances: z.array(
      z.object({
        sequence: z.number(),
        name: z.string(),
        description: z.string(),
        utilityReview: z.string(),
      })
    ),

    skills: z.array(
      z.object({
        name: z.string(),
        type: z.string(),
        description: z.string(),
      })
    ),
  }),
});

export const collections = { guides, characters, weapons, echoSets };