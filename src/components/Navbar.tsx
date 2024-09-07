"use client"

import Link from 'next/link';
 import { usePathname } from 'next/navigation'

// Define the type for a single link
interface LinkType {
  title: string;
  path: string;
}

export default function Navbar() {
  // Define links array with type LinkType[]
  const navLinks: LinkType[] = [
    
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Post",
      path: "/posts",
    },
    {
      title: "Your meals",
      path: "/meals",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];
const pathName = usePathname()
if(pathName.includes("dashboard"))
  return (
    <div className='bg-green-400'>
      <h1>dashboard layout _ Navbar</h1>
      <Link href="/">Back Home</Link>
    </div>
  )

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              
                <Link href={link.path} key={link.path}>
                  {link.title}
                </Link>
              
            ))}
          </ul>
        </div>
        <Link  href="/" className="btn btn-ghost text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

