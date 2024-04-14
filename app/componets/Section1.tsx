import Image from "next/image";
import { Fade } from "./animate/Fade";
export default function Section1() {
  return (
    <>
      <section className="relative container mx-auto px-4">
        <div className="flex my-32 md:justify-between  md:mt-0 mt-20 items-center flex-col-reverse md:flex-row">
          <div>
            <Fade initial={-10} animate={0} delay={0.4}>
              <Image
                src={"/assets/image/gambar2.png"}
                alt={""}
                width={1200}
                height={1200}
              />
            </Fade>
          </div>
          <div className="flex flex-col gap-4 text-[#5B6AAB]">
            <Fade initial={-10} animate={0} delay={0.7}>
              {" "}
              <h2 className="text-5xl font-bold ">Tentang Kami</h2>
            </Fade>
            <Fade initial={-10} animate={0} delay={0.9}>
              {" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat eveniet veniam necessitatibus modi iure nostrum minus
                dolor officiis earum id impedit, ea eos omnis rem reiciendis,
                doloremque nulla hic provident?
              </p>
            </Fade>
          </div>
        </div>
        <div className="absolute right-[-300px] top-[-150px]">
          <Image
            src={"/assets/element/element2.png"}
            alt={""}
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
}
