const industries = [
    'Artificial Intelligence',
    'Consumer Technology',
    'Blockchain & Web3',
    'Payments & Fintech',
    'Go-to-Market & Growth',
    'Emerging Market Distribution',
]

const About = () => {
    return (
        <section className="about-section container" id="about">
            <div className="label" style={{ marginBottom: '40px' }}>Who We Are</div>

            <div className="about-grid">
                <div className="flex-col" style={{ gap: '32px' }}>
                    <h2 className="display-lg">
                        Intelligent Products.<br />
                        Global Scale.
                    </h2>
                    <p className="body-text" style={{ maxWidth: '60ch' }}>
                        Streamlivr Technologies Inc. is a Delaware-based product and technology company focused on building intelligent, scalable, and revenue-generating digital products.
                    </p>
                    <p className="body-text" style={{ maxWidth: '60ch' }}>
                        We design and launch AI platforms, fintech systems, consumer mobile apps, and Web3-native infrastructure that solve real-world problems across global markets.
                    </p>
                    <p className="body-text" style={{ maxWidth: '60ch' }}>
                        Beyond building, we engineer go-to-market strategies, distribution channels, and growth systems for our clients — ensuring every product we ship reaches its audience, acquires users, and scales sustainably across markets.
                    </p>
                </div>

                <div className="about-industries-card">
                    <div className="label" style={{ marginBottom: '24px' }}>We operate at the intersection of</div>
                    <div className="industries-list">
                        {industries.map((industry, i) => (
                            <div key={i} className="industry-item">
                                <span className="industry-number">{String(i + 1).padStart(2, '0')}</span>
                                <span className="industry-name">{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
