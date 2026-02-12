const reasons = [
    {
        title: 'Built for Scale',
        desc: 'Our products are architected for viral growth — from 1,000 beta users to millions across global markets with zero infrastructure rewrites.',
        metric: '10M+',
        metricLabel: 'Users Reached',
    },
    {
        title: 'Distribution-First GTM',
        desc: 'Every product ships with a go-to-market playbook: ASO, growth loops, paid channels, influencer partnerships, and analytics-driven iteration to drive acquisition and retention.',
        metric: '7',
        metricLabel: 'Live Products',
    },
    {
        title: 'Cross-Market Expertise',
        desc: 'We localize distribution strategies for emerging and established markets — adapting pricing, partnerships, and marketing channels to each region.',
        metric: '15+',
        metricLabel: 'Countries',
    },
    {
        title: 'Speed + Execution',
        desc: 'From concept to deployment with production-ready systems.',
        metric: '4.8★',
        metricLabel: 'Avg Rating',
    },
]

const WhyStreamlivr = () => {
    return (
        <section className="why-section container">
            <div className="label" style={{ marginBottom: '40px' }}>Why Streamlivr Technologies</div>
            <div className="why-grid">
                {reasons.map((reason, i) => (
                    <div key={i} className="why-card">
                        <div className="why-metric">
                            <h3 className="display-num">{reason.metric}</h3>
                            <div className="label">{reason.metricLabel}</div>
                        </div>
                        <div className="why-content">
                            <h4>{reason.title}</h4>
                            <p className="body-text">{reason.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyStreamlivr
