// import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

// const events = [
//   {
//     date: "Jul 10-11",
//     location: "Frankfurt",
//     title: "Knee and shoulder arthroscopy workshop",
//   },
//   {
//     date: "Sep",
//     location: "Online",
//     title: "Nailing techniques masterclass",
//   },
//   {
//     date: "Oct",
//     location: "Prague",
//     title: "Trauma and deformity correction",
//   },
// ];

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

// export default function EventsAndResearch() {
//   return (
//     <section className="bg-slate-50 py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* ================= Events ================= */}

//         <div className="mb-16 flex flex-col items-center">
//           {/* <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
//             DAIS Academy
//           </span> */}

//           <div className="w-full flex flex-col justify-start">
//             <h1 className="w-full text-left text-4xl font-bold text-slate-900 md:text-5xl ">
//               Events & Research
//             </h1>
//             <div className="text-left mt-4 h-1 w-105 rounded-full bg-[#19446a] transition-all duration-500" />
//           </div>

//           {/* <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500"></div> */}
//         </div>

//         <div className="mb-24 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {events.map((event) => (
//             <div
//               key={event.title}
//               className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500  hover:border-[#19446a] hover:shadow-2xl"
//             >
//               {/* Top Accent */}

//               {/* <div className="absolute left-0 top-0 h-1 w-16 rounded-r-full bg-[#19446a] transition-all duration-500 group-hover:w-full" /> */}

//               {/* Header */}

//               <div className="mb-7 flex items-center justify-between">
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2 text-sm text-slate-500">
//                     <CalendarDays size={15} />

//                     <span>{event.date}</span>
//                   </div>

//                   <div className="flex items-center gap-2 text-sm text-slate-500">
//                     <MapPin size={15} />

//                     <span>{event.location}</span>
//                   </div>
//                 </div>

//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#19446a] transition-all duration-500 group-hover:bg-[#19446a] group-hover:text-white">
//                   <CalendarDays size={26} />
//                 </div>
//               </div>

//               {/* Title */}

//               <h3 className="text-2xl font-bold leading-snug text-slate-900">
//                 {event.title}
//               </h3>

//               {/* Footer */}

//               <div className="mt-10 flex items-center justify-between">
//                 <span className="text-sm font-medium text-[#19446a]">
//                   Medical Workshop
//                 </span>

//                 <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-all group-hover:text-[#19446a]">
//                   Learn More
//                   <ArrowRight
//                     size={17}
//                     className="transition-transform duration-300 group-hover:translate-x-2"
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ================= Research ================= */}

//         <div className="mb-14 text-center">
//           <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#19446a]">
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
//               className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-[#19446a] hover:bg-[#19446a] hover:text-white"
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
//               className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#19446a] hover:shadow-xl"
//             >
//               {/* Accent */}

//               <div className="absolute left-0 top-0 h-1 w-16 bg-[#19446a] transition-all duration-500 group-hover:w-full" />

//               {/* Category */}

//               <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#19446a]">
//                 {study.category}
//               </span>

//               {/* Title */}

//               <h3 className="mt-6 text-2xl font-bold leading-snug text-slate-900">
//                 {study.title}
//               </h3>

//               {/* Footer */}

//               <div className="mt-10 flex items-center justify-between">
//                 <span className="text-sm text-slate-500">Research Article</span>

//                 <button className="flex items-center gap-2 font-semibold text-[#19446a] transition-all group-hover:gap-3">
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

// import {
//   ArrowRight,
//   CalendarDays,
//   ChevronLeft,
//   ChevronRight,
//   MapPin,
// } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { useRef, useState } from "react";
// import type { Swiper as SwiperType } from "swiper";

// import julyImg from "../assets/events_images/july-image.png";
// import augustImg from "../assets/events_images/august-image.png";
// import septemberImage from "../assets/events_images/september-image.png";
// import octoberImage from "../assets/events_images/october-image.png";
// import novemberImage from "../assets/events_images/november-image.png";
// import decemberImage from "../assets/events_images/december-image.png";

