const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedColleges from '../components/FeaturedColleges';
import PartnerNetwork from '../components/PartnerNetwork';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactFooter from '../components/ContactFooter';
import HowItWorks from '../components/HowItWorks';

const IMAGES = {
  hero: 'https://media.db.com/images/public/6a1b899011c8046fc7d701ef/e6ba02b4e_generated_1799b4e1.png',
  landscape: 'https://media.db.com/images/public/6a1b899011c8046fc7d701ef/d393ed892_generated_17442dee.png',
  healthcare: 'https://media.db.com/images/public/6a1b899011c8046fc7d701ef/2e39d95ae_generated_b970eb7b.png',
  business: 'https://media.db.com/images/public/6a1b899011c8046fc7d701ef/fa5fa9fcc_generated_1061987b.png',
  consultation: 'https://media.db.com/images/public/6a1b899011c8046fc7d701ef/97aad028f_generated_c5438b8c.png',
  education: 'https://media.db.com/images/public/6a1b899011c8046fc7d701ef/be1920cf7_generated_aa5bd29a.png',
};

export default function Home() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <HowItWorks />
      <FeaturedColleges healthcareImg={IMAGES.healthcare} businessImg={IMAGES.business} />
      <PartnerNetwork />
      <ServicesSection consultationImg={IMAGES.consultation} />
      <TestimonialsSection />
      <FAQSection />
      <ContactFooter />
    </div>
  );
}