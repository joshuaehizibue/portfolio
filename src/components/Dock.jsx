const Dock = () => {
    return (
        <div className="dock-container">
            <a href="#" className="dock-item">
                <div className="dock-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                </div>
                <span className="dock-label">Home</span>
            </a>

            <a href="#portfolio" className="dock-item">
                <div className="dock-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                    </svg>
                </div>
                <span className="dock-label">Work</span>
            </a>

            <a href="#contact" className="dock-item">
                <div className="dock-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </div>
                <span className="dock-label">Contact</span>
            </a>

            <a
                href="https://calendly.com/joshua-traction3"
                target="_blank"
                rel="noopener noreferrer"
                className="action-fab"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </a>
        </div>
    )
}

export default Dock
