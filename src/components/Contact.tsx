import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'

interface ContactProps {
	handleSection: (el: HTMLElement | null, index: number) => void
}

export const Contact: React.FC<ContactProps> = ({ handleSection }): React.ReactNode => {
	return (
		<section ref={(el) => handleSection(el, 3)} id='contact' className='py-20 md:py-32'>
			<div className='container mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5 }}
					className='max-w-3xl mx-auto text-center mb-16'
				>
					<div className='flex items-center justify-center gap-4 mb-6'>
						<div className='w-12 h-[1px] bg-zinc-400 dark:bg-zinc-600' />
						<span className='text-sm uppercase tracking-widest'>Contact</span>
						<div className='w-12 h-[1px] bg-zinc-400 dark:bg-zinc-600' />
					</div>

					<h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-6'>Let's connect</h2>

					<p className='text-lg text-zinc-700 dark:text-zinc-300'>
						I'm open to new opportunities and collaborations. Feel free to reach out through social
						media or email.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='max-w-xl mx-auto'
				>
					<div className='space-y-8'>
						<div className='text-center'>
							<h3 className='text-2xl font-bold mb-4'>Download Resume</h3>
							<motion.a
								href='/path-to-your-resume.pdf'
								download='YourName_Resume.pdf'
								className='inline-flex items-center gap-2 px-6 py-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors rounded-lg'
								whileHover={{ scale: 1.05 }}
							>
								<Download className='w-5 h-5' />
								<span>Download Resume</span>
							</motion.a>
						</div>

						<div className='text-center'>
							<h3 className='text-2xl font-bold mb-4'>Contact Information</h3>
							<a
								href='mailto:garcialopezgerardo6612@gmail.com'
								className='text-indigo-500 dark:text-indigo-400 hover:underline text-lg'
							>
								garcialopezgerardo6612@gmail.com
							</a>
						</div>

						<div className='text-center'>
							<h3 className='text-2xl font-bold mb-4'>Social Media</h3>
							<div className='flex justify-center gap-6'>
								<motion.a
									href='https://github.com/Ch1py7/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors'
									whileHover={{ scale: 1.1 }}
								>
									<Github className='w-8 h-8' />
								</motion.a>
								<motion.a
									href='https://www.linkedin.com/in/gerardo-bulbsum/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors'
									whileHover={{ scale: 1.1 }}
								>
									<Linkedin className='w-8 h-8' />
								</motion.a>
								<motion.a
									href='https://x.com/Bulbsum'
									target='_blank'
									rel='noopener noreferrer'
									className='text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors'
									whileHover={{ scale: 1.1 }}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-8 h-8'
										viewBox='0 0 24 24'
										fill='currentColor'
									>
										<title>twitter</title>
										<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
									</svg>
								</motion.a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
