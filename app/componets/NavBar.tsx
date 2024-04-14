import React from "react";

export default function NavBar() {
  return (
    <header className="container mx-auto px-4 ">
      <div className="justify-between fixed top-0 right-0 left-0  p-4 flex z-50 ">
        <div>
          <p>Logo</p>
        </div>
        <div className="flex justify-between gap-9">
          <p>Home</p>
          <p>Join us</p>
          <p>our</p>
          <p>Contact us</p>
        </div>
      </div>
    </header>
  );
}
