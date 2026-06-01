import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria S.',
    role: 'Healthcare Aide Graduate',
    province: 'Alberta',
    text: "At 42, I thought my chance at a new career was gone. Gran Consulting matched me with the perfect HCA program and guided me through every step. I graduated with honours and landed a job within two weeks.",
  },
  {
    name: 'David K.',
    role: 'Business Administration Student',
    province: 'British Columbia',
    text: "The financial aid guidance alone was worth it. Gran Consulting found grants and assistance I never knew existed. They made going back to school financially possible for my family.",
  },
  {
    name: 'Priya M.',
    role: 'Medical Office Assistant Graduate',
    province: 'Ontario',
    text: "I was overwhelmed by the application process until Gran Consulting stepped in. They handled everything — from document preparation to admissions communication. Professional, thorough, and genuinely caring.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Success Stories</span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground">
            Voices of Transformation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-primary-foreground/80 font-body text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-heading font-bold text-primary-foreground">{t.name}</p>
                <p className="text-accent text-xs font-body">{t.role}</p>
                <p className="text-primary-foreground/50 text-xs font-body">{t.province}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
}