import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define your 'services' collection
const services = defineCollection({
  // Use the glob loader to find all markdown files in the services folder
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  // (Optional) Define the data you want to require in your markdown files
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  })
});

// Export all collections
export const collections = { services };