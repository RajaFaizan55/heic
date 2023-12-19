import React from "react";
import imgIcon from "../../assets/imgIcon.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-header_bg px-20 py-2 flex items-center">
      <Image src={imgIcon} />
      <span className="ml-4 text-white">HEIC in JPG konvertieren</span>
    </div>
  );
};

export default NavBar;
