import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <section className=" bg-[#1C1C1C] text-white" id="service">
      <div className="relative container mx-auto md:p-10 p-5 md:px-24   ">
        <div className="  flex md:flex-row flex-col justify-between gap-2 ">
          <div>
            <p className="font-bold">Graphic Tailor</p>
          </div>
          <div>
            <p className="">Lokasi Kami</p>

            <Link
              href={"https://maps.app.goo.gl/WAAjd9EoqX4Y8qxf9"}
              target="_blank"
            >
              <p className="hover:underline">
                Jl. Raya Bojongsoang Raya No.243,
                <br /> Lengkong, Kec. Bojongsoang, Kabupaten Bandung, Jawa Barat
                40287
              </p>
            </Link>
          </div>
          <div>
            <p>Kontak Kami</p>

            <Link href={"https://wa.me/085210687756"} target="_blank">
              {" "}
              <div className="flex mdjustify-center justify-start items-center gap-2 hover:underline">
                <FaWhatsapp />
                <p>Whatsapp</p>
              </div>
            </Link>
          </div>
        </div>
        <center className="mt-7">
          <h2> &copy; 2024, Graphic tailor</h2>
        </center>
      </div>
    </section>
  );
}
