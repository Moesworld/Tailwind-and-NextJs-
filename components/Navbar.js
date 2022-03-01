import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    //Hamburger menu toggle 
    function toggle(){
        document.querySelector('#mobile-menu').classList.toggle('hidden');
        const mynav=  document.querySelector('#ul');
        const listItem = mynav.getElementsByTagName('li');
        const listItems = mynav.getElementsByTagName('a');
        //Find path and highlight the navbar accordingly 
        var mypath = window.location.pathname;
        for(var i = 0; i <= listItems.length-1; i++){
            listItems[i].classList.remove('bg-blue-700', 'md:bg-transparent', 'text-white', 'block', 'pl-3', 'pr-4', 'py-2', 'md:text-blue-700', 'md:p-0' ,'rounded') 
            if(listItems[i].getAttribute('href') == mypath){
                listItems[i].classList.remove('bg-blue-700', 'md:bg-transparent', 'text-white', 'block', 'pl-3', 'pr-4', 'py-2', 'md:text-blue-700', 'md:p-0' ,'rounded')   
                listItems[i].classList.add('bg-blue-700', 'md:bg-transparent', 'text-white', 'block', 'pl-3', 'pr-4', 'py-2', 'md:text-blue-700', 'md:p-0' ,'rounded');
            } 
            listItems[i].classList.add('text-gray-700', 'hover:bg-gray-50', 'border-b', 'border-gray-100', 'md:hover:bg-transparent', 'md:border-0', 'block' ,'pl-3', 'pr-4', 'py-2', 'md:hover:text-blue-700', 'md:p-0')  
        }
    }

    //Highlight selected Navbar
    function toggle2(e){
        toggle()
        const mynav=  document.querySelector('#ul');
        const listItem = mynav.getElementsByTagName('li');
        const listItems = mynav.getElementsByTagName('a');
        for(var i = 0; i <= listItems.length-1; i++){
            listItems[i].classList.remove('bg-blue-700', 'md:bg-transparent', 'text-white', 'block', 'pl-3', 'pr-4', 'py-2', 'md:text-blue-700', 'md:p-0' ,'rounded')   
            listItems[i].classList.add('text-gray-700', 'hover:bg-gray-50', 'border-b', 'border-gray-100', 'md:hover:bg-transparent', 'md:border-0', 'block' ,'pl-3', 'pr-4', 'py-2', 'md:hover:text-blue-700', 'md:p-0')  
        }
        e.target.classList.remove('text-gray-700', 'hover:bg-gray-50', 'border-b', 'border-gray-100', 'md:hover:bg-transparent', 'md:border-0', 'block' ,'pl-3', 'pr-4', 'py-2', 'md:hover:text-blue-700', 'md:p-0');
        e.target.classList.add('bg-blue-700', 'md:bg-transparent', 'text-white', 'block', 'pl-3', 'pr-4', 'py-2', 'md:text-blue-700', 'md:p-0' ,'rounded'); 
    }

    


    
    
    return (
        <nav className=" bg-slate-50 border-gray-200 px-2 w-full py-6 sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <Link href="/" replace={true}>
            <a className="flex">
            <Image src="/images/logo.png" height={45} width={45} />
                <span className="self-center text-lg font-semibold whitespace-nowrap">SummerSkin</span>
            </a>
            </Link>
            
            <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false" onClick={toggle}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul id="ul" className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium " onClick={toggle2}>
                <li>
                <Link href="/">
                <a  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0" aria-current="page">Home</a>
                </Link>
                </li>
                <li>
                <Link href="/about">
                <a  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About</a>
                </Link>
                </li>
                <li>
                <Link href="/services" >
                <a  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
                </Link>
                </li>
                <li>
                <Link href="/contact">
                <a className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    );

}

