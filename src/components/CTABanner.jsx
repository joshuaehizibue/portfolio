const CTABanner = () => {
    return (
        <section className="cta-banner-section container">
            <div className="cta-banner">
                <div className="cta-banner-content">
                    <h2 className="display-lg" style={{ color: 'white' }}>
                        Let's Build the Future Together.
                    </h2>
                    <a
                        href="https://calendly.com/joshua-traction3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-banner-btn"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                        </svg>
                        Book a Strategy Call
                    </a>
                </div>
                <div className="cta-banner-gradient" />
            </div>
        </section>
    )
}

export default CTABanner
