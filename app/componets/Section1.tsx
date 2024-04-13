import Image from "next/image";
export default function Section1() {
  return (
    <section className="relative">
      <div className="flex justify-between   md:mt-0 mt-20 items-center text-[#5B6AAB]  flex-col-reverse md:flex-row">
        <div>
          <Image
            src={"/assets/image/gambar2.png"}
            alt={""}
            width={1200}
            height={1200}
          />
        </div>
        <div>
          <p>Lorem Ipsum</p>
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            eveniet veniam necessitatibus modi iure nostrum minus dolor officiis
            earum id impedit, ea eos omnis rem reiciendis, doloremque nulla hic
            provident?
          </p>
        </div>
      </div>

      <div className="absolute right-[-270px] top-[-150px]">
        <Image
          src={"/assets/element/element2.png"}
          alt={""}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
