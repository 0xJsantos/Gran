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
  hero: '/images/graduate.jpg',
  landscape: '/images/Strava_College.png',
  healthcare: '/images/MTG_HealthCareAcademy.jpg',
  business: '/images/ABM_College.png',
  consultation: '/images/consultation.png',
  education: '/images/RCB_College.png',
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