// const events = [
//   {
//     date: "10-11 July",
//     location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
//     title: "Knee & shoulder arthroscopy workshop",
//     image: julyImg,
//   },
//   {
//     date: "27-28 August",
//     location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
//     title: "Nailing and foot & ankle, trauma specimen course",
//     image: augustImg,
//   },
//   {
//     date: "24-25 September",
//     location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
//     title: "Knee + HTO & shoulder arthroscopy workshop",
//     image: septemberImage,
//   },
//   {
//     date: "26-27 October",
//     location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
//     title: "Nailing and foot & ankle, trauma specimen course",
//     image: octoberImage,
//   },
//   {
//     date: "20-21 November",
//     location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
//     title: "Knee & shoulder arthroscopy workshop",
//     image: novemberImage,
//   },
//   {
//     date: "11-12 December",
//     location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
//     title: "Knee + HTO & shoulder arthroscopy workshop",
//     image: decemberImage,
//   },
// ];

// const categories = ["All", "Trauma", "Spine", "Sports Medicine", "3D Printing"];

// const studies = [
//   {
//     category: "Spine",
//     title: "3.5mm Wise-Lock compression plate technique",
//     image:
//       "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
//   },
//   {
//     category: "Trauma",
//     title: "Patient-specific 3D printed implant",
//     image:
//       "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop",
//   },
//   {
//     category: "Sports Medicine",
//     title: "Arthroscopic repair outcomes",
//     image:
//       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
//   },
//   {
//     category: "3D Printing",
//     title: "Personalized surgical guides for osteotomy",
//     image:
//       "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop",
//   },
//   {
//     category: "Trauma",
//     title: "Minimally invasive plate osteosynthesis",
//     image:
//       "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
//   },
//   {
//     category: "Spine",
//     title: "Pedicle screw navigation accuracy",
//     image:
//       "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
//   },
// ];

// export default function EventsAndResearch() {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredStudies =
//     activeCategory === "All"
//       ? studies
//       : studies.filter((s) => s.category === activeCategory);

//   return (
//     <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
//       <div className="mx-auto max-w-7xl px-4 md:px-6">
//         {/* ================= Events ================= */}

//         <div className="mb-8 md:mb-14 flex items-end justify-between">
//           <div>
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
//               Events & Research
//             </h1>
//             <div className="mt-3 md:mt-4 h-1 w-16 md:w-20 rounded-full bg-[#19446a]" />
//           </div>

//           <div className="flex gap-2">
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#19446a] hover:text-[#19446a]"
//             >
//               <ChevronLeft size={18} />
//             </button>
//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#19446a] hover:text-[#19446a]"
//             >
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </div>

//         <div className="mb-12 md:mb-24">
//           <Swiper
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             modules={[Navigation, Autoplay]}
//             spaceBetween={24}
//             slidesPerView={1}
//             loop={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {events.map((event, index) => (
//               <SwiperSlide key={index}>
//                 <div className="group relative flex h-85 flex-col overflow-hidden rounded-3xl  cursor-pointer border border-zinc-300 p-5">
//                   {/* <div className="rounded-2xl border"> */}
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="h-48 w-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-2xl"
//                   />
//                   {/* </div> */}

//                   <div className="flex flex-1 flex-col justify-between">
//                     <div>
//                       <h3 className="mt-2 line-clamp-2 text-lg font-bold ">
//                         {event.title}
//                       </h3>
//                       <div className="flex flex-col items-start gap-1 text-sm ">
//                         <span className="flex items-center gap-1.5 font-semibold text-zinc-500">
//                           <CalendarDays size={14} />
//                           {event.date}
//                         </span>
//                         <span className="flex items-start justify-start gap-1.5  text-zinc-500 text-sm">
//                           <MapPin size={14} />
//                           {event.location}
//                         </span>
//                       </div>
//                     </div>
//                     {/* <div>
//                       <ArrowRight
//                         size={22}
//                         className="text-[#19446a] transition-transform duration-300 group-hover:translate-x-2"
//                       />
//                     </div> */}
//                   </div>
//                   <div className="absolute -right-125 -bottom-125  group-hover:-right-32 group-hover:-bottom-32 h-160 w-160 rounded-full bg-[#19446a] group-hover:bg-[#19446a]/5 transition-all duration-800" />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* ================= Research ================= */}

