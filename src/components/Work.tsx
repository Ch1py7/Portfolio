import { experience } from '@/constants/experience'
import { motion } from 'framer-motion'

interface WorkProps {
	handleSection: (el: HTMLElement | null, index: number) => void
}

const formatDate = (value: string) => {
	if (!value) return ''
	if (value.toLowerCase() === 'present') return 'Present'

	const [year, month] = value.split('-')
	const parsedDate = new Date(Number(year), Number(month) - 1)

	return parsedDate.toLocaleString('en-US', {
		month: 'short',
		year: 'numeric',
	})
}

const formatRange = (start: string, end: string) => {
	return `${formatDate(start)} – ${formatDate(end)}`
}

export const Work: React.FC<WorkProps> = ({ handleSection }): React.ReactNode => {
	return (
		<section ref={(el) => handleSection(el, 1)} id='experience' className='py-20 md:py-32'>
			<div className='max-w-7xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5 }}
					className='mb-6 md:mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold tracking-tighter'>Experience</h2>
				</motion.div>

				<div className='space-y-12 md:space-y-10'>
					{experience.map((role, index) => (
						<motion.div
							key={role.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className='rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm transition-transform duration-200 hover:scale-101'>
								<div className='grid gap-6 p-6 md:p-8 md:grid-cols-[minmax(220px,260px)_1fr]'>
									<div className='space-y-3'>
										<div className='text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400'>
											{formatRange(role.startDate, role.endDate)}
										</div>
										<div>
											<h3 className='text-xl md:text-2xl font-semibold tracking-tight'>
												{role.position} <br /> · {role.company}
											</h3>
											{(role.location || role.country) && (
												<p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>
													{[role.location, role.country].filter(Boolean).join(' · ')}
												</p>
											)}
										</div>
										{role.technologies && (
											<div className='flex flex-wrap gap-2 pt-1'>
												{role.technologies.map((tech) => (
													<span
														key={tech}
														className='px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] bg-white/60 dark:bg-zinc-800/70 border border-white/50 dark:border-zinc-700/50 rounded-full text-zinc-600 dark:text-zinc-300'
													>
														{tech}
													</span>
												))}
											</div>
										)}
									</div>

									<div className='space-y-4 md:space-y-5'>
										<p className='text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-200'>
											{role.resume}
										</p>
										{role.points && role.points.length > 0 && (
											<ul className='space-y-3 text-sm text-zinc-600 dark:text-zinc-300'>
												{role.points.map((point) => (
													<li key={point} className='flex gap-3'>
														<span className='mt-2 block h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0' />
														<span>{point}</span>
													</li>
												))}
											</ul>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
