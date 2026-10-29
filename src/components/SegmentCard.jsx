function SegmentCard({ segment, onEnquire }) {
  const chargerType = segment.power.includes("kW AC") ? "AC" : "DC";
  const typeClass = chargerType === "AC" ? "mkt-type-ac" : "mkt-type-dc";

  return (
    <article className="mkt-listing-card group">
      {/* Image area */}
      <div className="mkt-img-container h-52 m-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_bottom,rgba(42,86,198,0.08),transparent_42%)]" />
        <div className="absolute inset-x-8 bottom-3 h-8 rounded-full bg-[rgba(10,23,56,0.06)] blur-xl" />
        <img
          src={segment.image}
          alt={segment.name}
          className="relative z-10 h-full w-full object-contain object-center p-4 transition duration-700 group-hover:scale-[1.05] group-hover:-translate-y-1"
        />
        {/* Power pill */}
        <div className="mkt-power-pill">
          {segment.power}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`mkt-type-chip ${typeClass}`}>{chargerType} Charger</span>
            <span className="text-xs font-semibold text-slate-500">Charger model</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-3 text-lg font-black tracking-[-0.03em] text-slate-950" style={{ fontFamily: "var(--font-head)" }}>
          {segment.name}
        </h3>
        <p className="mt-0.5 text-xs text-slate-500" style={{ fontFamily: "var(--font-body)" }}>{segment.useCase}</p>

        {/* Product features */}
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {segment.features.slice(0, 3).map((feature) => (
            <span key={feature} className="mkt-tag">{feature}</span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-slate-600">{segment.description}</p>

        {/* Use case */}
        <div className="mt-3 rounded-xl border border-blue-100/80 bg-blue-50/60 px-3 py-2.5">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-500">Use case</div>
          <p className="mt-1 text-xs font-semibold leading-5 text-blue-800">{segment.useCase}</p>
        </div>

        {/* Suitable locations */}
        <div className="mt-2 flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2">
          <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500">
            <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
          </svg>
          <span className="text-[11px] leading-5 text-slate-600 font-medium">{segment.site}</span>
        </div>

        {/* Inquiry CTA */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => onEnquire(segment.id)}
            className="primary-button w-full justify-center !py-2.5 !text-sm"
            aria-label={`Request a quote for ${segment.name}`}
          >
            Request a quote
          </button>
        </div>
      </div>
    </article>
  );
}

export default SegmentCard;
