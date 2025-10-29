import { useEffect, useRef, useState } from 'react'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import { RecentProjects } from './components/Projects'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'

const sections = ['home', 'work', 'about', 'contact']

const CanvasAnimation = () => {
	const { circleCoordinates, isAnimating, willBeDark, isDark } = useTheme()
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const animationRef = useRef<number | undefined>(undefined)
	const progressRef = useRef(0)
	const previousCoordinatesRef = useRef<{ x: number; y: number } | null>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const drawCanvas = () => {
			if (!circleCoordinates || !isAnimating) {
				ctx.fillStyle = isDark ? '#000000' : '#ffffff'
				ctx.fillRect(0, 0, canvas.width, canvas.height)
			} else if (isAnimating) {
				const currentRadius =
					progressRef.current * Math.sqrt(canvas.width ** 2 + canvas.height ** 2)
				ctx.fillStyle = '#ffffff'
				ctx.fillRect(0, 0, canvas.width, canvas.height)

				if (progressRef.current > 0) {
					ctx.beginPath()
					ctx.arc(circleCoordinates.x, circleCoordinates.y, currentRadius, 0, Math.PI * 2)
					ctx.fillStyle = '#000000'
					ctx.fill()
				}
			}
		}

		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			drawCanvas()
		}

		resizeCanvas()
		drawCanvas()
		window.addEventListener('resize', resizeCanvas)

		const maxRadius = Math.sqrt(canvas.width ** 2 + canvas.height ** 2)

		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current)
		}

		if (!circleCoordinates || !isAnimating) {
			ctx.fillStyle = isDark ? '#000000' : '#ffffff'
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			return () => {
				window.removeEventListener('resize', resizeCanvas)
			}
		}

		const isNewAnimation =
			!previousCoordinatesRef.current ||
			previousCoordinatesRef.current.x !== circleCoordinates.x ||
			previousCoordinatesRef.current.y !== circleCoordinates.y

		if (isNewAnimation) {
			progressRef.current = willBeDark ? 0 : 1
		}

		previousCoordinatesRef.current = circleCoordinates

		const animate = () => {
			const step = 0.018

			if (willBeDark) {
				progressRef.current += step
			} else {
				progressRef.current -= step
			}

			progressRef.current = Math.max(0, Math.min(1, progressRef.current))
			const currentRadius = progressRef.current * maxRadius

			ctx.fillStyle = '#ffffff'
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			if (progressRef.current > 0) {
				ctx.beginPath()
				ctx.arc(circleCoordinates.x, circleCoordinates.y, currentRadius, 0, Math.PI * 2)
				ctx.fillStyle = '#000000'
				ctx.fill()
			}

			if ((willBeDark && progressRef.current < 1) || (!willBeDark && progressRef.current > 0)) {
				animationRef.current = requestAnimationFrame(animate)
			} else {
			}
		}

		animationRef.current = requestAnimationFrame(animate)

		return () => {
			window.removeEventListener('resize', resizeCanvas)
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
		}
	}, [circleCoordinates, isAnimating, willBeDark, isDark])

	return <canvas ref={canvasRef} className='fixed inset-0 pointer-events-none z-0' />
}

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
		<ThemeProvider>
			<div className='relative min-h-screen font-[Satoshi] overflow-x-hidden text-gray-700 dark:text-gray-200'>
				<CanvasAnimation />
				<div className='relative z-10'>
					<Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
					<Presentation handleSection={handleSection} scrollToSection={scrollToSection} />
					<RecentProjects handleSection={handleSection} />
					<AboutMe handleSection={handleSection} />
					<Contact handleSection={handleSection} />
					<Footer />
				</div>
			</div>
		</ThemeProvider>
	)
}
