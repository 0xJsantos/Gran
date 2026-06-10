import { Compass, FileCheck, Users, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Program Selection',
    description: 'We strategically align your interests and experience with career-focused programs that match your goals and market demand.',
    detail: 'Personalized career assessment and program matching across 20+ colleges.',
  },
  {
    icon: FileCheck,
    title: 'Application Mastery',
    description: 'From document preparation to submission management, we ensure your application stands out and meets every requirement.',
    detail: 'End-to-end application support with document review and submission tracking.',
  },
  {
    icon: Users,
    title: 'Admissions Liaison',
    description: 'We communicate directly with college admissions teams on your behalf, streamlining the process and resolving issues quickly.',
    detail: 'Direct partnerships with admissions departments across all partner institutions.',
  },
  {
    icon: DollarSign,
    title: 'Financial Architecture',
    description: 'Navigate grants, student loans, scholarships, and financial assistance programs to make your education affordable.',
    detail: 'Expert guidance on provincial and federal financial aid programs.',
  },
];

export default function ServicesSection({ consultationImg }) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">How We Help</span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your 360° Support Blueprint
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            We guide mature students through every step of their return to education, helping them overcome barriers and build confidence along the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.description}</p>
                  <p className="text-accent font-body text-xs font-medium pt-1">{s.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation image banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img
            src={consultationImg}
            alt="Education consultation session"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center">
            <div className="px-8 lg:px-12 max-w-lg">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                Ready to Take the Next Step?
              </h3>
              <p className="text-primary-foreground/70 font-body text-sm mb-4">
                Book a free consultation and let us build your personalized education roadmap.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-body text-sm rounded-full transition-colors"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
