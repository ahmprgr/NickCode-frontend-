export default function HeroSection() {
  return (
    <>
      <section class="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 border border-[#3d0000] bg-[#3d0000]/5 p-6 md:p-10 rounded-xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-32 h-32 bg-[#ff0000]/5 blur-3xl pointer-events-none"></div>
        <div class="lg:col-span-7 space-y-6 text-right z-10">
          <div class="inline-flex items-center space-x-reverse space-x-2 bg-[#ff0000]/10 border border-[#ff0000]/30 px-3 py-1 rounded text-xs text-[#ff0000] font-mono tracking-wider">
            <span class="w-1.5 h-1.5 rounded-full bg-[#ff0000] animate-pulse"></span>
            <span>CORE CORE v2.6 // ON-LINE</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-black tracking-wide text-white leading-tight">
            آکادمی برنامه‌نویسی <br />
            <span class="text-[#ff0000] cyber-text-glow">نیک کد</span>؛ نسل جدید
            توسعه وب
          </h1>
          <p class="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
            هنا صرفاً کد زدن یاد نمی‌گیرید؛ بلکه معماری سیستم، تفکر الگوریتمی و
            اصول مهندسی فرانت‌اند را در یک اتمسفر کاملاً تعاملی و ماژولار هک
            می‌کنید. وارد ترمینال شوید و یادگیری را استارت بزنید.
          </p>
          <div class="flex flex-wrap gap-4 pt-2">
            <a
              href="#catalog"
              class="px-6 py-3 bg-[#ff0000] hover:bg-[#950101] text-white font-bold text-sm rounded transition-all shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:cyber-glow-electric"
            >
              شروع رمزنویسی / دایرکتوری
            </a>
            <a
              href="#"
              class="px-6 py-3 border border-[#3d0000] hover:border-[#ff0000] hover:bg-[#3d0000]/20 text-slate-300 hover:text-white font-bold text-sm rounded transition-all"
            >
              محیط کامپایلر آنلاین
            </a>
          </div>
        </div>
        <div
          class="lg:col-span-5 border border-[#3d0000] bg-[#000000] rounded-xl overflow-hidden font-mono text-xs text-slate-400 h-64 shadow-2xl relative text-left"
          dir="ltr"
        >
          <div class="bg-[#1c1c1c]/50 border-b border-[#3d0000] px-4 py-2 flex items-center justify-between">
            <div class="flex space-x-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#ff0000]/30"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500/30"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/30"></span>
            </div>
            <span class="text-[10px] tracking-widest text-slate-500">
              NICKCODE_KERNEL // BASH
            </span>
          </div>
          <div class="p-4 space-y-2">
            <p class="text-slate-600">&gt; npm install nickcode-core</p>
            <p class="text-emerald-500">
              <span class="text-slate-500">✔</span> Loaded architectural modules
              [4/4]
            </p>
            <p class="text-slate-600">&gt; nickcode --status</p>
            <p class="text-[#ff0000]">Identity Matrix: NickCode Platform</p>
            <p class="text-slate-400">UI/UX Theme: Crimson Obsidian Dark</p>
            <p class="text-slate-400">
              Security Layer: Cyberpunk Standard v2.6
            </p>
            <p class="text-[#ff0000] animate-pulse mt-4">
              &gt; Ready for deployment_
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
