import { useState } from "react";

const faqs = [
  {
    q: "What is ZipAsset?",
    a: "ZipAsset is a product of Zipbolt Innovations Private Limited. The website presents EV charger models and provides a way to send product or franchise enquiries to the team.",
  },
  {
    q: "What charger models are shown?",
    a: "The product range shown includes 6 kW, 12 kW, 30 kW, 60 kW, 120 kW, 180 kW, and 240 kW DC chargers. Specifications, compatibility, and availability should be confirmed for your project.",
  },
  {
    q: "How do I choose the right charger?",
    a: "Consider the vehicles to be charged, expected usage, site type, available electrical capacity, and desired charging speed. Submit an enquiry with your location and use case so the team can discuss suitable options.",
  },
  {
    q: "Are prices and delivery times listed online?",
    a: "The website does not confirm a final quotation or delivery schedule. Contact Zipbolt with the model, quantity, and project location to discuss current pricing, availability, and timing.",
  },
  {
    q: "Does ZipAsset handle installation or commissioning?",
    a: "Installation and commissioning scope depends on the project and site. Confirm responsibilities, electrical work, permits, timelines, warranties, and ongoing service directly with Zipbolt before placing an order.",
  },
  {
    q: "What information should I include in an enquiry?",
    a: "Share your preferred charger or use case, site location, estimated quantity, project timeline, and how you would like the team to contact you. Avoid sending sensitive financial or identity documents through the general enquiry form.",
  },
  {
    q: "What is the franchise enquiry for?",
    a: "The site includes franchise-plan information for people interested in discussing a proposed charging setup. Submit an enquiry to request current details and written terms; an enquiry alone does not reserve a plan or guarantee commercial outcomes.",
  },
  {
    q: "Can I invest through the website?",
    a: "No live investment transaction is available through this website. The site is not connected to investment onboarding, KYC, payments, asset management, or portfolio reporting. Do not treat illustrative figures or investor overview material as an offer or a promise of returns.",
  },
  {
    q: "How do I contact Zipbolt?",
    a: "Use the Contact page to submit a charger or franchise enquiry, or email info@zip-bolt.com. Please provide at least one contact method so the team can respond.",
  },
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((previous) => (previous === index ? null : index));
  };

  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-22px))] md:w-[min(1180px,calc(100%-32px))]">
        <section className="hero-panel hero-panel-zip overflow-visible p-5 sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              ZipAsset help
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Charger models, project enquiries, and what the ZipAsset website
              does—and does not—provide.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {faqs.map((faq, index) => (
              <article
                key={faq.q}
                className="overflow-hidden rounded-[20px] border border-white/10 bg-white/80 backdrop-blur-sm"
              >
                <h2>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-white sm:px-6"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-sm font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      &#8595;
                    </span>
                  </button>
                </h2>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5 sm:px-6"
                  >
                    <p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                      {faq.a}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] border border-[#dbe4ff] bg-white p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2a56c6]">
              Need help with a project?
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Tell us about the site and charger you are considering. Email{" "}
              <a
                href="mailto:info@zip-bolt.com"
                className="font-semibold text-[#2a56c6] hover:underline"
              >
                info@zip-bolt.com
              </a>{" "}
              or use the Contact page.
            </p>
            <a href="#contact" className="primary-button mt-4 inline-flex px-6 py-3">
              Contact Zipbolt
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default FAQPage;
