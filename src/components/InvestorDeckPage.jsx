import { useEffect, useState } from "react";

const chargerClasses = [
  { power: "6 kW", use: "Home & long-stay parking" },
  { power: "12 kW", use: "Hotels & destination sites" },
  { power: "30 kW", use: "Urban retail & workplaces" },
  { power: "60 kW", use: "Commercial fast charging" },
  { power: "120 kW", use: "Highway & city corridors" },
  { power: "180 kW", use: "Travel & logistics hubs" },
  { power: "240 kW", use: "Fleet depots & major hubs" },
];

const opportunityThemes = [
  {
    name: "EV charging",
    note: "The clearest product fit: charger classes from 6 kW to 240 kW.",
  },
  {
    name: "Battery storage",
    note: "A complementary theme for energy management and charging resilience.",
  },
  {
    name: "Passenger & cargo fleets",
    note: "Mobility themes linked to fleet charging, utilization, and routes.",
  },
];

function DeckSlide({ title, subtitle, children, accent = "blue" }) {
  const accentClasses = {
    blue: "border-l-blue-500",
    cyan: "border-l-cyan-400",
    green: "border-l-emerald-400",
    amber: "border-l-amber-400",
  };

  return (
    <section
      aria-label={title}
      className={`rounded-[20px] border border-white/10 border-l-4 ${accentClasses[accent]} bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-6 shadow-[0_30px_80px_rgba(10,23,56,0.4)] sm:p-9 md:p-12`}
    >
      <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-200/80 md:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Card({ eyebrow, title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/65">
          {eyebrow}
        </p>
      )}
      <h3 className="mt-2 font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-blue-100/70">{children}</p>
    </div>
  );
}

function InvestorDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <section
      key="cover"
      aria-label="ZipAsset investor overview"
      className="flex min-h-[60vh] flex-col items-center justify-center rounded-[20px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-7 text-center shadow-[0_30px_80px_rgba(10,23,56,0.4)] sm:p-10 md:p-14"
    >
      <span className="eyebrow-chip mb-5 inline-flex border-white/20 bg-white/10 text-blue-200">
        Investor overview
      </span>
      <h1 className="text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl md:text-8xl">
        ZipAsset
      </h1>
      <p className="mt-4 max-w-2xl text-xl font-semibold text-blue-200 sm:text-2xl">
        EV infrastructure, made easier to evaluate.
      </p>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">
        Zipbolt Innovations&apos; digital platform concept for EV charging
        opportunities and adjacent energy and mobility infrastructure.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setCurrentSlide(1)}
          className="primary-button px-7 py-3"
        >
          View the overview
        </button>
        <a href="#contact" className="secondary-button px-7 py-3">
          Contact Zipbolt
        </a>
      </div>
      <p className="mt-7 max-w-2xl text-xs leading-5 text-blue-200/50">
        For discussion only. Not an offer, investment advice, or a representation
        of live deployments or returns.
      </p>
    </section>,

    <DeckSlide
      key="context"
      title="The practical gap"
      subtitle="EV infrastructure is more than hardware: projects need the right equipment, site, operating plan, and capital."
      accent="cyan"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Card eyebrow="Project side" title="Match equipment to use">
          A home charger, retail fast charger, highway hub, and fleet depot have
          different power, site, and operating needs.
        </Card>
        <Card eyebrow="Investor side" title="See the project clearly">
          Investors need understandable asset details, assumptions, risks, legal
          terms, and reporting before evaluating an opportunity.
        </Card>
        <Card eyebrow="Platform role" title="Bring the information together">
          Present infrastructure opportunities and scenario previews in one
          digital experience.
        </Card>
      </div>
    </DeckSlide>,

    <DeckSlide
      key="product"
      title="A charger range built around real use cases"
      subtitle="Seven charger classes on the site span everyday parking through high-power fleet and corridor use."
      accent="green"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {chargerClasses.map((charger) => (
          <div
            key={charger.power}
            className="rounded-xl border border-white/10 bg-white/[0.05] p-4"
          >
            <p className="text-2xl font-black tracking-tight text-white">
              {charger.power}
            </p>
            <p className="mt-1 text-sm leading-5 text-blue-100/65">
              {charger.use}
            </p>
          </div>
        ))}
        <div className="flex flex-col justify-center rounded-xl border border-blue-300/20 bg-blue-300/[0.06] p-4 sm:col-span-2 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/70">
            Beyond charging
          </p>
          <p className="mt-2 text-sm leading-6 text-blue-100/75">
            The platform also presents battery storage and passenger- and
            cargo-fleet themes.
          </p>
        </div>
      </div>
      <p className="mt-5 text-xs leading-5 text-blue-200/50">
        This describes product and platform scope shown on the website; it does
        not confirm installation, ownership, or commercial deployment of each
        asset class.
      </p>
    </DeckSlide>,

    <DeckSlide
      key="experience"
      title="What the investor experience does"
      subtitle="A starting point for discovery and evaluation—not a live investment transaction system."
      accent="blue"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <Card eyebrow="Discover" title="Explore asset concepts">
          Review charger opportunities and adjacent infrastructure themes
          presented by ZipAsset.
        </Card>
        <Card eyebrow="Compare" title="Understand assumptions">
          Use the on-site calculator to preview scenarios and consider how
          amount, duration, and modeled rates affect an estimate.
        </Card>
        <Card eyebrow="Enquire" title="Continue the conversation">
          Contact Zipbolt for information; assess any specific project only
          against its own documents and terms.
        </Card>
      </div>
      <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm leading-6 text-amber-100/80">
        The website is not connected to a live investment, KYC, payment,
        asset-management, or portfolio system. Figures displayed in the UI are
        illustrative, not verified performance or an available offer.
      </div>
    </DeckSlide>,

    <DeckSlide
      key="diligence"
      title="What makes an opportunity investable"
      subtitle="The next step is project-level evidence—not a headline APY."
      accent="amber"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["Asset & site", "What is being funded, where, and at what deployment stage?"],
          ["Demand", "Who will use it, and what supports the utilization case?"],
          ["Economics", "What are the capex, operating costs, fees, and downside cases?"],
          ["Execution", "Who deploys and operates the asset, and under what agreements?"],
          ["Investor terms", "What are the legal structure, rights, payout rules, and exit limits?"],
          ["Reporting", "How will actual deployment and operating results be verified?"],
        ].map(([title, detail]) => (
          <Card key={title} title={title}>
            {detail}
          </Card>
        ))}
      </div>
      <p className="mt-5 text-xs leading-5 text-blue-200/55">
        Infrastructure investments carry demand, execution, operating,
        counterparty, regulatory, and liquidity risks. Review offering-specific
        disclosures and obtain independent advice as needed.
      </p>
    </DeckSlide>,

    <DeckSlide
      key="close"
      title="Let’s talk infrastructure"
      subtitle="ZipAsset is a product of Zipbolt Innovations Private Limited, based in Gurugram, India."
      accent="blue"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/65">
            Investors & partners
          </p>
          <p className="mt-3 text-sm leading-6 text-blue-100/75">
            Discuss the platform, request project-specific information, and
            evaluate the evidence and terms before making any decision.
          </p>
          <a
            href="mailto:info@zip-bolt.com"
            className="primary-button mt-5 inline-flex px-6 py-3"
          >
            info@zip-bolt.com
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/65">
            Important
          </p>
          <p className="mt-3 text-sm leading-6 text-blue-100/75">
            This presentation is for discussion only. It is not investment
            advice, an offer, or a solicitation. No return is assured. Any
            offering would require its own documentation, eligibility checks,
            and applicable approvals.
          </p>
          <a
            href="/legal/risk-disclosure.html"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-blue-200 underline decoration-white/25 underline-offset-4 hover:text-white"
          >
            Read the risk disclosure
          </a>
        </div>
      </div>
    </DeckSlide>,
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      if (
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        target.isContentEditable ||
        target.closest("a, button, input, select, textarea")
      ) {
        return;
      }

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        setCurrentSlide((previous) => Math.min(previous + 1, totalSlides - 1));
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        setCurrentSlide((previous) => Math.max(previous - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1480px,calc(100%-22px))] md:w-[min(1480px,calc(100%-32px))]">
        <div className="sticky top-0 z-10 -mx-4 border-b border-white/10 bg-[rgba(10,23,56,0.92)] px-4 py-3 backdrop-blur-xl sm:mx-0 sm:border-none sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
              Slide {currentSlide + 1} of {totalSlides}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((previous) => Math.max(previous - 1, 0))
                }
                disabled={currentSlide === 0}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-blue-100/80 transition hover:bg-white/10 hover:text-white disabled:opacity-30"
                aria-label="Previous slide"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M12 5L7 10L12 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((previous) =>
                    Math.min(previous + 1, totalSlides - 1),
                  )
                }
                disabled={currentSlide === totalSlides - 1}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-blue-100/80 transition hover:bg-white/10 hover:text-white disabled:opacity-30"
                aria-label="Next slide"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M8 5L13 10L8 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2a56c6] to-[#5f88f4] transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        <div className="mt-6" key={currentSlide}>
          {slides[currentSlide]}
        </div>

        <nav
          className="mt-7 flex items-center justify-center gap-2"
          aria-label="Investor deck slides"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-[#2a56c6]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "step" : undefined}
            />
          ))}
        </nav>
      </div>
    </main>
  );
}

export default InvestorDeckPage;
