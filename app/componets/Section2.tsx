import { Fade } from "./animate/Fade";
import { Card } from "./ui/card";

export default function Section2() {
  return (
    <section className="relative container mx-auto px-4 text-[#5B6AAB]">
      <div className="  my-32 flex flex-col justify-center">
        <Fade initial={-10} animate={0} delay={0.4}>
          <h1 className="text-center md:text-5xl text-4xl font-bold">
            Servis Kami
          </h1>
        </Fade>

        <center className="my-10">
          <div className=" h-1 w-[100px] bg-black rounded-md"></div>
        </center>

        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <Fade initial={-10} animate={0} delay={0.6}>
            <Card>
              <h3 className="md:text-3xl text-2xl">Menjahit Pakaian</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Fade>
          <Fade initial={10} animate={0} delay={0.7}>
            <Card>
              <h3 className="md:text-3xl text-2xl">Permak Pakaian</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Fade>
          <Fade initial={-10} animate={0} delay={0.8}>
            <Card>
              <h3 className="md:text-3xl text-2xl">Membuat celana</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Fade>
        </div>
      </div>
    </section>
  );
}
