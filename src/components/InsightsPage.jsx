const insightAreas = [
  {
    title: "Station operations",
    description:
      "Review station availability, charging activity, and service status.",
  },
  {
    title: "Battery health",
    description:
      "Check device condition and identify stations that may need attention.",
  },
  {
    title: "Charging performance",
    description:
      "Explore usage, charging efficiency, and energy-consumption trends.",
  },
  {
    title: "Portal tools",
    description:
      "Open station, payment, and settings views in the live dashboard.",
  },
];

function InsightsPage() {
  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-22px))] space-y-6 md:w-[min(1180px,calc(100%-32px))] sm:space-y-8">
        <section className="rounded-[28px] bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 p-6 text-white shadow-[0_24px_60px_rgba(30,64,175,0.22)] sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">
            ZipSureAI · Battery Intelligence
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Charging insights
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base">
            A quick view of your EV charging network—from station activity and
            battery condition to energy performance and locations.
          </p>
        </section>

        <section
          aria-label="Insights dashboard features"
          className="grid gap-4 sm:grid-cols-2"
        >
          {insightAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] sm:p-6"
            >
              <h2 className="text-lg font-bold text-slate-900">{area.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5 sm:p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Live portal
              </p>
              <h2 className="mt-1 text-xl font-bold text-slate-900">
                ZipSureAI Battery Intelligence
              </h2>
            </div>
            <a
              href="https://insights.zipsureai.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-600 underline-offset-4 hover:underline"
            >
              Open in a new tab
            </a>
          </div>
          <div className="bg-slate-100 p-2 sm:p-4">
            <iframe
              title="Live ZipSureAI Battery Intelligence dashboard"
              src="https://insights.zipsureai.com/"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="clipboard-read; clipboard-write"
              className="h-[680px] w-full rounded-2xl border border-slate-200 bg-white sm:h-[900px]"
            />
          </div>
          <p className="px-5 py-3 text-xs leading-5 text-slate-500 sm:px-6">
            If the live portal is unavailable in this embedded view, open it in
            a new tab.
          </p>
        </section>
      </div>
    </main>
  );
}

export default InsightsPage;
