import { query } from '@/graphql/queries'
import { useGithubQuery } from '@/hook/useGithubQuery'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const colors = [
	'from-violet-500 to-purple-700 dark:from-black dark:to-black',
	'from-emerald-500 to-teal-700 dark:from-black dark:to-black',
	'from-amber-500 to-orange-700 dark:from-black dark:to-black',
	'from-blue-500 to-indigo-700 dark:from-black dark:to-black',
]

interface RecentProjectsProps {
	handleSection: (el: HTMLElement | null, index: number) => void
}

const firstLetterCapitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({
	handleSection,
}): React.ReactNode => {
	const { data, loading, error } = useGithubQuery<Data>(query)
	const [projects, setProjects] = useState<(ProjectsNode & { image: string })[]>([])

	useEffect(() => {
		if (!loading && data) {
			const projects: (ProjectsNode & { image: string })[] = data.user.pinnedItems.edges.map(
				(p) => {
					let image = ''
					if (p.node.name.toLowerCase() === 'afordibot-web') image = '/images/afordibot.webp'
					if (p.node.name.toLowerCase() === 'whisper') image = '/images/secrets.webp'
					if (p.node.name.toLowerCase() === 'ambient-space') image = '/images/mist-space.webp'
					if (p.node.name.toLowerCase() === 'gitlytics') image = '/images/gitlytics.webp'
					return {
						description: p.node.description,
						homepageUrl: p.node.homepageUrl,
						id: p.node.id,
						languages: p.node.languages,
						name: p.node.name === 'afordibot-web' ? 'afordibot' : p.node.name,
						createdAt: p.node.createdAt,
						stargazers: p.node.stargazers,
						url: p.node.url,
						repositoryTopics: p.node.repositoryTopics,
						image,
					}
				}
			)
			setProjects(projects)
		}
	}, [loading, data])

	return (
		<section ref={(el) => handleSection(el, 1)} id='work' className='py-20 md:py-32'>
			<div className='max-w-7xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5 }}
					className='mb-16'
				>
					<div className='flex items-center gap-4 mb-6'>
						<div className='w-12 h-[1px] bg-zinc-400 dark:bg-zinc-600' />
						<span className='text-sm uppercase tracking-widest'>Selected Work</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold tracking-tighter'>Projects</h2>
				</motion.div>

				<div className='grid gap-16 md:gap-24'>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
						>
							<div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
								<div className='mb-4 text-sm text-zinc-500 dark:text-zinc-400'>
									{new Date(project.createdAt).getFullYear()}
								</div>
								<h3 className='text-3xl font-bold mb-4 tracking-tight'>
									{firstLetterCapitalize(project.name)}
								</h3>
								<p className='text-zinc-700 dark:text-zinc-300 mb-6'>{project.description}</p>
								<div className='flex flex-wrap gap-2 mb-8'>
									{project.repositoryTopics.nodes.map(({ topic }) => (
										<span
											key={topic.id}
											className='px-3 py-1 text-xs border border-zinc-300 rounded-full duration-100 dark:border-zinc-700'
										>
											{topic.name}
										</span>
									))}
								</div>
								<div className='flex'>
									<motion.a
										className='group flex items-center gap-2'
										whileHover={{ x: 5 }}
										href={project.url}
										target='_blank'
										rel='noopener noreferrer'
									>
										<span className='font-medium'>View Repository</span>
										<span className='group-hover:translate-x-1 transition-transform'>→</span>
									</motion.a>
								</div>
								{project.homepageUrl && (
									<div className='flex mt-2'>
										<motion.a
											className='group flex items-center gap-2'
											whileHover={{ x: 5 }}
											href={project.homepageUrl}
											target='_blank'
											rel='noopener noreferrer'
										>
											<span className='font-medium'>View Demo</span>
											<span className='group-hover:translate-x-1 transition-transform'>→</span>
										</motion.a>
									</div>
								)}
							</div>

							<div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
								<motion.div
									whileHover={{ scale: 1.03 }}
									className='relative aspect-[4/3] overflow-hidden'
								>
									<a href={project.homepageUrl} target='_blank' rel='noopener noreferrer'>
										<div
											className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-15`}
										/>
										<img
											src={project.image}
											alt={project.name}
											className='w-full relative z-10 h-full object-contain'
										/>
									</a>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
