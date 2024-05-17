"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Fade } from "./animate/Fade";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import { Link } from "react-scroll";

export default function NavBar() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      scrollTop > 0 ? setScrolling(true) : setScrolling(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[100]",
          scrolling ? "bg-white shadow-sm" : "",
          show ? "shadow-none" : ""
        )}
      >
        <div className="flex items-center p-4 transition container mx-auto px-5 md:px-24 justify-between z-50 ">
          <div>
            <Image
              src={"/assets/image/logo.png"}
              alt={""}
              width={100}
              height={100}
            />
          </div>
          <div className="hidden md:flex justify-between gap-9 ">
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Product</p>
          </div>
          <div className="block md:hidden">
            <Hamburger toggled={show} toggle={setShow} />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-3 z-[90] bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Fade initial={10} animate={0} delay={0.2}>
              <Link
                href={"/"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <p className={cn(pathname == "/" ? "text-[#FEBD17]" : "")}>
                  Home
                </p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.3}>
              <Link
                href={"/about"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <p className={cn(pathname == "/about" ? "text-[#FEBD17]" : "")}>
                  About
                </p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.4}>
              <p>Service</p>
            </Fade>
            <Fade initial={10} animate={0} delay={0.5}>
              <p>Product</p>
            </Fade>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
