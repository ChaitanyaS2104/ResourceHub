//To use react
"use client";
//Optimize image
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
//For authentication
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  //Get the logged in details
  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between mb-16 w-full pt-3 p-5">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/files.png"
          alt="ResourceHub logo"
          width={45}
          height={45}
          className="object-contain bg-[#facc15] rounded-full p-1"
        />
        <p className="logo_text">ResourceHub</p>
      </Link>
      {/* Desktop navigation */}
      <div className="md:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-resourceBook" className="black_btn">
              Create Resource Book
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image || "/assets/woman.png"}
                alt="profile image"
                width={45}
                height={45}
                className="object-contain bg-[#facc15] rounded-full p-1"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => 
                (<button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn m-2 mt-0 mb-0"
                >
                  Sign in
                </button>)
              )}
          </>
        )}
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image || "/assets/woman.png"}
              alt="profile image"
              width={45}
              height={45}
              className="object-contain bg-[#facc15] rounded-full p-1 mobile_menu"
              onClick={() => {
                setToggleDropdown((prevState) => !prevState);
              }}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  My Profile
                </Link>

                <Link
                  href="/create-resourceBook"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >
                  Create Resource
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => 
                (<button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign in
                </button>)
              )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
