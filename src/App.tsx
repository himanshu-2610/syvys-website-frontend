import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'

const capabilities = [
	{
		number: '01',
		title: 'AI Automation',
		shortDescription: 'Let AI handle the repetitive work.',
		description: 'We design intelligent workflows that connect your tools, teams, and business processes, allowing repetitive tasks to run automatically with minimal human intervention.',
		items: ['Lead capture and qualification', 'Customer follow-ups', 'CRM updates', 'Reports and notifications'],
		outcome: 'Less manual work. More productivity.',
	},
	{
		number: '02',
		title: 'AI Calling',
		shortDescription: 'Intelligent conversations. Available 24/7.',
		description: 'Deploy AI voice agents that communicate with customers naturally, handle routine conversations, and perform tasks without requiring a human agent for every call.',
		items: ['Lead qualification', 'Appointment booking', 'Customer support', 'Reminders and confirmations'],
		outcome: 'Your AI agent can talk, understand, respond, collect information, and take action.',
	},
	{
		number: '03',
		title: 'Website Development',
		shortDescription: 'Websites built to generate business.',
		description: 'We create modern, fast, responsive websites designed around business goals, not just attractive designs.',
		items: ['Mobile responsive', 'Fast and optimized', 'SEO-ready', 'AI-integrated and secure'],
		outcome: 'Your website should not just represent your business. It should help grow it.',
	},
	{
		number: '04',
		title: 'AI-Powered Advertising',
		shortDescription: 'Create smarter ads. Optimize faster.',
		description: 'We combine AI with advertising strategies to help businesses create, test, optimize, and scale campaigns more efficiently.',
		items: ['Ad creatives', 'Audience research', 'Creative testing', 'Performance analysis'],
		outcome: 'More experiments. Better insights. Smarter decisions.',
	},
	{
		number: '05',
		title: 'Digital Marketing',
		shortDescription: 'Turn attention into customers.',
		description: 'We build digital marketing strategies that help businesses become more visible, attract the right audience, and convert attention into measurable business results.',
		items: ['Search engine optimization', 'Content strategy', 'Lead generation', 'Conversion optimization'],
		outcome: 'We focus on business outcomes, not vanity metrics.',
	},
	{
		number: '06',
		title: 'AI Integration',
		shortDescription: 'Already using software? Make it smarter.',
		description: 'You do not always need a new system. We integrate AI into the tools your business already uses.',
		items: ['CRMs', 'Websites', 'Communication platforms', 'Databases and business applications'],
		outcome: 'Connect your systems. Automate your workflows. Add intelligence where it matters.',
	},
]

const principles = [
	['01', 'Built Around Your Business', 'We understand your processes, identify bottlenecks, and design the right technology solution.'],
	['02', 'AI With Purpose', 'We use AI where it can create real business value, not simply because it is trending.'],
	['03', 'Automation That Saves Time', 'We identify repetitive processes and turn them into reliable automated workflows.'],
	['04', 'Designed to Scale', 'Solutions are built with future growth in mind, so your technology can evolve with your business.'],
	['05', 'One Technology Partner', 'Build your digital infrastructure with one focused partner across AI, software, automation, and growth.'],
]

const process = [
	['01', 'Understand', 'We learn about your business, customers, processes, and challenges.'],
	['02', 'Identify', 'We identify where AI, automation, software, or marketing can create the biggest impact.'],
	['03', 'Build', 'Our team designs and develops the solution around your requirements.'],
	['04', 'Launch', 'We deploy, integrate, test, and optimize the system.'],
	['05', 'Scale', 'We continuously improve and expand the foundation as your business grows.'],
]

