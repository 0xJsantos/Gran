import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProvincesTicker from './ProvincesTicker';

export default function HeroSection({ heroImage }) {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-primary overflow-hidden pt-28 md:pt-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)] pb-16 lg:pb-0">
          {/* Left content */}
          <div className="space-y-8 lg:space-y-10 min-w-0 w-full">
            <div className="space-y-2">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 shrink-0 h-px bg-accent" />
                <span className="text-accent font-body text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase leading-tight">Every Age Deserves Opportunity</span>
              </div>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1]">
              Your Path to a
              <span className="block text-accent">Brighter Future</span>
              Starts Here.
            </h1>

            <p className="text-primary-foreground/70 font-body text-base lg:text-lg leading-relaxed w-full max-w-lg break-words">
              Gran Consulting helps mature students choose career-focused college programs across Canada.
              Expert guidance through applications, admissions, financial assistance, and everything in between.
            </p>

            <div className="flex flex-col gap-3 w-full sm:flex-row sm:gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body text-base px-6 py-6 rounded-full group w-full sm:w-auto"
              >
                Begin Your Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => document.querySelector('#colleges')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-white/5 font-body text-base px-6 py-6 rounded-full w-full sm:w-auto"
              >
                Explore Colleges
              </Button>
            </div>

            <div className="pt-4 space-y-6">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-accent">300+</div>
                  <div className="text-xs font-body text-primary-foreground/60">Students Served</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-accent">20+</div>
                  <div className="text-xs font-body text-primary-foreground/60">Partner Colleges</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-accent">9</div>
                  <div className="text-xs font-body text-primary-foreground/60">Provinces Served</div>
                </div>
              </div>
              <ProvincesTicker />
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Mature student in a modern library, looking confident"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            {/* Stats card */}
            <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-heading font-bold text-accent">Trusted Guidance</div>
              <div className="text-sm font-body text-primary-foreground/70">Helping mature students return to education</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-black/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-heading font-bold text-accent">Career-Focused</div>
              <div className="text-sm font-body text-primary-foreground/70">Programs aligned with today's job market</div>
            </div>
          </div>
        </div>
      </div>

      {/* Golden thread divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
}
