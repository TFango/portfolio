import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      tags: z.array(z.string()).default([]),
      link: z.string().url().optional(),
      repo: z.string().url().optional(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { projects };
