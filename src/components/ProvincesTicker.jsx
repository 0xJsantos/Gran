const provinces = ['BC', 'AB', 'SK', 'MB', 'ON', 'NS', 'NB', 'PEI', 'NT'];

export default function ProvincesTicker() {
  const doubled = [...provinces, ...provinces];

  return (
    <div className="overflow-hidden" aria-label="Provinces served: British Columbia, Alberta, Saskatchewan, Manitoba, Ontario, Nova Scotia, New Brunswick, Prince Edward Island, Northwest Territories">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((p, i) => (
          <span key={i} className="flex items-center gap-3 mx-4 text-sm font-body tracking-widest text-primary-foreground/50">
            {p}
            <span className="w-1 h-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}