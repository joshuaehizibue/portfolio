import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import AppPortfolio from './components/AppPortfolio'
import Research from './components/Research'
import TechStack from './components/TechStack'
import WhyStreamlivr from './components/WhyStreamlivr'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Dock from './components/Dock'

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <AppPortfolio />
            <section className="research-section container">
                <Research />
            </section>
            <TechStack />
            <WhyStreamlivr />
            <CTABanner />
            <Contact />
            <Footer />
            <Dock />
        </>
    )
}

export default App
