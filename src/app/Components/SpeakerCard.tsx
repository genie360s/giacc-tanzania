//speaker card
// Speaker Card

export default function SpeakerCard() {
    return (
      <>
        <div className="grid  w-96 h-[28em] bg-white rounded-lg justify-center bg-cover bg-[url('/images/headshot.jpg')]">
          
          <div className="rounded-lg bg-gray-200 h-[2.5em] w-[20em] m-auto mb-[2.3em] text-center py-2 text-slate-800 ">
            <span className="font-medium text-lg">John Doe</span>
          </div>
        </div>
      </>
    );
  }