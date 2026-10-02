import { type CollectionEntry, getCollection } from 'astro:content';

export async function getWork() {
	return (await getCollection('work')).sort((a, b) => b.data.start.valueOf() - a.data.start.valueOf());
}

export function years(entry: CollectionEntry<'work'>) {
	const start = entry.data.start.getUTCFullYear();
	const end = entry.data.end ? entry.data.end.getUTCFullYear() : 'Now';
	return start === end ? `${start}` : `${start}–${end}`;
}
