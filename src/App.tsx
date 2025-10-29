import { useRef, useState } from 'react'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import { RecentProjects } from './components/Projects'

const sections = ['home', 'work', 'about', 'contact']

export const App: React.FC = (): React.ReactNode => {
	const [activeSection, setActiveSection] = useState('home')

	const sectionRefs = useRef<(HTMLElement | null)[]>([])

	const handleSection = (el: HTMLElement | null, index: number) => {
		sectionRefs.current[index] = el
	}

	const scrollToSection = (section: string) => {
		const index = sections.indexOf(section)
		sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
		setActiveSection(section)
	}

	return (
		<div className='relative bg-zinc-100 text-zinc-900 min-h-screen font-[Satoshi] overflow-x-hidden'>
			<Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
			<Presentation handleSection={handleSection} scrollToSection={scrollToSection} />
			<RecentProjects handleSection={handleSection} />
			<AboutMe handleSection={handleSection} />
			<Contact handleSection={handleSection} />
			<Footer />
		</div>
	)
}
