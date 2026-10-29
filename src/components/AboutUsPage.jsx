const chargerUseCases = [
  {
    power: "6–12 kW AC",
    title: "Long-stay charging",
    description:
      "A starting point for homes, apartments, workplaces, hotels, and destination parking.",
  },
  {
    power: "30–60 kW DC",
    title: "Urban & commercial sites",
    description:
      "Options to discuss for retail locations, offices, and other commercial destinations.",
  },
  {
    power: "120–240 kW DC",
    title: "High-throughput locations",
    description:
      "Higher-power models to explore for travel corridors, logistics hubs, and fleet depots.",
  },
];

function AboutUsPage() {
  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-22px))] space-y-8 md:w-[min(1180px,calc(100%-32px))]">
        <section className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-7 shadow-[0_30px_80px_rgba(10,23,56,0.4)] sm:p-10 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/70">
            About ZipAsset
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
            EV charging equipment for real-world sites.
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-blue-100/75 sm:text-base sm:leading-8">
            ZipAsset is a product of Zipbolt Innovations Private Limited. We
            present AC and DC charger models for homes, businesses, fleets, and
            travel locations, and help prospective customers start a
            product-specific conversation with our team.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#marketplace" className="primary-button px-6 py-3">
              Explore charger models
            </a>
            <a href="#contact" className="secondary-button px-6 py-3">
              Contact our team
            </a>
          </div>
        </section>

        <section
          aria-labelledby="range-heading"
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
            Product range
          </p>
          <h2
            id="range-heading"
            className="mt-2 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl"
          >
            Start with the site and charging need.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100/70">
            Charger selection depends on factors such as vehicle compatibility,
            expected use, power availability, location, and installation
            requirements. The examples below are starting points, not a
            substitute for a project assessment.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {chargerUseCases.map((item) => (
              <article
                key={item.power}
                className="rounded-2xl border border-white/10 bg-[#0a1738]/70 p-5"
              >
                <p className="text-sm font-bold text-cyan-200">{item.power}</p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-blue-100/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
              How to enquire
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              Share a few project details.
            </h2>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-blue-100/75">
              <li>
                <span className="font-bold text-white">1. Choose a model</span>{" "}
                or ask our team to help narrow the options.
              </li>
              <li>
                <span className="font-bold text-white">2. Tell us about the site</span>{" "}
                including its location, intended use, quantity, and timing.
              </li>
              <li>
                <span className="font-bold text-white">3. Discuss next steps</span>{" "}
                with the Zipbolt team, including availability and project scope.
              </li>
            </ol>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
              About the platform
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              Product information and enquiries.
            </h2>
            <p className="mt-4 text-sm leading-7 text-blue-100/75">
              This website helps visitors explore charger models and submit
              sales or franchise enquiries. It is not a checkout, charger
              installation booking, or live investment transaction platform.
              Product specifications, availability, pricing, installation, and
              service terms should be confirmed directly for each project.
            </p>
          </article>
        </section>

        <section className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#0a1738] via-[#0f1d4a] to-[#0a1738] p-6 sm:p-9">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/70">
                Zipbolt Innovations Private Limited
              </p>
              <p className="mt-3 text-sm leading-7 text-blue-100/75">
                UG-006, Ground Floor, MGF Metropolis Mall
                <br />
                Mehrauli–Gurgaon Road, Gurugram, Haryana 122002, India
                <br />
                <a
                  href="mailto:info@zip-bolt.com"
                  className="font-semibold text-white underline decoration-white/25 underline-offset-4 hover:text-blue-200"
                >
                  info@zip-bolt.com
                </a>
              </p>
            </div>
            <a href="#contact" className="primary-button px-6 py-3">
              Send an enquiry
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutUsPage;
