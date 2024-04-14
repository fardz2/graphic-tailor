import { Card } from "./ui/card";

export default function Section2() {
  return (
    <section className="relative container mx-auto px-4 text-[#5B6AAB]">
      <div className="h-screen">
        <h1 className="text-center text-5xl">Our Services</h1>
        <center className="my-10">
          <div className=" h-1 w-[100px] bg-black rounded-md"></div>
        </center>
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <Card>
            <h3 className="text-3xl">Menjahit</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <h3 className="text-3xl">Membuat baju</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <h3 className="text-3xl">Membuat celana</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
