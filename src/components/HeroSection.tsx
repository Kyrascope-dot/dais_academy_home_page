import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    tryPlay();

    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("touchstart", tryPlay, { once: true });

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return (
    <section className="relative min-h-150 h-screen max-h-225 w-full overflow-hidden bg-slate-950">
      {/* Background Video */}

      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://kyrascopemedia.com/dais/assets/research-and-innovation-n2F0sQFu.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-cyan-950/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full justify-center px-6 mt-10 md:mt-20 ">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 backdrop-blur-md">
            <span className="text-xs font-semibold uppercase tracking-[4px] text-[#0db0d1]">
              an auxein initiative
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:text-5xl">
            The education and research institute for{" "}
            <span className="text-[#0db0d1]">Orthopaedic Surgeons</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300 text-sm md:text-lg md:leading-8">
            Advancing surgical training in trauma, splne and musculoskeletal
            care through research, workshops and clinical evidence.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <button className="group flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2 text-sm md:px-6 md:py-3 md:text-base text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              Explore Academy
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-xl border border-cyan-500/30 px-5 py-2 text-sm md:px-6 md:py-3 md:text-base text-white transition hover:bg-[#069bb9] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-slate-950 to-transparent" />
    </section>
  );
}
