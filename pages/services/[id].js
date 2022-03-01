const Details = () => {
    return (
        <div>
        <div className="max-w-md mx-auto bg-white rounded-xl">
            <section className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <h1 className="text-3xl"><b>Crazy</b></h1>
                <blockquote>
                <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                </div>
                </figcaption>
            </div>

            </section>
        </div>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/bg1.jpg" alt="Man looking at item at a store"/>
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Details;