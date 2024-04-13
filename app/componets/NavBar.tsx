import React from "react";

export default function NavBar() {
  return (
    <header className="hidden justify-between fixed top-0 right-0 left-0  p-4  md:flex">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex justify-between gap-9">
        <p>Home</p>
        <p>Join us</p>
        <p>our</p>
        <p>Contact us</p>
      </div>
    </header>
  );
}
