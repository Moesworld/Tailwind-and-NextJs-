import Navbar from "../components/Navbar";
import Footer from '../components/Footer'


export default function About() {
    return (
        <div className="p-5 bg-slate-100">
            <div className="w-full h-auto">
                 <div className='container mx-auto h-1/2 p-4 '>
                     {/** About */}
                     <div className="flex has-text-centered items-center justify-center ">
                        <h1 className='h-full capitalize text-5xl  p-4 mx-auto hover:p-6 duration-300 hover:text-6xl duration-700 '>About Us</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="flex-1 p-4 m-auto ">
                            <p>In our clinic I apply a combination of paramedical treatment  techniques to treat unsightly, bothersome scars. Firstly, scars can be treated by “breaking down” the tissue using state-of-the-art technology and careful paramedical tattoo techniques. Often times, this is all that is required. Once the tissue is released, a new healing cascade is evoked. With the proper after care, including some time in the sun – very little, actually new melanocytes can form, where the tissue was once absent of colour.</p>
                        </div>
                        <div className="flex-1 w-80">
                            <img src="../images/person1.jpeg"/>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center ">
                        <div className="flex-1 p-6 ">
                            <h1 className="text-3xl p-3">When did we start</h1>
                            <p>In our clinic I apply a combination of paramedical treatment  techniques to treat unsightly, bothersome scars. Firstly, scars can be treated by “breaking down” the tissue using state-of-the-art technology and careful paramedical tattoo techniques. Often times, this is all that is required. Once the tissue is released, a new healing cascade is evoked. With the proper after care, including some time in the sun – very little, actually new melanocytes can form, where the tissue was once absent of colour.</p>
                        </div>
                        <div className="flex-1 p-6">
                            <h1 className="text-4xl p-3">Our Goals</h1>
                            <ul className="list-disc">
                                <li>Take Care of your skin</li>
                                <li>Spread Skin awarness</li>
                                <li>Explain the benifits</li>
                                <li>Delivery top notch service</li>
                                <li>Live a better life</li>
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}