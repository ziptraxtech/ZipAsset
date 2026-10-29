import { useState } from "react";
import greenInvestmentImage from "../assets/green-investment.png";
import { investyzSegmentsLive, segmentShowcaseStats } from "../data/content";

function SegmentsShowcase({ embedded = false }) {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const investableSegments = investyzSegmentsLive.filter(
    (segment) => segment.category !== "EV DC Fast Charging",
  );
  const filteredSegments = investableSegments.filter((segment) => {
    if (!normalizedSearch) {
      return true;
    }

    const searchableText = [
      segment.title,
      segment.category,
      segment.metric,
      segment.description,
      ...(segment.tags ?? []),
      segment.details?.title,
      segment.details?.subtitle,
      ...(segment.details?.features ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });

  const handleSegmentExplore = (category) => {
    if (category === "Battery Energy Storage") {
      window.location.hash = "battery-storage";
      return;
    }

    if (category === "EV DC Fast Charging") {
      window.location.hash = "ev-charging";
      return;
    }

    if (category === "EV Passenger Fleets") {
      window.location.hash = "ev-passenger-fleets";
      return;
    }

    window.location.hash = "contact";
  };

  return (
    <section id={embedded ? "segments-preview" : undefined} className={embedded ? "mt-10 space-y-8" : "space-y-8"}>
      <section className="segments-hero">
        <div className="segments-hero-dots" />
        <div className="segments-orbit segments-orbit-a" />
        <div className="segments-orbit segments-orbit-b" />
        <div className="segments-orbit segments-orbit-c" />

        <div className="segments-hero-layout relative z-10">
          <div className="segments-hero-copy space-y-6">
            <div className="max-w-4xl space-y-4">
              <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #34d399 100%)" }}
                >
                  AI-Powered
                </span>
                <span className="block text-white">Investment</span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)" }}
                >
                  Segments
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Explore our diverse portfolio of sustainable infrastructure assets. Each
                segment offers unique opportunities to earn yields while supporting the
                green economy.
              </p>
            </div>

            <div className="segments-search-shell">
              <label className="segments-search-control" htmlFor={embedded ? "segments-search-home" : "segments-search"}>
                <svg viewBox="0 0 24 24" fill="none" className="segments-search-icon" aria-hidden="true">
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <input
                  id={embedded ? "segments-search-home" : "segments-search"}
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search Segments"
                  className="segments-search-input"
                  aria-label="Search segments"
                />
              </label>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "Active Segments", value: "4" },
                { label: "Total TVL", value: "Rs 190M+" },
                { label: "Active Investors", value: "13K+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm backdrop-blur-sm"
                >
                  <span className="font-black text-white">{s.value}</span>
                  <span className="text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="segments-hero-visual animate-rise" style={{ animationDelay: "140ms" }}>
            <div className="segments-hero-visual-frame">
              <img
                src={greenInvestmentImage}
                alt="Green investment globe with leaves and stacked coins"
                className="segments-hero-image"
              />
              <div className="segments-hero-image-glow" />
              <div className="segments-hero-floating-card segments-hero-floating-card-top">
                <span className="segments-hero-floating-label">Green capital</span>
                <strong className="segments-hero-floating-value">Real assets, smarter allocation</strong>
              </div>
              <div className="segments-hero-floating-card segments-hero-floating-card-bottom">
                <span className="segments-hero-floating-label">Sustainable thesis</span>
                <strong className="segments-hero-floating-value">AI signals + infrastructure-backed opportunities</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="segment-grid" className="space-y-4">
        <div className="flex items-center gap-3 px-1">
          <span className="seg-section-accent" />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
            Live Now
          </p>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-black text-emerald-700">
            {filteredSegments.length} Active
          </span>
        </div>

        {filteredSegments.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {filteredSegments.map((segment) => (
              <article key={segment.id} className="segments-live-card">
                <div className={`segments-live-glow bg-gradient-to-br ${segment.accent}`} />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-end gap-3">
                    <span className="seg-live-apy-badge">{segment.apy} APY</span>
                  </div>

                  <div className="seg-live-placeholder">
                    <div className="seg-live-placeholder-inner">
                      {segment.image ? (
                        <img
                          src={segment.image}
                          alt={segment.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="seg-live-placeholder-label">Image placeholder</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {segment.category}
                      </p>
                      <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.04em] text-white">
                        {segment.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-2 text-sm font-semibold text-cyan-200">{segment.metric}</div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">{segment.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {segment.tags.map((tag) => (
                      <span key={tag} className="seg-live-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {segment.category === "EV Cargo Fleets" ? (
                    <div className="mt-4 w-full rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-amber-100 backdrop-blur-sm">
                      Launching Soon
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSegmentExplore(segment.category)}
                      className="mt-4 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                      Explore
                    </button>
                  )}

                  <div className="seg-metric-block">
                    <div className="seg-metric-item-light">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Total TVL
                      </div>
                      <div className="mt-1.5 text-lg font-black tracking-[-0.04em] text-slate-950">
                        {segment.tvl}
                      </div>
                    </div>
                    <div className="seg-metric-item">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Investors
                      </div>
                      <div className="mt-1.5 text-lg font-black tracking-[-0.04em] text-white">
                        {segment.investors}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="segments-empty-state">
            No segments matched "{searchTerm}". Try a different keyword.
          </div>
        )}
      </section>

      <section className="segments-stats-shell">
        <div className="mb-6">
          <span className="seg-section-accent" />
          <h2 className="text-2xl font-black tracking-[-0.04em] text-[#081327]">
            Platform at a Glance
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {segmentShowcaseStats.map((item) => (
            <article key={item.label} className="segments-stat-card">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {item.label}
              </div>
              <div className="mt-3 seg-stat-counter">{item.value}</div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default SegmentsShowcase;
