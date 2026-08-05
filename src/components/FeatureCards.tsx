// import { Eye, Target, BadgeCheck } from "lucide-react";

// const features = [
//   {
//     icon: BadgeCheck,
//     title: "Experienced & Certified",
//     description:
//       "Research-based methodology across multiple surgical specialties.",
//     gradient: "from-cyan-500 to-blue-600",
//   },
//   {
//     icon: Target,
//     title: "Our Mission",
//     description:
//       "Building a strong community of healthcare professionals through innovation and education.",
//     gradient: "from-emerald-500 to-teal-600",
//   },
//   {
//     icon: Eye,
//     title: "Our Vision",
//     description:
//       "Delivering the best possible care for every patient across the world.",
//     gradient: "from-violet-500 to-indigo-600",
//   },
// ];

// export default function FeatureCards() {
//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="grid gap-8 md:grid-cols-3">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-cyan-300 hover:shadow-2xl"
//               >
//                 {/* Background Glow */}
//                 {/* <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" /> */}
//                 <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-500/50 transition-all duration-500 " />

//                 {/* Icon */}
//                 <div
//                   className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
//                 >
//                   <Icon size={30} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mb-4 text-2xl font-bold text-slate-900">
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="leading-7 text-slate-600">
//                   {feature.description}
//                 </p>

//                 {/* Bottom Line */}
//                 {/* <div className="mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" /> */}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Eye, Target, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Experienced & Certified",
    description:
      "Research-based methodology across multiple surgical specialties.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Building a strong community of healthcare professionals through innovation and education.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Delivering the best possible care for every patient across the world.",
    gradient: "from-violet-500 to-indigo-600",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-16 mt-52 lg:mt-40 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500  hover:border-[#19446a] hover:shadow-2xl"
              >
                {/* Background Glow */}
                {/* <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" /> */}
                {/* <div className="absolute -right-24 -bottom-24  group-hover:-right-10 group-hover:-bottom-10 h-40 w-40 rounded-full bg-[#19446a] transition-all duration-500 " /> */}
                <div className="absolute -right-130 -bottom-130  group-hover:-right-32 group-hover:-bottom-32 h-160 w-160 rounded-full bg-[#19446a] group-hover:bg-[#19446a]/5 transition-all duration-800" />

                {/* Icon */}
                <div
                  className={`mb-5 md:mb-8 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500`}
                >
                  <Icon size={24} className="md:hidden" />
                  <Icon size={30} className="hidden md:block" />
                </div>

                <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base leading-6 md:leading-7 text-slate-600">
                  {feature.description}
                </p>

                {/* Bottom Line */}
                {/* <div className="mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
