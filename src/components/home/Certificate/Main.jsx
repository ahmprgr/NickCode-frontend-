import CertificateBox from "./CertificateBox";
import TitleAndDescription from "./TitleAndDescription";

export default function Main() {
  return (
    <section className={"w-full mt-24 pt-4 space-y-16 mb-24"}>
      <div className={"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"}>
        <TitleAndDescription />
        <CertificateBox />
      </div>
    </section>
  );
}
