import { createContext, type ReactNode, useContext, useEffect, useRef, useState } from 'react'

interface ThemeContextType {
	isDark: boolean
	toggleTheme: (x: number, y: number) => void
	circleCoordinates: { x: number; y: number } | null
	isAnimating: boolean
	willBeDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDark, setIsDark] = useState(false)
	const [circleCoordinates, setCircleCoordinates] = useState<{ x: number; y: number } | null>(null)
	const [isAnimating, setIsAnimating] = useState(false)
	const [willBeDark, setWillBeDark] = useState(false)
	const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
	const classTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme === 'dark') {
			setIsDark(true)
			document.documentElement.classList.add('dark')
		}
	}, [])

	const toggleTheme = (x: number, y: number) => {
		if (isAnimating) {
			return
		}

		const newIsDark = !isDark
		setWillBeDark(newIsDark)
		setIsDark(newIsDark)
		localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
		setCircleCoordinates({ x, y })
		setIsAnimating(true)

		if (classTimeoutRef.current) {
			clearTimeout(classTimeoutRef.current)
		}
		if (animationTimeoutRef.current) {
			clearTimeout(animationTimeoutRef.current)
		}

		classTimeoutRef.current = setTimeout(() => {
			if (newIsDark) {
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
		}, 200)

		animationTimeoutRef.current = setTimeout(() => {
			setIsAnimating(false)
			setCircleCoordinates(null)
		}, 800)
	}

	return (
		<ThemeContext.Provider
			value={{ isDark, toggleTheme, circleCoordinates, isAnimating, willBeDark }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = (): ThemeContextType => {
	const context = useContext<ThemeContextType | undefined>(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
