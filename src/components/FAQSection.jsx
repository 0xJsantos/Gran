import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WHO_WE_LOOK_FOR = [
  'Canadian citizens',
  'Permanent residents',
  'Protected persons with notice of decision',
  'Working adults',
  'Unemployed / laid off',
  'On maternity or paternity leave',
  'Students underserved by universities and community colleges',
  'Career changers',
  'Folks needing fast track training to get into the job',
  'New immigrants needing Canadian credentials',
];

const IN_DEMAND_PROGRAMS = [
  'Medical Office and Unit Clerk',
  'Pharmacy Assistant',
  'Advance Massage Therapy',
  'Developmental Service Worker',
  'Addictions and Community Support Worker',
  'Healthcare Aide',
  'Education Assistant',
  'Accounting and Payroll Administration',
  'Business Administration',
  'Business and Logistics Studies',
  'Global Supply Chain',
  'Digital Marketing',
  'Graphic Design',
  'Software Development',
  'Cybersecurity',
  'IT Technician',
];

const BENEFITS = [
  'Student Loans',
  'Student Grants',
  'Cash Incentives After Graduation',
  'Tax FREE Scholarships',
  'Referral Bonus',
  'Flexible Schedules (Online, In-Person, Blended)',
];

const faqs = [
  {
    q: "Who are we looking for?",
    a: null,
    custom: 'who',
  },
  {
    q: "What programs are in demand?",
    a: null,
    custom: 'programs',
  },
  {
    q: "What financial benefits are available?",
    a: null,
    custom: 'benefits',
  },
  {
    q: "I'm over 30 — is it too late to go back to college?",
    a: "Absolutely not. Many of our partner colleges specialize in career-focused programs designed for mature students. Your life and work experience is an asset, not a barrier. Our tagline says it best: Every Age Deserves Opportunity.",
  },
  {
    q: "Which provinces do you serve?",
    a: "We serve students across British Columbia, Alberta, Saskatchewan, Manitoba, Ontario, Nova Scotia, New Brunswick, Prince Edward Island, and the Northwest Territories. Many of our partner colleges also offer online programs accessible from anywhere in Canada.",
  },
  {
    q: "Can you help me find financial assistance or grants?",
    a: "Yes. Our Financial Architecture service helps you navigate provincial student loans, federal grants, institutional scholarships, and employer-sponsored education benefits. We'll identify every available option to make your education affordable.",
  },
  {
    q: "How long do college programs typically take?",
    a: "Programs range from 6 months to 2 years depending on the field. Healthcare aide certificates can be completed in 32 weeks, while comprehensive business or technology diplomas typically run 12–16 months. We'll match you with programs that fit your timeline.",
  },
  {
    q: "Do I need a high school diploma to apply?",
    a: "Requirements vary by college and program. Some institutions accept mature students with relevant work experience even without a traditional diploma. We'll assess your background and connect you with programs where you qualify.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Common Questions</span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:text-accent py-5 text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                {f.custom === 'who' && (
                  <ul className="space-y-2">
                    {WHO_WE_LOOK_FOR.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {f.custom === 'programs' && (
                  <div className="grid sm:grid-cols-2 gap-2">
                    {IN_DEMAND_PROGRAMS.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                {f.custom === 'benefits' && (
                  <div className="flex flex-wrap gap-2">
                    {BENEFITS.map((item, j) => (
                      <span key={j} className="px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-body">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {!f.custom && f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}