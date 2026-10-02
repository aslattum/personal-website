import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	// One Markdown file per role in src/content/work. Newest roles sort first by `start`.
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			company: z.string(),
			role: z.string(),
			start: z.coerce.date(),
			end: z.coerce.date().optional(),
			description: z.string(),
			tags: z.array(z.string()).default([]),
			// Link to the app on the App Store, shown on cards and the role page.
			appStore: z.string().url().optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
};
