import { projects } from '@/constants/projects'
import { motion } from 'framer-motion'

const colors = [
	'from-violet-500 to-purple-700',
	'from-pink-500 to-rose-700',
	'from-emerald-500 to-teal-700',
	'from-amber-500 to-orange-700',
	'from-blue-500 to-indigo-700',
]

interface ProjectsProps {
	handleSection: (el: HTMLElement | null, index: number) => void
}

const firstLetterCapitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1)
}

export const Projects: React.FC<ProjectsProps> = ({ handleSection }): React.ReactNode => {
	return (
		<section ref={(el) => handleSection(el, 2)} id='projects' className='py-20 md:py-32'>
			<div className='max-w-7xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5 }}
					className='mb-6 md:mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold tracking-tighter'>Projects</h2>
				</motion.div>

				<div className='grid gap-32 md:gap-24'>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='grid md:grid-cols-2 gap-8 items-center'
						>
							<div className={index % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
								<h3 className='text-3xl font-bold mb-4 tracking-tight'>
									{firstLetterCapitalize(project.name)}
								</h3>
								<p className='opacity-70 mb-6'>{project.description}</p>
								<div className='flex flex-wrap gap-2 mb-8'>
									{project.languages.map((language) => (
										<span
											key={language}
											className='px-4 py-2 text-xs bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-300/50 dark:border-zinc-600/50 rounded-full duration-100 font-medium'
										>
											{language}
										</span>
									))}
								</div>
								<div className='flex gap-8'>
									<motion.a
										className='group flex items-center gap-2'
										whileHover={{ x: 5 }}
										href={project.url}
										target='_blank'
										rel='noopener noreferrer'
									>
										<span className='font-medium'>View Project</span>
										<span className='group-hover:translate-x-1 transition-transform'>→</span>
									</motion.a>
									<motion.a
										className='group flex items-center gap-2'
										whileHover={{ x: 5 }}
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'
									>
										<span className='font-medium'>View Code</span>
										<span className='group-hover:translate-x-1 transition-transform'>→</span>
									</motion.a>
								</div>
							</div>

							<div className={`order-first ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
								<motion.div
									whileHover={{ scale: 1.03, rotate: 1 }}
									className='relative aspect-4/3 overflow-hidden rounded-2xl shadow-lg'
								>
									<a href={project.url} target='_blank' rel='noopener noreferrer'>
										<div
											className={`absolute inset-0 bg-linear-to-br ${colors[index]} opacity-15 rounded-2xl`}
										/>
										<img
											src={project.image}
											alt={project.name}
											loading='lazy'
											decoding='async'
											className='w-full relative h-full object-contain rounded-2xl'
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
