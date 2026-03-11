"use client";

import Image from "next/image";
import heroImg from "../../../../public/images/heroImg.png"

export default function HeroSection() {
  return (
    <section id="banner" className="">

      <div container>
        <Image src={heroImg} alt="heroImg"  width={742} height={498}/>
      </div>

  
    
    </section>
  );
}