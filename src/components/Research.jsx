import { useEffect, useRef } from 'react'

const Research = () => {
    const dotGridRef = useRef(null)

    useEffect(() => {
        const grid = dotGridRef.current
        if (!grid) return
        for (let i = 0; i < 400; i++) {
            const dot = document.createElement('div')
            dot.classList.add('dot')
            grid.appendChild(dot)
        }
    }, [])

    return (
        <div className="dot-grid-card">
            <div className="flex-col justify-between" style={{ zIndex: 2 }}>
                <div>
                    <div className="label" style={{ marginBottom: '20px' }}>Data Lab</div>
                    <h2 className="display-lg">Market Forensics</h2>
                </div>
                <div>
                    <p className="body-text" style={{ marginBottom: '40px' }}>
                        Our research division uses quantitative analysis to uncover user patterns others miss. We don't guess; we measure.
                    </p>
                    <div style={{ display: 'flex', gap: '40px' }}>
                        <div className="stat-block">
                            <h3 className="display-num">12M</h3>
                            <div className="label">Data Points</div>
                        </div>
                        <div className="stat-block">
                            <h3 className="display-num">4.2s</h3>
                            <div className="label">Avg Conversion</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dot-matrix" ref={dotGridRef} />

            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, transparent 40%, #E3E3E3 100%)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    )
}

export default Research
