import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tableaux = defineCollection({
    loader: glob({ base: './src/content/tableaux', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        image: z.string(),
        dimensions: z.string(),
        prix: z.number(),
        date_created: z.date(),
    }),
});

const articles = defineCollection({
    loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        content: z.string(),
    }),
});

export const collections = {
    articles: articles,
    tableaux: tableaux
};