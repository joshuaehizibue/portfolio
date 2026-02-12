import { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        type: '',
        budget: '',
        message: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = `mailto:business@streamlivr.com?subject=Project Inquiry from ${form.name}&body=Name: ${form.name}%0ACompany: ${form.company}%0AEmail: ${form.email}%0AProject Type: ${form.type}%0ABudget: ${form.budget}%0A%0AMessage:%0A${form.message}`
    }

    return (
        <section className="contact-section container" id="contact">
            <div className="label" style={{ marginBottom: '40px' }}>Get In Touch</div>

            <div className="contact-grid">
                <div>
                    <h2 className="display-lg" style={{ marginBottom: '40px' }}>
                        Let's Build<br />Something.
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '60px' }}>
                        <div>
                            <div className="label" style={{ marginBottom: '12px' }}>Email</div>
                            <a href="mailto:business@streamlivr.com" className="contact-link">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                business@streamlivr.com
                            </a>
                        </div>

                        <div>
                            <div className="label" style={{ marginBottom: '12px' }}>Location</div>
                            <div className="address-text">
                                <div>8 The Green STE</div>
                                <div>Dover, Delaware, 19901</div>
                                <div>United States</div>
                            </div>
                        </div>

                        <div>
                            <div className="label" style={{ marginBottom: '12px' }}>Schedule</div>
                            <a
                                href="https://calendly.com/joshua-traction3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="schedule-btn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                </svg>
                                Book Strategy Call
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-card">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                className="form-input"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="form-label">Company</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Your company"
                                className="form-input"
                                value={form.company}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                className="form-input"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="form-label">Project Type</label>
                            <select
                                name="type"
                                className="form-input"
                                value={form.type}
                                onChange={handleChange}
                            >
                                <option value="">Select a project type</option>
                                <option value="ai-infrastructure">AI Infrastructure</option>
                                <option value="consumer-mobile-apps">Consumer Mobile Apps</option>
                                <option value="web3-blockchain">Web3 &amp; Blockchain Products</option>
                                <option value="payments-fintech">Payments &amp; Fintech</option>
                                <option value="gtm-engineering">GTM Engineering</option>
                                <option value="product-strategy">Product Strategy</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label">Budget</label>
                            <select
                                name="budget"
                                className="form-input"
                                value={form.budget}
                                onChange={handleChange}
                            >
                                <option value="">Select budget range</option>
                                <option value="10k-25k">$10K - $25K</option>
                                <option value="25k-50k">$25K - $50K</option>
                                <option value="50k-100k">$50K - $100K</option>
                                <option value="100k+">$100K+</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label">Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell us about your project..."
                                rows="5"
                                className="form-input form-textarea"
                                value={form.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
