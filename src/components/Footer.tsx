import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer: React.FC = (): React.ReactNode => {
	return (
		<footer className='py-8 border-t border-zinc-300'>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
					<div>
						<div className='text-lg font-bold tracking-tighter'>Gerardo Garcia</div>
					</div>
					<div className='flex gap-6'>
						<a
							href='https://github.com/Ch1py7/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-zinc-500 hover:text-indigo-500 transition-colors'
						>
							<Github className='w-5 h-5' />
						</a>
						<a
							href='https://www.linkedin.com/in/gerardo-bulbsum/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-zinc-500 hover:text-indigo-500 transition-colors'
						>
							<Linkedin className='w-5 h-5' />
						</a>
						<a
							href='mailto:garcialopezgerardo6612@gmail.com'
							className='text-zinc-500 hover:text-indigo-500 transition-colors'
						>
							<Mail className='w-5 h-5' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
