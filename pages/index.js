import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Carousel from '../components/Carousel'
import image1 from '../public/images/carousel/image1.jpg'
import Accordian from '../components/Accordian'
import Footer from '../components/Footer'
import bannerpic from '../public/images/right-sidebanner.png'
import p1 from '../public/images/person1.jpeg'
import ServiceCard from '../components/Card'




export default function Home() {
  return (
    <div className="p-5">
    <Navbar />
    <main className='mx-auto'>
      
     <div className='w-full h-auto '>  
          
          <div className='container mx-auto h-1/2 p-4 '>

              
              <div className='text-center flex items-center justify-center md:flex-row  sm: flex-col '>
                {/** Grid div 1 */}
                <div className='container flex p-10 pb-10 h-full'>
                  <div className=''>
                    <h1 className='h-full capitalize text-5xl  pb-4 mx-auto hover:pb-6 duration-300 hover:text-6xl duration-700 '>The Glow you Always wanted</h1>
                    <p className='text-2xl '>Skin Care Services</p>
                  </div>
                  
                </div>

                {/** Grid div 2 */}
                <div className='container px-10 py-10 h-full'>

                  {/** */}
                  <div className='lg: grid grid-cols-3 gap-4 items-center '>
                    <div>
                      <img src='./images/person1.jpeg' className='object-fit w-80'/>
                    </div>
                    <div>
                      <img src='./images/person2.jpeg' className='object-fit w-80'/>
                    </div>
                    <div>
                      <img src='./images/person3.jpeg' className='object-fit w-80'/>
                    </div>
                  </div>

                </div>

              </div >

              <div className='border-t-2 ' >
                <div className='flex flex-col gap-4 items-center justify-center p-10 ' >
                  <div className=' w-1/2' >
                      <h1 className='text-3xl hover:text-5xl duration-700  text-center p-5'> Our Services </h1>
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
                      <ServiceCard heading='Red Light therapy'
                      desc="Red light therapy (RLT) is a treatment that uses low wavelength red light to reportedly improve your skin's appearance, such as reducing wrinkles, scars, redness and acne. It's also touted to treat other medical conditions."
                      imgsrc='./images/Services/RRtherapy.jpeg'
                      />
                      </div>
                      <div className='p-4 hover:p-1 duration-700'>
                      <ServiceCard heading='BB Glow'
                      desc='A BB Glow Treatment is a safe and intensive skin treatments that can assist in reduction of the appearance of freckles and lightening of your skin. It also helps with skin discoloration caused by acne and photo-aging or age spots.'
                      imgsrc='./images/Services/BBGlow.jpeg'
                      />
                      </div>
                    
                  </div>
                </div>

              </div>
              
          </div>
          

          
         
      </div>
      
    </main>
    <Footer/>
    
   
    
    
    </div>
    
  )
}
