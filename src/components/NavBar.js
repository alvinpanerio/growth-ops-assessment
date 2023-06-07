import { useState } from "react";

import logo from "../assets/logo.png";
import ham from "../assets/ham.svg";

function NavBar() {
  const [openList, setOpenList] = useState(false);

  return (
    <div className="w-full bg-[--red] flex justify-center">
      <div className="max-w-[1366px] w-[1366px] text-[--white] flex gap-36 justify-start items-center px-8 py-5 max-lg:justify-between">
        <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
        <button onClick={() => setOpenList(!openList)}>
          <img src={ham} alt="ham" className="max-lg:block hidden" />
        </button>
        <ul className="flex gap-12 items-center max-lg:hidden">
          <li className="w-[65px] uppercase roboto">Our Products</li>
          <li className="w-[65px] uppercase roboto">About Us</li>
          <li className="w-[65px] uppercase roboto">Live Better</li>
          <li className="w-[65px] uppercase roboto">Claims & Support</li>
          <li className="w-[65px] uppercase roboto">My Account</li>
        </ul>
      </div>
      {openList ? (
        <ul className="flex flex-col gap-5 items-center text-[--white] w-full absolute bg-[--red] top-[90px] py-5 lg:hidden">
          <li>Our Products</li>
          <li>About Us</li>
          <li>Live Better</li>
          <li>Claims & Support</li>
          <li>My Account</li>
        </ul>
      ) : null}
    </div>
  );
}

export default NavBar;