function App() {
	const [openCapability, setOpenCapability] = useState('01')

	return (
		<main id="top">
			<Navbar />

			<section className="hero section-wrap">
				<div className="hero-copy">
					<p className="eyebrow">Technical partners for ambitious businesses</p>
					<h1>Turn your business into an <em>AI-powered</em> business.</h1>
					<p className="hero-lede">
						We help businesses leverage AI, automation, software, and digital technology
						to reduce manual work, improve customer experiences, and accelerate growth.
					</p>
					<p className="hero-supporting">From intelligent automation and AI-powered calling to high-converting websites and AI-driven advertising, we build technology that works for your business.</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#contact">Transform your business <span>-&gt;</span></a>
						<a className="text-link" href="#services">Explore what we do <span>↓</span></a>
					</div>
				</div>
				<div className="hero-visual" aria-label="Abstract systems diagram">
					<div className="orbit orbit-one" />
					<div className="orbit orbit-two" />
					<div className="core-node">S</div>
					<div className="node node-one">API</div>
					<div className="node node-two">DATA</div>
					<div className="node node-three">UX</div>
					<div className="visual-label">SYSTEMS / 01</div>
				</div>
			</section>

			<section className="signal-bar" aria-label="Syvys capabilities">
				<div><strong>AI-first</strong><span>intelligent systems</span></div>
				<div><strong>Automation</strong><span>less manual work</span></div>
				<div><strong>Software</strong><span>built to scale</span></div>
				<div><strong>Growth</strong><span>technology with purpose</span></div>
			</section>

			<section className="services section-wrap" id="services">
				<div className="section-heading">
					<p className="eyebrow">What we do</p>
					<h2>Technology that works for your business.</h2>
					<p>We combine AI, automation, software, and digital growth capabilities to solve practical business problems, from reducing repetitive work to improving customer acquisition and experience.</p>
				</div>
				<div className="service-grid">
					{capabilities.map((service) => (
						<article className={`service-card ${openCapability === service.number ? 'is-open' : ''}`} key={service.number}>
							<span className="service-number">{service.number}</span>
							<button className="service-trigger" type="button" aria-expanded={openCapability === service.number} aria-controls={`service-detail-${service.number}`} onClick={() => setOpenCapability(openCapability === service.number ? '' : service.number)}>
								<h3>{service.title}</h3><span className="card-arrow" aria-hidden="true">↗</span>
								<p>{service.shortDescription}</p>
							</button>
							<div className="service-detail" id={`service-detail-${service.number}`} aria-hidden={openCapability !== service.number}>
								<p>{service.description}</p>
								<span className="detail-label">Solutions for</span>
								<ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
								<strong>{service.outcome}</strong>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="why-syvys section-wrap" id="why-syvys">
				<div className="section-heading compact-heading"><p className="eyebrow">Why Syvys</p><h2>Technology built around your business.</h2></div>
				<div className="principles-grid">{principles.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
			</section>

			<section className="approach section-wrap" id="about">
				<div className="approach-statement">
					<p className="eyebrow">How we work</p>
					<h2>Small senior teams. <em>Big</em> technical clarity.</h2>
				</div>
				<div className="approach-list">
					{process.map(([number, title, description]) => <div key={number}><span>{number}</span><p><strong>{title}</strong>{description}</p></div>)}
				</div>
			</section>

			<section className="ecosystem section-wrap">
				<div className="section-heading"><p className="eyebrow">One technology partner</p><h2>Multiple capabilities. <em>One</em> connected system.</h2><p>AI, software, automation, and digital growth work better when they are designed to work together.</p></div>
				<div className="ecosystem-grid">{capabilities.map((item) => <div key={item.number} className="ecosystem-node"><span>{item.number}</span><strong>{item.title}</strong><p>{item.shortDescription}</p></div>)}</div>
				<p className="trust-note"><strong>Security is not an afterthought.</strong> Where relevant, our systems are designed with security, privacy, reliability, and scalability in mind.</p>
			</section>

			<section className="vision-mission section-wrap" id="vision">
				<article><p className="eyebrow">Our vision</p><h2>Shaping the future of intelligent business.</h2><p>To become a global technology leader shaping the future of intelligent business by making AI-first, secure, scalable technology accessible to businesses of every size.</p><div className="principle-line">Security, privacy, reliability, and responsible innovation.</div></article>
				<article><p className="eyebrow">Our mission</p><h2>Make businesses smarter, faster, and built for growth.</h2><p>To empower businesses worldwide with AI, automation, software, and digital innovation, turning complex technology into practical solutions that create measurable impact.</p><div className="principle-line">Long-term partnerships. Practical technology. Sustainable growth.</div></article>
			</section>

			<section className="contact section-wrap" id="contact">
				<p className="eyebrow">Have a hard problem?</p>
				<h2>Let&apos;s make it <em>possible.</em></h2>
				<p className="contact-copy">Tell us what you are building, what is stuck, or what needs to change.</p>
				<a className="contact-link" href="mailto:hello@syvys.com">hello@syvys.com <span>-&gt;</span></a>
			</section>

			<footer><span>syvys / intelligent technology partners</span><span>© 2026</span></footer>
		</main>
	)
}

export default App
