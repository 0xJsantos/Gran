import { ExternalLink } from 'lucide-react';

export default function CollegeCard({ college }) {
  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 min-w-[320px] max-w-[380px] flex-shrink-0">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading text-xl font-bold text-white drop-shadow-lg">{college.name}</h3>
          <p className="text-white/70 text-xs font-body mt-0.5">{college.location}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-sm font-body text-muted-foreground leading-relaxed">{college.description}</p>
        
        <div>
          <p className="text-xs font-body font-semibold text-foreground/80 uppercase tracking-wider mb-2">Flagship Programs</p>
          <div className="flex flex-wrap gap-1.5">
            {college.programs.map(p => (
              <span key={p} className="text-xs font-body px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                {p}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-sm font-body text-accent hover:text-accent/80 font-medium transition-colors group/link pt-2"
        >
          Inquire About Programs
          <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-accent/30" />
    </div>
  );
}