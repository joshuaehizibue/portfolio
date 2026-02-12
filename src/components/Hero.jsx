import { useEffect, useRef } from 'react'

const Hero = () => {
    const rulerRef = useRef(null)

    useEffect(() => {
        const ruler = rulerRef.current
        if (!ruler) return

        for (let i = 0; i < 100; i++) {
            const tick = document.createElement('div')
            tick.classList.add('tick')

            let height = Math.floor(Math.random() * (60 - 20 + 1) + 20)
            if (i % 5 === 0) height = 80
            if (i % 10 === 0) height = 100
            tick.style.height = height + '%'
            ruler.appendChild(tick)
        }
    }, [])

    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="flex-col gap-md reveal delay-1">
                    <div className="label">Product Studio</div>
                    <h1 className="display-xl">
                        Build.<br />
                        Ship.<br />
                        Scale.
                    </h1>
                </div>
                <div className="flex-col gap-sm reveal delay-2" style={{ paddingBottom: '20px' }}>
                    <p className="body-text" style={{ fontSize: '1.3rem', maxWidth: '55ch' }}>
                        Building Software Products That Power the Next Digital Economy
                    </p>
                    <p className="body-text">
                        Streamlivr Technologies Inc. is a product studio that builds, launches, and scales consumer apps, AI platforms, and Web3 infrastructure — from first prototype to global distribution and millions of users.
                    </p>
                    <div className="hero-ctas" style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
                        <a href="#portfolio" className="cta-primary">
                            View Our Work
                        </a>
                        <a
                            href="https://calendly.com/joshua-traction3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-secondary"
                        >
                            Book a Strategy Call
                        </a>
                    </div>
                </div>
            </div>

            <div className="ruler-container reveal delay-3">
                <div className="red-line" />
                <div className="ruler-ticks" ref={rulerRef} />
            </div>
            <div
                className="flex-row justify-between"
                style={{ marginTop: '16px', padding: '0 10px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}
            >
                <span>CONCEPT</span>
                <span>DEPLOYMENT</span>
            </div>
        </section>
    )
}

export default Hero
