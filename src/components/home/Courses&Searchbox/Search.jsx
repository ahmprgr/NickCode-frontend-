export default function Search() {
  return (
    <div id="catalog" className={"w-full text-center mb-16 scroll-mt-24"}>
      <h2 className={"text-3xl font-black text-white mb-4"}>
        کاتالوگ متمرکز دوره‌ها
      </h2>
      <p className={"text-slate-500 text-xs md:text-sm max-w-xl mx-auto mb-8"}>
        عبارت مورد نظر خود را فیلتر کنید یا ماژول برنامه نویسی مد نظرتان را برای
        ورود انتخاب کنید.
      </p>

      <div className={"relative max-w-2xl mx-auto w-full"}>
        <input
          type="text"
          placeholder="جستجو در بین دوره‌ها و مباحث آموزشی."
          className={"w-full bg-[#000000] text-white text-sm rounded-full py-4 pr-12 pl-6 border-2 border-[#ff0000] focus:outline-none focus:ring-0 cyber-glow-electric transition-all duration-300 placeholder-slate-600 text-right"}
        />
        <div className={"absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none"}>
          <svg
            className={"h-5 w-5 text-[#ff0000]"}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
