import { Show, SignInButton } from "@clerk/react";
import charger6kwImage from "../assets/charger-6kw-ac.png";
import charger12kwImage from "../assets/charger-12kw-ac.png";
import { isClerkEnabled } from "../config/clerk";

const plans = [
  {
    id: "plan-a",
    name: "Plan A",
    network: "4 × 6 kW Network",
    subtitle: "Decentralized 2W fleet micro-grid",
    investment: "₹6.00 lakh",
    chargerImages: [charger6kwImage],
    hardware: "4 × 6 kW chargers · 8 guns",
    deployment: "2–4 sites",
    irr: "22.89%",
    principalRecovery: "Targeted by Month 36",
    totalPayout: "₹11,77,760",
    annualHarvest: "₹2,88,880 / year",
    harvestYield: "48.15%",
    fit: "Two-wheeler delivery fleets operating across multiple local hubs.",
  },
  {
    id: "plan-b",
    name: "Plan B",
    network: "24 kW Combo",
    subtitle: "Mixed 2W and 3W cargo network",
    investment: "₹5.00 lakh",
    chargerImages: [charger6kwImage, charger12kwImage],
    hardware: "2 × 6 kW + 1 × 12 kW · 6 guns",
    deployment: "2 sites",
    irr: "22.06%",
    principalRecovery: "Targeted by Month 36",
    totalPayout: "₹9,42,426",
    annualHarvest: "₹2,21,213 / year",
    harvestYield: "44.24%",
    fit: "Mixed commercial fleets serving two- and three-wheelers.",
  },
];

const workflow = [
  "Franchise agreement",
  "Capital escrow",
  "30-day setup",
  "Commissioning",
];

function FranchisePlanDetails({ plan, onEnquire }) {
  return (
    <>
      <dl className="grid grid-cols-2 gap-x-5 gap-y-4">
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Hardware
          </dt>
          <dd className="mt-1 text-sm font-semibold leading-5 text-slate-800">{plan.hardware}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Deployment
          </dt>
          <dd className="mt-1 text-sm font-semibold leading-5 text-slate-800">{plan.deployment}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Illustrative net IRR
          </dt>
          <dd className="mt-1 text-lg font-black text-blue-800">{plan.irr}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Illustrative principal recovery
          </dt>
          <dd className="mt-1 text-sm font-semibold text-slate-800">{plan.principalRecovery}</dd>
        </div>
      </dl>

      <div className="mt-4 grid grid-cols-2 divide-x divide-blue-100 rounded-2xl bg-blue-50/70 px-4 py-3.5">
        <div className="pr-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">
            60-month net payout*
          </p>
          <p className="mt-1 text-lg font-black text-slate-950">{plan.totalPayout}</p>
        </div>
        <div className="pl-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">
            Years 4–5 annual payout*
          </p>
          <p className="mt-1 text-base font-black text-slate-950">{plan.annualHarvest}</p>
          <p className="text-xs text-slate-500">{plan.harvestYield} of initial capital</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-5 text-slate-600">
        <span className="font-bold text-slate-800">Designed for: </span>{plan.fit}
      </p>

      <button
        type="button"
        onClick={() => onEnquire(plan)}
        className="primary-button mt-5 w-full justify-center px-5 py-3 text-sm"
      >
        Enquire about {plan.name}
      </button>
    </>
  );
}

function FranchisePlanHeader({ plan, index }) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center gap-0.5 overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#eff6ff,#e7f2ff)]">
          {plan.chargerImages.map((image, imageIndex) => (
            <div
              key={image}
              className={`h-full overflow-hidden ${plan.chargerImages.length > 1 ? "w-1/2" : "w-full"}`}
            >
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="h-full w-full scale-[1.35] object-cover"
                style={{ objectPosition: `${imageIndex === 1 ? "48%" : "center"} center` }}
              />
            </div>
          ))}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-50 text-xs font-black text-blue-700">
              0{index + 1}
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              {plan.subtitle}
            </p>
          </div>
          <h4 className="mt-3 text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl">
            {plan.network}
          </h4>
        </div>
      </div>
    </div>
  );
}

