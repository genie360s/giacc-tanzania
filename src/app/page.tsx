import Link from "next/link";
import Navbar from "./Components/Navbar";

import HalfBackground from "./Components/HalfBackground";
import DynamicSpeakerCard from "./Components/DynamicSpeakerCard";
export default function Home() {
  return (
    <>
      <HalfBackground />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-24 pb-2 text-gray-950">
        <div className="z-10 max-w-5xl   items-center  text-sm  ">
          <Navbar />

          <div className="mt-16  flex flex-col gap-8 items-start  ">
            <div className="col  p-1">
              <div className="lg:text-6xl md:text-6xl font-bold text-blue-900 sm:text-6xl max-[640px]:text-4xl ">
                About GIACC Tanzania
              </div>
            </div>
            <div className="col p-1 ">
              <p className="font-normal text-lg leading-relaxed text-justify">
                GIACC Tanzania is an independent nonprofit organization and an
                affiliate of GIACC International dedicated to combating
                corruption in the infrastructure sector in Tanzania, founded in
                2023. At GIACC Tanzania, we believe that corruption can only be
                prevented and dealt with if public and private sector
                organizations implement effective anti-corruption measures, as
                necessary in the construction industry. We also strive to
                promote transparency, integrity, and accountability in all
                aspects of infrastructure development, fostering sustainable
                growth, and ensuring equitable access to essential services for
                all Tanzanians.
                <br />
                It was founded and relaunched in 2023 under the leadership of
                Eng. Laurent Ndalichako as GICCA-Tanzania Executive Chairman,
                Eng. Shabani Mande, and other leading industrial professionals.
              </p>
            </div>
          </div>

          <div className="mt-16  flex flex-col gap-8 items-start ">
            <div className="col  p-1">
              <div className="text-3xl font-bold text-blue-900">
                Our Objectives
              </div>
            </div>
            <div className="col">
              <p className="font-normal leading-relaxed text-justify text-lg">
                GIACC-Tanzania does not investigate or report allegation on
                corruption but aims to support and contribute to the
                government’s anti-corruption efforts by raise awareness of
                corruption, and promote the implementation of anti-corruption
                measures as an integral part of the activities of public and
                private organisations, especially, but not only, in the field of
                infrastructure, construction and engineering, through workshops,
                training and publications.
              </p>
              <p className="font-medium leading-relaxed text-justify text-xl mt-8 text-blue-900">
                To achieve this, GIACC Tanzania among other things aims to:
              </p>
              <div className="col ml-4">
                <p className="font-normal leading-relaxed text-justify text-lg mt-8">
                  {" "}
                  <i className="bi bi-square-fill  text-[10px]"></i>&nbsp;Raise
                  awareness of corruption.{" "}
                </p>
                <p className="font-normal leading-relaxed text-justify text-lg mt-2">
                  {" "}
                  <i className="bi bi-square-fill  text-[10px]"></i>
                  &nbsp;Promote the development of anti-corruption best
                  practices through the participation in and organization of
                  targeted initiatives.{" "}
                </p>
                <p className="font-normal leading-relaxed text-justify text-lg mt-2">
                  {" "}
                  <i className="bi bi-square-fill  text-[10px]"></i>
                  &nbsp;Promote the implementation of anti-corruption measures
                  as an integral part of government, corporate and project
                  management.{" "}
                </p>
                <p className="font-normal leading-relaxed text-justify text-lg mt-2">
                  {" "}
                  <i className="bi bi-square-fill  text-[10px]"></i>&nbsp;To
                  work with public and private sector organizations world-wide
                  to prevent corruption and put in place effective &nbsp; &nbsp;
                  &nbsp; &nbsp; anti-corruption procedures in accordance with
                  ISO 37001 Anti-Bribery Management Systems Standard.
                </p>
                <p className="font-normal leading-relaxed text-justify text-lg mt-2">
                  {" "}
                  <i className="bi bi-square-fill  text-[10px]"></i>
                  &nbsp;Conduct baseline survey and research to ensure good
                  practice approach to effectively address corruption
                  challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-24  flex flex-col gap-8  ">
            <div className="col  p-1">
              <div className="text-3xl font-bold text-blue-900">
                GIACC-Tanzania Board of Directors & Management Team
              </div>
            </div>
            <div className="mt-8 grid lg:grid-cols-3 gap-8 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 sm:grid sm:grid-cols-1 sm:grid-rows-5 sm:place-items-center max-[640px]:place-items-center">
              <DynamicSpeakerCard
                backgroundImageUrl="/images/chair_person2.PNG"
                title="Board Executive  Chairman"
                name="Eng. Laurent Lazaro Ndalichako"
              />
              <DynamicSpeakerCard
                backgroundImageUrl="/images/chair_person3.PNG"
                title="Board Memmber & General Secretary"
                name="Dr. Lissah Jepherson Mponjoli"
              />
              <DynamicSpeakerCard
                backgroundImageUrl="/images/chair_person1.PNG"
                title="Board Member & Finance & Admin  Manager"
                name="Eng. Shabani Ramadhani Mande"
              />
              <DynamicSpeakerCard
                backgroundImageUrl="/images/fatma.jpeg"
                title="Board Member & Head of ICT"
                name="Eng. Fatuma Hamisi Mwamba "
              />
              <DynamicSpeakerCard
                backgroundImageUrl="/images/chair_person4.JPG"
                title="Board Member & Legal Advisor"
                name="Adv. Elias Laurent Ndalichako"
              />
              <DynamicSpeakerCard
                backgroundImageUrl="/images/chair_person6.JPG"
                title="Board Member & Finance officer"
                name="Mr. Mohamed Shabani Mande "
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-0 md:gap-0 sm:grid-flow-row sm:gap-8 max-[640px]:gap-8  mt-24">
            <div className="col-6 bg-center bg-cover bg-[url('/images/fat.jpeg')]  h-96 lg:rounded-l-lg drop-shadow-xl border border-gray-100 sm:row sm:rounded-l-lg"></div>
            <div className="col-6 grid place-content-center justify-content-center  bg-blue-900 lg:rounded-r-lg sm:row sm:rounded-r-lg sm:py-12 max-[640px]:py-24">
              <h4 className="font-bold text-5xl text-center text-gray-300">
                Contact Us
              </h4>
              <p className="font-normal text-lg text-center p-4 text-gray-400">
                For more information about GIACC-Tanzania, please contact us at
                the following address:
              </p>
              <p className="font-normal text-lg text-center p-4 text-gray-200">
                {" "}
                Email : <i className="bi bi-envelope"></i>{" "}
                <Link href="mailto:info@giacc.or.go">info@giacc.or.go</Link>
              </p>
            </div>
          </div>
          <div className="mt-12   flex flex-col items-center  text-center relative ">
            <p className="font-normal text-sm text-center absolute bottom-0">
              Contact : info@giacc.or.go | Copyrights Reserved 2023{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
