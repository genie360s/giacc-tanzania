// Navbar
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        
        <nav className="flex w-full  border border-blue-900 bg-gray-200 rounded-lg shadow-lg p-5 ">
            <div className="flex ml-2">
                <Link href="/">
                   
                        <Image
                            src="/images/giacc_brand_logo.png"
                            alt="Busara"
                            width={200}
                            height={200}
                        />
                    
                </Link>
            </div>
        </nav>
        
    );
}