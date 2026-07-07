export default function LinkListItem() {
  return (
    <li>
      <a
        href="#"
        className={
          "flex items-center space-x-reverse space-x-2 text-slate-500 hover:text-[#ff0000] transition-colors duration-200 group"
        }
      >
        <span
          className={
            "text-[#950101] group-hover:text-[#ff0000] transition-colors"
          }
        >
          &gt;
        </span>
        <span>// دایرکتوری_دوره‌ها</span>
      </a>
    </li>
  );
}
