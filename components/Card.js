export default function ServiceCard({heading, desc, imgsrc, imgalt}) {
    return (
        <div className="max-w-lg mx-auto bg-white rounded-md shadow-[5px_35px_60px_5px_rgba(0,0,0,0.3)] overflow-hidden md:max-w-2xl ">
            <div className="">
                <div className="md:shrink-0">
                <img className="h-48 w-full object-cover " src={imgsrc} alt={imgalt}/>
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-md md:text-sm text-indigo-500 font-semibold">{heading}</div>
                <p className="mt-2 text-slate-500 hidden md:hidden lg:hidden">{desc}</p>
                </div>
            </div>
        </div>
    );
}