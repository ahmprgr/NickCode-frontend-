export default function TitleAndDescription() {
  return (
    <>
      <h1 className={"text-2xl md:text-3xl font-black text-white mb-4"}>
        مسیر مورد نظر در شبکه یافت نشد!
      </h1>

      <p
        className={
          "text-slate-400 max-w-md mx-auto text-sm leading-relaxed mb-10"
        }
      >
        صفحه‌ای که به دنبال آن هستید ممکن است حذف شده باشد، تغییر نام یافته باشد
        یا آدرس آن را به صورت اشتباه وارد کرده باشید.
      </p>
    </>
  );
}
