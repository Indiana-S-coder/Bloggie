import Image from "next/image";
import Featured from "@/components/Featured";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="container">
      <Featured />
      <div className="flex gap-[50px]">
        <CardList/>
        <Menu/>
      </div>

    </main>
  );
}
