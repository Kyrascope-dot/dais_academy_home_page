// import { ArrowRight, Play } from "lucide-react";

// const faculty = [
//   {
//     name: "Dr. Sunil Rai",
//     title: "Vice Chancellor, UPES",
//     bio: "Distinguished academic leader with over four decades of experience spanning academia.",
//     image:
//       "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
//     accent: "blue",
//   },
//   {
//     name: "Dr. Sushma Vishnani",
//     title: "Director, Jaipuria Lucknow",
//     bio: "Seasoned finance academic and thought leader with over 20 years of expertise in accounting, research, and executive training.",
//     image:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
//     accent: "cyan",
//   },
//   {
//     name: "Dr. R. Singh",
//     title: "Head of Trauma Surgery",
//     bio: "Leading trauma reconstruction specialist with a research focus on complex fracture management.",
//     image:
//       "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
//     accent: "indigo",
//   },
//   {
//     name: "Dr. A. Fahmy",
//     title: "Consultant, Sports Medicine",
//     bio: "Specialist in arthroscopic and minimally invasive sports injury procedures for elite athletes.",
//     image:
//       "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
//     accent: "emerald",
//   },
// ];
// /* ============================================================ */

// const accentMap = {
//   blue: { corner: "border-t-blue-600", name: "text-blue-700" },
//   cyan: { corner: "border-t-cyan-600", name: "text-cyan-700" },
//   indigo: { corner: "border-t-indigo-600", name: "text-indigo-700" },
//   emerald: { corner: "border-t-emerald-600", name: "text-emerald-700" },
//   amber: { corner: "border-t-amber-600", name: "text-amber-700" },
//   rose: { corner: "border-t-rose-600", name: "text-rose-700" },
// };

// const webinars = [
//   {
//     title: "Tibia Nailing",
//     duration: "32 mins",
//     image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900",
//   },
//   {
//     title: "Pedicle Screw Placement",
//     duration: "46 mins",
//     image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900",
//   },
//   {
//     title: "Shoulder Arthroscopy",
//     duration: "38 mins",
//     image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900",
//   },
// ];

// export default function FacultyAndWebinars() {
//   return (
//     <section className="bg-slate-50 py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* ================= Faculty ================= */}

//         <div className="mb-20">
//           <div className="mb-14 text-center">
//             <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
//               Faculty
//             </span>

//             <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
//               Faculty Network
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
//               Learn directly from internationally recognized surgeons and
//               researchers across multiple orthopaedic specialties.
//             </p>
//           </div>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {faculty.map((doctor) => {
//               const accent = accentMap[doctor.accent] ?? accentMap.blue;
//               return (
//                 <div
//                   key={doctor.name}
//                   className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
//                 >
//                   {/* Portrait */}
//                   <div className="relative h-64 overflow-hidden bg-slate-100">
//                     <img
//                       src={doctor.image}
//                       alt={doctor.name}
//                       className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* Info card, overlapping the photo slightly */}
//                   <div className="relative -mt-6 mx-4 mb-4 rounded-xl bg-white p-5 shadow-md">
//                     {/* corner fold accent */}
//                     <div
//                       className={`absolute right-0 top-0 h-0 w-0 border-l-[22px] border-t-[22px] border-l-transparent ${accent.corner} rounded-tr-xl`}
//                     />

//                     <h3 className={`text-lg font-bold ${accent.name}`}>
//                       {doctor.name}
//                     </h3>

//                     <p className="mt-1 text-sm font-semibold text-slate-700">
//                       {doctor.title}
//                     </p>

//                     <div className="mt-2 h-px w-full bg-slate-200" />

//                     <p className="mt-3 text-sm leading-relaxed text-slate-500">
//                       {doctor.bio}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ================= Webinars ================= */}

//         <div>
//           <div className="mb-14 text-center">
//             <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
//               Learning
//             </span>

//             <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
//               Webinars On Demand
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
//               Watch expert-led surgical techniques and educational sessions
//               anytime.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {webinars.map((video) => (
//               <div
//                 key={video.title}
//                 className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <img
//                     src={video.image}
//                     alt={video.title}
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//                   <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-cyan-600 shadow-xl transition duration-300 group-hover:scale-110">
//                     <Play size={26} fill="currentColor" />
//                   </button>

//                   <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">
//                     {video.duration}
//                   </span>
//                 </div>

//                 <div className="p-7">
//                   <h3 className="text-2xl font-bold text-slate-900">
//                     {video.title}
//                   </h3>

//                   <button className="mt-6 flex items-center gap-2 font-semibold text-cyan-600 transition-all group-hover:gap-3">
//                     Watch Webinar
//                     <ArrowRight size={18} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight, Play, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import doctor1 from "../assets/doctor-men.jpg";
import doctor2 from "../assets/doctor-women.jpg";
import doctorLaptop from "../assets/doctor-laptop.jpg";
import heart from "../assets/heart.jpg";
import brain from "../assets/brain.jpg";

