"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Fade } from "./animate/Fade";
export default function NavBar() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

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
    <header className="container mx-auto px-4 text-[#5B6AAB] font-bold">
      <div
        className={cn(
          "justify-between fixed top-0 right-0 left-0 items-center p-4 flex z-50 transition",
          scrolling ? "bg-white shadow-sm" : "",
          show ? "shadow-none" : ""
        )}
      >
        <div>
          <p>Logo</p>
        </div>
        <div className="hidden md:flex justify-between gap-9 ">
          <p className="text-[#FEBD17]">Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Product</p>
        </div>
        <div className="block md:hidden">
          <Hamburger
            onToggle={() => {
              setShow(!show);
            }}
          />
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-3 z-40 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Fade initial={10} animate={0} delay={0.2}>
              <p className="text-[#FEBD17]">Home</p>
            </Fade>
            <Fade initial={10} animate={0} delay={0.3}>
              <p>About</p>
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
    </header>
  );
}
