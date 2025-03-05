import { motion } from 'framer-motion'

interface PresentationProps {
	handleSection: (el: HTMLElement | null, index: number) => void
	scrollToSection: (section: string) => void
}

export const Presentation: React.FC<PresentationProps> = ({
	handleSection,
	scrollToSection,
}): React.ReactNode => {
	return (
		<section
			ref={(el) => handleSection(el, 0)}
			id='home'
			className='relative min-h-screen flex items-center'
		>
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 z-0' />
				<motion.div
					className='absolute inset-0 opacity-30 dark:opacity-20 z-0'
					initial={{ backgroundPosition: '0% 0%' }}
					animate={{ backgroundPosition: '100% 100%' }}
					transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
					style={{
						backgroundImage:
							'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%239C92AC" fillOpacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
					}}
				/>
			</div>

			<div className='max-w-7xl mx-auto px-6 py-20 relative z-10'>
				<div className='max-w-5xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className='mb-8'
					>
						<div className='inline-block px-3 py-1 mb-6 border border-zinc-400 dark:border-zinc-600 text-xs uppercase tracking-widest'>
							Fullstack Developer
						</div>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-none'
					>
						Creating digital <br />
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500'>
							experiences
						</span>{' '}
						that <br />
						matter.
					</motion.h1>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9 }}
						className='max-w-2xl'
					>
						<p className='text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-8'>
							I build innovative digital solutions that solve real problems. Specializing in
							creating immersive, accessible, and performant applications.
						</p>

						<div className='flex flex-wrap gap-4'>
							<motion.button
								onClick={() => scrollToSection('work')}
								className='group relative px-6 py-3 overflow-hidden'
								whileHover={{ scale: 1.02 }}
							>
								<span className='absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600' />
								<span className='absolute inset-0 w-full h-full bg-zinc-900 dark:bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
								<span className='relative text-white font-medium tracking-wider z-10'>
									View Projects
								</span>
							</motion.button>

							<motion.a
								href='mailto:garcialopezgerardo6612@gmail.com'
								className='group relative px-6 py-3 overflow-hidden'
								whileHover={{ scale: 1.02 }}
							>
								<span className='absolute inset-0 w-full h-full border border-zinc-400 dark:border-zinc-600' />
								<span className='absolute inset-0 w-full h-full bg-zinc-200 dark:bg-zinc-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
								<span className='relative font-medium tracking-wider z-10'>Get in Touch</span>
							</motion.a>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 1 }}
				className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
					className='flex flex-col items-center'
				>
					<span className='text-xs uppercase tracking-widest mb-2'>Scroll</span>
					<div className='w-5 h-10 border-2 border-zinc-500 rounded-full flex justify-center'>
						<motion.div
							animate={{ y: [0, 15, 0] }}
							transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
							className='w-1 h-2 bg-zinc-500 rounded-full mt-2'
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}
