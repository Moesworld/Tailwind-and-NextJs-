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




export default function Home() {
  return (
    <div className='p-5'>
      <Script src="https://unpkg.com/flowbite@latest/dist/flowbite.js" strategy="beforeInteractive"></Script>
    <Navbar />
    <main className='relative'>
      
     <div className=' items-center justify-center w-full h-screen'>  
          <div className='container mx-auto px-4'>
              <div className='lg:columns-2 sm:columns-1'>
                <div className='container px-10 pb-10'>
                  <h1 className='text-5xl font-serif pb-4 hover:pb-6 duration-300 hover:text-6xl duration-700 '>The Glow you Always wanted</h1>
                  <p className='antialiased  text-3xl italic font-light '>Skin Care Clinic</p>
                </div>
                <div className='container'>
                  <Image src={bannerpic} width={1920} height={1080} className='h-full w-full'/>
                </div>
              </div>
          </div>
          <div className='container mx-auto px-4'>
              
          </div>

      </div>
    </main>
    <Footer/>
    
    
    </div>
    
  )
}
