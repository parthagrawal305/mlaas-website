import { Preloader } from '@/components/Preloader';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ClientsBar } from '@/components/ClientsBar';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { StatsSection } from '@/components/StatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { SecuritySection } from '@/components/SecuritySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ClientScripts } from '@/components/ClientScripts';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <Hero />
      <ClientsBar />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <SecuritySection />
      <ContactSection />
      <Footer />
      <ClientScripts />
    </>
  );
}
