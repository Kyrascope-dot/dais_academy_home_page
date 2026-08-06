// import { ArrowRight, CalendarDays, Globe, Users } from "lucide-react";

// export default function CTASection() {
//   return (
//     <section className="relative overflow-hidden py-24">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700" />

//       {/* Decorative Blur */}
//       <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
//       <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         <div className="rounded-[36px] border border-white/20 bg-white/10 p-12 backdrop-blur-xl shadow-2xl">
//           {/* Heading */}
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
//               Join DAIS Academy
//             </span>

//             <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
//               Learn From The World's
//               <span className="block text-cyan-200">
//                 Leading Orthopaedic Surgeons
//               </span>
//             </h2>

//             <p className="mt-6 text-lg leading-8 text-cyan-50/90">
//               Register for workshops, connect with internationally recognized
//               faculty, and access world-class surgical education and research.
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="mt-14 flex flex-wrap justify-center gap-5">
//             <button className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
//               <CalendarDays size={20} />
//               Register Workshop
//               <ArrowRight className="transition-transform group-hover:translate-x-1" />
//             </button>

//             <button className="group flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900">
//               <Users size={20} />
//               Contact Faculty
//             </button>

//             <button className="group flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900">
//               <Globe size={20} />
//               Visit Auxein
//               <ArrowRight className="transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>

//           {/* Bottom Stats */}
//           <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/20 pt-10 md:grid-cols-4">
//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-white">40+</h3>
//               <p className="mt-2 text-cyan-100">Workshops</p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-white">2,000+</h3>
//               <p className="mt-2 text-cyan-100">Surgeons Trained</p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-white">30+</h3>
//               <p className="mt-2 text-cyan-100">Countries</p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-3xl font-bold text-white">120+</h3>
//               <p className="mt-2 text-cyan-100">Case Studies</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight, CalendarDays, Globe, Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-slate-50 ">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="px-5 py-10 md:px-12 md:py-16 lg:px-20 text-center">
          <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            About Dais
          </span>

          <h2 className="mx-auto mt-4 md:mt-6 max-w-4xl text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Division of Auxein Institute for Surgeons
          </h2>

          <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-slate-600">
            A non-profit research and education platform, developed in
            partnership with Auxein Medical, Built to give the surgical
            community open access to training and clinical evidence.
          </p>

          {/* CTA Buttons */}

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
            <button className="group flex items-center gap-2 md:gap-3 rounded-xl bg-[#19446a] px-5 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:bg-cyan-700">
              <CalendarDays size={18} />
              Register Workshop
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="group flex items-center gap-2 md:gap-3 rounded-xl border border-slate-300 bg-white px-5 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold text-slate-700 transition-all duration-300 hover:border-[#19446a] hover:text-[#19446a]">
              <Users size={18} />
              Contact Faculty
            </button>

            <button className="group flex items-center gap-2 md:gap-3 rounded-xl border border-slate-300 bg-white px-5 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold text-slate-700 transition-all duration-300 hover:border-[#19446a] hover:text-[#19446a]">
              <Globe size={18} />
              Visit Auxein
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