//         <div className="mb-6 md:mb-10 flex flex-wrap items-start justify-between gap-4 md:gap-6">
//           <div>
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
//               Case Study Library
//             </h1>
//             <div className="mt-3 md:mt-4 h-1 w-16 md:w-20 rounded-full bg-[#19446a]" />
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setActiveCategory(item)}
//                 className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
//                   activeCategory === item
//                     ? "border-[#19446a] bg-[#19446a] text-white"
//                     : "border-slate-200 bg-white text-slate-600 hover:border-[#19446a] hover:text-[#19446a]"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {filteredStudies.map((study, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-[#19446a]"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={study.image}
//                   alt={study.title}
//                   className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <div className="p-6">
//                 <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#19446a]">
//                   {study.category}
//                 </span>
//                 <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">
//                   {study.title}
//                 </h3>
//                 <div className="mt-4 flex items-center justify-start">
//                   {/* <span className="text-sm text-slate-500">
//                     Research Article
//                   </span> */}
//                   <button className="flex items-center gap-1.5 text-sm font-semibold text-[#19446a] transition-all group-hover:gap-3">
//                     Read More
//                     <ArrowRight size={16} />
//                   </button>
//                 </div>
//               </div>
//               <div className="absolute -right-125 -bottom-125  group-hover:-right-32 group-hover:-bottom-32 h-160 w-160 rounded-full bg-[#19446a] group-hover:bg-[#19446a]/5 transition-all duration-800" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useCallback, useEffect } from "react";

import julyImg from "../assets/events_images/july-image.png";
import augustImg from "../assets/events_images/august-image.png";
import septemberImage from "../assets/events_images/september-image.png";
import octoberImage from "../assets/events_images/october-image.png";
import novemberImage from "../assets/events_images/november-image.png";
import decemberImage from "../assets/events_images/december-image.png";

import brain from "../assets/brain.jpg";
import doctorOperation from "../assets/doctor-operation.jpg";
import doctorLaptop from "../assets/doctor-laptop.jpg";
import heart from "../assets/heart.jpg";
import bone from "../assets/bone.jpg";

const events = [
  {
    date: "10-11 July",
    location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
    title: "Knee & shoulder arthroscopy workshop",
    image: julyImg,
  },
  {
    date: "27-28 August",
    location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
    title: "Nailing and foot & ankle, trauma specimen course",
    image: augustImg,
  },
  {
    date: "24-25 September",
    location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
    title: "Knee + HTO & shoulder arthroscopy workshop",
    image: septemberImage,
  },
  {
    date: "26-27 October",
    location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
    title: "Nailing and foot & ankle, trauma specimen course",
    image: octoberImage,
  },
  {
    date: "20-21 November",
    location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
    title: "Knee & shoulder arthroscopy workshop",
    image: novemberImage,
  },
  {
    date: "11-12 December",
    location: "NANO Medical GmbH, Wasserweg 11, 64521, GroB-Gerau, Germany",
    title: "Knee + HTO & shoulder arthroscopy workshop",
    image: decemberImage,
  },
];

const categories = ["All", "Trauma", "Spine", "Sports Medicine", "3D Printing"];

const studies = [
  {
    category: "Spine",
    title: "3.5mm Wise-Lock compression plate technique",
    image: brain,
  },
  {
    category: "Trauma",
    title: "Patient-specific 3D printed implant",
    image: doctorOperation,
  },
  {
    category: "Sports Medicine",
    title: "Arthroscopic repair outcomes",
    image: doctorLaptop,
  },
  {
    category: "3D Printing",
    title: "Personalized surgical guides for osteotomy",
    image: heart,
  },
  {
    category: "Trauma",
    title: "Minimally invasive plate osteosynthesis",
    image: bone,
  },
  {
    category: "Spine",
    title: "Pedicle screw navigation accuracy",
    image: doctorOperation,
  },
];

