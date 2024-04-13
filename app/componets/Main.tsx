import Image from "next/image";
export default function Main() {
  return (
    <main className="container mx-auto px-4">
      <div className="flex justify-between h-screen md:mt-0 mt-20 items-center text-[#5B6AAB] flex-col md:flex-row">
        <div>
          <p className="md:text-8xl text-5xl">Selamat Datang</p>
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            eveniet veniam necessitatibus modi iure nostrum minus dolor officiis
            earum id impedit, ea eos omnis rem reiciendis, doloremque nulla hic
            provident?
          </p>
        </div>
        <div>
          <Image
            src={"/assets/image/gambar1.png"}
            alt={""}
            width={1200}
            height={1200}
          />
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
  );
}
