import CertificateBoxItems from "./CertificateBoxItems"

export default function CertificateBox() {
  return (
    <div className={"lg:col-span-5 grid grid-cols-2 gap-4"}>
      <CertificateBoxItems />
      <CertificateBoxItems />
    </div>
  )
}
