
import Featured from "@/components/Featured";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main className="container">
      <Featured />
      <div className="flex gap-[50px]">
        <CardList page={page}/>
        {/* <Menu/> */}
      </div>
    </main>
  );
}
