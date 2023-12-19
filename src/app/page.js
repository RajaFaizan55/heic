import Footer from "./component/footer";
import NavBar from "./component/nav-bar";

import frameImg from "./assets/Frame.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />

      <div className="px-40 my-14">
        <div className="flex">
          <p className="mr-10 text-justify">
            "Wir präsentieren unseren HEIC-zu-JPG-Konverter – der einfachste
            Weg, um Ihre HEIC-Bilder in universell kompatible JPGs umzuwandeln.
            Mit einer benutzerfreundlichen Oberfläche können Sie Ihre Dateien
            schnell hochladen und konvertieren, dabei die Bildqualität bewahren.
            Verabschieden Sie sich von Format-Sorgen – erleben Sie die
            unkomplizierte Bildkonvertierung mit uns."
          </p>
          <Image src={frameImg} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
