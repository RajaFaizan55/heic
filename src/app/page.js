
"use client"
import Footer from "./component/footer";
import NavBar from "./component/nav-bar";

import frameImg from "./assets/Frame.png";
import Image from "next/image";
import Button from "./component/button";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef=useRef()
  const [fileSize , setFileSize]=useState()
  console.log("file size  : " , fileSize)

  const fileChangeHandler=(e)=>{
    setFileSize((e.target.files[0].size/(1024 * 1024)).toFixed(2))

  }

  return (
    <main>
      <NavBar />

      <div className="px-40 my-14 flex flex-col">
        <div className="flex gap-60 items-center">
          <p className="mr-10 text-justify">
            "Wir präsentieren unseren HEIC-zu-JPG-Konverter – der einfachste
            Weg, um Ihre HEIC-Bilder in universell kompatible JPGs umzuwandeln.
            Mit einer benutzerfreundlichen Oberfläche können Sie Ihre Dateien
            schnell hochladen und konvertieren, dabei die Bildqualität bewahren.
            Verabschieden Sie sich von Format-Sorgen – erleben Sie die
            unkomplizierte Bildkonvertierung mit uns."
          </p>
          <Image src={frameImg} alt="img" width={250} />
        </div>
        <div className="flex justify-center my-5" >

          <Button handleClick={() => inputRef?.current.click()} changeHandler={fileChangeHandler} inputRef={inputRef} />
        </div>

        <div className="flex gap-20 my-20 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold" >HEIC</h1>
            <p >
              HEIC (High Efficiency Image Format) ist ein modernes Bildformat, das sich durch die Erhaltung der Bildqualität bei gleichzeitiger Minimierung der Dateigrößen auszeichnet. Bekannt gemacht durch Apple, eignet es sich ideal für die Speichereffizienz auf ihren Geräten. Unser HEIC-zu-JPG-Konverter ermöglicht es Ihnen mühelos, HEIC-Dateien in universell kompatible JPGs umzuwandeln, damit Ihre visuellen Inhalte plattformübergreifend beeindruckend bleiben.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold" >JPG</h1>
            <p >
            JPG (Joint Photographic Experts Group) ist bekannt für sein hervorragendes Verhältnis von Bildqualität zur Dateigröße. Es wird auf einer breiten Palette von Geräten unterstützt und ist die erste Wahl für verschiedene Zwecke. Nutzen Sie unseren HEIC-zu-JPG-Konverter, um HEIC-Dateien in dieses universell unterstützte Format umzuwandeln. Dies garantiert, dass Ihre Bilder unabhängig von Gerät oder Plattform außergewöhnlich erscheinen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
