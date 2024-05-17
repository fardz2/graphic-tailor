import Image from "next/image";
import { FaGetPocket } from "react-icons/fa";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Fade } from "./animate/Fade";
export default function Main() {
  const words = [
    {
      text: "Buat",
    },
    {
      text: "Pakaian",
      className: "border-[#DEDEDE] border-b-4 ",
    },
    {
      text: "Impian",
    },
    {
      text: "Disini",
    },
  ];
  return (
    <main className="container mx-auto px-5 md:px-24 z-10" id="main">
      <div className="flex md:justify-between md:min-h-screen md:mt-0 mt-20 items-center flex-col lg:flex-row ">
        <div className="basis-1/2">
          <TypewriterEffect words={words} />
          <Fade initial={-10} animate={0} delay={0.8}>
            <p className="mt-5 text-[#21383E]">
              Bisa meminta permintaan yang kamu inginkan
            </p>
          </Fade>
        </div>
        <div className="basis-5/12">
          <div className="relative md:w-[400px]">
            <Fade initial={10} animate={0} delay={0.5}>
              <div className="overflow-hidden w-[200px]  md:w-[400px] rounded-full ">
                <Image
                  src={"/assets/image/sew.jpg"}
                  alt={""}
                  width={700}
                  height={700}
                />
              </div>
            </Fade>

            <div className="absolute top-5 right-[-50px]  ">
              <Fade initial={10} animate={0} delay={0.7}>
                <div className="overflow-hidden md:w-[200px] md:h-[200px] w-[80px] h-[80px] rounded-full p-10 flex justify-center items-center ">
                  {" "}
                  <Image
                    src={"/assets/image/sew2.jpg"}
                    alt={""}
                    fill
                    className="rounded-full"
                  />
                </div>
              </Fade>
            </div>

            <Fade initial={10} animate={0} delay={0.6}>
              <div className="absolute bottom-0 left-0 bg-white  flex flex-row  justify-center items-center md:p-5 p-2 gap-2 rounded-full drop-shadow-md">
                <div className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] bg-slate-700 rounded-full flex justify-center items-center">
                  <FaGetPocket color="white" />
                </div>
                <div>
                  <p className="text-xs">Buat pakaian mu</p>
                  <p className="text-xs">Dengan kami</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[-30px]">
        <Image
          src={"/assets/element/element1.png"}
          alt={""}
          width={100}
          height={100}
        />
      </div>
    </main>
  );
}
