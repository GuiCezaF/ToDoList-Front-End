import Image from "next/image";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <div className=" bg-BlackAlternate text-white">
      <Tasks/>
    </div>
  );
}
