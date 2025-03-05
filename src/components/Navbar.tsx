import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
	darkMode: boolean
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
	scrollToSection: (section: string) => void
	activeSection: string
}

const sections = ['home', 'work', 'about', 'contact']

export const Navbar: React.FC<NavbarProps> = ({
	darkMode,
	setDarkMode,
	scrollToSection,
	activeSection,
}): React.ReactNode => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<>
			<motion.nav
				className='fixed top-0 left-0 w-full z-40 mix-blend-difference'
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ delay: 0.2 }}
			>
				<div className='max-w-7xl mx-auto px-6 py-6 flex justify-between items-center'>
					<motion.button
						onClick={() => scrollToSection('home')}
						className='text-white text-xl font-bold tracking-tighter'
						whileHover={{ scale: 1.05 }}
					>
						Gerardo Garcia
					</motion.button>

					<div className='hidden md:flex items-center gap-8'>
						{sections.map((section) => (
							<motion.button
								key={section}
								onClick={() => scrollToSection(section)}
								className={`text-white uppercase text-sm tracking-widest ${
									activeSection === section ? 'opacity-100' : 'opacity-50 hover:opacity-100'
								}`}
								whileHover={{ y: -2 }}
							>
								{section}
							</motion.button>
						))}

						<motion.button
							onClick={() => setDarkMode(!darkMode)}
							className='text-white ml-4'
							whileHover={{ rotate: 180 }}
							transition={{ duration: 0.3 }}
						>
							{darkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
						</motion.button>
					</div>

					<motion.button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className='text-white md:hidden'
						whileTap={{ scale: 0.9 }}
					>
						{mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
					</motion.button>
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
									className={`text-zinc-900 dark:text-zinc-100 uppercase text-2xl tracking-widest ${
										activeSection === section ? 'opacity-100' : 'opacity-50'
									}`}
									whileHover={{ scale: 1.1 }}
								>
									{section}
								</motion.button>
							))}

							<motion.button
								onClick={() => setDarkMode(!darkMode)}
								className='text-zinc-900 dark:text-zinc-100 mt-8'
								whileHover={{ rotate: 180 }}
								transition={{ duration: 0.3 }}
							>
								{darkMode ? <Sun className='w-6 h-6' /> : <Moon className='w-6 h-6' />}
							</motion.button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
