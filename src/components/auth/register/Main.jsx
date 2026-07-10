import Badge from "./Badge";
import Form from "./Form/Main";
import Heading from "./Heading";
import IsAlreadyRegistred from "./IsAlreadyRejistered";
export default function Main() {
  return (
    <>
      <main
        className={
          "flex-grow flex items-center justify-center pt-24 mt-2 pb-12 px-4"
        }
      >
        <div
          className={
            "w-full max-w-md bg-[#000000] border-2 border-[#3d0000] rounded-lg p-8 shadow-[0_0_30px_rgba(61,0,0,0.3)] relative"
          }
        >
          <Badge />
          <Heading />
          <Form />
          <IsAlreadyRegistred />
        </div>
      </main>
    </>
  );
}
