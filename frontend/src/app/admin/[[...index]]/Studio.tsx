'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';
export { metadata } from 'next-sanity/studio/metadata';

export default function Studio() {
	return <NextStudio config={config} />;
}
