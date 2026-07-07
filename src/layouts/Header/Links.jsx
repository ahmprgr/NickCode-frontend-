export default function Links() {
  return (
    <div
      className={
        "hidden md:flex items-center gap-6 text-sm font-medium text-slate-400"
      }
    >
      <a href="#" className={"text-[#ff0000] border-b border-[#ff0000] pb-1"}>
        صفحه اصلی
      </a>
      <a href="courses.html" className={"hover:text-white transition-colors"}>
        دوره‌های آموزشی
      </a>
      <a href="#" className={"hover:text-white transition-colors"}>
        مقالات و مستندات
      </a>
      <a href="#" className={"hover:text-white transition-colors"}>
        درباره ما
      </a>
    </div>
  );
}
