export const experience = [
	{
		id: 1,
		company: 'xFractal',
		position: 'Frontend Developer',
		startDate: '2025-06',
		endDate: 'Present',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Privy', 'TradingView API'],
    location: 'Remote',
    country: 'Dubai',
		resume:
			"I overhauled XFractal's trading platform with an AI-first experience: a multi-agent assistant embedded in chat, real-time analytics flowing through draggable panels, and a data pipeline rebuilt on websockets for instant insights.",
		points: [
			'Integrated a multi-agent AI assistant with private memory, live dashboards, and reliable chat synchronization.',
			'Hooked OuraChart and BubbleMap into the chat to surface advanced technical analysis and real-time trading insights.',
			'Migrated Explore/Dex/Neo modules to backend services with websockets, removing local storage and improving filters and data freshness.',
			'Refined the trading terminal UX with guided tutorials, drag-and-drop panels, and trader-focused performance metrics.',
		],
	},
	{
		id: 2,
		company: 'LinkTIC',
		position: 'Frontend Developer',
		startDate: '2024-10',
		endDate: '2025-05',
		technologies: ['Svelte', 'TypeScript', 'Tailwind CSS'],
		location: 'Remote',
		country: 'Colombia',
		resume:
			"Optimized LinkTIC's front-end platform by refining reactive state management, responsive UI behavior, and design handoff workflows.",
		points: [
			'Built a custom Svelte hook to streamline reactive dependencies, reducing unnecessary re-renders and improving perceived performance.',
			'Tuned responsive components and accessibility patterns to deliver a consistent experience on low-resolution devices.',
			'Partnered closely with the design team to translate complex interfaces into maintainable UI components and developer-friendly patterns.',
		],
	},
	{
		id: 3,
		company: 'Flexor',
		position: 'Full Stack Developer',
		startDate: '2023-10',
		endDate: '2024-10',
		technologies: ['React', 'Laravel', '.NET', 'SQL'],
    location: 'Remote',
    country: 'Mexico',
		resume:
			"Engineered Flexor's modular API layer and cloud integrations while tuning performance for legacy devices and file-heavy workflows.",
		points: [
			'Designed a modular API architecture with endpoint handlers, domain functions, and Azure-connected use cases to keep business logic clean and scalable.',
			'Configured Azure Storage integrations that streamlined file handling and reduced upload wait times for end users.',
			'Optimized server and client resource usage by ~25%, ensuring smooth operation on older hardware.',
			'Built a custom charting library inspired by Chart.js using vanilla React and Canvas to deliver performant visualizations on low-powered devices.',
		],
	},
]
