"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { Fade } from "./animate/Fade";

export function LayoutGridDemo() {
  return (
    <section className=" md:py-20 py-10" id="product">
      <div className=" container mx-auto md:px-24  md:mt-0 mt-20 ">
        <Fade initial={-10} animate={0} delay={0.4}>
          <h1 className="text-center md:text-5xl text-4xl font-bold">
            Produk Kami
          </h1>
        </Fade>
        <Fade initial={-10} animate={0} delay={0.5}>
          <center>
            <p>Hasil produk yang telah kami buat</p>
          </center>
        </Fade>
        <Fade initial={-10} animate={0} delay={0.6}>
          <LayoutGrid cards={cards} />
        </Fade>
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  return <div></div>;
};

const SkeletonTwo = () => {
  return <div></div>;
};
const SkeletonThree = () => {
  return <div></div>;
};
const SkeletonFour = () => {
  return <div></div>;
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "",
    thumbnail: "/assets/image/1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "",
    thumbnail: "/assets/image/2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "",
    thumbnail: "/assets/image/3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/4.jpg",
  },
  {
    id: 5,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/5.jpg",
  },
  {
    id: 6,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/6.jpg",
  },
  {
    id: 7,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/7.jpg",
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/8.jpg",
  },
  {
    id: 9,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/9.jpg",
  },
];
