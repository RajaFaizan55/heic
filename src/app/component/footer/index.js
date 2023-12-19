import Image from "next/image";
import React from "react";

import imgIcon from "../../assets/imgIcon.png";
import fbIcon from "../../assets/fbIcon.png";
import instaIcon from "../../assets/instaIcon.png";
import twiterIcon from "../../assets/twiterIcon.png";

const Footer = () => {
  return (
    <div className="bg-header_bg px-20 py-2 flex items-center justify-between text-white fixed bottom-0 w-full">
      <div className="flex items-center">
        <Image src={imgIcon} />
        <span className="ml-4">HEIC in JPG konvertieren</span>
      </div>

      <span className="text-xs"> © 2020 Lift Media. All rights reserved. </span>
      <div className="flex items-center">
        <Image src={fbIcon} width={50} />
        <Image src={instaIcon} width={50} />
        <Image src={twiterIcon} width={50} />
      </div>
    </div>
  );
};

export default Footer;
