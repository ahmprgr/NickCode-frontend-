import Description from "./elements/Description";
import Profile from "./elements/Profile";
import Title from "./elements/Title";

export default function CertificateBoxItems() {
  return (
    <div
      className={
        "bg-[#3d0000]/5 border-2 border-[#3d0000] p-6 rounded-xl text-center group hover:border-[#ff0000]/50 hover:bg-[#3d0000]/10 hover:cyber-glow transition-all duration-300"
      }
    >
      <Profile />
      <Title />
      <Description />
    </div>
  );
}
