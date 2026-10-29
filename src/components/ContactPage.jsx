import { useEffect, useState } from "react";
import { segments as chargerModels } from "../data/content";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  charger: "",
  franchisePlan: "",
  useCase: "",
  quantity: "",
  deploymentLocation: "",
  timeline: "",
  preferredContact: "Email",
  discoveryChannel: "",
  message: "",
  consent: false,
};

function ContactPage({ segment, franchisePlan, onClose }) {
  const [formData, setFormData] = useState({
    ...initialFormData,
    charger: segment?.name ?? "",
    franchisePlan: franchisePlan?.name ?? "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      charger: segment?.name ?? "",
      franchisePlan: franchisePlan?.name ?? "",
    }));
  }, [segment, franchisePlan]);

  useEffect(() => {
    if (!segment && !franchisePlan) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [segment, franchisePlan, onClose]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setError("");
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.email.trim() && !formData.phone.trim()) {
      setError("Please provide an email address or phone number so our team can reach you.");
      return;
    }
    if (formData.preferredContact === "Email" && !formData.email.trim()) {
      setError("Please enter your email address or choose phone / WhatsApp as your preferred follow-up.");
      return;
    }
    if (formData.preferredContact !== "Email" && !formData.phone.trim()) {
      setError("Please enter your phone number for the selected follow-up method.");
      return;
    }

    setStatus("submitting");
    const query = new URLSearchParams(window.location.search);
    const enquirySubject = franchisePlan
      ? `Franchise enquiry: ${formData.franchisePlan}`
      : `Charger sales enquiry: ${formData.charger}`;
    const payload = {
      ...formData,
      subject: enquirySubject,
      formType: franchisePlan ? "Franchise enquiry" : "Charger sales enquiry",
      referrer: document.referrer,
      utmSource: query.get("utm_source") || "",
      utmMedium: query.get("utm_medium") || "",
      utmCampaign: query.get("utm_campaign") || "",
      utmContent: query.get("utm_content") || "",
      utmTerm: query.get("utm_term") || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let data = {};
      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          throw new Error(
            "The enquiry service returned an unexpected response. Please try again or contact our team directly.",
          );
        }
      }

      if (!responseText && response.ok) {
        throw new Error(
          "The enquiry service returned an empty response. Please try again or contact our team directly.",
        );
      }
      if (!response.ok) {
        throw new Error(
          data.error || "We couldn't send your enquiry. Please try again.",
        );
      }

      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "We couldn't send your enquiry. Please try again.",
      );
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100";
  const labelClass = "mb-2 block text-sm font-semibold text-slate-800";

  const formSection = (
    <section
      className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_20px_55px_rgba(15,23,42,0.07)] sm:rounded-[36px] sm:p-7 lg:p-9"
    >
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
                {franchisePlan ? "Micro-utility franchise enquiry" : "Charger sales enquiry"}
              </p>
              <h2
                id={segment || franchisePlan ? "charger-enquiry-title" : undefined}
                className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl"
              >
                {franchisePlan
                  ? "Let’s discuss your franchise plan"
                  : "Let’s find the right charger for your site"}
              </h2>
            </div>
            {(segment || franchisePlan) && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close enquiry"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-2xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                &times;
              </button>
            )}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {franchisePlan
              ? "Share your details and our franchise team will contact you to discuss the proposed plan, deployment assumptions and agreement terms."
              : "Tell us a little about your project. Our team will follow up to discuss charger options, site requirements and next steps."}
          </p>
          {segment && (
            <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-800">
                Selected model
              </p>
              <p className="mt-1 font-bold text-slate-950">
                {segment.name} · {segment.power}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{segment.description}</p>
            </div>
          )}
          {franchisePlan && (
            <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-800">
                Selected franchise plan
              </p>
              <p className="mt-1 font-bold text-slate-950">{franchisePlan.name}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {franchisePlan.investment} proposed capital · {franchisePlan.hardware}
              </p>
            </div>
          )}
          <p className="mt-5 text-xs leading-5 text-slate-500">
            Your enquiry goes to our sales team. Use the preferred contact option to tell us how
            you&apos;d like us to reach you.
          </p>
        </div>

        {status === "success" ? (
          <div
            className="flex flex-col justify-center rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8"
            role="status"
            aria-live="polite"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700">
              &#10003;
            </div>
            <h3 className="mt-4 text-xl font-black text-emerald-950">Enquiry received</h3>
            <p className="mt-2 text-sm leading-7 text-emerald-800">
              Thank you. Our team has received your enquiry and will follow up using your
              preferred contact method.
            </p>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  ...initialFormData,
                  charger: segment?.name ?? "",
                  franchisePlan: franchisePlan?.name ?? "",
                });
                setStatus("idle");
              }}
              className="mt-5 w-fit rounded-full border border-emerald-300 px-4 py-2 text-sm font-bold text-emerald-900 transition hover:bg-emerald-100"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl bg-slate-50 p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="lead-name" className={labelClass}>
                  Full name <span className="text-rose-600">*</span>
                </label>
                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={120}
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="lead-company" className={labelClass}>Company / organization</label>
                <input
                  id="lead-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  maxLength={160}
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Company name (optional)"
                />
              </div>
              <div>
                <label htmlFor="lead-email" className={labelClass}>Email address</label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@company.com"
                  aria-describedby="lead-contact-hint"
                />
              </div>
              <div>
                <label htmlFor="lead-phone" className={labelClass}>Phone / WhatsApp</label>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+91 XXXXX XXXXX"
                  aria-describedby="lead-contact-hint"
                />
              </div>
            </div>
            <p id="lead-contact-hint" className="mt-2 text-xs text-slate-500">
              Please provide at least one way for us to contact you.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="lead-charger" className={labelClass}>
                  Charger of interest {!franchisePlan && <span className="text-rose-600">*</span>}
                </label>
                <select
                  id="lead-charger"
                  name="charger"
                  required={!franchisePlan}
                  value={formData.charger}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a charger</option>
                  {chargerModels.map((model) => (
                    <option key={model.id} value={model.name}>
                      {model.name}
                    </option>
                  ))}
                  <option value="Help me choose">Help me choose</option>
                </select>
              </div>
              {franchisePlan && (
                <div>
                  <label htmlFor="lead-franchise-plan" className={labelClass}>
                    Franchise plan <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="lead-franchise-plan"
                    name="franchisePlan"
                    required
                    value={formData.franchisePlan}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a plan</option>
                    <option value="Plan A: 4 × 6 kW Network">Plan A: 4 × 6 kW Network</option>
                    <option value="Plan B: 24 kW Combo">Plan B: 24 kW Combo</option>
                  </select>
                </div>
              )}
              <div>
                <label htmlFor="lead-use-case" className={labelClass}>Intended use</label>
                <select
                  id="lead-use-case"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a use case</option>
                  <option value="Home or apartment">Home or apartment</option>
                  <option value="Workplace or office">Workplace or office</option>
                  <option value="Retail or hospitality">Retail or hospitality</option>
                  <option value="Fleet or logistics">Fleet or logistics</option>
                  <option value="Highway or travel hub">Highway or travel hub</option>
                  <option value="Other / not sure">Other / not sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="lead-quantity" className={labelClass}>Estimated quantity</label>
                <select
                  id="lead-quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select quantity</option>
                  <option value="1">1 charger</option>
                  <option value="2-5">2–5 chargers</option>
                  <option value="6-10">6–10 chargers</option>
                  <option value="11+">More than 10 chargers</option>
                  <option value="Not sure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="lead-timeline" className={labelClass}>When are you looking to buy?</label>
                <select
                  id="lead-timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a timeline</option>
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within 1-3 months">Within 1–3 months</option>
                  <option value="Within 3-6 months">Within 3–6 months</option>
                  <option value="More than 6 months">More than 6 months</option>
                  <option value="Researching">Just researching</option>
                </select>
              </div>
              <div>
                <label htmlFor="lead-location" className={labelClass}>Installation city / region</label>
                <input
                  id="lead-location"
                  name="deploymentLocation"
                  type="text"
                  autoComplete="address-level2"
                  maxLength={160}
                  value={formData.deploymentLocation}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="City, state"
                />
              </div>
              <div>
                <label htmlFor="lead-contact-method" className={labelClass}>Preferred follow-up</label>
                <select
                  id="lead-contact-method"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Email">Email</option>
                  <option value="Phone call">Phone call</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="lead-source" className={labelClass}>How did you hear about us?</label>
                <select
                  id="lead-source"
                  name="discoveryChannel"
                  value={formData.discoveryChannel}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a source (optional)</option>
                  <option value="Google or web search">Google or web search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Referral">Referral</option>
                  <option value="Event or exhibition">Event or exhibition</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="lead-message" className={labelClass}>Project details or questions</label>
                <textarea
                  id="lead-message"
                  name="message"
                  rows={4}
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-y`}
                  placeholder="Tell us about your site, power availability or anything else we should know."
                />
              </div>
            </div>

            <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-600">
              <input
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleChange}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-cyan-700 focus:ring-cyan-600"
              />
              <span>
                I agree to be contacted about this enquiry and understand my information will be
                handled according to the{" "}
                <a
                  href="/legal/privacy-policy.html"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan-800 underline"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {error && (
              <div
                className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700"
                role="alert"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="primary-button mt-5 w-full justify-center px-6 py-3.5 text-sm disabled:cursor-wait disabled:opacity-60"
            >
              {status === "submitting"
                ? "Sending enquiry..."
                : franchisePlan
                  ? "Send franchise enquiry"
                  : "Send charger enquiry"}
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              We&apos;ll only use these details to respond to your enquiry.
            </p>
          </form>
        )}
      </div>
    </section>
  );

  if (segment || franchisePlan) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="charger-enquiry-title"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose?.();
        }}
      >
        <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] shadow-2xl sm:rounded-[36px]">
          {formSection}
        </div>
      </div>
    );
  }

  return (
    <main className="pb-12 pt-6 sm:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-22px))] md:w-[min(1180px,calc(100%-32px))]">
        {formSection}
      </div>
    </main>
  );
}

export default ContactPage;
