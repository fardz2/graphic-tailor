"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <section className="h-full  w-full" id="product">
      <div className=" container mx-auto md:px-24 ">
        <h1 className="text-center md:text-5xl text-4xl font-bold">
          Produk Kami
        </h1>
        <center>
          <p>Hasil produk yang telah kami buat</p>
        </center>

        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
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
    thumbnail: "/assets/image/sew.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "",
    thumbnail: "/assets/image/sew.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "",
    thumbnail: "/assets/image/sew.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/sew.jpg",
  },
  {
    id: 5,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/sew.jpg",
  },
  {
    id: 6,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/sew.jpg",
  },
  {
    id: 7,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/sew.jpg",
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/sew.jpg",
  },
  {
    id: 9,
    content: <SkeletonFour />,
    className: "",
    thumbnail: "/assets/image/sew.jpg",
  },
];
