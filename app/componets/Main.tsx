import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Fade } from "./animate/Fade";
export default function Main() {
  const words = [
    {
      text: "Buat",
    },
    {
      text: "Pakaian",
      className: "text-[#8D72E1] ",
    },
    {
      text: "Impian",
    },
    {
      text: "Disini",
    },
  ];
  return (
    <AuroraBackground>
      <main className="container mx-auto px-4 z-10">
        <div className="flex md:justify-between md:h-screen md:mt-0 mt-20 items-center flex-col md:flex-row text-[#5B6AAB]">
          <div className="basis-1/2">
            <TypewriterEffect words={words} className="text-[#5B6AAB]" />
            <Fade initial={-10} animate={0} delay={0.8}>
              <p className="mt-5">Bisa meminta permintaan yang kamu inginkan</p>
            </Fade>
          </div>
          <div className="basis-5/12">
            <Fade initial={10} animate={0} delay={0.5}>
              <Image
                src={"/assets/image/gambar1.png"}
                alt={""}
                width={1200}
                height={1200}
              />
            </Fade>
          </div>
        </div>
        <div className="absolute top-[70px] left-[-30px]">
          <Image
            src={"/assets/element/element1.png"}
            alt={""}
            width={100}
            height={100}
          />
        </div>
      </main>
    </AuroraBackground>
  );
}
