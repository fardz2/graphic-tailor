import NavBar from "@/app/componets/NavBar";
import Main from "@/app/componets/Main";
import Section1 from "@/app/componets/Section1";
import Section2 from "@/app/componets/Section2";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <Section1 />
      <Section2 />
    </>
  );
}
