const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const LOGO_URL = 'https://media.db.com/images/public/6a1b899011c8046fc7d701ef/2d351b273_image.png';

const RESIDENCE_OPTIONS = [
  'Canadian Citizen',
  'Permanent Resident',
  'Protected Person',
  'Other',
];

const provinces = [
  'British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario',
  'Nova Scotia', 'New Brunswick', 'Prince Edward Island', 'Northwest Territories',
];

const fields = [
  'Healthcare', 'Business Administration', 'Technology & IT', 'Education & Social Work',
  'Massage Therapy', 'Legal Studies', 'Arts & Animation', 'Other',
];

export default function ContactFooter() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', program: '', residenceStatus: '', additionalInfo: '' });
  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await fetch('https://formspree.io/f/mkoegzag', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        'First Name': form.firstName,
        'Last Name': form.lastName,
        'Phone': form.phone,
        'Email': form.email,
        'Program of Interest': form.program,
        'Residence Status': form.residenceStatus,
        'Additional Information': form.additionalInfo,
      }),
    });
    setSending(false);
    setSent(true);
  };

  return (
    <footer id="contact" className="bg-primary pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact form */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Get In Touch</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-8">
              Start Your Journey Today
            </h2>

            {sent ? (
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">Message Received</h3>
                <p className="text-primary-foreground/70 font-body text-sm">
                  {"We'll be in touch within 24 hours to discuss your education goals."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-primary-foreground/80 font-body text-sm">First Name *</Label>
                    <Input required value={form.firstName} onChange={set('firstName')} placeholder="Jane" className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:border-accent" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-primary-foreground/80 font-body text-sm">Last Name *</Label>
                    <Input required value={form.lastName} onChange={set('lastName')} placeholder="Doe" className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:border-accent" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-primary-foreground/80 font-body text-sm">Phone Number *</Label>
                  <Input required type="tel" value={form.phone} onChange={set('phone')} placeholder="(403) 000-0000" className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:border-accent" />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-primary-foreground/80 font-body text-sm">Email Address *</Label>
                  <Input required type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:border-accent" />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-primary-foreground/80 font-body text-sm">Program of Interest *</Label>
                  <Input required value={form.program} onChange={set('program')} placeholder="e.g. Health Care Aide, Business Admin…" className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:border-accent" />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-primary-foreground/80 font-body text-sm">Residence Status *</Label>
                  <Select value={form.residenceStatus} onValueChange={(v) => setForm(f => ({ ...f, residenceStatus: v }))}>
                    <SelectTrigger className="bg-white/5 border-white/15 text-primary-foreground font-body focus:border-accent">
                      <SelectValue placeholder="Select your status" />
                    </SelectTrigger>
                    <SelectContent>
                      {RESIDENCE_OPTIONS.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-primary-foreground/80 font-body text-sm">Additional Information</Label>
                  <Textarea value={form.additionalInfo} onChange={set('additionalInfo')} placeholder="Any additional details you'd like to share…" rows={4} className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/30 font-body focus:border-accent resize-none" />
                </div>

                <Button type="submit" disabled={sending || !form.residenceStatus} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body text-base py-6 rounded-full">
                  {sending ? 'Submitting…' : 'Submit Consultation Request'}
                </Button>
              </form>
            )}
          </div>

          {/* Right info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <img src={LOGO_URL} alt="Gran Consulting" className="h-20 w-20 rounded-xl object-contain shadow-lg" />
                <div>
                  <h3 className="font-heading text-4xl font-bold text-primary-foreground tracking-wide">GRAN</h3>
                  <p className="text-accent font-body text-sm tracking-[0.2em] uppercase">Consulting</p>
                </div>
              </div>

              <p className="text-primary-foreground/60 font-body text-sm leading-relaxed mb-8 max-w-md">
                Your authorized education consultant helping mature students choose career-focused college programs across Canada. Every age deserves opportunity.
              </p>

              <div className="space-y-4 mb-10">
                <a href="mailto:admin@granconsulting.ca" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent font-body text-sm transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  admin@granconsulting.ca
                </a>
                <a href="tel:4034019354" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent font-body text-sm transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  (403) 401-9354
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/70 font-body text-sm">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  Serving 9 Provinces across Canada
                </div>
              </div>

              {/* Province badges */}
              <div className="flex flex-wrap gap-2">
                {['BC', 'AB', 'SK', 'MB', 'ON', 'NS', 'NB', 'PEI', 'NT'].map(p => (
                  <span key={p} className="px-3 py-1 text-xs font-body rounded-full border border-accent/20 text-accent/80 bg-accent/5">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 font-body text-xs">
            &copy; {new Date().getFullYear()} Gran Consulting. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 font-body text-xs">
            Authorized Education Consultant &middot; Every Age Deserves Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}