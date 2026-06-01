import { Compass, Mountain } from "lucide-react";

export const SplashScreen = () => {
  return (
    <main className="mx-auto grid h-screen max-h-screen w-full max-w-md place-items-center overflow-hidden bg-[#071513] px-8 text-white shadow-2xl shadow-teal-950/20">
      <section className="relative grid w-full place-items-center">
        <div className="absolute h-72 w-72 rounded-full border border-[#2fbea4]/20" />
        <div className="absolute h-52 w-52 rounded-full bg-[#2fbea4]/10 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="grid h-24 w-24 place-items-center rounded-[2rem] bg-[#2fbea4] shadow-[0_28px_70px_rgba(47,190,164,0.35)]">
            <Compass size={42} strokeWidth={2.4} />
          </div>
          <h1 className="mt-7 text-4xl font-black tracking-[-0.07em]">Altura</h1>
          <p className="mt-2 text-sm font-semibold tracking-wide text-white/55">Outdoor companion system</p>
        </div>

        <svg className="absolute -bottom-44 h-72 w-[460px] opacity-60" viewBox="0 0 460 220" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 150 L66 96 L110 128 L174 68 L236 138 L304 58 L370 130 L460 90 L460 220 L0 220 Z" fill="rgba(47,190,164,0.28)" />
          <path d="M0 178 L84 132 L158 158 L228 112 L312 158 L396 128 L460 148 L460 220 L0 220 Z" fill="rgba(47,190,164,0.38)" />
        </svg>

        <div className="absolute -bottom-24 flex items-center gap-2 text-[#73e0cc]">
          <Mountain size={17} />
          <span className="text-xs font-black uppercase tracking-[0.28em]">Preparing route</span>
        </div>
      </section>
    </main>
  );
};
