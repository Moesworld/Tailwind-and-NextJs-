import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Carousel from '../components/Carousel'
import image1 from '../public/images/carousel/image1.jpg'
import Accordian from '../components/Accordian'
import Footer from '../components/Footer'




export default function Home() {
  return (
    <div className='p-5'>
    <Navbar />
    <main className='relative'>
      
     <div className=' items-center justify-center w-full h-screen'>  
          <div className='container mx-auto px-4'>
              <Carousel/>
          </div>
          <div className='container mx-auto px-4'>
              <Accordian/>
          </div>

      </div>
    </main>
    <Footer/>
    
    
    </div>
    
  )
}