function FranchisePlanAccess({ plan, onEnquire }) {
  const planDetails = (
    <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
          Proposed capital
        </p>
        <p className="text-xl font-black tracking-tight text-slate-950">
          {plan.investment}
        </p>
      </div>
      <FranchisePlanDetails plan={plan} onEnquire={onEnquire} />
    </div>
  );

  if (!isClerkEnabled) {
    return (
      <div className="relative flex-1">
        <div aria-hidden="true" className="pointer-events-none select-none blur-[5px]">
          {planDetails}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-white/80 p-4 text-center backdrop-blur-sm">
          <p className="text-base font-bold text-slate-900">Log in to access deployment options</p>
          <p className="mt-1 max-w-xs text-sm leading-5 text-slate-600">
            Account sign-in is currently unavailable. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex-1">
      <Show when="signed-in">
        {planDetails}
      </Show>
      <Show when="signed-out">
        <div className="relative">
          <div aria-hidden="true" className="pointer-events-none select-none blur-[5px]">
            {planDetails}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-white/80 p-4 text-center backdrop-blur-sm">
            <p className="text-base font-bold text-slate-900">Log in to access deployment options</p>
            <p className="mt-1 text-sm leading-5 text-slate-600">
              Sign in to view the complete plan details and enquire.
            </p>
            <SignInButton mode="modal">
              <button type="button" className="primary-button mt-3 justify-center px-5 py-2.5 text-sm">
                Log in
              </button>
            </SignInButton>
          </div>
        </div>
      </Show>
    </div>
  );
}

function FranchiseSection({ onEnquire }) {
  return (
    <section
      id="franchise"
      className="mt-8 scroll-mt-28 overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.07)] sm:mt-10 sm:rounded-[32px]"
    >
      <header className="border-b border-blue-100 bg-[linear-gradient(115deg,#f7faff,#ffffff_65%,#f0f8ff)] px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Zipbolt Micro-Utility Franchise
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] text-slate-950 sm:text-4xl">
            A ready-to-deploy charging network for commercial fleets
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Compare two proposed micro-hub plans for 2W and 3W fleet charging, then talk to our
            team about locations, deployment and franchise terms.
          </p>
          <a
            href="#franchise-plans"
            className="secondary-button mt-5 px-5 py-2.5 text-sm"
          >
            Compare plans <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <div id="franchise-plans" className="scroll-mt-28 px-4 py-6 sm:px-7 sm:py-8 lg:px-9">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Deployment options
            </p>
            <h3 className="mt-1 text-xl font-black tracking-[-0.035em] text-slate-950 sm:text-2xl">
              Choose a network configuration
            </h3>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
            Proposed 60-month operating term
          </span>
        </div>

        <div className="grid items-stretch gap-4 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className="flex flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,23,42,0.045)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_14px_32px_rgba(42,86,198,0.1)]"
            >
              <div className="h-1 bg-gradient-to-r from-blue-800 via-blue-600 to-sky-400" />
              <div className="px-5 pt-5 sm:px-6 sm:pt-6">
                <FranchisePlanHeader plan={plan} index={index} />
              </div>
              <FranchisePlanAccess plan={plan} onEnquire={onEnquire} />
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 sm:px-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
              Proposed onboarding
            </p>
            <ol className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
              {workflow.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-[10px] font-black text-blue-800">
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <button
            type="button"
            onClick={() => onEnquire(plans[0])}
            className="secondary-button justify-center px-5 py-3 text-sm"
          >
            Talk to the franchise team
          </button>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          *Figures are indicative projections from the supplied presentation, not guaranteed
          returns or a promise of principal recovery. Actual performance depends on utilization,
          tariffs, uptime, site approvals, operating costs, taxes and final contract terms. Exit,
          escrow or warranty arrangements apply only if confirmed in executed agreements. Review
          independently and obtain professional advice before committing.
        </p>
      </div>
    </section>
  );
}

export default FranchiseSection;
