import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface NavbarProps {
	scrollToSection: (section: string) => void
	activeSection: string
}

const sections = ['home', 'work', 'about', 'contact']

export const Navbar: React.FC<NavbarProps> = ({
	scrollToSection,
	activeSection,
}): React.ReactNode => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const { isDark, toggleTheme } = useTheme()

	return (
		<>
			<motion.nav
				className='fixed top-0 left-0 w-full z-40'
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ delay: 0.2 }}
			>
				<div className='max-w-7xl mx-auto px-6 py-6 flex justify-between items-center'>
					<div className='flex space-x-10'>
						<motion.button
							onClick={() => scrollToSection('home')}
							className='text-xl font-bold tracking-tighter'
							whileHover={{ scale: 1.05 }}
						>
							Gerardo Garcia
						</motion.button>
						{/* todo: add insights tab */}
						{/* <motion.button
							className='text-zinc-900 text-xl font-bold tracking-tighter'
							whileHover={{ scale: 1.05 }}
						>
							Insights
						</motion.button> */}
					</div>

					<div className='hidden md:flex items-center gap-8'>
						{sections.map((section) => (
							<motion.button
								key={section}
								onClick={() => scrollToSection(section)}
								className={`uppercase text-sm tracking-widest cursor-pointer ${
									activeSection === section ? 'opacity-100' : 'opacity-50 hover:opacity-100'
								}`}
								whileHover={{ y: -2 }}
							>
								{section}
							</motion.button>
						))}
						<motion.button
							onClick={(e) => {
								const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
								const x = rect.left + rect.width / 2
								const y = rect.top + rect.height / 2
								toggleTheme(x, y)
							}}
							className='p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							{isDark ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
						</motion.button>
					</div>

					<div className='flex items-center gap-4 md:hidden'>
						<motion.button
							onClick={(e) => {
								const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
								const x = rect.left + rect.width / 2
								const y = rect.top + rect.height / 2
								toggleTheme(x, y)
							}}
							className='p-2'
							whileTap={{ scale: 0.9 }}
						>
							{isDark ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
						</motion.button>
						<motion.button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className=''
							whileTap={{ scale: 0.9 }}
						>
							{mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
						</motion.button>
					</div>
				</div>
			</motion.nav>
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className='fixed inset-0 z-30 bg-zinc-100 dark:bg-zinc-900 bg-opacity-95 flex flex-col items-center justify-center'
					>
						<div className='flex flex-col items-center gap-8'>
							{sections.map((section) => (
								<motion.button
									key={section}
									onClick={() => scrollToSection(section)}
									className={`uppercase text-2xl tracking-widest ${
										activeSection === section ? 'opacity-100' : 'opacity-50'
									}`}
									whileHover={{ scale: 1.1 }}
								>
									{section}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
