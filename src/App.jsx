import { useEffect, useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import SegmentsGrid from "./components/SegmentsGrid";
import Footer from "./components/Footer";
import InvestorDeckPage from "./components/InvestorDeckPage";
import AboutUsPage from "./components/AboutUsPage";
import ContactPage from "./components/ContactPage";
import FAQPage from "./components/FAQPage";
import BatteryStoragePage from "./components/BatteryStoragePage";
import EvPassengerFleetsPage from "./components/EvPassengerFleetsPage";
import FranchiseSection from "./components/FranchiseSection";
import {
  segments,
  trustedCertifications,
} from "./data/content";
import startupIndiaLogo from "./assets/startup-india-certified.png";
import msmeRegisteredLogo from "./assets/msme-registered.jpg";
import iso9001Logo from "./assets/iso-9001-certified.png";
import iso14001Logo from "./assets/iso-14001-certified.png";

const TRUST_ICONS = [
  startupIndiaLogo,
  msmeRegisteredLogo,
  iso9001Logo,
  iso14001Logo,
];

const getRouteFromHash = () => {
  const hash = window.location.hash.replace(/^#/, "");

  if (hash.startsWith("charger/")) {
    return { page: "home", segmentId: null, anchor: "marketplace" };
  }
  if (hash === "investordeck") return { page: "investordeck", segmentId: null, anchor: null };
  if (hash === "segments") return { page: "home", segmentId: null, anchor: "marketplace" };
  if (hash === "contact") return { page: "contact", segmentId: null, anchor: null };
  if (hash === "aboutus") return { page: "aboutus", segmentId: null, anchor: null };
  if (hash === "faq") return { page: "faq", segmentId: null, anchor: null };
  if (hash === "battery-storage") return { page: "battery-storage", segmentId: null, anchor: null };
  if (hash === "ev-charging") return { page: "home", segmentId: null, anchor: "marketplace" };
  if (hash === "ev-passenger-fleets") return { page: "ev-passenger-fleets", segmentId: null, anchor: null };

  return { page: "home", segmentId: null, anchor: hash || null };
};

function App() {
  const [route, setRoute] = useState(() => getRouteFromHash());
  const [enquirySegmentId, setEnquirySegmentId] = useState(null);
  const [enquiryFranchisePlan, setEnquiryFranchisePlan] = useState(null);
  const [spotlightIndex, setSpotlightIndex] = useState(
    () => segments.findIndex((segment) => segment.id === "charger-60kw") ?? 0,
  );
  const [isSpotlightPaused, setIsSpotlightPaused] = useState(false);

  const spotlightSegment = useMemo(
    () => segments[spotlightIndex] ?? segments[0],
    [spotlightIndex],
  );

  const marketplaceSegments = segments;
  const enquirySegment = segments.find((segment) => segment.id === enquirySegmentId);

  useEffect(() => {
    if (isSpotlightPaused) return undefined;
    const interval = setInterval(() => {
      setSpotlightIndex((current) => (current + 1) % segments.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isSpotlightPaused]);

  useEffect(() => {
    const handleHashChange = () => {
      setEnquirySegmentId(null);
      setEnquiryFranchisePlan(null);
      setRoute(getRouteFromHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (route.page !== "home" || !route.anchor) return undefined;
    const scrollToAnchor = () => {
      if (route.anchor === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.getElementById(route.anchor);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const timeoutId = window.setTimeout(scrollToAnchor, 0);
    return () => window.clearTimeout(timeoutId);
  }, [route]);

  const handleEnquire = (segmentId) => {
    setEnquiryFranchisePlan(null);
    setEnquirySegmentId(segmentId);
  };

  const handleFranchiseEnquire = (plan) => {
    setEnquirySegmentId(null);
    setEnquiryFranchisePlan(plan);
  };

  return (
    <div className="app-shell text-slate-900">
      <div className="app-orb app-orb-a" />
      <div className="app-orb app-orb-b" />
      <div className="app-orb app-orb-c" />

      <Header marketplaceSegments={marketplaceSegments} />

      {route.page === "investordeck" ? (
        <InvestorDeckPage />
      ) : route.page === "contact" ? (
        <ContactPage />
      ) : route.page === "aboutus" ? (
        <AboutUsPage />
      ) : route.page === "faq" ? (
        <FAQPage />
      ) : route.page === "battery-storage" ? (
        <BatteryStoragePage onBack={() => (window.location.hash = "segments")} />
      ) : route.page === "ev-passenger-fleets" ? (
        <EvPassengerFleetsPage onBack={() => (window.location.hash = "segments")} />
      ) : (
        /* ── HOME PAGE ─────────────────────────────────────── */
        <main id="top" className="pb-10 pt-4 sm:pt-6 md:pt-8">
          <div className="mx-auto w-[min(1480px,calc(100%-16px))] sm:w-[min(1480px,calc(100%-24px))] md:w-[min(1480px,calc(100%-32px))]">

            {/* ── HERO ─────────────────────── */}
            <section className="hero-panel hero-panel-zip space-y-6 p-4 sm:p-6 lg:space-y-8 lg:p-8">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">

                {/* Left copy */}
                <div className="hero-copy space-y-5 sm:space-y-6">
                  <div className="eyebrow-chip eyebrow-chip-zip hero-kicker">
                    EV charging equipment for real-world sites
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h1 className="hero-title max-w-4xl font-medium uppercase leading-[0.94] tracking-[-0.05em] text-slate-950"
                        style={{ fontSize: "clamp(2rem, 7.5vw, 5.5rem)" }}>
                      <span className="hero-title-line">Power your</span>
                      <span className="hero-title-line">next charging</span>
                      <span className="hero-title-line">location with</span>
                      <span className="hero-title-line">ZipAsset</span>
                    </h1>
                    <p className="hero-subtitle max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                      Explore AC and DC charger models for homes, businesses, fleets and travel corridors. Tell us what you need and our team will help you find the right fit.
                    </p>
                  </div>

                  <div className="hero-cta-row flex flex-wrap gap-3">
                    <a href="#marketplace" className="primary-button hero-button-primary">
                      Explore chargers
                    </a>
                    <a href="#charger-inquiry" className="secondary-button hero-button-secondary">
                      Talk to our team
                    </a>
                  </div>
                </div>

                {/* Right spotlight card */}
                <div
                  className="hero-showcase"
                  onMouseEnter={() => setIsSpotlightPaused(true)}
                  onMouseLeave={() => setIsSpotlightPaused(false)}
                >
                  <div className="hero-showcase-card hero-showcase-card-back" />
                  <div className="hero-showcase-card hero-showcase-card-mid" />

                  <div className="hero-showcase-front theme-shell">
                    <div className="flex items-center justify-between gap-3">
                      <span className="theme-card-title text-xs font-semibold uppercase tracking-[0.3em]">
                        Product spotlight
                      </span>
                      <span className="theme-badge rounded-full px-3 py-1.5 text-xs font-semibold">
                        For sale
                      </span>
                    </div>

                    <div className="theme-dark-card mt-4 rounded-[24px] p-4 text-white sm:mt-6 sm:rounded-[30px] sm:p-6">
                      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                        {spotlightSegment.power}
                      </div>
                      <div className="mt-2 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
                        {spotlightSegment.name}
                      </div>
                      <p className="mt-3 text-xs leading-6 text-blue-100/80 sm:text-sm sm:leading-7">
                        {spotlightSegment.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {spotlightSegment.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="theme-dark-pill rounded-full px-3 py-1.5 text-xs font-semibold">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 grid gap-2 grid-cols-1 sm:mt-6 sm:gap-3">
                        <div className="theme-dark-sidecard rounded-[18px] px-3 py-3 sm:rounded-[24px] sm:px-4 sm:py-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                            Best suited for
                          </div>
                          <div className="mt-1 text-sm font-semibold text-white sm:text-base">
                            {spotlightSegment.site}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {segments.slice(0, 5).map((segment, index) => (
                          <button
                            key={segment.id}
                            type="button"
                            className={`rounded-full px-2.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] transition sm:px-3 sm:py-2 sm:text-xs ${
                              index === spotlightIndex
                                ? "theme-dark-chip theme-dark-chip-active text-white"
                                : "theme-dark-chip text-slate-100 hover:-translate-y-0.5"
                            }`}
                            onClick={() => setSpotlightIndex(index)}
                          >
                            {segment.power}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleEnquire(spotlightSegment.id)}
                        className="primary-button mt-5 w-full justify-center px-5 py-3 text-sm"
                      >
                        Enquire about this charger
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats + Trusted strip */}
              <div className="grid gap-3 sm:gap-4 xl:grid-cols-[1.35fr_0.65fr]">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
                  {[
                    { label: "Charger models", value: `${segments.length}` },
                    { label: "Power range", value: "6 kW–240 kW" },
                    { label: "Charger types", value: "AC & DC" },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="theme-stat-card glass-card glass-card-compact animate-rise"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-2xl font-black tracking-[-0.05em] text-[#0a1738] sm:text-3xl">
                        {stat.value}
                      </div>
                      <div className="theme-stat-label mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] sm:mt-2 sm:text-xs sm:tracking-[0.28em]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="theme-card glass-card trusted-strip rounded-[24px] p-4 sm:rounded-[30px] sm:p-5">
                  <div className="theme-card-title text-xs font-semibold uppercase tracking-[0.32em]">
                    Built for
                  </div>
                  <div className="trusted-slider mt-3 sm:mt-4">
                    <div className="trusted-slider-track">
                      {[
                        "Homes & workplaces",
                        "Retail & hospitality",
                        "Fleet operators",
                        "Homes & workplaces",
                        "Retail & hospitality",
                        "Fleet operators",
                      ].map((item, index) => (
                        <span key={`${item}-${index}`} className="trusted-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── CHARGER RANGE ──────────────── */}
            <section id="product-support" className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 xl:items-stretch xl:grid-cols-[1fr_0.72fr]">
              <div className="glass-card flex h-full flex-col rounded-[22px] p-4 sm:rounded-[30px] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 sm:text-sm">
                  Find the right charger
                </p>
                <h2 className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl md:text-3xl">
                  Charging options for different locations and needs
                </h2>
                <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "AC destination charging",
                      body: "6 kW and 12 kW options for homes, apartments, workplaces, hotels and other long-stay parking.",
                    },
                    {
                      title: "Urban DC fast charging",
                      body: "30 kW and 60 kW options for retail, offices, cafes and commercial locations with shorter stops.",
                    },
                    {
                      title: "Highway and travel charging",
                      body: "120 kW and 180 kW options for travel corridors, service plazas, logistics parks and destination hubs.",
                    },
                    {
                      title: "High-throughput hubs",
                      body: "240 kW flagship charging for major fleet depots and destination sites that need rapid turnaround.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="metric-tile p-4 sm:p-5">
                      <div className="text-base font-bold text-slate-950 sm:text-lg">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600 sm:leading-7">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="process-panel flex flex-col justify-center p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 sm:text-sm">
                  Need a recommendation?
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950">
                  Let&apos;s plan your charging setup
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Share your location, expected usage and project timeline. Our team can help you compare models and discuss site requirements.
                </p>
                <a href="#charger-inquiry" className="primary-button mt-6 w-full justify-center px-5 py-3 text-sm">
                  Request a consultation
                </a>
              </aside>
            </section>

            {/* ── TRUST SECTION ──────────────── */}
            <section className="segments-trust-shell mt-8 sm:mt-10">
              <div className="max-w-2xl">
                <span
                  className="seg-section-accent"
                  style={{ backgroundImage: "linear-gradient(90deg, #2a56c6, #38bdf8)" }}
                />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4d67a8]">
                  Trusted &amp; Certified Platform
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#081327] sm:text-3xl">
                  Built on trust, backed by credentials
                </h2>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
                {trustedCertifications.map((item, idx) => (
                  <article key={item} className="segments-trust-card">
                    <div className="seg-trust-badge">
                      <img
                        src={TRUST_ICONS[idx]}
                        alt={item}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h3 className="text-sm font-black tracking-[-0.03em] text-[#081327] sm:text-base">
                      {item}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500">
                      Verified certification for platform operations
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* ── MARKETPLACE ────────────────── */}
            <FranchiseSection onEnquire={handleFranchiseEnquire} />

            <section id="marketplace" className="mt-8 sm:mt-10">
              <div className="mb-3 flex flex-wrap items-end justify-between gap-3 sm:mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                    Marketplace
                  </p>
                  <h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950 sm:text-2xl">
                    Chargers for your site
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Compare charger types, power levels and common applications, then send us an enquiry to discuss a purchase.
                  </p>
                </div>
              </div>
              <SegmentsGrid
                segments={marketplaceSegments}
                onEnquire={handleEnquire}
              />
            </section>

            {/* ── WHY + HOW ──────────────────── */}
            <section className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="glass-card rounded-[22px] p-4 sm:rounded-[30px] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 sm:text-sm">
                  Why choose ZipAsset chargers
                </p>
                <h3 className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl">
                  Product guidance from enquiry to deployment
                </h3>
                <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2">
                  {[
                    "Choose from AC and DC charger models ranging from 6 kW to 240 kW.",
                    "Compare use cases for homes, hospitality, retail, fleets and highway locations.",
                    "Discuss your site, power availability and installation requirements with our team.",
                    "Request product details and follow-up through your preferred contact channel.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/80 bg-white/80 p-3 text-sm leading-7 text-slate-600 shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:rounded-[24px] sm:p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="process-panel p-4 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 sm:text-sm">
                  How to get started
                </p>
                <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    { title: "Choose a model", description: "Browse charger power levels and the locations they are suited for." },
                    { title: "Tell us about your site", description: "Share your location, use case, quantity and project timing." },
                    { title: "Talk with our team", description: "We will follow up to discuss product details and next steps." },
                  ].map((step, index) => (
                    <div key={step.title} className="process-step">
                      <div className="process-step-num">{index + 1}</div>
                      <h4 className="mt-2 text-base font-bold text-slate-950 sm:mt-3 sm:text-lg">{step.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600 sm:leading-7">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </main>
      )}

      {route.page === "home" && (enquirySegment || enquiryFranchisePlan) && (
        <ContactPage
          segment={enquirySegment}
          franchisePlan={enquiryFranchisePlan}
          onClose={() => {
            setEnquirySegmentId(null);
            setEnquiryFranchisePlan(null);
          }}
        />
      )}

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
