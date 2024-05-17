import { GiClothes, GiLoincloth, GiTrousers } from "react-icons/gi";
import { Fade } from "./animate/Fade";
import { Card } from "./ui/card";
import { ReactElement } from "react";
interface Service {
  icon: ReactElement;
  title: string;
  deskripsi: string;
}
export default function Service() {
  const service: Service[] = [
    {
      icon: <GiLoincloth size={30} />,
      title: "Menjahit Pakaian",
      deskripsi:
        "Kami menghadirkan keahlian menjahit terbaik untuk menciptakan pakaian yang sempurna sesuai keinginan Anda. Setiap jahitan dipastikan rapi dan detail, mencerminkan dedikasi kami terhadap kualitas",
    },
    {
      icon: <GiTrousers size={30} />,
      title: "Membuat celana",
      deskripsi:
        " Ingin memiliki celana yang dirancang khusus sesuai gaya dan kebutuhan Anda? Layanan jahit kustom kami akan mewujudkannya! Mulai dari celana formal hingga kasual, kami akan memastikan setiap detail sesuai dengan keinginan Anda",
    },
    {
      icon: <GiClothes size={30} />,
      title: "Membuat Seragam",
      deskripsi:
        " Apakah Anda memerlukan seragam untuk perusahaan, sekolah, atau acara khusus? Kami menyediakan layanan jahit kustom untuk seragam yang elegan dan profesional, sesuai dengan kebutuhan Anda.",
    },
  ];
  return (
    <section className="py-[100px]" id="service">
      <div className="relative container mx-auto px-5 md:px-24   ">
        <div className="  flex flex-col justify-center  min-h-screen items-center">
          <Fade initial={-10} animate={0} delay={0.4}>
            <h1 className="text-center md:text-5xl text-4xl font-bold">
              Servis Kami
            </h1>
          </Fade>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
            {service.map((value, index) => (
              <Fade initial={-10} animate={0} delay={0.6} key={index}>
                <Card>
                  {value.icon}
                  <h3 className="md:text-xl text-lg font-bold">
                    {value.title}
                  </h3>
                  <p className="text-sm"> {value.deskripsi}</p>
                </Card>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
