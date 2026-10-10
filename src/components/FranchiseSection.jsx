import { useState } from "react";
import charger6kwImage from "../assets/charger-6kw-ac.png";
import charger12kwImage from "../assets/charger-12kw-ac.png";
import charger30kwImage from "../assets/charger-30kw.png";

const plans = {
  "6kw": {
    label: "6 kW AC Charger",
    image: charger6kwImage,
    fit: "Homes, apartment parking and workplace bays",
    description: "A compact AC charging option for locations where vehicles can park for longer periods.",
    tags: ["AC charging", "Long-stay parking", "Compact setup"],
  },
  "12kw": {
    label: "12 kW AC Charger",
    image: charger12kwImage,
    fit: "Hotels, offices and destination parking",
    description: "A higher-capacity AC option for destinations where drivers stay for a few hours.",
    tags: ["AC charging", "Destination use", "Moderate dwell time"],
  },
  "30kw": {
    label: "30 kW DC Charger",
    image: charger30kwImage,
    fit: "Retail locations, cafes and urban commercial sites",
    description: "An entry DC fast-charging option for commercial locations serving shorter visits.",
    tags: ["DC fast charging", "Urban locations", "Shorter sessions"],
  },
};

const workflow = [
  { number: "01", title: "Site & host connection", body: "Identify a suitable location and understand the host site's power and parking setup." },
  { number: "02", title: "Dedicated sub-meter", body: "Measure charger consumption separately through a dedicated sub-meter connection." },
  { number: "03", title: "Charger deployment", body: "Select a charger plan, confirm site readiness, and coordinate installation." },
  { number: "04", title: "Monitor & maintain", body: "Track charger activity and coordinate ongoing service and support." },
];

const operatingFeatures = [
  { icon: "◈", title: "Dedicated power tracking", body: "Sub-metering helps keep charger consumption visible." },
  { icon: "⌁", title: "Remote monitoring", body: "Monitor charger status and identify service needs." },
  { icon: "⚙", title: "Maintenance coordination", body: "A clear support path for charger servicing and upkeep." },
  { icon: "◇", title: "Site-specific planning", body: "Review power, access and installation needs before deployment." },
];

function FranchiseSection() {
  const [selectedPlan, setSelectedPlan] = useState("30kw");
  const plan = plans[selectedPlan];

  return (
    <section id="franchise" className="mt-8 scroll-mt-28 overflow-hidden rounded-[28px] border border-[#17384a] bg-[#061923] text-white shadow-[0_24px_70px_rgba(7,18,47,0.2)] sm:mt-10 sm:rounded-[36px]">
      <div className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_82%_8%,rgba(21,185,143,0.2),transparent_38%),linear-gradient(120deg,#071c27,#0a2732_55%,#071923)] p-5 sm:p-8 lg:p-10">
        <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-emerald-200/10" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">ZipAsset Franchise Model</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Build an EV charging site around your location
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Explore charger options for your property or business. Start with a site discussion, review the power and installation requirements, and plan the right setup for your location.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-bold text-[#06202a] transition hover:bg-emerald-200">Discuss your site</a>
              <a href="#franchise-plans" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-200/60 hover:bg-white/5">Explore charger plans</a>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {["6 kW AC", "12 kW AC", "30 kW DC"].map((label) => (
                <span key={label} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200">{label}</span>
              ))}
            </div>
          </div>

          <div id="franchise-plans" className="rounded-[24px] border border-white/10 bg-[#0a202b]/90 p-4 shadow-2xl sm:rounded-[30px] sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Entry Plan</p>
                <p className="mt-1 text-sm text-slate-300">Choose a charger segment to explore</p>
              </div>
              <label className="sr-only" htmlFor="franchise-plan-select">Select charger plan</label>
              <select
                id="franchise-plan-select"
                value={selectedPlan}
                onChange={(event) => setSelectedPlan(event.target.value)}
                className="min-w-[170px] rounded-xl border border-white/15 bg-[#102d38] px-4 py-3 text-sm font-bold text-white outline-none focus:border-emerald-300"
              >
                <option value="6kw">6 kW Charger</option>
                <option value="12kw">12 kW Charger</option>
                <option value="30kw">30 kW Charger</option>
              </select>
            </div>
            <div className="mt-4 grid min-h-[190px] gap-4 rounded-[20px] border border-white/[0.07] bg-[linear-gradient(135deg,rgba(18,52,62,0.8),rgba(5,22,31,0.9))] p-4 sm:grid-cols-[0.72fr_1.28fr] sm:items-center sm:p-5">
              <div className="flex h-36 items-center justify-center rounded-2xl bg-[#dce8e1] p-3">
                <img src={plan.image} alt={plan.label} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">Selected segment</div>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">{plan.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{plan.description}</p>
                <p className="mt-3 text-xs font-semibold text-slate-200"><span className="text-slate-400">Best suited for: </span>{plan.fit}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {plan.tags.map((tag) => <span key={tag} className="rounded-full border border-emerald-200/15 bg-emerald-200/[0.06] px-2.5 py-1 text-[11px] font-semibold text-emerald-100">{tag}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:gap-5 sm:p-6 lg:grid-cols-[1.12fr_0.88fr] lg:p-8">
        <div className="rounded-[24px] border border-white/10 bg-[#081e28] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-300/10 text-lg text-emerald-300">↗</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">The workflow</p>
              <h3 className="mt-1 text-xl font-black tracking-[-0.03em]">From host site to live charger</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {workflow.map((step) => (
              <article key={step.number} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black tracking-[0.18em] text-emerald-300">{step.number}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h4 className="mt-3 text-sm font-bold text-white">{step.title}</h4>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-200/10 bg-emerald-200/[0.04] px-4 py-3">
            {["Host site", "Sub-meter", "Charger", "EV driver"].map((item, index) => (
              <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                {index > 0 && <span className="hidden text-emerald-300 sm:inline">→</span>}
                <span className="grid h-8 w-8 place-items-center rounded-full border border-emerald-200/20 bg-[#0a2832] text-emerald-200">{["⌂", "▤", "ϟ", "⌁"][index]}</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[#081e28] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-300/10 text-lg text-emerald-300">✓</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Operating support</p>
              <h3 className="mt-1 text-xl font-black tracking-[-0.03em]">Designed for simpler operations</h3>
            </div>
          </div>
          <div className="mt-5 space-y-2.5">
            {operatingFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#102d38] text-lg text-emerald-300">{feature.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-white">{feature.title}</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{feature.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 bg-[#071720] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-lg font-black tracking-[-0.03em]">Have a location in mind?</p>
          <p className="mt-1 text-sm text-slate-400">Start with a conversation about your site, power availability and charger requirements.</p>
        </div>
        <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-bold text-[#06202a] transition hover:bg-emerald-200">Talk to ZipAsset <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}

export default FranchiseSection;
