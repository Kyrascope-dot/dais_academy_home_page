// import { Eye, Target, BadgeCheck } from "lucide-react";

// const features = [
//   {
//     icon: BadgeCheck,
//     title: "Experienced & Certified",
//     description: "Research-based methodology across multiple specialties.",
//   },
//   {
//     icon: Target,
//     title: "Our Mission",
//     description: "A strong community of healthcare professionals.",
//   },
//   {
//     icon: Eye,
//     title: "Our Vision",
//     description: "The best care for every patient, everywhere.",
//   },
// ];

// export default function FeatureCards() {
//   return (
//     <section className="bg-white py-16">
//       <div className="mx-auto max-w-7xl px-4 md:px-6">
//         <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-3xl p-8"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(25,68,106,0.95) 0%, rgba(25,68,106,0.85) 50%, rgba(25,68,106,0.75) 100%)",
//                   backdropFilter: "blur(12px)",
//                   boxShadow:
//                     "0 8px 32px rgba(25,68,106,0.3), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.1)",
//                   border: "1px solid rgba(255,255,255,0.12)",
//                 }}
//               >
//                 {/* Glass shine highlight */}
//                 <div
//                   className="absolute top-0 left-0 h-full w-1/2 pointer-events-none"
//                   style={{
//                     background:
//                       "linear-gradient(120deg, rgba(255,255,255,0.1) 0%, transparent 60%)",
//                   }}
//                 />

//                 <div className="relative z-10">
//                   <div className="mb-5 md:mb-8 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm border border-white/10">
//                     <Icon size={24} className="md:hidden" />
//                     <Icon size={30} className="hidden md:block" />
//                   </div>

//                   <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-bold text-white">
//                     {feature.title}
//                   </h3>

//                   <p className="text-sm md:text-base leading-6 md:leading-7 text-slate-200">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { Eye, Target, BadgeCheck } from "lucide-react";

// const features = [
//   {
//     icon: BadgeCheck,
//     title: "Experienced & Certified",
//     description: "Research-based methodology across multiple specialties.",
//   },
//   {
//     icon: Target,
//     title: "Our Mission",
//     description: "A strong community of healthcare professionals.",
//   },
//   {
//     icon: Eye,
//     title: "Our Vision",
//     description: "The best care for every patient, everywhere.",
//   },
// ];

// export default function FloatingGlassCards() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//         {features.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={index}
//               className="group relative rounded-[30px] overflow-hidden bg-gradient-to-br from-[#3b668d] via-[#2d5b82] to-[#23486b] p-8 transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02]"
//               style={{
//                 boxShadow:
//                   "0 30px 60px rgba(21,55,82,.30), inset 0 1px 0 rgba(255,255,255,.15)",
//               }}
//             >
//               <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/20 to-transparent" />

//               <div className="absolute left-10 right-10 -bottom-6 h-10 rounded-full bg-black/25 blur-3xl group-hover:scale-110 transition" />

//               <div className="relative z-10">
//                 <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-white/25 to-white/5 shadow-xl backdrop-blur">
//                   <Icon size={30} className="text-white" />
//                 </div>

//                 <h3 className="text-3xl font-bold text-white drop-shadow mb-4">
//                   {item.title}
//                 </h3>

//                 <p className="text-slate-200 leading-7">{item.description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// import { Eye, Target, BadgeCheck } from "lucide-react";

// const features = [
//   {
//     icon: BadgeCheck,
//     title: "Experienced & Certified",
//     description: "Research-based methodology across multiple specialties.",
//   },
//   {
//     icon: Target,
//     title: "Our Mission",
//     description: "A strong community of healthcare professionals.",
//   },
//   {
//     icon: Eye,
//     title: "Our Vision",
//     description: "The best care for every patient, everywhere.",
//   },
// ];

// export default function LayeredCards() {
//   return (
//     <section className="bg-gray-50 py-10">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
//         {features.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <div key={index} className="relative group h-full">
//               {/* Shadow Layers */}
//               <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-[#163b5d]/20"></div>

//               <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[#24537d]/35"></div>

//               {/* Main Card */}
//               <div className="relative flex h-full min-h-[320px] flex-col rounded-3xl bg-gradient-to-br from-[#3f6c93] to-[#23496c] p-8 transition-all duration-500 group-hover:-translate-y-3">
//                 {/* Icon */}
//                 <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
//                   <Icon className="text-white" size={30} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="min-h-[72px] text-4xl font-bold leading-tight text-white">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-4 text-lg leading-8 text-slate-200">
//                   {item.description}
//                 </p>

//                 {/* Optional Bottom Space */}
//                 <div className="mt-auto pt-8">
//                   <div className="h-1 w-16 rounded-full bg-white/20"></div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { Eye, Target, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Experienced & Certified",
    description: "Research-based methodology across multiple specialties.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description: "A strong community of healthcare professionals.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "The best care for every patient, everywhere.",
  },
];

export default function NeumorphismCards() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-3xl bg-[#356287] p-8 transition-all duration-500 hover:-translate-y-3"
              style={{
                boxShadow:
                  "18px 18px 40px rgba(18,48,73,.25), -8px -8px 18px rgba(255,255,255,.08)",
              }}
            >
              <div
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#43739b]"
                style={{
                  boxShadow:
                    "8px 8px 20px rgba(0,0,0,.25), -5px -5px 15px rgba(255,255,255,.08)",
                }}
              >
                <Icon className="text-white" size={30} />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-slate-200 leading-7">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
