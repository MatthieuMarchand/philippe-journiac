import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tableaux = defineCollection({
    loader: glob({ base: './src/content/tableaux', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        image: z.string(),
        dimensions: z.string(),
        price: z.number(),
        date_created: z.date(),
    }),
});

const actualites = defineCollection({
    loader: glob({ base: './src/content/actualites', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        image: z.string(),
        content: z.string(),
        publish_at: z.date(),
    }),
});

export const collections = {
    actualites: actualites,
    tableaux: tableaux
};