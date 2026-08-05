// import { ArrowRight } from "lucide-react";

// const categories = ["Trauma", "Spine", "Sports Medicine", "3D Printing"];

// const studies = [
//   {
//     category: "Spine",
//     title: "3.5mm Wise-Lock compression plate technique",
//   },
//   {
//     category: "Trauma",
//     title: "Patient-specific 3D printed implant",
//   },
//   {
//     category: "Sports Medicine",
//     title: "Arthroscopic repair outcomes",
//   },
// ];

// export default function ResearchSection() {
//   return (
//     <section className="bg-slate-50 py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Heading */}

//         <div className="mb-14 text-center">
//           <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
//             Research
//           </span>

//           <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
//             Case Study Library
//           </h2>

//           <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
//             Explore research, innovations, and clinical outcomes developed
//             alongside universities and healthcare institutions worldwide.
//           </p>
//         </div>

//         {/* Filter Pills */}

//         <div className="mb-12 flex flex-wrap justify-center gap-4">
//           {categories.map((item) => (
//             <button
//               key={item}
//               className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Cards */}

//         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {studies.map((study) => (
//             <div
//               key={study.title}
//               className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
//             >
//               {/* Accent */}

//               <div className="absolute left-0 top-0 h-1 w-16 bg-cyan-500 transition-all duration-500 group-hover:w-full" />

//               {/* Category */}

//               <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600">
//                 {study.category}
//               </span>

//               {/* Title */}

//               <h3 className="mt-6 text-2xl font-bold leading-snug text-slate-900">
//                 {study.title}
//               </h3>

//               {/* Footer */}

//               <div className="mt-10 flex items-center justify-between">
//                 <span className="text-sm text-slate-500">Research Article</span>

//                 <button className="flex items-center gap-2 font-semibold text-cyan-600 transition-all group-hover:gap-3">
//                   Read More
//                   <ArrowRight size={18} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    date: "Jul 10-11",
    location: "Frankfurt",
    title: "Knee and shoulder arthroscopy workshop",
  },
  {
    date: "Sep",
    location: "Online",
    title: "Nailing techniques masterclass",
  },
  {
    date: "Oct",
    location: "Prague",
    title: "Trauma and deformity correction",
  },
];

const categories = ["Trauma", "Spine", "Sports Medicine", "3D Printing"];

const studies = [
  {
    category: "Spine",
    title: "3.5mm Wise-Lock compression plate technique",
  },
  {
    category: "Trauma",
    title: "Patient-specific 3D printed implant",
  },
  {
    category: "Sports Medicine",
    title: "Arthroscopic repair outcomes",
  },
];

export default function EventsAndResearch() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= Events ================= */}

        <div className="mb-16 flex flex-col items-center">
          <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            DAIS Academy
          </span>

          <h1 className="text-center text-4xl font-bold text-slate-900 md:text-5xl">
            Events &<span className="text-cyan-600"> Research</span>
          </h1>

          <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500"></div>

          <p className="mt-6 max-w-3xl text-center text-lg text-slate-500">
            Join our workshops, conferences, and research initiatives to stay at
            the forefront of modern surgical education.
          </p>
        </div>

        <div className="mb-24 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              {/* Top Accent */}

              <div className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-cyan-500 transition-all duration-500 group-hover:w-full" />

              {/* Header */}

              <div className="mb-7 flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={15} />

                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={15} />

                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-500 group-hover:rotate-12 group-hover:bg-cyan-500 group-hover:text-white">
                  <CalendarDays size={26} />
                </div>
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold leading-snug text-slate-900">
                {event.title}
              </h3>

              {/* Footer */}

              <div className="mt-10 flex items-center justify-between">
                <span className="text-sm font-medium text-cyan-600">
                  Medical Workshop
                </span>

                <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-all group-hover:text-cyan-600">
                  Learn More
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Research ================= */}

        <div className="mb-14 text-center">
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            Research
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Case Study Library
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Explore research, innovations, and clinical outcomes developed
            alongside universities and healthcare institutions worldwide.
          </p>
        </div>

        {/* Filter Pills */}

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((item) => (
            <button
              key={item}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <div
              key={study.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
            >
              {/* Accent */}

              <div className="absolute left-0 top-0 h-1 w-16 bg-cyan-500 transition-all duration-500 group-hover:w-full" />

              {/* Category */}

              <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600">
                {study.category}
              </span>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold leading-snug text-slate-900">
                {study.title}
              </h3>

              {/* Footer */}

              <div className="mt-10 flex items-center justify-between">
                <span className="text-sm text-slate-500">Research Article</span>

                <button className="flex items-center gap-2 font-semibold text-cyan-600 transition-all group-hover:gap-3">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
