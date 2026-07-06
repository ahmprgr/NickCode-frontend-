export default function Header() {
  return (
    <>
        <nav className={"h-16 w-full bg-[#000000]/80 backdrop-blur-md border-b border-[#3d0000] flex items-center justify-between px-6 z-50 fixed top-0 transition-all"}>
          <div className={"flex items-center gap-8"}>
            <span
              className={
                "text-2xl font-black text-[#ff0000] tracking-wider cyber-text-glow"
              }
            >
              NickCode | نیک کد
            </span>
            <div
              className={
                "hidden md:flex items-center gap-6 text-sm font-medium text-slate-400"
              }
            >
              <a
                href="#"
                className={"text-[#ff0000] border-b border-[#ff0000] pb-1"}
              >
                صفحه اصلی
              </a>
              <a
                href="courses.html"
                className={"hover:text-white transition-colors"}
              >
                دوره‌های آموزشی
              </a>
              <a href="#" className={"hover:text-white transition-colors"}>
                مقالات و مستندات
              </a>
              <a href="#" className={"hover:text-white transition-colors"}>
                درباره ما
              </a>
            </div>
          </div>
          <div>
            <a
              href="admin.html"
              className={
                "bg-[#3d0000]/40 text-white px-5 py-2 rounded border border-[#950101] hover:bg-[#950101] hover:border-[#ff0000] hover:cyber-glow transition-all duration-300 text-sm font-bold tracking-wide"
              }
            >
              ورود / پنل ادمین
            </a>
          </div>
        </nav>
    </>
  );
}
