import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/employee/create">Create</Link>
    </nav>
  );
};

export default Navbar;
