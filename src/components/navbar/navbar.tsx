import { useEffect, useRef } from 'react'
import './navbar.css'

const Navbar = () => {
	const navbarRef = useRef<HTMLElement>(null)

	useEffect(() => {
		let frameId = 0

		const updateWavePosition = () => {
			frameId = 0
			const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
			const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
			const shift = `${progress * -50}%`
			const rawRevealProgress = Math.min(window.scrollY / 600, 1)
			const revealProgress = rawRevealProgress * rawRevealProgress * (3 - (2 * rawRevealProgress))
			const expandedHeight = window.innerHeight * 0.65
			const navbarHeight = expandedHeight - ((expandedHeight - 56) * revealProgress)
			const expandedBrandWidth = Math.min(Math.max(window.innerWidth * 0.36, 220), 560)
			const expandedBrandSize = expandedBrandWidth / 3.2
			const compactBrandSize = 26
			const brandSize = expandedBrandSize - ((expandedBrandSize - compactBrandSize) * revealProgress)
			const compactBrandWidth = 110
			const brandWidth = expandedBrandWidth - ((expandedBrandWidth - compactBrandWidth) * revealProgress)
			const brandY = (expandedHeight / 2) - (((expandedHeight - 56) / 2) * revealProgress)
			const brandLeft = Math.max(6 * window.innerWidth / 100, 24)
			const brandTravel = (brandLeft + (brandWidth / 2) - (window.innerWidth / 2)) * revealProgress
			const contentProgress = Math.min(Math.max((revealProgress - 0.72) / 0.28, 0), 1)
			const contentShift = (1 - contentProgress) * window.innerWidth

			if (navbarRef.current) {
				navbarRef.current.style.setProperty('--wave-shift', shift)
				navbarRef.current.style.setProperty('--navbar-height', `${navbarHeight}px`)
				navbarRef.current.style.setProperty('--water-opacity', `${1 - revealProgress}`)
				navbarRef.current.style.setProperty('--water-height', `${(1 - revealProgress) * 25}vh`)
				navbarRef.current.style.setProperty('--brand-size', `${brandSize}px`)
				navbarRef.current.style.setProperty('--brand-width', `${brandWidth}px`)
				navbarRef.current.style.setProperty('--brand-y', `${brandY}px`)
				navbarRef.current.style.setProperty('--brand-x', `${brandTravel}px`)
				navbarRef.current.style.setProperty('--content-opacity', `${contentProgress}`)
				navbarRef.current.style.setProperty('--content-shift', `${contentShift}px`)
				navbarRef.current.classList.toggle('is-scrolling', window.scrollY > 0)
				navbarRef.current.classList.toggle('has-content', contentProgress >= 1)
			}
		}

		const requestUpdate = () => {
			if (!frameId) frameId = window.requestAnimationFrame(updateWavePosition)
		}

		requestUpdate()
		window.addEventListener('scroll', requestUpdate, { passive: true })
		window.addEventListener('resize', requestUpdate)

		return () => {
			window.cancelAnimationFrame(frameId)
			window.removeEventListener('scroll', requestUpdate)
			window.removeEventListener('resize', requestUpdate)
		}
	}, [])

	return (
	<nav ref={navbarRef} className="top-navbar" aria-label="Main navigation">
		<div className="navbar-water" aria-hidden="true">
			<div className="water-bottom-wave" />
		</div>
		<svg className="navbar-wave" viewBox="0 0 1600 72" preserveAspectRatio="none" aria-hidden="true">
			<path className="wave wave-back" d="M0 0H1680V22C1560 44 1440 44 1320 22S1080 0 960 22 720 44 600 22 360 0 240 22 120 44 0 22Z" />
			<path className="wave wave-middle" d="M0 0H1680V30C1560 52 1440 52 1320 30S1080 8 960 30 720 52 600 30 360 8 240 30 120 52 0 30Z" />
			<path className="wave wave-front" d="M0 0H1680V38C1560 64 1440 64 1320 38S1080 12 960 38 720 64 600 38 360 12 240 38 120 64 0 38Z" />
			<path className="wave wave-soft wave-back" d="M0 0H1680V22C1560 44 1440 44 1320 22S1080 0 960 22 720 44 600 22 360 0 240 22 120 44 0 22Z" />
			<path className="wave wave-soft wave-middle" d="M0 0H1680V30C1560 52 1440 52 1320 30S1080 8 960 30 720 52 600 30 360 8 240 30 120 52 0 30Z" />
			<path className="wave wave-soft wave-front" d="M0 0H1680V38C1560 64 1440 64 1320 38S1080 12 960 38 720 64 600 38 360 12 240 38 120 64 0 38Z" />
		</svg>
		<a className="navbar-brand" href="#top" aria-label="Syvys home">
			<img src="/syvys%20white%20logo.png" alt="Syvys" />
		</a>
		<div className="navbar-links">
			<a href="#services">Services</a>
			<a href="#why-syvys">Why Syvys</a>
			<a href="#about">Approach</a>
			<a href="#vision">Vision</a>
			<a href="#contact">Contact</a>
		</div>
	</nav>
)
}
export default Navbar