import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="text-black bg-yellow-400 p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <MdOutlineClose /> : <HiOutlineMenuAlt1 />}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static
        ${open ? "top-12" : "-top-60"}
        bg-yellow-400 px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
