// Your name, contact info, and links. Used in the nav, footer, and contact sections.
export const site = {
	name: 'Adam Slattum',
	role: 'Senior Software Engineer',
	location: 'Virginia Beach, Virginia',
	email: 'adam@slattum.app',
	description:
		'Adam Slattum is a senior software engineer who specializes in native iOS and works across languages and platforms.',
	// Leave a link empty ('') to hide it.
	links: {
		github: 'https://github.com/aslattum',
		linkedin: 'https://www.linkedin.com/in/aslattum/',
	},
};

// Shown as Polaroids in the "Outside work" section on the home page.
// Drop a photo at public/assets/interests/<file> and it replaces the placeholder.
export const interests = [
	{ label: 'Family', photo: '/assets/interests/family.jpg' },
	{ label: 'Running', photo: '/assets/interests/running.jpg' },
	{ label: 'Mountain biking', photo: '/assets/interests/mountain-biking.jpg' },
	{ label: 'Snowboarding', photo: '/assets/interests/snowboarding.jpg' },
];
