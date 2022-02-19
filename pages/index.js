import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Script from 'next/script'




export default function Home() {
  return (
    <div className='p-5'>
    <Navbar/>
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-3xl'>Summer Skin</h1>
    </div>
    </div>
    
  )
}
