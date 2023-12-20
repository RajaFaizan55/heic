"use client"
import Image from "next/image";
import React from "react";

import imgIcon from "../../assets/imgIcon.png";
import fbIcon from "../../assets/fbIcon.png";
import instaIcon from "../../assets/instaIcon.png";
import twiterIcon from "../../assets/twiterIcon.png";

const Footer = () => {
  return (
    <div className="bg-header_bg px-20 py-2 flex items-center justify-between text-white  w-full">
      <div className="flex items-center">
        <Image src={imgIcon} alt="img icon" />
        <span className="ml-4">HEIC in JPG konvertieren</span>
      </div>

      <span className="text-xs"> © 2020 Lift Media. All rights reserved. </span>
      <div className="flex items-center">
        <Image src={fbIcon} width={50} alt="fb icon" />
        <Image src={instaIcon} width={50} alt="insta icon" />
        <Image src={twiterIcon} width={50} alt="twiter icon" />
      </div>
    </div>
  );
};

export default Footer;
