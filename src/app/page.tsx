import Image from "next/image";
import Navbar from "./Components/Navbar";
import SpeakerCard from "./Components/SpeakerCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ml-[13.5rem]   p-24">
      <div className="z-10 max-w-7xl w-full ">
        <Navbar />
      </div>
      <div className="mt-12  flex flex-col gap-8 items-start w-[67.5vw] ">
        <div className="col  p-1">
          <div className="text-6xl font-bold">About GIACC Tanzania</div>
        </div>
        <div className="col p-1 ">
          <p className="font-normal text-lg leading-relaxed text-justify">
            GIACC-Tanzania is an independent not-for-profit organisation based
            in Dar es salaam, Tanzania. It is an Affiliate of
            GIACC-International. GIACC-Tanzania believes that corruption can
            only be prevented and dealt with if both public and private sector
            organisations implement effective anti-corruption measures as a
            necessary and core part of their day-to-day corporate, procurement
            and project management.
            <br />
            It was founded in 2023 by Eng. Laurent Ndalichako, Eng. Shabani
            Mande and other leading industrial professionals. In 2023, it was
            re-launched under the leadership of Eng. Laurent Ndalichako as
            GIACC-Tanzania Executive Chairman.
          </p>
        </div>
      </div>
      <div className="mt-12  flex flex-col gap-8 items-start w-[67.5vw] ">
        <div className="col  p-1">
          <div className="text-3xl font-bold">
            GIACC-Tanzania Board of Directors & Management Team
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 grid-rows-2">
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
        </div>
      </div>
      <div className="mt-12  flex flex-col gap-8 items-start w-[67.5vw] ">
        <div className="col  p-1">
          <div className="text-3xl font-bold">Our Objectives</div>
        </div>
        <div className="col">
          <p className="font-normal leading-relaxed text-justify text-lg">
            GIACC-Tanzania does not investigate or report allegation on
            corruption but aims to support and contribute to the government’s
            anti-corruption efforts by raise awareness of corruption, and
            promote the implementation of anti-corruption measures as an
            integral part of the activities of public and private organisations,
            especially, but not only, in the field of infrastructure,
            construction and engineering, through workshops, training and
            publications.
          </p>
          <p className="font-medium leading-relaxed text-justify text-xl mt-8">
          To achieve this, GIACC Tanzania among other things aims to:
          </p>
          <div className="col ml-4">
          <p className="font-normal leading-relaxed text-justify text-lg mt-8"> <i className="bi bi-opencollective"></i> &nbsp; Raise awareness of corruption. </p>
          <p className="font-normal leading-relaxed text-justify text-lg mt-2"> <i className="bi bi-opencollective"></i> &nbsp; Promote the development of anti-corruption best practices through the participation in and organization of targeted initiatives. </p>
          <p className="font-normal leading-relaxed text-justify text-lg mt-2"> <i className="bi bi-opencollective"></i> &nbsp; Promote the implementation of anti-corruption measures as an integral part of government, corporate and project management. </p>
          <p className="font-normal leading-relaxed text-justify text-lg mt-2"> <i className="bi bi-opencollective"></i> &nbsp;To work with public and private sector organizations world-wide to prevent corruption and put in place effective anti-corruption procedures in &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; accordance  with ISO 37001 Anti-Bribery Management Systems Standard.</p>
          <p className="font-normal leading-relaxed text-justify text-lg mt-2"> <i className="bi bi-opencollective"></i> &nbsp; Conduct baseline survey and research to ensure good practice approach to effectively address corruption challenges.</p>
          </div>
        </div>
      </div>
      <div className="mt-8  flex flex-col items-center w-[67.5vw] text-center">
<p className="font-normal text-sm text-center">Contact : info@giacc.or.go | Copytights Reserved 2023 </p>
      </div>
    </main>
  );
}
