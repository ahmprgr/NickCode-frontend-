export default function Agreement() {
  return (
    <div className={"flex items-center gap-2 pt-2"}>
      <input
        type="checkbox"
        id="terms"
        className={
          "w-4 h-4 rounded bg-[#000000] border-[#3d0000] text-[#ff0000] focus:ring-0 focus:ring-offset-0 accent-[#950101]"
        }
      />
      <label
        for="terms"
        className={"text-xs text-slate-400 cursor-pointer select-none"}
      >
        قوانین و ضوابط فنی حریم خصوصی پلتفرم را می‌پذیرم.
      </label>
    </div>
  );
}
