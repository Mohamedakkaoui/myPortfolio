"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "Testimonials", path: "/Testimonials" },
  { name: "contact", path: "/contact" },
];
function Nav() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <nav className="flex gap-8">
        {Links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } capitalize font-meduim hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export default Nav;
