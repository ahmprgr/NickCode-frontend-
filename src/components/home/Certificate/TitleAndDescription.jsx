export default function TitleAndDescription() {
  return (
    <div className={"lg:col-span-7 space-y-4 text-right"}>
      <div
        className={
          "inline-block bg-[#ff0000]/10 border border-[#ff0000]/30 text-[#ff0000] text-xs px-3 py-1 rounded font-bold"
        }
      >
        تاییدیه رسمی و کیفی
      </div>
      <h2 className={"text-3xl font-black text-white"}>
        گواهی‌نامه هوشمند و قابل استعلام{" "}
        <span className={"text-[#ff0000]"}>NickCode</span>
      </h2>
      <p className={"text-slate-400 text-sm leading-relaxed max-w-2xl"}>
        پس از اتمام موفقیت‌آمیز هر ماژول آموزشی و ثبت و تایید پروژه‌های نهایی
        شما توسط تیم ادمین، یک گواهی‌نامه دیجیتال اختصاصی با کد هش رمزنگاری‌شده
        و قابل استعلام برای رزومه شما صادر خواهد شد.
      </p>
    </div>
  );
}
