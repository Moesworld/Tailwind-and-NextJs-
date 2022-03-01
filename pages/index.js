import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Carousel from '../components/Carousel'
import image1 from '../public/images/carousel/image1.jpg'
import Accordian from '../components/Accordian'
import bannerpic from '../public/images/right-sidebanner.png'
import p1 from '../public/images/person1.jpeg'
import ServiceCard from '../components/Card'




export default function Home() {
  return (
    <div className="p-5 bg-slate-100">
   
    <main className='mx-aut0o'>
      
     <div className='w-full h-auto '>  
          
          <div className='container mx-auto h-1/2 p-4'>

              
              <div className='text-center flex items-center justify-center md:flex-row  sm: flex-col'>
                {/** Grid div 1 */}
                <div className='container flex  pb-10 h-auto '>
                  <div className='w-full'>
                    <h1 className='font-bold text-slate-600 capitalize text-4xl lg:text-4xl pb-4 mx-auto hover:text-indigo-600 duration-700 '>The Glow you Always wanted</h1>
                  </div>
                  
                </div>

                {/** Grid div 2 */}
                <div className='container px-10 py-10 h-full'>

                  {/** */}
                  <div className='grid lg:grid-cols-3 gap-4 items-center '>
                    <div>
                      <div className='opacity-75 absolute bottom-8 right-5'>
                       <h1 className=' decoration-fuchsia-200  decoration-4 font-bold  uppercase text-5xl text-fuchsia-300 z-30 lg:hidden'>Summer</h1>
                      </div>
                      <img src='./images/person1.jpeg' className=''/>
                    </div>
                    <div>
                      <img src='./images/person2.jpeg' className=''/>
                      <div className='opacity-50 absolute -bottom-8 left-10'>
                       <h1 className=' decoration-fuchsia-200 decoration-4 uppercase font-extrabold text-3xl text-fuchsia-600 z-30 lg:hidden'>Skin</h1>
                      </div>
                    </div>
                    <div>
                      
                      <img src='./images/person3.jpeg' className=' duration-200 hover:rounded-md'/>
                    </div>
                  </div>

                </div>

              </div >

              <div className='border-t-2 ' >
                <div className='flex flex-col gap-4 items-center justify-center p-10 ' >
                  <div className='md:w-full' >
                      <h1 className='text-1xl hover:text-2xl duration-700  text-center p-5'> Our Services </h1>
                        <p className='hidden md:block pb-10'>Our specialists take a comprehensive, individual approach to each patient’s skin care evaluation and daily regimen. During a consultation, our skin care specialists and aestheticians focus on your skin type and condition, as well as your lifestyle and goals to help determine the right combination of products and services to make your skin look its best.</p>
                      
                  </div>
              
                  <div className='grid grid-rows-2  md:grid-flow-col gap-4'>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard 
                      heading='Brazilian stretch marks'
                      desc='
                      Brazilian Stretch Mark Camouflage & Scar Camouflage is a paramedical aesthetic technique using a meticulous tattooing method with custom proprietary flesh tone pigments. This technique is intended to create a pigment illusion in order to disguise the area that is affected.'
                      imgsrc='./images/icons/icon3.png'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='Scar camoflage treatment'
                      desc='Scar camouflage is considered a form of medical permanent makeup that people undergo to treat a scar from an injury, stitch, surgery, burns, and stretch mark. HD Beauty Permanent Makeup proudly offers scar camouflage services designed to improve the look of your scars and enhance your beauty.'
                      imgsrc='./images/icons/icon1.png'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='3D areola repigmantagtion'
                      desc='Dermillusion cosmetic tattoo techniques are an alternative method to providing you with peace of mind and confidence surrounding this region of the body. This intimate area can be restored, reshaped and balanced to create a realistic areola and nipple.'
                      imgsrc='./images/icons/icon5.png'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='MCA needling renuvation serum'
                      desc='Skin Needling, also known as MCA or Multi-Trepannic Collagen Actuation, is a technique used by Permanent Cosmetics Artists in which, as a result of the healing process, benefits are achieved in wrinkle and stretch mark fillings, scar remodelling and skin re-pigmentation.'
                      imgsrc='./images/icons/icon2.png'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='Red Light therapy'
                      desc="Red light therapy (RLT) is a treatment that uses low wavelength red light to reportedly improve your skin's appearance, such as reducing wrinkles, scars, redness and acne. It's also touted to treat other medical conditions."
                      imgsrc='./images/icons/icon6.png'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='BB Glow'
                      desc='A BB Glow Treatment is a safe and intensive skin treatments that can assist in reduction of the appearance of freckles and lightening of your skin. It also helps with skin discoloration caused by acne and photo-aging or age spots.'
                      imgsrc='./images/icons/icon4.png'
                      />
                      </div>
                    
                  </div>
                </div>

              </div>
              
          </div>
          

          
         
      </div>
      
    </main>
  
    
   
    
    
    </div>
    
  )
}
