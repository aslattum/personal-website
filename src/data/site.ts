// Your name, contact info, and links. Used in the nav, footer, and contact sections.
export const site = {
	name: 'Adam Slattum',
	role: 'Senior Software Engineer',
	location: 'Virginia Beach, Virginia',
	email: 'adam@slattum.app',
	description:
		'Adam Slattum is a senior software engineer specializing in iOS, with experience across Android, web, backend, and cloud infrastructure.',
	// Leave a link empty ('') to hide it.
	links: {
		github: 'https://github.com/aslattum',
		linkedin: 'https://www.linkedin.com/in/aslattum/',
	},
};

// Shown in the "Skills" section on the home page.
export const skills = [
	{ group: 'Languages', items: ['Swift', 'Kotlin', 'Java', 'Python', 'JavaScript', 'C'] },
	{
		group: 'Apple platforms',
		items: ['SwiftUI', 'UIKit', 'Swift Concurrency', 'Combine', 'Swift Charts', 'Swift Testing', 'XCTest'],
	},
	{
		group: 'Tooling & infrastructure',
		items: ['GitHub Actions', 'fastlane', 'Xcode Cloud', 'GraphQL', 'Firebase', 'Sentry', 'AWS'],
	},
	{ group: 'AI tooling', items: ['Claude Code', 'MCP', 'Custom agents', 'Claude Skills'] },
];

// Shown as Polaroids in the "Outside work" section on the home page.
// Drop a photo at public/assets/interests/<file> and it replaces the placeholder.
export const interests = [
	{ label: 'Family', photo: '/assets/interests/family.jpg' },
	{ label: 'Running', photo: '/assets/interests/running.jpg' },
	{ label: 'Snowboarding', photo: '/assets/interests/snowboarding.jpg' },
	{ label: 'Mountain biking', photo: '/assets/interests/mountain-biking.jpg' },
];
