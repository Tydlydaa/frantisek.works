import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title:       z.string(),
  description: z.string(),
  tag:         z.string(),
  tone:        z.enum(['coral', 'gold', 'mint', 'blue']),
  date:        z.string().optional(),
  image:       z.string().optional(),
  href:        z.string().optional(),
  draft:       z.boolean().default(false),
});

export const collections = {
  hlavou:    defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/hlavou' }),    schema: projectSchema }),
  rukama:    defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/rukama' }),    schema: projectSchema }),
  komunitne: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/komunitne' }), schema: projectSchema }),
  studium:   defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/studium' }),   schema: projectSchema }),
  intros:    defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/intros' }) }),
};
