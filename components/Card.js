export default function ServiceCard({heading, desc, imgsrc}) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg object-cover" src={imgsrc} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
            
          </div>
      </div>
    );
}