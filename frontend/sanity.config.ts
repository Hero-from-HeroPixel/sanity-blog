import project from '@/sanity/schemas/project-schema';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from '@/sanity/schemas';

const config = defineConfig({
	name: 'default',
	title: 'heropixel-content',

	projectId: 'whhbfq4z',
	dataset: 'production',

	apiVersion: '2023-08-04',

	basePath: '/admin',

	plugins: [deskTool()],

	schema: { types: schemas },
});

export default config;
