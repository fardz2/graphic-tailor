import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";
import { TypewriterEffect } from "./ui/typewriter-effect";

import { Fade } from "./animate/Fade";
export default function Main() {
  const words = [
    {
      text: "Selamat",
    },
    {
      text: "Datang",
    },
  ];
  return (
    <AuroraBackground>
      <main className="container mx-auto px-4 z-10">
        <div className="flex justify-between h-screen md:mt-0 mt-20 items-center flex-col md:flex-row text-[#5B6AAB]">
          <div>
            <TypewriterEffect words={words} className="text-[#5B6AAB]" />
            <Fade initial={-10} animate={0} delay={0.8}>
              <p className="font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat eveniet veniam necessitatibus modi iure nostrum minus
                dolor officiis earum id impedit, ea eos omnis rem reiciendis,
                doloremque nulla hic provident?
              </p>
            </Fade>
          </div>
          <div>
            <Fade initial={10} animate={0} delay={0.5}>
              {" "}
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
