const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationModal from './ConsultationModal';

const LOGO_URL = '/images/GranLogo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Colleges', href: '#colleges' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end gap-6 px-8 py-1.5 text-xs text-primary-foreground/70 border-b border-white/5">
          <a href="mailto:admin@granconsulting.ca" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Mail className="w-3 h-3" /> admin@granconsulting.ca
          </a>
          <a href="tel:4034019354" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-3 h-3" /> (403) 401-9354
          </a>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#home" onClick={() => scrollTo('#home')} className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Gran Consulting" className="h-12 w-auto object-contain" />
            <div className="flex items-center gap-1">
              <span className="text-lg font-heading font-bold text-primary-foreground tracking-wider">GRAN</span>
              <span className="text-lg font-heading font-bold text-accent tracking-wider">Consulting</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-body text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
            <Button
              onClick={() => setModalOpen(true)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm px-6 rounded-full"
            >
              Book Consultation
            </Button>
          </div>

          <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-primary border-t border-white/10 px-6 pb-6 space-y-1">
            {navLinks.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="block w-full text-left py-3 text-primary-foreground/80 hover:text-accent font-body text-sm border-b border-white/5 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button
              onClick={() => setModalOpen(true)}
              className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-body rounded-full"
            >
              Book Consultation
            </Button>
          </div>
        )}
      </nav>
      <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
