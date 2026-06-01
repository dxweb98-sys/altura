export const AnimatedMountainBackdrop = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[360px] w-full max-w-md overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(251,191,36,0.34),transparent_26%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.22),transparent_28%),linear-gradient(180deg,#eff6ff_0%,#f8fafc_72%,rgba(248,250,252,0)_100%)]" />

      <div className="absolute left-8 top-14 h-20 w-20 animate-sun-float rounded-full bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200 opacity-90 blur-[1px]" />
      <div className="absolute left-14 top-16 h-16 w-16 animate-sun-pulse rounded-full bg-amber-100/80 blur-xl" />

      <div className="absolute left-6 top-24 h-10 w-28 animate-cloud-drift rounded-full bg-white/75 blur-[1px]" />
      <div className="absolute left-20 top-20 h-8 w-20 animate-cloud-drift rounded-full bg-white/60 blur-[1px] [animation-delay:1.5s]" />
      <div className="absolute right-4 top-32 h-8 w-24 animate-cloud-drift-slow rounded-full bg-white/70 blur-[1px]" />

      <svg className="absolute bottom-0 left-0 h-52 w-full" viewBox="0 0 430 220" preserveAspectRatio="none" role="img">
        <path
          d="M0 164 L54 112 L96 138 L156 70 L214 132 L274 54 L333 126 L386 92 L430 142 L430 220 L0 220 Z"
          className="fill-slate-900/95"
        />
        <path
          d="M56 113 L77 126 L96 138 L78 132 Z M156 70 L175 107 L196 114 L176 117 Z M274 54 L292 95 L318 105 L292 108 Z M386 92 L399 114 L415 123 L399 121 Z"
          className="fill-white/70"
        />
        <path
          d="M0 184 L60 150 L116 171 L174 126 L235 169 L294 118 L350 154 L430 126 L430 220 L0 220 Z"
          className="fill-slate-700/70"
        />
        <path
          d="M0 204 L68 178 L124 194 L190 160 L247 194 L318 152 L380 178 L430 164 L430 220 L0 220 Z"
          className="fill-slate-500/50"
        />
      </svg>
    </div>
  );
};
