import Content from "./Content";
import Head from "./Head";

export default function Main() {
  return (
    <div
      class="lg:col-span-5 border border-[#3d0000] bg-[#000000] rounded-xl overflow-hidden font-mono text-xs text-slate-400 h-64 shadow-2xl relative text-left"
      dir="ltr"
    >
      <Head />
      <Content />
    </div>
  );
}
