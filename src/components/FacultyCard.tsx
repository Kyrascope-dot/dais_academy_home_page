import { ArrowUpRight, Stethoscope } from "lucide-react";

interface FacultyCardProps {
  image: string;
  name: string;
  designation: string;
  speciality: string;
  description: string;
}

export default function FacultyCard({
  image,
  name,
  designation,
  speciality,
  description,
}: FacultyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[34px] bg-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-slate-100" />

      {/* Doctor Image */}

      <div className="relative flex h-72 items-end justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full object-contain transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Info Card */}

      <div className="relative -mt-8 mx-6 mb-6 rounded-[28px] bg-white p-7 shadow-xl">
        {/* Blue Corner */}

        <div className="absolute right-0 top-0 h-12 w-12 overflow-hidden rounded-bl-3xl rounded-tr-[28px] bg-cyan-600" />

        {/* Name */}

        <h3 className="pr-10 text-3xl font-bold text-slate-900">{name}</h3>

        {/* Designation */}

        <p className="mt-2 font-medium text-cyan-700">{designation}</p>

        {/* Specialty */}

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
          <Stethoscope size={15} />

          {speciality}
        </div>

        <div className="my-6 h-px bg-slate-200" />

        {/* Description */}

        <p className="line-clamp-4 leading-8 text-slate-600">{description}</p>

        {/* Buttons */}

        <div className="mt-8 flex gap-3">
          <button className="flex-1 rounded-xl bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700">
            View Profile
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition hover:border-cyan-600 hover:bg-cyan-50">
            {/* <Linkedin size={18} /> */}
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition hover:border-cyan-600 hover:bg-cyan-50">
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