const faculty = [
  {
    name: "Dr. Sunil Rai",
    title: "Vice Chancellor, UPES",
    bio: "Distinguished academic leader with over four decades of experience spanning academia.",
    image: doctor1,
    accent: "blue",
  },
  {
    name: "Dr. Sushma Vishnani",
    title: "Director, Jaipuria Lucknow",
    bio: "Seasoned finance academic and thought leader with over 20 years of expertise in accounting, research, and executive training.",
    image: doctor2,
    accent: "cyan",
  },
  {
    name: "Dr. R. Singh",
    title: "Head of Trauma Surgery",
    bio: "Leading trauma reconstruction specialist with a research focus on complex fracture management.",
    image: doctor1,
    accent: "indigo",
  },
  {
    name: "Dr. A. Fahmy",
    title: "Consultant, Sports Medicine",
    bio: "Specialist in arthroscopic and minimally invasive sports injury procedures for elite athletes.",
    image: doctor2,
    accent: "emerald",
  },
];
/* ============================================================ */

const webinars = [
  {
    title: "Tibia Nailing",
    duration: "32 mins",
    image: doctorLaptop,
    video:
      "https://kyrascopemedia.com/dais/assets/research-and-innovation-n2F0sQFu.mp4",
  },
  {
    title: "Pedicle Screw Placement",
    duration: "46 mins",
    image: heart,
    video:
      "https://kyrascopemedia.com/dais/assets/research-and-innovation-n2F0sQFu.mp4",
  },
  {
    title: "Shoulder Arthroscopy",
    duration: "38 mins",
    image: brain,
    video:
      "https://kyrascopemedia.com/dais/assets/research-and-innovation-n2F0sQFu.mp4",
  },
];

export default function FacultyAndWebinars() {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    video: string;
  } | null>(null);

  const closeModal = useCallback(() => setActiveVideo(null), []);

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeVideo, closeModal]);

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* ================= Faculty ================= */}

        <div className="mb-12 md:mb-20">
          <div className="mb-8 md:mb-14 text-center">
            <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Faculty
            </span>

            <h2 className="mt-4 md:mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Faculty Network
            </h2>

            <p className="mx-auto mt-3 md:mt-5 max-w-2xl text-base md:text-lg text-slate-500">
              Learn directly from internationally recognized surgeons and
              researchers across multiple orthopaedic specialties.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((doctor) => {
              return (
                <div
                  key={doctor.name}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Portrait */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Info card, overlapping the photo slightly */}
                  <div className="relative -mt-6 mx-4 mb-4 rounded-xl bg-white p-5 shadow-md overflow-hidden">
                    {/* corner fold accent */}
                    <div className="absolute right-0 top-0 h-0 w-0 border-l-22 border-t-22 border-l-transparent border-[#19446a] rounded-tr-xl" />
                    {/* <div className="absolute -right-10 -bottom-10   rounded-full bg-[#19446a] h-20 w-20 transition-all duration-800" /> */}

                    <h3 className={`text-lg font-bold text-[#19446a]`}>
                      {doctor.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {doctor.title}
                    </p>

                    <div className="mt-2 h-px w-full bg-slate-200" />

                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {doctor.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= Webinars ================= */}

        <div>
          <div className="mb-8 md:mb-14 text-center">
            <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Learning
            </span>

            <h2 className="mt-4 md:mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Webinars On Demand
            </h2>

            <p className="mx-auto mt-3 md:mt-5 max-w-2xl text-base md:text-lg text-slate-500">
              Watch expert-led surgical techniques and educational sessions
              anytime.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {webinars.map((webinar) => (
              <div
                key={webinar.title}
                onClick={() =>
                  setActiveVideo({
                    title: webinar.title,
                    video: webinar.video,
                  })
                }
                className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#19446a] shadow-xl transition duration-300 group-hover:scale-110">
                    <Play size={26} fill="currentColor" />
                  </div>

                  <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">
                    {webinar.duration}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-lg font-bold text-slate-900">
                    {webinar.title}
                  </h3>

                  <span className="mt-6 flex items-center gap-2 font-semibold text-[#19446a] transition-all group-hover:gap-3">
                    Watch Webinar
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-[90vw] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 flex items-center gap-2 text-white/80 transition hover:text-white"
            >
              <span className="text-sm font-medium">Close</span>
              <X size={24} />
            </button>

            <h3 className="absolute -top-12 left-0 text-lg font-semibold text-white">
              {activeVideo.title}
            </h3>

            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
              <video
                src={activeVideo.video}
                controls
                autoPlay
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
