import { motion } from 'framer-motion'

interface AboutMeProps {
	handleSection: (el: HTMLElement | null, index: number) => void
}

export const AboutMe: React.FC<AboutMeProps> = ({ handleSection }): React.ReactNode => {
	return (
		<section
			ref={(el) => handleSection(el, 2)}
			id='about'
			className='py-20 md:py-32 bg-linear-to-br from-zinc-200 via-zinc-100 to-zinc-200'
		>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-center'>
				<div className='flex items-center gap-4 mb-6 md:hidden'>
							<div className='w-12 h-px bg-zinc-400' />
							<span className='text-sm uppercase tracking-widest'>About Me</span>
						</div>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5 }}
					>
						<div className='relative'>
							<div className='absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-zinc-400 rounded-tl-2xl' />
							<div className='absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-zinc-400 rounded-br-2xl' />
							<div className='relative aspect-square overflow-hidden rounded-2xl shadow-lg'>
								<img
									src='/images/me.webp'
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
						<div className='hidden items-center gap-4 mb-6 md:flex'>
							<div className='w-12 h-px bg-zinc-400' />
							<span className='text-sm uppercase tracking-widest'>About Me</span>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-8'>
							Crafting digital solutions with purpose
						</h2>
						<div className='space-y-6 text-zinc-700'>
							<p>
								I'm a full-stack developer focused on building high-performance, scalable
								applications. With experience designing efficient architectures and optimizing
								frontend performance.
							</p>
							<p>
								I achieved up to a 30% increase in the overall performance of Svelte applications by
								implementing custom hooks and reducing reactive dependencies in the user interface.
							</p>
							<p>
								I designed a custom function for uploading files to the cloud in Azure Storage,
								optimizing the process and enhancing the user experience.
							</p>
							<p>
								When I'm not coding, I contribute to open-source projects, participate in tech
								discussions, and explore emerging technologies (or sometimes, I just enjoy a good
								gaming session).
							</p>
						</div>
						<div className='mt-10 grid grid-cols-2 gap-8'>
							<div>
								<h3 className='text-lg font-bold mb-4'>Technologies</h3>
								<ul className='space-y-2 text-zinc-700'>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										TypeScript / JavaScript
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										React / Svelte
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Node.js / Express / Laravel / .NET
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										GraphQL / REST
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										MongoDB / PostgreSQL / MySQL
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Tailwind CSS / Bootstrap
									</li>
								</ul>
							</div>
							<div>
								<h3 className='text-lg font-bold mb-4'>Services</h3>
								<ul className='space-y-2 text-zinc-700'>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Web Development
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Scalable UI Development
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										API Development & Integration
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Architecture & Performance Consulting
									</li>
									<li className='flex items-center gap-2'>
										<span className='w-1 h-1 bg-indigo-500 rounded-full' />
										Code Reviews & Best Practices
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
