import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer: React.FC = (): React.ReactNode => {
	return (
		<footer className='py-8 border-t border-zinc-300/50 dark:border-zinc-700/50'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
					<div>
						<div className='text-lg font-bold tracking-tighter'>Gerardo Garcia</div>
					</div>
					<div className='flex gap-6'>
						<a
							href='https://github.com/Ch1py7/'
							target='_blank'
							rel='noopener noreferrer'
							className='opacity-60 hover:text-indigo-500 transition-colors'
							aria-label='GitHub profile'
						>
							<Github className='w-5 h-5' aria-hidden='true' />
						</a>
						<a
							href='https://www.linkedin.com/in/gerardo-bulbsum/'
							target='_blank'
							rel='noopener noreferrer'
							className='opacity-60 hover:text-indigo-500 transition-colors'
							aria-label='LinkedIn profile'
						>
							<Linkedin className='w-5 h-5' aria-hidden='true' />
						</a>
						<a
							href='mailto:garcialopezgerardo6612@gmail.com'
							className='opacity-60 hover:text-indigo-500 transition-colors'
							aria-label='Send email'
						>
							<Mail className='w-5 h-5' aria-hidden='true' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
