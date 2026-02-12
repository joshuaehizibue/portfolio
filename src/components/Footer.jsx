const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>
                            STREAMLIVR TECHNOLOGIES
                        </div>
                        <p className="body-text" style={{ fontSize: '0.95rem' }}>
                            Delaware, United States
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="label" style={{ marginBottom: '16px' }}>Company</div>
                        <a href="#portfolio" className="footer-link">Portfolio</a>
                        <a href="#about" className="footer-link">About</a>
                        <a href="#services" className="footer-link">Services</a>
                        <a href="#contact" className="footer-link">Contact</a>
                    </div>

                    <div className="footer-links-group">
                        <div className="label" style={{ marginBottom: '16px' }}>Legal</div>
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Terms of Service</a>
                    </div>

                    <div className="footer-links-group">
                        <div className="label" style={{ marginBottom: '16px' }}>Connect</div>
                        <a href="mailto:business@streamlivr.com" className="footer-link">business@streamlivr.com</a>
                        <a
                            href="https://calendly.com/joshua-traction3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            Book a Strategy Call
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Streamlivr Technologies Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
