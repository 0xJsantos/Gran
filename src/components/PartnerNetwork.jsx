const PARTNERS = [
  'Ace Career College',
  'Aquinas College',
  'Cambrooks College',
  'Academy of Learning (AOL)',
  'Campbell College',
  'CDI College',
  'Reeves College',
  'Atlantic College for Massage Therapy',
  'Excel Career College',
  'Thompson College',
  'Heritage College',
  'Professional Institute of Massage Therapy',
];

export default function PartnerNetwork() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
            Our Extended College Network
          </h3>
          <p className="text-primary-foreground/60 font-body max-w-lg mx-auto">
            Beyond our featured partners, we work with 20+ accredited institutions across Canada.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {PARTNERS.map(name => (
            <div
              key={name}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-primary-foreground/60 text-sm font-body hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Golden thread */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
}