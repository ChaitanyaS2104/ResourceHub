//To use react 
"use client"
//Optimize image
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
//For authentication
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  return (
    <nav className="flex justify-between mb-16 items-center w-full pt-3">
      <Link href="/" className="flex gap-2 justify-center items-center">
        <div className="flex gap-2.5 items-center">
        <Image
          src="/assets/files.png"
          alt="ResourceHub logo"
          width={50}
          height={50}
          className="object-contain bg-[#facc15] rounded-full p-1"
        />
        <h1 className="font-bold text-2xl">ResourceHub</h1>
      </div>
      </Link>
    


    </nav>
  );
};

export default Navbar;
