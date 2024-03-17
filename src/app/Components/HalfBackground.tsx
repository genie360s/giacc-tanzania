//bacground half of the page
//import react , link , image below
import React from "react";
import Link from "next/link";
import Image from "next/image";

// create a footer component template below
export default function HalfBackground() {
    return (
        <div className="w-[100vw] h-[50vh] position-fixed bg-cover bg-center bg-[url('/images/tz-bridge-clear.jpg')] ">
            <div className="text-6xl font-bold text-gray-200 flex flex-col items-center position-fixed max-[480px]:text-5xl max-[380px]:text-4xl">
                <p className="mt-64">GIACC Tanzania</p>
              </div>
        </div>
    );
}
