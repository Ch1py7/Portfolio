import { motion } from 'framer-motion'

interface AboutMeProps {
	handleSection: (el: HTMLElement | null, index: number) => void
}

export const AboutMe: React.FC<AboutMeProps> = ({ handleSection }): React.ReactNode => {
	return (
		<section
			ref={(el) => handleSection(el, 2)}
			id='about'
			className='py-20 md:py-32 bg-zinc-200 dark:bg-zinc-800'
		>
			<div className='mx-auto px-6'>
				<div className='grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5 }}
					>
						<div className='relative'>
							<div className='absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-zinc-400 dark:border-zinc-600' />
							<div className='absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-zinc-400 dark:border-zinc-600' />
							<div className='relative aspect-square overflow-hidden'>
								<img
									// src='/placeholder.svg?height=600&width=600'
									alt='Gerardo Garcia'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5 }}
					>
						<div className='flex items-center gap-4 mb-6'>
							<div className='w-12 h-[1px] bg-zinc-400 dark:bg-zinc-600' />
							<span className='text-sm uppercase tracking-widest'>About Me</span>
						</div>

						<h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-8'>
							Crafting digital solutions with purpose
						</h2>

						<div className='space-y-6 text-zinc-700 dark:text-zinc-300'>
							<p>
								I'm a fullstack developer and designer with over 7 years of experience creating
								innovative digital products. My approach combines technical expertise with design
								thinking to build solutions that are both functional and beautiful.
							</p>
							<p>
								I specialize in creating immersive web experiences, real-time applications, and
								scalable architectures. My work spans across various industries including fintech,
								healthcare, and creative technologies.
							</p>
							<p>
								When I'm not coding, you'll find me exploring emerging technologies, contributing to
								open-source projects, or mentoring aspiring developers.
							</p>
						</div>

						<div className='mt-10 grid grid-cols-2 gap-8'>
							<div>
								<h3 className='text-lg font-bold mb-4'>Technologies</h3>
								<ul className='space-y-2 text-zinc-700 dark:text-zinc-300'>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										TypeScript / JavaScript
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										React / Next.js
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Node.js / Express
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										GraphQL / REST
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										MongoDB / PostgreSQL
									</li>
								</ul>
							</div>

							<div>
								<h3 className='text-lg font-bold mb-4'>Services</h3>
								<ul className='space-y-2 text-zinc-700 dark:text-zinc-300'>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Web Development
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										UI/UX Design
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										API Development
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Technical Consulting
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Code Reviews
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
