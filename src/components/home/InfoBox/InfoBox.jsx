import InfoBoxItems from "./InfoBoxItems";

export default function InfoBox() {
  return (
    <section class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
      <InfoBoxItems />
      <InfoBoxItems />
      <InfoBoxItems />
      <InfoBoxItems />
    </section>
  );
}
