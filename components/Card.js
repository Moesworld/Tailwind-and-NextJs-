export default function ServiceCard({heading, desc, imgsrc}) {
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="">
                <div class="md:shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-full" src={imgsrc} alt="Man looking at item at a store"/>
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{heading}</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Click to find out more about this service</a>
                <p class="mt-2 text-slate-500 hidden md:inline-flex">{desc}</p>
                </div>
            </div>
        </div>
    );
}