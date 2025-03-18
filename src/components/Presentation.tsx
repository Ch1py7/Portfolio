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
			</div>
			<div className='max-w-7xl mx-auto px-6 py-20 relative z-10'>
				<div className='max-w-5xl mx-auto'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-none'
					>
						Fullstack Developer
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className='mb-8 flex space-x-2'
					>
						<div className='inline-block px-3 py-1 mb-6 border border-zinc-400 dark:border-zinc-600 text-xs uppercase tracking-widest'>
							React
						</div>
						<div className='inline-block px-3 py-1 mb-6 border border-zinc-400 dark:border-zinc-600 text-xs uppercase tracking-widest'>
							TypeScript
						</div>
						<div className='inline-block px-3 py-1 mb-6 border border-zinc-400 dark:border-zinc-600 text-xs uppercase tracking-widest'>
							.NET
						</div>
						<div className='inline-block px-3 py-1 mb-6 border border-zinc-400 dark:border-zinc-600 text-xs uppercase tracking-widest'>
							Node
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9 }}
						className='max-w-2xl'
					>
						<p className='text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-8'>
							I craft practical digital solutions with a focus on performance, accessibility, and
							engaging user experiences. My work is about solving real problems, not just following
							trends.
						</p>
						<div className='flex flex-wrap gap-4'>
							<motion.button
								onClick={() => scrollToSection('work')}
								className='group relative px-6 py-3 overflow-hidden cursor-pointer'
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
			<div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-appear'>
				<div className='flex flex-col items-center animate-upDown'>
					<span className='text-xs uppercase tracking-widest mb-2'>Scroll</span>
					<div className='w-5 h-10 border-2 border-zinc-500 rounded-full flex justify-center'>
						<div className='w-1 h-2 bg-zinc-500 rounded-full mt-2 animate-upDownSlower' />
					</div>
				</div>
			</div>
		</section>
	)
}
