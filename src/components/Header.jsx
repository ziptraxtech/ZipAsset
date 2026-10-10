import { useEffect, useRef, useState } from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { isClerkEnabled } from "../config/clerk";
import BrandLogo from "./BrandLogo";

const navItems = [
  { label: "Segments", href: "#segments" },
  { label: "Franchise", href: "#franchise" },
  { label: "Investor Deck", href: "#investordeck" },
  { label: "Contact", href: "#contact" },
  { label: "About Us", href: "#aboutus" },
];

const chargerMenuLabels = {
  "charger-6kw-ac": "6 kW AC",
  "charger-12kw-ac": "12 kW AC",
  "charger-30kw": "30 kW Urban",
  "charger-60kw": "60 kW Retail",
  "charger-120kw": "120 kW Highway",
  "charger-180kw": "180 kW Travel",
  "charger-240kw": "240 kW Fleet",
};

function Header({ marketplaceSegments }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);
  const menuRef = useRef(null);
  const marketplaceRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMarketplaceOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
      if (marketplaceRef.current && !marketplaceRef.current.contains(e.target)) {
        setIsMarketplaceOpen(false);
      }
    };

    if (isMobileMenuOpen || isMarketplaceOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMarketplaceOpen, isMobileMenuOpen]);

  const handleNav = () => {
    setIsMobileMenuOpen(false);
    setIsMarketplaceOpen(false);
  };

  const desktopAuth = isClerkEnabled ? (
    <>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button type="button" className="secondary-button !px-5 !py-3">
            Login
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button type="button" className="primary-button !px-5 !py-3">
            Sign Up
          </button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <div className="rounded-full border border-white/12 bg-white/8 p-1">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "h-10 w-10",
              },
            }}
          />
        </div>
      </Show>
    </>
  ) : null;

  const mobileAuth = isClerkEnabled ? (
    <>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button
            type="button"
            onClick={handleNav}
            className="secondary-button !w-full !justify-center !px-5 !py-3"
          >
            Login
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button
            type="button"
            onClick={handleNav}
            className="primary-button !w-full !justify-center !px-5 !py-3"
          >
            Sign Up
          </button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <div className="flex justify-center pt-2">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "h-11 w-11",
              },
            }}
          />
        </div>
      </Show>
    </>
  ) : (
    <p className="text-center text-sm text-blue-100/70">
      Login will appear after Clerk is configured in production.
    </p>
  );

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[rgba(10,23,56,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,calc(100%-22px))] items-center justify-between gap-5 py-4 md:w-[min(1180px,calc(100%-32px))]">
        <a href="#top" className="flex min-w-0 items-center">
          <BrandLogo
            className="min-w-0"
            imgClassName="h-9 sm:h-10 md:h-11 drop-shadow-[0_10px_18px_rgba(34,211,238,0.14)]"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold tracking-[0.08em] text-blue-100/80 lg:flex">
          <a className="transition hover:text-white" href="#segments">Segments</a>

          <div ref={marketplaceRef} className="relative flex items-center gap-0.5">
            <span className="cursor-default">Marketplace</span>
            <button
              type="button"
              className={`inline-flex h-5 min-w-5 items-center justify-center rounded-sm text-blue-100 transition ${
                isMarketplaceOpen
                  ? "text-white"
                  : "hover:text-white"
              }`}
              aria-label="Open marketplace charger list"
              aria-expanded={isMarketplaceOpen}
              onClick={() => setIsMarketplaceOpen((prev) => !prev)}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`h-3.5 w-3.5 transition-transform ${isMarketplaceOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={`absolute left-0 top-full z-30 pt-3 transition duration-150 ${
                isMarketplaceOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div className="w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(2,8,23,0.22)]">
                <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Charger Opportunities
                  </div>
                </div>
                <div className="max-h-[360px] overflow-y-auto p-2">
                  {marketplaceSegments.map((segment) => (
                    <a
                      key={segment.id}
                      href={`#charger/${segment.id}`}
                      onClick={handleNav}
                      className="block rounded-xl px-3 py-3 transition hover:bg-slate-100"
                    >
                      <div className="text-sm font-semibold text-slate-900">
                        {chargerMenuLabels[segment.id] ?? segment.power}
                      </div>
                      <div className="mt-1 text-xs font-medium text-slate-500">
                        View opportunity
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <a key={item.label} className="transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {desktopAuth}
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-xl border border-white/12 bg-white/8 p-2.5 text-blue-100/80 transition hover:bg-white/12 hover:text-white lg:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-[min(1180px,calc(100%-22px))] border-t border-white/10 py-6 md:w-[min(1180px,calc(100%-32px))]">
          <nav className="flex flex-col gap-2">
            <a
              href="#segments"
              onClick={handleNav}
              className="rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.08em] text-blue-100/80 transition hover:bg-white/8 hover:text-white"
            >
              Segments
            </a>

            <div className="rounded-xl border border-white/10 bg-white/4 px-4 py-3">
              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-blue-100/80">
                <span className="text-white">Marketplace</span>
                <span className="inline-flex h-4 w-4 items-center justify-center text-blue-100">
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
                {marketplaceSegments.map((segment) => (
                  <a
                    key={segment.id}
                    href={`#charger/${segment.id}`}
                    onClick={handleNav}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-blue-100/70 transition hover:bg-white/8 hover:text-white"
                  >
                    {chargerMenuLabels[segment.id] ?? segment.power}
                  </a>
                ))}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNav}
                className="rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.08em] text-blue-100/80 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            {mobileAuth}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
