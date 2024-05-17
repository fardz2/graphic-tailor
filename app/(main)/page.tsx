import Main from "../componets/Main";
import NavBar from "../componets/NavBar";
import About from "../componets/About";
import Service from "../componets/Service";
import { LayoutGridDemo } from "../componets/Product";
import Footer from "../componets/Footer";

export default function Page() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Service />
      <LayoutGridDemo />
      <Footer />
    </>
  );
}
