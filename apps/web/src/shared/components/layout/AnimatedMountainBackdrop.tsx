export const AnimatedMountainBackdrop = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-0 mx-auto h-[430px] w-full max-w-md overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,214,142,0.46),transparent_24%),radial-gradient(circle_at_80%_16%,rgba(125,211,252,0.25),transparent_28%),linear-gradient(180deg,#dff3ef_0%,#f6eddd_68%,rgba(247,243,235,0)_100%)]" />

      <div className="absolute left-10 top-16 h-16 w-16 animate-sun-float rounded-full bg-[#f4b45f] opacity-80 blur-[0.5px]" />
      <div className="absolute left-8 top-16 h-20 w-20 animate-sun-pulse rounded-full bg-[#ffd893]/45 blur-xl" />

      <div className="absolute left-8 top-28 h-7 w-28 animate-cloud-drift rounded-full bg-white/55 blur-[1px]" />
      <div className="absolute right-2 top-38 h-8 w-24 animate-cloud-drift-slow rounded-full bg-white/48 blur-[1px]" />

      <svg className="absolute bottom-4 left-0 h-48 w-full opacity-95" viewBox="0 0 430 220" preserveAspectRatio="none" role="img">
        <path
          d="M0 170 L54 126 L108 150 L164 88 L220 146 L284 78 L340 138 L388 110 L430 150 L430 220 L0 220 Z"
          className="fill-[#243b30]"
        />
        <path
          d="M164 88 L181 119 L205 130 L184 132 Z M284 78 L302 111 L326 121 L302 124 Z M388 110 L398 128 L414 138 L398 137 Z"
          className="fill-[#fff8ea]/70"
        />
        <path
          d="M0 190 L72 158 L128 178 L188 138 L246 174 L310 128 L368 160 L430 138 L430 220 L0 220 Z"
          className="fill-[#4d6f5f]/75"
        />
        <path
          d="M0 208 L72 184 L126 198 L196 166 L260 198 L328 164 L382 188 L430 176 L430 220 L0 220 Z"
          className="fill-[#87a58f]/55"
        />
      </svg>
    </div>
  );
};
