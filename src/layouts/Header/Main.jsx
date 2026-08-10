import Button from "./Button";
import Links from "./Links";
import Title from "./Title";

export default function Main() {
  return (
    <nav
      className={
        "h-16 w-full bg-[#000000]/80 backdrop-blur-md border-b border-[#3d0000] flex items-center justify-between px-6 z-50 fixed top-0 transition-all"
      }
    >
      <div className={"flex items-center gap-8"}>
        <Title />
        <Links />
      </div>
      <Button />
    </nav>
  );
}
