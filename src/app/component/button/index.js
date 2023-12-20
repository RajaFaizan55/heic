
import React from "react";
import Image from "next/image";
import buttonIcon from "../../assets/buttonIcon.png";

const Button = ({handleClick , inputRef, changeHandler}) => {
  return <div className="bg-[#FF5A5F] text-white w-max py-3 px-4 rounded-md flex cursor-pointer" onClick={handleClick} >
    <Image src={buttonIcon} alt="plus file icon" width={25}/>
    <span className="ml-2" >Datei auswählen</span>
    <input type="file" className="" style={{display:"none"}} ref={inputRef} onChange={changeHandler} />
  </div>;
};

export default Button;
