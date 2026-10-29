import BrandLogo from "./BrandLogo";

function Footer() {
  const handleResourceLink = (anchor) => {
    window.location.hash = anchor;
  };

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/zipboltinnovations/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/zipbolt/posts/?feedView=all",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7.2 9.3V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M11.5 18V13.2C11.5 11.7 12.4 10.7 13.8 10.7C15.1 10.7 15.9 11.6 15.9 13.2V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7.2" cy="6.5" r="1.1" fill="currentColor" />
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:info@zip-bolt.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="mt-10 border-t border-white/10 bg-[#0a1738] text-white sm:mt-12">
      <div className="mx-auto w-[min(1180px,calc(100%-16px))] py-8 sm:w-[min(1180px,calc(100%-24px))] sm:py-10 md:w-[min(1180px,calc(100%-32px))] md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_0.7fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <BrandLogo imgClassName="h-11 sm:h-12 md:h-14 drop-shadow-[0_10px_22px_rgba(34,211,238,0.14)]" />
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200/75">
                  A Product Of Zipbolt Innovations Pvt Ltd
                </div>
              </div>
            </div>

            <div className="mt-5 max-w-md space-y-1 text-sm leading-7 text-blue-100/75">
              <p className="font-black uppercase tracking-[0.12em] text-white">
                ZIPBOLT INNOVATIONS PRIVATE LIMITED
              </p>
              <p className="font-semibold uppercase tracking-[0.08em] text-blue-100/85">
                GSTIN : 06AABCZ8004D1ZM
              </p>
              <p>UG-006, Ground Floor</p>
              <p>MGF Metropolis Mall, Mehrauli - Gurgaon Road</p>
              <p>Gurugram, Haryana 122002, India</p>
            </div>

          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">Platform</h4>
            <div className="mt-4 grid gap-3 text-sm text-blue-100/75">
              <a className="transition hover:text-white" href="#top">
                Home
              </a>
              <a className="transition hover:text-white" href="#aboutus">
                About Us
              </a>
              <a className="transition hover:text-white" href="#investordeck">
                Investor overview
              </a>
              <a className="transition hover:text-white" href="#marketplace">
                Charger range
              </a>
              <a className="transition hover:text-white" href="#franchise">
                Franchise plans
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact Zipbolt
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">Quick links</h4>
            <div className="mt-4 grid gap-3 text-sm text-blue-100/75">
              <button 
                type="button"
                className="transition hover:text-white text-left"
                onClick={() => handleResourceLink("marketplace")}
              >
                Browse charger models
              </button>
              <button 
                type="button"
                className="transition hover:text-white text-left"
                onClick={() => handleResourceLink("franchise")}
              >
                Franchise enquiries
              </button>
              <a className="transition hover:text-white" href="#faq">
                Charger FAQs
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">Contact</h4>
            <div className="mt-4 grid gap-3 text-sm text-blue-100/75">
              <a className="transition hover:text-white" href="mailto:info@zip-bolt.com">
                info@zip-bolt.com
              </a>
              <div className="flex flex-wrap gap-3 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={social.label === "Email" ? undefined : "noreferrer"}
                    aria-label={social.label}
                    title={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-blue-100/85 transition hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
                  >
                    <span className="h-5 w-5">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">Legal</h4>
            <div className="mt-4 grid gap-3 text-sm text-blue-100/75">
              <a className="transition hover:text-white" href="/legal/terms-of-use.html" target="_blank" rel="noreferrer">
                Terms of Use
              </a>
              <a className="transition hover:text-white" href="/legal/privacy-policy.html" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              <a className="transition hover:text-white" href="/legal/risk-disclosure.html" target="_blank" rel="noreferrer">
                Risk Disclosure
              </a>
              <a className="transition hover:text-white" href="/legal/kyc-aml-policy.html" target="_blank" rel="noreferrer">
                KYC / AML Notice
              </a>
              <a className="transition hover:text-white" href="/legal/investor-eligibility.html" target="_blank" rel="noreferrer">
                Eligibility &amp; Availability
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-blue-100/60">
          <p>&copy; 2026 ZipAsset, a product of Zipbolt Innovations Pvt Ltd.</p>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-white" href="#top">
              Back to top
            </a>
            <a className="transition hover:text-white" href="#investordeck">
              Investor Deck
            </a>
            <a className="transition hover:text-white" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
