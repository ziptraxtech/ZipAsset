import { useState, useMemo } from "react";
import evDcFastChargingImage from "../assets/ev-dc-fast-charging.png";

const SEGMENT = {
  segment_id: "ev-charging",
  name: "EV DC Fast Charging",
  short_description: "Charge the future",
  description:
    "Accelerate the electric vehicle revolution by investing in fast-charging infrastructure.",
  image_url: evDcFastChargingImage,
  icon: "Zap",
  features: ["High-Power DC Fast Charging", "Strategic Locations", "Smart Grid Integration", "24/7 Availability"],
  total_tvl: 28e6,
  investors_count: 3421,
  apy_range: { min: 10, max: 18 },
  risk_level: "Medium",
  min_investment: 150,
};

const PLANS = [
  {
    plan_id: "ev-6kw",
    segment_id: "ev-charging",
    name: "6 kW Charger",
    min_investment: 150,
    max_investment: 5000,
    apy: 9.5,
    lock_period_days: 30,
    risk_level: "Low",
    description: "Compact Type 6 / 7 charger for entry-level EV charging deployments.",
    features: ["Type 6 / 7 compatible", "6 kW output", "Best for small parking sites"],
  },
  {
    plan_id: "ev-12kw",
    segment_id: "ev-charging",
    name: "12 kW Charger",
    min_investment: 300,
    max_investment: 8000,
    apy: 10.5,
    lock_period_days: 45,
    risk_level: "Low",
    description: "Type 6 / 7 charger designed for steady urban charging demand.",
    features: ["Type 6 / 7 compatible", "12 kW output", "Good for retail and office use"],
  },
  {
    plan_id: "ev-30kw",
    segment_id: "ev-charging",
    name: "30 kW DC Fast Charger",
    min_investment: 2500,
    max_investment: 15000,
    apy: 11.5,
    lock_period_days: 60,
    risk_level: "Low",
    description: "Entry DC fast charger for commercial locations with moderate turnover.",
    features: ["30 kW DC output", "Commercial-ready", "Ideal for mixed-use sites"],
  },
  {
    plan_id: "ev-40kw",
    segment_id: "ev-charging",
    name: "40 kW DC Fast Charger",
    min_investment: 5000,
    max_investment: 22000,
    apy: 12.5,
    lock_period_days: 75,
    risk_level: "Medium",
    description: "Balanced DC fast charger for dependable charging throughput.",
    features: ["40 kW DC output", "Faster turnaround", "Suitable for urban hubs"],
  },
  {
    plan_id: "ev-60kw",
    segment_id: "ev-charging",
    name: "60 kW DC Fast Charger",
    min_investment: 8000,
    max_investment: 30000,
    apy: 13.5,
    lock_period_days: 90,
    risk_level: "Medium",
    description: "Mid-capacity fast charger built for busy city and fleet corridors.",
    features: ["60 kW DC output", "Fleet-friendly", "High daily utilization potential"],
  },
  {
    plan_id: "ev-120kw",
    segment_id: "ev-charging",
    name: "120 kW DC Fast Charger",
    min_investment: 15000,
    max_investment: 50000,
    apy: 15,
    lock_period_days: 120,
    risk_level: "Medium",
    description: "High-speed charging unit for highway and premium city locations.",
    features: ["120 kW DC output", "Highway-ready", "Premium charging throughput"],
  },
  {
    plan_id: "ev-240kw",
    segment_id: "ev-charging",
    name: "240 kW DC Fast Charger",
    min_investment: 40000,
    max_investment: 150000,
    apy: 18,
    lock_period_days: 180,
    risk_level: "High",
    description: "Flagship ultra-fast charger for major destination and fleet charging hubs.",
    features: ["240 kW DC output", "Flagship charger class", "Best for anchor locations"],
  },
];

function ZapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-zap h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-check-big h-4 w-4 text-teal-400 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-trending-up h-5 w-5 text-teal-400"
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-shield h-5 w-5 text-teal-400"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-clock h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-left h-4 w-4"
      aria-hidden="true"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function EvChargingPage({ onBack }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPlanId, setSelectedPlanId] = useState("ev-6kw");
  const [investmentAmount, setInvestmentAmount] = useState(150);

  const selectedPlan = useMemo(
    () => PLANS.find((p) => p.plan_id === selectedPlanId) ?? PLANS[0],
    [selectedPlanId]
  );

  const dailyReturn = useMemo(
    () => (investmentAmount * (selectedPlan.apy / 100) / 365),
    [investmentAmount, selectedPlan]
  );

  const monthlyReturn = useMemo(
    () => dailyReturn * 30,
    [dailyReturn]
  );

  const lockPeriodReturn = useMemo(
    () => investmentAmount * (selectedPlan.apy / 100) * (selectedPlan.lock_period_days / 365),
    [investmentAmount, selectedPlan]
  );

  const totalValue = useMemo(
    () => investmentAmount + lockPeriodReturn,
    [investmentAmount, lockPeriodReturn]
  );

  const sliderPercent = useMemo(() => {
    const range = selectedPlan.max_investment - selectedPlan.min_investment;
    if (range <= 0) return 0;
    return ((investmentAmount - selectedPlan.min_investment) / range) * 100;
  }, [investmentAmount, selectedPlan]);

  const riskColor =
    selectedPlan.risk_level === "Low"
      ? "text-green-400"
      : selectedPlan.risk_level === "Medium"
        ? "text-amber-400"
        : "text-rose-400";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[360px] md:min-h-[420px]">
        <div className="absolute inset-0 h-full pointer-events-none">
          <img
            src={SEGMENT.image_url}
            alt={SEGMENT.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 md:pb-14 min-h-[360px] md:min-h-[420px] flex flex-col">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mb-6 text-slate-200"
          >
            <ArrowLeftIcon />
            Back to Segments
          </button>
          <div className="flex items-start gap-4 mt-auto">
            <div className="p-4 rounded-2xl bg-teal-500/20 backdrop-blur-sm text-teal-400">
              <ZapIcon />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-2 text-white">
                {SEGMENT.name}
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl">{SEGMENT.short_description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div
              dir="ltr"
              data-orientation="horizontal"
              className="w-full"
            >
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="inline-flex h-9 items-center rounded-lg bg-slate-900 p-1 text-slate-400 w-full justify-start"
                tabIndex={0}
              >
                {[
                  { id: "overview", label: "Overview" },
                  { id: "plans", label: "Investment Plans" },
                  { id: "projects", label: "Our Projects" },
                  { id: "sustainability", label: "Sustainability" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`content-${tab.id}`}
                    data-state={activeTab === tab.id ? "active" : "inactive"}
                    id={`trigger-${tab.id}`}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-slate-950 text-white shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                    data-testid={`tab-${tab.id}`}
                    tabIndex={-1}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Overview Tab */}
              <div
                data-state={activeTab === "overview" ? "active" : "inactive"}
                role="tabpanel"
                aria-labelledby="trigger-overview"
                id="content-overview"
                tabIndex={0}
                className={`mt-6 ${activeTab === "overview" ? "" : "hidden"}`}
              >
                <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 font-['Outfit']">About This Segment</h3>
                    <p className="text-slate-400 mb-6">{SEGMENT.description}</p>
                    <h4 className="font-semibold mb-3 text-slate-200">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {SEGMENT.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckIcon />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-teal-500/10">
                          <TrendingUpIcon />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Total Value Locked</p>
                          <p className="text-2xl font-bold text-white">
                            Rs {(SEGMENT.total_tvl / 1e6).toFixed(1)}M
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-teal-500/10">
                          <ShieldIcon />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">Active Investors</p>
                          <p className="text-2xl font-bold text-white">
                            {SEGMENT.investors_count.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Plans Tab */}
              <div
                data-state={activeTab === "plans" ? "active" : "inactive"}
                role="tabpanel"
                aria-labelledby="trigger-plans"
                id="content-plans"
                tabIndex={0}
                className={`mt-6 ${activeTab === "plans" ? "" : "hidden"}`}
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {PLANS.map((plan) => (
                    <div
                      key={plan.plan_id}
                      className={`rounded-xl border p-5 shadow ${
                        selectedPlanId === plan.plan_id
                          ? "border-teal-500/50 bg-slate-900"
                          : "border-slate-800 bg-slate-900/60"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-slate-200">{plan.name}</span>
                        <span className="inline-flex items-center rounded-md border border-transparent bg-teal-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow">
                          {plan.apy}% APY
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-4">{plan.description}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                        <ClockIcon />
                        <span>
                          {plan.lock_period_days} days lock period
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Min. Investment</span>
                          <span className="text-slate-200 font-medium">Rs {plan.min_investment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Max. Investment</span>
                          <span className="text-slate-200 font-medium">Rs {plan.max_investment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Risk Level</span>
                          <span className={`font-medium ${plan.risk_level === "Low" ? "text-green-400" : plan.risk_level === "Medium" ? "text-amber-400" : "text-rose-400"}`}>
                            {plan.risk_level}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedPlanId(plan.plan_id)}
                        className={`mt-4 w-full rounded-full py-2.5 text-sm font-medium transition-colors ${
                          selectedPlanId === plan.plan_id
                            ? "bg-teal-500 text-white hover:bg-teal-400"
                            : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                        }`}
                      >
                        {selectedPlanId === plan.plan_id ? "Selected" : "Select Plan"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Projects Tab */}
              <div
                data-state={activeTab === "projects" ? "active" : "inactive"}
                role="tabpanel"
                aria-labelledby="trigger-projects"
                id="content-projects"
                tabIndex={0}
                className={`mt-6 ${activeTab === "projects" ? "" : "hidden"}`}
              >
                <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow p-6">
                  <h3 className="text-xl font-semibold mb-4 font-['Outfit']">Our Projects</h3>
                  <p className="text-slate-400 mb-6">
                    Explore our portfolio of deployed and upcoming EV DC fast charging stations across retail,
                    highway, and fleet corridors.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Deployed Stations</p>
                      <p className="text-2xl font-bold text-white mt-1">12+</p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Cities Covered</p>
                      <p className="text-2xl font-bold text-white mt-1">8</p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Total Charging Points</p>
                      <p className="text-2xl font-bold text-white mt-1">48</p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Avg. Utilization</p>
                      <p className="text-2xl font-bold text-white mt-1">78%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sustainability Tab */}
              <div
                data-state={activeTab === "sustainability" ? "active" : "inactive"}
                role="tabpanel"
                aria-labelledby="trigger-sustainability"
                id="content-sustainability"
                tabIndex={0}
                className={`mt-6 ${activeTab === "sustainability" ? "" : "hidden"}`}
              >
                <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow p-6">
                  <h3 className="text-xl font-semibold mb-4 font-['Outfit']">Sustainability Impact</h3>
                  <p className="text-slate-400 mb-6">
                    EV DC fast charging accelerates the transition to sustainable mobility by enabling longer
                    electric journeys, reducing range anxiety, and displacing fossil-fuel vehicle usage across
                    urban and highway networks.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Carbon Offset Potential</p>
                      <p className="text-2xl font-bold text-white mt-1">50K+ Tons CO₂</p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                      <p className="text-sm text-slate-400">Renewable Integration</p>
                      <p className="text-2xl font-bold text-white mt-1">24/7 Grid Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Calculator */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow sticky top-24">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight font-['Outfit'] text-white">
                  Investment Calculator
                </div>
              </div>
              <div className="p-6 pt-0 space-y-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-200">{selectedPlan.name}</span>
                    <div className="inline-flex items-center rounded-md border border-transparent bg-teal-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow">
                      {selectedPlan.apy}% APY
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <ClockIcon />
                    <span>{selectedPlan.lock_period_days} days lock period</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-200">Investment Amount</label>
                    <span className="text-sm font-bold text-teal-400">
                      Rs {investmentAmount.toLocaleString()}
                    </span>
                  </div>
                  <span
                    dir="ltr"
                    data-orientation="horizontal"
                    aria-disabled="false"
                    className="relative flex w-full touch-none select-none items-center mb-2"
                    data-testid="investment-slider"
                  >
                    <span
                      data-orientation="horizontal"
                      className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-slate-800"
                    >
                      <span
                        data-orientation="horizontal"
                        className="absolute h-full bg-teal-500"
                        style={{ left: `${sliderPercent}%`, right: `${100 - sliderPercent}%` }}
                      />
                    </span>
                    <span
                      style={{
                        transform: `translateX(calc(${sliderPercent}% - 8px))`,
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      <span
                        role="slider"
                        aria-valuemin={selectedPlan.min_investment}
                        aria-valuemax={selectedPlan.max_investment}
                        aria-orientation="horizontal"
                        data-orientation="horizontal"
                        tabIndex={0}
                        className="block h-4 w-4 rounded-full border border-teal-500/50 bg-slate-950 shadow transition-colors"
                        data-radix-collection-item=""
                        aria-valuenow={investmentAmount}
                      />
                    </span>
                  </span>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Rs {selectedPlan.min_investment.toLocaleString()}</span>
                    <span>Rs {selectedPlan.max_investment.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={selectedPlan.min_investment}
                    max={selectedPlan.max_investment}
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="sr-only"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-200">Risk Level</label>
                    <span className={`text-sm font-medium ${riskColor}`}>{selectedPlan.risk_level}</span>
                  </div>
                  <div
                    aria-valuemax="100"
                    aria-valuemin="0"
                    role="progressbar"
                    data-state="indeterminate"
                    data-max="100"
                    className="relative w-full overflow-hidden rounded-full bg-slate-800 h-2"
                  >
                    <div
                      data-state="indeterminate"
                      data-max="100"
                      className="h-full w-full flex-1 bg-teal-500 transition-all"
                      style={{ transform: "translateX(-75%)" }}
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h4 className="font-semibold text-sm text-slate-200">Projected Returns</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-xs text-slate-400">Daily</p>
                      <p className="font-semibold text-teal-400">
                        Rs {dailyReturn.toFixed(2)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-xs text-slate-400">Monthly</p>
                      <p className="font-semibold text-teal-400">
                        Rs {monthlyReturn.toFixed(2)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-xs text-slate-400">Lock Period</p>
                      <p className="font-semibold text-teal-400">
                        Rs {lockPeriodReturn.toFixed(2)}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <p className="text-xs text-slate-400">Total Value</p>
                      <p className="font-semibold text-teal-400">
                        Rs {totalValue.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors bg-teal-500 text-white shadow hover:bg-teal-400 h-9 px-4 w-full rounded-full py-6 text-lg"
                  data-testid="invest-btn"
                >
                  Sign In to Invest
                </button>
                <p className="text-xs text-center text-slate-500">
                  By investing, you agree to our Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EvChargingPage;
