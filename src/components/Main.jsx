import Header from './Header'
import HeroSection from './HeroSection'
import PhilosophySection from './PhilosophySection'
import FeaturesSection from './FeaturesSection'
import TransformationSection from './TransformationSection'
import OnboardingSection from './OnboardingSection'
import Preview from './Preview'
import Faq from './Faq'
import Footer from './Footer'

export default function Main() {
    return (
        <main>
            <Header />
            <div className="flex flex-col gap-20 md:gap-24 lg:gap-30">
                <HeroSection />
                <PhilosophySection />
                <FeaturesSection />
                <TransformationSection />
                <OnboardingSection />
                <Preview />
                <Faq />
                <Footer />
            </div>
        </main>
    )
}
