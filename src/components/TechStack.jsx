const techCategories = [
    {
        name: 'AI Models',
        items: ['GPT-4 / LLM Integration', 'Custom ML Pipelines', 'NLP & Diagnostics', 'Predictive Workflows'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.5-9.11 0-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12z" />
            </svg>
        ),
    },
    {
        name: 'iOS & Android',
        items: ['React Native', 'Swift / Kotlin', 'Cross-Platform', 'App Store Publishing'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
            </svg>
        ),
    },
    {
        name: 'Blockchain',
        items: ['Smart Contracts', 'Wallet Integration', 'Token Systems', 'DeFi Protocols'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
            </svg>
        ),
    },
    {
        name: 'Payment Rails',
        items: ['Crypto + Fiat', 'Merchant APIs', 'Embedded Finance', 'Digital Cards'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
        ),
    },
    {
        name: 'Cloud Infrastructure',
        items: ['AWS / GCP', 'Edge Computing', 'CI/CD Pipelines', 'Auto-Scaling'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
        ),
    },
]

const TechStack = () => {
    return (
        <section className="techstack-section container">
            <div className="label" style={{ marginBottom: '40px' }}>Technology Stack</div>
            <div className="tech-grid">
                {techCategories.map((cat, i) => (
                    <div key={i} className="tech-card">
                        <div className="tech-card-icon">{cat.icon}</div>
                        <h3 className="tech-card-title">{cat.name}</h3>
                        <ul className="tech-card-list">
                            {cat.items.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechStack
