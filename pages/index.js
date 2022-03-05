import Head from 'next/head'
import Image from 'next/image'
import circle from '../public/images/Circle.svg'
import leftb from '../public/images/leftDraw.svg'
import rigthb from '../public/images/rightDraw.svg'
import styles from '../styles/Home.module.css'





export default function Home() {
  return (
    <div className="bg-skin-shades-1">
   
   <main className='mx-auto w-full'>
      <div className='w-full h-auto'>  
           <div className='mx-auto w-full h-auto pt-4' >
               <div className='text-center flex flex-col items-center justify-center  sm: flex-col'>
                 {/** Grid div 1 */}
                 <div className='container flex flex-col  pt-10 pb-10 h-auto '>
                   <div className='w-full'>
                     <h1 className='text-white uppercase text-5xl pb-4 pt-10 mx-auto hover:text-white duration-700 '>Summer Skin</h1>
                   </div>
                   
                 </div>
                 <div className='static text-white text-[36px] pt-[100px]'>
                  <Image src={circle} width={200} height={200}></Image>
                    <div className='relative bottom-[160px] '>
                    <h2 style={{color: '#725538'}}>SKIN CARE</h2>
                    <h2 style={{color: '#725538'}}>AT YOUR FINGER TIPS</h2>
                    </div>
                   </div>
                </div>
            </div>
            <div className='overflow-hidden '>
              <div className='relative w-full pt-[405px]  '>
                    <div className='absolute bottom-0 left-[-100px] ' > 
                      <Image src={leftb} width={400} height={400}></Image>
                    </div>
              </div>
            
              <div className='relative w-full '>
                    <div className='absolute bottom-0 right-[-100px] ' > 
                      <Image src={rigthb} width={400} height={400}></Image>
                    </div>
              </div>
            </div>
            <section className={styles.section_2}>
            <div className='mx-auto w-full h-auto pt-4' >
               <div className='text-center flex flex-col items-center justify-center  sm: flex-col'>
                 {/** Grid div 1 */}
                 <div className='container flex flex-col  pb-10 h-auto '>
                   <div className='w-full'>
                     <h1 className='text-white uppercase text-3xl pb-4 pt-10 mx-auto hover:text-white duration-700 '>Our Services</h1>
                   </div>
                 </div>
                 
                </div>
            </div>
            </section>
            
            
            
            
        </div>
      </main>
    </div>
    
  )
}
