import { ChevronUp, Mail, MapPin, Phone } from "lucide-react";

const offices = [
  {
    country: "India",
    company: "Auxein Medical Pvt. Ltd.",
    address:
      "Plot No. 168-169-170, Phase-4, Kundli Industrial Area, HSIIDC, Sector-57, Sonipat – 131028, Haryana",
    phone: "+91 99106 43638",
    email: "info@auxein.com",
  },
  {
    country: "USA",
    company: "Auxein Inc.",
    address: "1500 NW 89th Court, Suite 107-108, Doral, Florida 33172",
    phone: "+1 (305) 395-6062",
    email: "usoffice@auxein.com",
  },
  {
    country: "Mexico",
    company: "Auxein Mexico S.A. de C.V.",
    address:
      "Tepic 139 Int 801, Colonia Roma Sur, Alcaldía Cuauhtémoc, CDMX 06760",
    phone: "+52 (55) 7261-0318",
    email: "info@auxein.mx",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#163E67] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[280px_1fr]">
          {/* Logo */}

          <div>
            <img src="/DAIS-Logo-white.png" alt="DAIS" className="w-48" />

            {/* <p className="mt-6 leading-7 text-slate-300">
              DAIS is dedicated to advancing orthopaedic education, research and
              innovation through a global network of surgeons and institutions.
            </p> */}
          </div>

          {/* Offices */}

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {offices.map((office) => (
              <div key={office.country}>
                <h3 className="mb-6 text-2xl font-bold">{office.country}</h3>

                <p className="font-semibold">{office.company}</p>

                <div className="mt-4 flex gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-cyan-400" />

                  <p className="leading-7 text-slate-300">{office.address}</p>
                </div>

                <div className="mt-5 flex gap-3">
                  <Phone size={18} className="shrink-0 text-cyan-400" />

                  <span className="text-slate-300">{office.phone}</span>
                </div>

                <div className="mt-4 flex gap-3">
                  <Mail size={18} className="shrink-0 text-cyan-400" />

                  <a
                    href={`mailto:${office.email}`}
                    className="text-cyan-400 hover:underline"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} DAIS Academy. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-xl bg-white p-3 text-slate-700 shadow-lg transition hover:bg-cyan-500 hover:text-white"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
