const STEPS = [
  {
    number: 1,
    title: 'Book a Consultation',
    description: 'Fill out our short form and schedule a free session with a Gran Consulting advisor. There is no obligation and no pressure.',
  },
  {
    number: 2,
    title: 'Profile Assessment',
    description: 'We review your background, career goals, and eligibility to identify the best-fit programs and institutions for you.',
  },
  {
    number: 3,
    title: 'Application Support',
    description: 'We prepare and submit your application with all required documents, exam prep support, and financial assistance guidance.',
  },
  {
    number: 4,
    title: 'Start Your Program',
    description: 'Once accepted, we help you prepare for your first day, including orientation and transition planning in your new province.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">How It Works</span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Simple steps to your
            <span className="block italic text-accent">brighter future</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            We've streamlined the process so you can focus on your future, not the paperwork.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent via-accent/60 to-accent/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {STEPS.map((step, idx) => (
              <div key={step.number} className="flex flex-col items-center text-center lg:items-center">
                {/* Circle */}
                <div
                  className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center text-white font-heading text-2xl font-bold shadow-lg mb-6 flex-shrink-0"
                  style={{ background: ['#C27A34', '#B8902A', '#9E9E35', '#4A7C59'][idx] }}
                >
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-[200px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}