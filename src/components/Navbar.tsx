import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  "About",
  "Ecosystem",
  "Research",
  "Resources",
  "Events",
  "Case Studies",
  "Faculty",
  "Global Network",
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("About");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/DAIS-Final-Logo.png"
            alt="DAIS"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="group relative text-sm xl:text-[15px] font-medium text-slate-700 transition hover:text-[#19446a]"
            >
              {item}

              {/* Underline */}
              <span
                className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#19446a] transition-all duration-300 ${
                  active === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden lg:block">
          <button className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-[#19446a] hover:bg-[#19446a] hover:text-white hover:shadow-lg">
            Contact Advisor
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col p-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setMobileMenu(false);
                }}
                className={`rounded-lg px-4 py-3 text-left transition ${
                  active === item
                    ? "bg-cyan-50 font-semibold text-[#19446a]"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}

            <button className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#19446a] px-5 py-3 text-white">
              Contact Advisor
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
