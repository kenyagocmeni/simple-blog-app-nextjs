import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center h-16 bg-blue-300 rounded-md">
      <nav>
        <Link href="/">
          <p className="text-lg font-bold mx-5 font-mono">📝 Blog Uygulaması</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
//
