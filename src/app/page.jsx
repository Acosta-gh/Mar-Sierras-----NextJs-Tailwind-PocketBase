import HeroSection from '@/components/landing/HeroSection';
import ValueProposition from '@/components/landing/ValueProposition';
import BenefitsSection from '@/components/landing/BenefitsSection';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import AboutSection from '@/components/landing/AboutSection';
import CtaSection from '@/components/landing/CtaSection';

export const metadata = {
  title: 'Cooperativa Mar & Sierras - Potenciá tu comercio',
  description: 'Red de compras y beneficios exclusivos para comercios de artículos del hogar en todo el país.',
};

export default function HomePage() {
  return (
    <div className="bg-brand-light flex flex-col font-sans selection:bg-brand-sage/30 selection:text-brand-dark">
      <main className="flex-grow">
        <HeroSection />
        <ValueProposition />
        <BenefitsSection />
        <HowItWorks />
        <Testimonials />
        <AboutSection />
        <CtaSection />
      </main>
    </div>
  );
}