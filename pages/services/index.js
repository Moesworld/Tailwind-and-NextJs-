import Navbar from "../../components/Navbar";
import Script from "next/script";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/Card";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";

export default function Serviecs() {
    const calendarRef = useRef(null);
    return (
        <div className="p-5">
            
            
            <div className="w-full h-auto">
            
            <div className='' >
                <div className='flex flex-col gap-4 items-center justify-center p-10 ' >
                  <div className=' w-1/2 flex has-text-centered items-center justify-center' >
                      <h1 className='h-full capitalize text-5xl  p-4 mx-auto hover:p-6 duration-300 hover:text-6xl duration-700 '> Our Services </h1>
                  </div>
                  <div className=' w-1/2' >
                        <p className='hidden md:block pb-10'>Our specialists take a comprehensive, individual approach to each patient’s skin care evaluation and daily regimen. During a consultation, our skin care specialists and aestheticians focus on your skin type and condition, as well as your lifestyle and goals to help determine the right combination of products and services to make your skin look its best.</p>
                  </div>
              
                  <div className='grid grid-rows-2  md:grid-flow-col gap-4'>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard 
                      heading='Brazilian stretch marks'
                      desc='
                      Brazilian Stretch Mark Camouflage & Scar Camouflage is a paramedical aesthetic technique using a meticulous tattooing method with custom proprietary flesh tone pigments. This technique is intended to create a pigment illusion in order to disguise the area that is affected.'
                      imgsrc='./images/Services/BBstretch.jpeg'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='Scar camoflage treatment'
                      desc='Scar camouflage is considered a form of medical permanent makeup that people undergo to treat a scar from an injury, stitch, surgery, burns, and stretch mark. HD Beauty Permanent Makeup proudly offers scar camouflage services designed to improve the look of your scars and enhance your beauty.'
                      imgsrc='./images/Services/ScarCamo.webp'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='3D areola repigmantagtion'
                      desc='Dermillusion cosmetic tattoo techniques are an alternative method to providing you with peace of mind and confidence surrounding this region of the body. This intimate area can be restored, reshaped and balanced to create a realistic areola and nipple.'
                      imgsrc='./images/Services/3Dareola.jpeg'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='MCA needling renuvation serum'
                      desc='Skin Needling, also known as MCA or Multi-Trepannic Collagen Actuation, is a technique used by Permanent Cosmetics Artists in which, as a result of the healing process, benefits are achieved in wrinkle and stretch mark fillings, scar remodelling and skin re-pigmentation.'
                      imgsrc='./images/Services/MCAneedle.jpeg'
                      />
                      </div>
                    
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='BB Glow'
                      desc='A BB Glow Treatment is a safe and intensive skin treatments that can assist in reduction of the appearance of freckles and lightening of your skin. It also helps with skin discoloration caused by acne and photo-aging or age spots.'
                      imgsrc='./images/Services/BBGlow.jpeg'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='Chemical peal'
                      desc='A BB Glow Treatment is a safe and intensive skin treatments that can assist in reduction of the appearance of freckles and lightening of your skin. It also helps with skin discoloration caused by acne and photo-aging or age spots.'
                      imgsrc='./images/Services/BBGlow.jpeg'
                      />
                      </div>
                    
                  </div>

                </div>
                <div className="flex flex-col item-center justify-center">
                    
                </div>

              </div>
            </div>
           
        </div>
    );
}