function useDotButtons(emblaApi: ReturnType<typeof useEmblaCarousel>[1]) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return { selectedIndex, scrollSnaps, onDotClick };
}

export default function EventsAndResearch() {
  const [eventsRef, eventsApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );
  const [studiesRef, studiesApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies =
    activeCategory === "All"
      ? studies
      : studies.filter((s) => s.category === activeCategory);

  const eventsDots = useDotButtons(eventsApi);
  const studiesDots = useDotButtons(studiesApi);

  useEffect(() => {
    if (studiesApi) studiesApi.reInit();
  }, [filteredStudies, studiesApi]);

  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* ================= Events ================= */}

        <div className="mb-8 md:mb-14 flex items-end justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Events & Research
            </h1>
            <div className="mt-3 md:mt-4 h-1 w-16 md:w-20 rounded-full bg-[#19446a]" />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => eventsApi?.scrollPrev()}
              className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#19446a] hover:text-[#19446a]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => eventsApi?.scrollNext()}
              className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-[#19446a] hover:text-[#19446a]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mb-12 md:mb-24">
          <div className="overflow-hidden" ref={eventsRef}>
            <div className="flex gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.5%]"
                >
                  <div className="group relative flex h-85 flex-col overflow-hidden rounded-3xl cursor-pointer border border-zinc-300 p-5">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-26.75 w-full object-contain rounded-2xl"
                    />

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="mt-2 line-clamp-2 text-lg font-bold">
                          {event.title}
                        </h3>
                        <div className="flex flex-col items-start gap-1 text-sm">
                          <span className="flex items-center gap-1.5 font-semibold text-zinc-500">
                            <CalendarDays size={14} />
                            {event.date}
                          </span>
                          <span className="flex items-start justify-start gap-1.5 text-zinc-500 text-sm">
                            <MapPin size={14} />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#19446a] scale-100 group-hover:scale-[3] group-hover:bg-[#19446a]/5 transition-all duration-700 ease-out will-change-transform" /> */}

                    <div className="absolute -right-130 -bottom-130  group-hover:-right-32 group-hover:-bottom-32 h-160 w-160 rounded-full bg-[#19446a] group-hover:bg-[#19446a]/5 transition-all duration-800" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {eventsDots.scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => eventsDots.onDotClick(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === eventsDots.selectedIndex
                    ? "bg-[#19446a]"
                    : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= Research ================= */}

        <div className="mb-6 md:mb-10 flex flex-wrap items-start justify-between gap-4 md:gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Case Study Library
            </h1>
            <div className="mt-3 md:mt-4 h-1 w-16 md:w-20 rounded-full bg-[#19446a]" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === item
                    ? "border-[#19446a] bg-[#19446a] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#19446a] hover:text-[#19446a]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden" ref={studiesRef}>
          <div className="flex gap-6">
            {filteredStudies.map((study, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.5%]"
              >
                <div className="group relative h-96 overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-[#19446a]">
                  <div className="overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#19446a]">
                      {study.category}
                    </span>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">
                      {study.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-start">
                      <button className="flex items-center gap-1.5 text-sm font-semibold text-[#19446a] transition-all group-hover:gap-3 absolute left-6 bottom-6">
                        Read More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                  {/* <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#19446a] scale-100 group-hover:scale-[3] group-hover:bg-[#19446a]/5 transition-all duration-700 ease-out will-change-transform" /> */}
                  <div className="absolute -right-130 -bottom-130  group-hover:-right-32 group-hover:-bottom-32 h-160 w-160 rounded-full bg-[#19446a] group-hover:bg-[#19446a]/5 transition-all duration-800" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {studiesDots.scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => studiesDots.onDotClick(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === studiesDots.selectedIndex
                  ? "bg-[#19446a]"
                  : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
