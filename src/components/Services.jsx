import { useState, useCallback } from 'react'

const services = [
    {
        title: 'AI Infrastructure',
        desc: 'We build intelligent systems that power chat platforms, diagnostics, personalization engines, and predictive workflows.',
        pct: '94',
    },
    {
        title: 'Consumer Mobile Apps',
        desc: 'High-retention apps built for iOS and Android with viral loops, deep linking, and ASO-optimized store launches for global distribution.',
        pct: '88',
    },
    {
        title: 'Web3 & Blockchain Products',
        desc: 'Tokenized ecosystems, reward systems, wallet integrations, and decentralized growth models.',
        pct: '82',
    },
    {
        title: 'Payments & Fintech',
        desc: 'Crypto + fiat rails, wallet systems, merchant integrations, and embedded finance.',
        pct: '76',
    },
    {
        title: 'GTM & Growth Engineering',
        desc: 'We engineer distribution-first launches with growth loops, paid acquisition funnels, App Store Optimization, influencer playbooks, and cross-market scaling strategies that take products from 0 → 1M users.',
        pct: '71',
    },
]

const serviceLabels = ['AI Infrastructure', 'Mobile Apps', 'Web3 & Blockchain', 'Fintech', 'GTM & Growth']

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [fading, setFading] = useState(false)

    const activateService = useCallback((index) => {
        if (index === activeIndex) return
        setFading(true)
        setTimeout(() => {
            setActiveIndex(index)
            setFading(false)
        }, 200)
    }, [activeIndex])

    const active = services[activeIndex]

    return (
        <section className="services-section container" id="services">
            <div className="label" style={{ marginBottom: '40px' }}>What We Do</div>

            <div className="service-wheel-container">
                <div className="service-list">
                    {serviceLabels.map((label, i) => (
                        <div
                            key={i}
                            className={`service-item${i === activeIndex ? ' active' : ''}`}
                            onMouseEnter={() => activateService(i)}
                            onClick={() => activateService(i)}
                        >
                            <span>{String(i + 1).padStart(2, '0')}</span>
                            {label}
                            {/* Mobile-only description (visible via CSS) */}
                            <div className="service-item-desc">
                                {services[i].desc}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lens-card">
                    <div
                        style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-50%',
                            width: '100%',
                            height: '200%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(220,220,220,0) 70%)',
                            pointerEvents: 'none',
                        }}
                    />

                    <div className="lens-content flex-col justify-between" style={{ height: '100%' }}>
                        <div>
                            <h3
                                className="display-lg"
                                style={{
                                    marginBottom: '24px',
                                    opacity: fading ? 0 : 1,
                                    transition: 'opacity 0.2s',
                                }}
                            >
                                {active.title}
                            </h3>
                            <p
                                className="body-text"
                                style={{
                                    opacity: fading ? 0 : 1,
                                    transition: 'opacity 0.2s',
                                }}
                            >
                                {active.desc}
                            </p>
                        </div>

                        <div style={{ alignSelf: 'flex-end', marginTop: 'auto', paddingTop: '40px' }}>
                            <span className="label" style={{ display: 'block', marginBottom: '8px' }}>
                                Capacity Load
                            </span>
                            <div className="display-num" style={{ fontSize: '3rem', color: 'var(--text-primary)' }}>
                                {active.pct}
                                <span style={{ color: 'var(--text-tertiary)' }}>%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
