// Navbar
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        
        <nav className="flex w-full  border border-blue-900 bg-gray-200 rounded-lg shadow-lg p-5 ">
            <div className="grid grid-cols-2 place-content-center ml-2">
                <div className="grid place-items-center">
                <Link href="/">
                   
                   <Image
                       src="/images/giacc-tz-logo.png"
                       alt="Busara"
                       width={500}
                       height={500}
                   />
               
           </Link>
                </div>
                <div className="grid place-items-end">
                <Image
                            src="/images/fat.jpeg"
                            className="rounded-xl"
                            alt="Busara"
                            width={200}
                            height={200}
                        />
                </div>
            </div>
        </nav>
        
    );
}