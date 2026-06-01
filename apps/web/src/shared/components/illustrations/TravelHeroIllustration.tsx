export const TravelHeroIllustration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2.4rem]" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#dff8ef] via-[#c8f0df] to-[#75b96d]" />
      <div className="absolute left-10 top-10 h-16 w-16 rounded-full bg-[#ffd15c] shadow-[0_0_44px_rgba(255,209,92,0.65)]" />
      <div className="absolute left-4 top-24 h-8 w-24 rounded-full bg-white/40 blur-sm" />
      <div className="absolute right-8 top-20 h-7 w-20 rounded-full bg-white/35 blur-sm" />

      <svg className="absolute bottom-0 left-0 h-[74%] w-full" viewBox="0 0 360 360" preserveAspectRatio="none">
        <path d="M0 160 L54 92 L96 132 L148 64 L205 140 L268 72 L360 154 L360 360 L0 360 Z" fill="#b7dcc0" />
        <path d="M0 206 L64 148 L116 176 L178 116 L242 180 L306 126 L360 166 L360 360 L0 360 Z" fill="#5aa565" />
        <path d="M0 244 L70 202 L138 228 L214 174 L294 220 L360 190 L360 360 L0 360 Z" fill="#2d6f3e" />
        <path d="M0 288 L76 250 L134 270 L210 230 L282 264 L360 238 L360 360 L0 360 Z" fill="#124328" />
        <path d="M70 110 L96 132 L82 126 Z M148 64 L166 103 L184 112 L164 114 Z M268 72 L288 112 L306 122 L286 124 Z" fill="#effaf2" opacity="0.75" />
      </svg>

      <div className="absolute bottom-[92px] right-[58px] h-32 w-[74px] origin-bottom -rotate-6 rounded-t-full bg-[#113d28] shadow-2xl shadow-emerald-950/20">
        <div className="absolute -right-7 top-10 h-20 w-12 rounded-[1.4rem] bg-[#7da642]" />
        <div className="absolute -right-3 top-1 h-10 w-9 rounded-full bg-[#f5c38d]" />
        <div className="absolute right-5 top-1 h-7 w-11 -rotate-12 rounded-full bg-[#173522]" />
        <div className="absolute -left-3 top-10 h-24 w-5 -rotate-12 rounded-full bg-[#25533a]" />
        <div className="absolute left-4 top-28 h-20 w-5 rounded-full bg-[#12351f]" />
        <div className="absolute right-4 top-28 h-20 w-5 rounded-full bg-[#12351f]" />
      </div>
    </div>
  );
};
