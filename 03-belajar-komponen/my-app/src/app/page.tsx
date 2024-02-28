import Image from "next/image";
import Profile from "../components/profile";

export default function Home() {
  return (
<div>
  <h2 className="text-center font-bold">Ilmuwan yang luar biasa</h2>
  <div className="grid grid-cols-3 gap-8 justify-center">
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
    </div>
</div>


  );
}