import { useRef } from 'react'
import useAutoScroll from '../hooks/useAutoScroll'

const services = [
    {
        title: 'AI Infrastructure',
        desc: 'We build intelligent systems that power chat platforms, diagnostics, personalization engines, and predictive workflows.',
        pct: '94',
    },
    {
        title: 'Consumer Mobile Apps',
        desc: 'High-retention apps built for iOS and Android with viral loops, deep linking, and ASO-optimized store launches.',
        pct: '88',
    },
    {
        title: 'Web3 & Blockchain',
        desc: 'Tokenized ecosystems, reward systems, wallet integrations, and decentralized growth models.',
        pct: '82',
    },
    {
        title: 'Payments & Fintech',
        desc: 'Crypto + fiat rails, wallet systems, merchant integrations, and embedded finance infrastructure.',
        pct: '76',
    },
    {
        title: 'GTM & Growth',
        desc: 'Distribution-first launches with growth loops, paid acquisition funnels, and cross-market scaling strategies.',
        pct: '71',
    },
    {
        title: 'Emerging Markets',
        desc: 'Localized product strategies and logistics infrastructure designed for high-growth developing economies.',
        pct: '90',
    },
]

const Services = () => {
    const listRef = useRef(null)
    // Auto-scroll for mobile view
    useAutoScroll({ containerRef: listRef, interval: 3000, scrollAmount: 320 })

    return (
        <section className="services-section container" id="services">
            <div className="flex-col gap-md" style={{ marginBottom: '80px' }}>
                <div className="label">What We Do</div>
                <h2 className="display-lg" style={{ maxWidth: '15ch' }}>
                    Building the Infrastructure of the Future.
                </h2>
            </div>

            <div className="services-grid" ref={listRef}>
                {services.map((service, i) => (
                    <div key={i} className="service-card">
                        <div className="service-header">
                            <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
                            <div className="service-pct-badge">{service.pct}% Capacity</div>
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="body-text" style={{ fontSize: '0.95rem' }}>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services

