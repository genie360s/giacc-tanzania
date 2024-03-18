//dynamic speaker card

export default function SpeakerCard({ backgroundImageUrl, name, title }: { backgroundImageUrl: string, name: string, title: string}) {
    return (
        <>
            <div
                className="grid w-80 h-[28em] bg-white rounded-lg justify-center bg-center bg-cover drop-shadow-lg border border-gray-2   00"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
                <div className="rounded-lg bg-gray-200 h-[4.5em] w-[21em] m-auto mb-[2.3em]  py-2 text-slate-800 grid place-content-center">
                
                    <span className="font-medium text-lg text-blue-900  ">{name}</span>
                    <span className="font-medium text-sm text-blue-900 text-center font-bold  ">{title}</span>
                </div>
            </div>
        </>
    );
}
