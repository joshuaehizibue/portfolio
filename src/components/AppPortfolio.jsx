const apps = [
    {
        name: 'Parentii',
        desc: 'AI-powered family coordination and productivity platform.',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        glowPos: { bottom: '-40px', right: '-40px' },
        category: 'AI · Family Tech',
        website: 'https://parentii.app',
        appStore: 'https://apps.apple.com/us/app/parentii-ai-parenting-coach/id6758043919',
        playStore: 'https://play.google.com/store/apps/details?id=com.parentii.app',
        iconUrl: '/icons/parentii.webp',
    },
    {
        name: 'Raphina AI',
        desc: 'AI-driven health companion with emerging locator and intelligent diagnostics.',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        glowPos: { top: '-40px', left: '-40px' },
        category: 'AI · HealthTech',
        website: 'https://raphina.ai',
        appStore: null,
        playStore: 'https://play.google.com/store/apps/details?id=com.raphina.app',
        iconUrl: '/icons/raphina.webp',
    },
    {
        name: 'Blockroll',
        desc: 'Fintech payments platform for addresses and fiat-to-alt swap and Digital USD card.',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        glowPos: { bottom: '-40px', right: '-40px' },
        category: 'Fintech · Web3',
        website: 'https://blockroll.app',
        appStore: 'https://apps.apple.com/ng/app/blockroll/id6708225786',
        playStore: 'https://play.google.com/store/apps/details?id=com.blockroll.android',
        iconUrl: '/icons/blockroll.webp',
    },
    {
        name: 'Streamlivr',
        desc: 'Interactive livestreaming platform with wallet integration and creator monetization.',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        glowPos: { top: '-40px', right: '-40px' },
        category: 'Streaming · Web3',
        website: 'https://streamlivr.com',
        appStore: null,
        playStore: 'https://play.google.com/store/apps/details?id=kn.streamlivr.app',
        iconUrl: '/icons/streamlivr.webp',
    },
    {
        name: 'Shopmore Express',
        desc: 'Logistics and e-commerce infrastructure for emerging markets.',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        glowPos: { bottom: '-40px', left: '-40px' },
        category: 'E-commerce · Logistics',
        website: 'https://shopmoreexpress.com',
        appStore: null,
        playStore: 'https://play.google.com/store/apps/details?id=cn.koln.shopmore',
        iconUrl: '/icons/shopmore.webp',
    },
    {
        name: 'Quantum Infra',
        desc: 'Next-generation Quantum-AI computational infrastructure and distributed systems research.',
        gradient: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 50%, #6b8cce 100%)',
        glowPos: { bottom: '-40px', right: '-40px' },
        category: 'Quantum · Infrastructure',
        website: 'https://quantuminfra.io',
        appStore: null,
        playStore: null,
        iconUrl: '/icons/quantum.png',
    },
    {
        name: 'Filler AI',
        desc: 'Automated AI form filler and productivity assistant platform.',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        glowPos: { top: '-40px', right: '-40px' },
        category: 'AI · Productivity',
        website: 'https://fillerai.xyz',
        appStore: null,
        playStore: 'https://play.google.com/store/apps/details?id=com.streamlivr.fillerai',
        iconUrl: '/icons/fillerai.webp',
    },
]

/* Apple logo — official brand mark */
const AppleLogo = () => (
    <svg width="16" height="16" viewBox="0 0 384 512" fill="white">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-27.1-46.9-42.4-83.6-46.1-34.8-3.6-72.9 20.5-86.9 20.5-14.6 0-48.6-19.5-74.3-19.5C63.3 139.5 0 184 0 270.2c0 26.4 4.8 53.7 14.5 82 12.8 37.5 59.2 129.3 107.4 127.8 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-120.1-65.7-31.1-61.7-91.2-57.9-91.2zM239 67.6c27.6-32.6 24.6-62.5 23.8-72.6-23.7 1.4-51.2 16.2-67 35.3-17.2 20.6-27.3 46-25.3 74.8 25.7 2 49.3-13.8 68.5-37.5z" />
    </svg>
)

/* Google Play — official triangle icon */
const GooglePlayLogo = () => (
    <svg width="16" height="16" viewBox="0 0 512 512" fill="white">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
)

/* Globe icon for Website */
const WebIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
    </svg>
)

const AppCard = ({ app }) => (
    <div className="app-card" style={{ background: app.gradient }}>
        <div className="app-card-inner">
            <div>
                <div className="app-icon">
                    <img
                        src={app.iconUrl}
                        alt={`${app.name} icon`}
                        width="44"
                        height="44"
                        loading="lazy"
                        style={{ borderRadius: '12px', objectFit: 'cover' }}
                    />
                </div>
                <div className="app-category-tag">{app.category}</div>
                <h3>{app.name}</h3>
                <p>{app.desc}</p>
            </div>
            <div className="store-badges">
                {app.website && (
                    <a href={app.website} target="_blank" rel="noopener noreferrer" className="store-badge">
                        <WebIcon />
                        <span>Website</span>
                    </a>
                )}
                {app.appStore && (
                    <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="store-badge">
                        <AppleLogo />
                        <span>App Store</span>
                    </a>
                )}
                {app.playStore && (
                    <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="store-badge">
                        <GooglePlayLogo />
                        <span>Google Play</span>
                    </a>
                )}
            </div>
        </div>
        <div className="app-card-glow" style={app.glowPos} />
    </div>
)

const AppPortfolio = () => (
    <section className="portfolio-section container" id="portfolio">
        <div className="label" style={{ marginBottom: '16px' }}>Our Work</div>
        <p className="body-text" style={{ marginBottom: '40px' }}>
            Products we've built, launched, and scaled — from concept to millions of users across global markets.
        </p>
        <div className="app-grid-full">
            {apps.map((app, i) => (
                <AppCard key={i} app={app} />
            ))}
        </div>
    </section>
)

export default AppPortfolio
