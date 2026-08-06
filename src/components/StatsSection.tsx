// counter increasing effect
// import { useEffect, useRef, useState } from "react";

// interface Stat {
//   value: number;
//   suffix?: string;
//   label: string;
// }

// const stats: Stat[] = [
//   {
//     value: 40,
//     suffix: "+",
//     label: "Workshops held",
//   },
//   {
//     value: 2000,
//     suffix: "+",
//     label: "Surgeons trained",
//   },
//   {
//     value: 30,
//     suffix: "+",
//     label: "Countries reached",
//   },
//   {
//     value: 60,
//     suffix: "+",
//     label: "Faculty members",
//   },
//   {
//     value: 120,
//     suffix: "+",
//     label: "Case studies",
//   },
// ];

// function AnimatedCounter({
//   end,
//   duration = 2000,
// }: {
//   end: number;
//   duration?: number;
// }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTime: number | null = null;

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;

//       const progress = Math.min((timestamp - startTime) / duration, 1);

//       setCount(Math.floor(progress * end));

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [end, duration]);

//   return <>{count.toLocaleString()}</>;
// }

// export default function StatsSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [startAnimation, setStartAnimation] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStartAnimation(true);
//           observer.disconnect();
//         }
//       },
//       {
//         threshold: 0.4,
//       },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="bg-white py-20">
//       <div
//         ref={sectionRef}
//         className="mx-auto max-w-7xl border-y border-gray-200"
//       >
//         <div className="grid grid-cols-2 gap-y-10 py-8 md:grid-cols-5">
//           {stats.map((item) => (
//             <div
//               key={item.label}
//               className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
//             >
//               <h2 className="text-3xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-600 md:text-4xl">
//                 {startAnimation ? <AnimatedCounter end={item.value} /> : 0}
//                 {item.suffix}
//               </h2>

//               <p className="mt-2 text-center text-sm text-gray-500 md:text-base">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// marquee effect
// import { motion } from "framer-motion";

// interface Stat {
//   value: number;
//   suffix?: string;
//   label: string;
// }

// const stats: Stat[] = [
//   {
//     value: 40,
//     suffix: "+",
//     label: "Workshops Held",
//   },
//   {
//     value: 2000,
//     suffix: "+",
//     label: "Surgeons Trained",
//   },
//   {
//     value: 30,
//     suffix: "+",
//     label: "Countries Reached",
//   },
//   {
//     value: 60,
//     suffix: "+",
//     label: "Faculty Members",
//   },
//   {
//     value: 120,
//     suffix: "+",
//     label: "Case Studies",
//   },
// ];

// // Duplicate for seamless loop
// const marqueeStats = [...stats, ...stats];

// export default function StatsSection() {
//   return (
//     <section className="overflow-hidden border-y border-slate-200 bg-white py-8">
//       <motion.div
//         className="flex w-max gap-16"
//         animate={{
//           x: ["0%", "-50%"],
//         }}
//         transition={{
//           ease: "linear",
//           duration: 20,
//           repeat: Infinity,
//         }}
//       >
//         {marqueeStats.map((item, index) => (
//           <div key={index} className="flex min-w-[220px] flex-col items-center">
//             <h2 className="text-5xl font-bold text-cyan-600">
//               {item.value.toLocaleString()}
//               {item.suffix}
//             </h2>

//             <p className="mt-2 text-lg text-slate-600">{item.label}</p>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// const stats = [
//   {
//     value: "40+",
//     title: "Workshops Conducted",
//     description: "Hands-on orthopaedic workshops conducted globally.",
//   },
//   {
//     value: "2,000+",
//     title: "Surgeons Trained",
//     description: "Healthcare professionals trained through DAIS programs.",
//   },
//   {
//     value: "30+",
//     title: "Countries",
//     description: "Global network of surgeons and medical institutions.",
//   },
//   {
//     value: "120+",
//     title: "Clinical Case Studies",
//     description: "Evidence-based surgical research and publications.",
//   },
// ];

// export default function StatsBanner() {
//   return (
//     <section className="relative overflow-hidden py-12 md:py-16 lg:py-24">
//       {/* Background */}

//       <div className="relative mx-auto max-w-7xl px-6">
//         <div className="rounded-3xl border border-gray-300 bg-white">
//           <div className="grid grid-cols-2 lg:grid-cols-4">
//             {stats.map((item, index) => (
//               <div
//                 key={item.title}
//                 className={`group relative px-5 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 transition duration-500 hover:bg-cyan-500/10 ${
//                   index !== stats.length - 1
//                     ? " border-white/10  lg:border-r-4"
//                     : ""
//                 }`}
//               >
//                 <h2 className="text-2xl md:text-2xl lg:text-4xl xl:text-6xl font-extrabold tracking-tight text-[#19446a] transition group-hover:scale-105">
//                   {item.value}
//                 </h2>

//                 <h3 className="mt-3 md:mt-4 lg:mt-6 text-base md:text-lg lg:text-xl font-semibold">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2 md:mt-3 text-sm md:text-base leading-6 md:leading-7 text-slate-500">
//                   {item.description}
//                 </p>

//                 {/* Bottom Line */}

//                 {/* <div className="mt-8 h-1 w-14 rounded-full bg-cyan-500 transition-all duration-500 group-hover:w-24" /> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const stats = [
  {
    value: "40+",
    title: "Workshops Held",
  },
  {
    value: "2,000+",
    title: "Surgeons Trained",
  },
  {
    value: "30+",
    title: "Countries Reached",
  },
  {
    value: "60+",
    title: "Faculty Members",
  },
  {
    value: "120+",
    title: "Case Studies",
  },
];

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-24">
      {/* Background */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-300 bg-white">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {stats.map((item, index) => (
              <div
                key={item.title}
                className="group relative px-3 py-3 transition duration-500 md:px-6 md:py-10 lg:px-8 lg:py-12"
              >
                {/* Vertical divider — mobile: between col 1 & 2, desktop: between all */}
                {index % 2 !== 0 && (
                  <div className="absolute left-0 top-1/2 h-3/4 w-px -translate-y-1/2 bg-slate-200 lg:hidden" />
                )}
                {index !== stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-48 w-px -translate-y-1/2 bg-slate-300 lg:block" />
                )}
                {/* Horizontal divider — mobile only: between rows */}
                {index < stats.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-slate-200 lg:hidden" />
                )}

                <h2 className="text-center md:text-left text-xl font-extrabold tracking-tight text-[#19446a] transition group-hover:scale-105 md:text-2xl lg:text-4xl xl:text-5xl">
                  {item.value}
                </h2>

                <h3 className="text-center md:text-left mt-0.5 text-xs font-semibold leading-4 md:mt-2 md:text-lg md:leading-normal lg:mt-4 lg:text-[16px]">
                  {item.title}
                </h3>

                {/* <p className="text-center md:text-left mt-0.5 text-[11px] leading-4 text-slate-500 md:mt-3 md:text-base md:leading-7">
                  {item.description}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
