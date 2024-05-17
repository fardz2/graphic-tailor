import Image from "next/image";
import { Fade } from "./animate/Fade";

export default function About() {
  return (
    <>
      <section className="bg-[#F5F8FE] md:py-20 py-5">
        <div className="relative container mx-auto px-5 md:px-24  ">
          <div className="flex  md:justify-between md:mt-0 mt-20  flex-col-reverse lg:flex-row gap-5 lg:items-start items-center">
            <div className="">
              <Fade initial={-10} animate={0} delay={0.4}>
                <div className="overflow-hidden w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-t-full">
                  <Image
                    src={"/assets/image/sew3.jpg"}
                    alt={""}
                    width={700}
                    height={700}
                  />
                </div>
              </Fade>
              <Fade initial={-10} animate={0} delay={0.5}>
                <div className="overflow-hidden w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-b-full lg:ml-[300px] ">
                  <Image
                    src={"/assets/image/sew4.jpg"}
                    alt={""}
                    width={700}
                    height={700}
                  />
                </div>
              </Fade>
            </div>
            <div className="flex flex-col gap-4 ">
              <Fade initial={-10} animate={0} delay={0.7}>
                {" "}
                <h2 className="md:text-5xl text-4xl font-bold ">
                  Tentang Kami
                </h2>
              </Fade>
              <Fade initial={-10} animate={0} delay={0.9}>
                {" "}
                <p>
                  Kami adalah penyedia jasa menjahit pakaian yang berlokasi di
                  Bandung, dikenal sebagai pusat mode dan tekstil Indonesia.
                  Dengan pengalaman bertahun-tahun dalam industri menjahit, kami
                  berkomitmen untuk memberikan hasil terbaik bagi setiap
                  pelanggan. <br />
                  <br />
                  kami percaya bahwa setiap pakaian memiliki cerita dan karakter
                  unik. Tim penjahit kami yang berpengalaman dan terampil siap
                  membantu Anda menciptakan pakaian yang tidak hanya sesuai
                  dengan kebutuhan, tetapi juga mencerminkan gaya dan
                  kepribadian Anda. Dari pakaian kasual sehari-hari hingga
                  busana formal, kami memastikan setiap jahitan rapi dan setiap
                  detail sempurna.
                </p>
              </Fade>
            </div>
          </div>
          {/* <div className="absolute right-[-300px] top-[-150px]">
            <Image
              src={"/assets/element/element2.png"}
              alt={""}
              width={500}
              height={500}
            />
          </div> */}
        </div>
      </section>
    </>
  );
}
