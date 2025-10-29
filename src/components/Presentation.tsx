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
				<div className='absolute inset-0 bg-linear-to-br from-zinc-50 via-zinc-100 to-zinc-200' />
			</div>
			<div className='max-w-7xl mx-auto px-6 py-20 relative'>
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
						className='mb-8 flex flex-wrap gap-3'
					>
						<div className='inline-block px-4 py-2 bg-white/50 backdrop-blur-sm border border-zinc-300/50 rounded-full text-xs uppercase tracking-widest font-medium'>
							React
						</div>
						<div className='inline-block px-4 py-2 bg-white/50 backdrop-blur-sm border border-zinc-300/50 rounded-full text-xs uppercase tracking-widest font-medium'>
							TypeScript
						</div>
						<div className='inline-block px-4 py-2 bg-white/50 backdrop-blur-sm border border-zinc-300/50 rounded-full text-xs uppercase tracking-widest font-medium'>
							.NET
						</div>
						<div className='inline-block px-4 py-2 bg-white/50 backdrop-blur-sm border border-zinc-300/50 rounded-full text-xs uppercase tracking-widest font-medium'>
							Node
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9 }}
						className='max-w-2xl'
					>
						<p className='text-lg md:text-xl text-zinc-700 mb-4 md:mb-8'>
							I craft practical digital solutions with a focus on performance, accessibility, and
							engaging user experiences. My work is about solving real problems, not just following
							trends.
						</p>
						<div className='flex flex-wrap gap-4'>
							<motion.button
								onClick={() => scrollToSection('work')}
								className='group relative px-4 py-2 md:px-8 md:py-4 overflow-hidden cursor-pointer rounded-2xl'
								whileHover={{ scale: 1.02 }}
							>
								<span className='absolute inset-0 w-full h-full bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl' />
								<span className='absolute inset-0 w-full h-full bg-zinc-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl' />
								<span className='relative text-white font-medium tracking-wider'>
									View Projects
								</span>
							</motion.button>
							<motion.a
								href='mailto:garcialopezgerardo6612@gmail.com'
								className='group relative px-4 py-2 md:px-8 md:py-4 overflow-hidden rounded-2xl'
								whileHover={{ scale: 1.02 }}
							>
								<span className='absolute inset-0 w-full h-full border border-zinc-400 rounded-2xl' />
								<span className='absolute inset-0 w-full h-full bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl' />
								<span className='relative font-medium tracking-wider'>Get in Touch</span>
							</motion.a>
						</div>
					</motion.div>
				</div>
			</div>
			<div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-appear'>
				<div className='flex flex-col items-center animate-upDown md:hidden'>
					<span className='text-xs uppercase tracking-widest mb-2 text-zinc-600'>Swipe</span>
					<div className='flex gap-1'>
						<div className='w-2 h-2 bg-zinc-500 rounded-full animate-upDownSlower' />
						<div
							className='w-2 h-2 bg-zinc-500 rounded-full animate-upDownSlower'
							style={{ animationDelay: '0.1s' }}
						/>
						<div
							className='w-2 h-2 bg-zinc-500 rounded-full animate-upDownSlower'
							style={{ animationDelay: '0.2s' }}
						/>
					</div>
				</div>
				<div className='hidden md:flex flex-col items-center animate-upDown'>
					<span className='text-xs uppercase tracking-widest mb-2 text-zinc-600'>Scroll</span>
					<div className='w-5 h-10 border-2 border-zinc-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm'>
						<div className='w-1 h-2 bg-zinc-500 rounded-full mt-2 animate-upDownSlower' />
					</div>
				</div>
			</div>
		</section>
	)
}
