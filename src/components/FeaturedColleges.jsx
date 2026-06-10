import CollegeCard from './CollegeCard';

const FEATURED_COLLEGES = [
  {
    name: 'ABM College',
    location: 'Calgary, AB & North York, ON',
    description: 'A leading career college specializing in healthcare, business, and technology diploma programs since 2011.',
    programs: ['Health Care Aide', 'Business Admin', 'IT & Cybersecurity', 'Medical Office Assistant'],
    image: '/images/ABM_College.png',
  },
  {
    name: 'MTG Healthcare Academy',
    location: 'Calgary & Edmonton, AB',
    description: 'Specialized healthcare training institution preparing students for in-demand healthcare careers across Alberta.',
    programs: ['Health Care Aide', 'Massage Therapy', 'Physio/Rehab Assistant', 'Medical Office Assistant'],
    image: '/images/MTG_HealthCareAcademy.jpg',
  },
  {
    name: 'RCB College',
    location: 'Calgary, AB',
    description: 'Royal Canadian Business College offering career-focused diplomas in business administration and healthcare support.',
    programs: ['Business Admin', 'Medical Office Assistant', 'Unit Clerk', 'Professional Development'],
    image: '/images/RCB_College.png',
  },
  {
    name: 'Strava College',
    location: 'Delta, BC & Calgary, AB',
    description: 'Career-ready diploma programs designed to build practical leadership and professional skills from day one.',
    programs: ['Business & Logistics', 'Education Assistant', 'Social Support Worker', 'Business Studies'],
    image: '/images/Strava_College.png',
  },
  {
    name: 'Edison College',
    location: 'Victoria, BC',
    description: 'Innovative career college offering diverse programs in health sciences, arts, business, and cutting-edge technology.',
    programs: ['Healthcare Assistant', 'AI & Data Analytics', 'Cybersecurity', 'Character Animation'],
    image: null,
  },
];

export default function FeaturedColleges() {
  const colleges = FEATURED_COLLEGES.map((c) => ({
  ...c,
  image: c.image,
}));

  return (
    <section id="colleges" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-body text-sm tracking-[0.2em] uppercase">Our Partners</span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premier College Partners
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            We partner with Canada's top career colleges to connect you with programs aligned to your career goals.
          </p>
        </div>

        {/* Cards scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6">
          {colleges.map(c => (
            <div key={c.name} className="snap-start">
              <CollegeCard college={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
