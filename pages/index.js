import { useState } from 'react';
import Image from 'next/image';
// import { Inter } from 'next/font/google';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { PiLinkFill } from 'react-icons/pi';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Adil Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-gray-100 dark:bg-gradient-to-b from-gray-900 to-gray-800 px-5 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between items-center'>
            <h1 className=' text-lg md:text-2xl font-burtons dark:text-gray-300'>
              developed by Adil
            </h1>
            <ul className='flex items-center'>
              <li className='p-2 bg-gray-800 text-white dark:bg-gradient-to-br from-teal-500 to-cyan-600 dark:text-black white rounded-xl '>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-xl md:text-2xl'
                />
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1.5 rounded-md ml-4 md:ml-8 md:px-4 md:py-2'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center py-10'>
            <h2 className='text-5xl py-2 text-teal-500 dark:text-teal-400 font-medium md:text-6xl'>
              Adil Ahamed
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Developer and SWE
            </h3>
            <p className='text-base py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-xl mx-auto'>
              An efficient web developer seamlessly merges creative design with
              advanced coding skills to craft visually stunning and
              high-performance websites.
            </p>
          </div>

          {/* DIV 3 */}
          <div className='text-5xl flex justify-center gap-16 text-gray-700 dark:text-gray-400'>
            <a href='https://twitter.com/' target='_blank'>
              <PiLinkFill />
            </a>
            <a href='www.linkedin.com/in/adil-ahamed189' target='_blank'>
              <AiFillInstagram />
            </a>
            <a href='https://twitter.com/' target='_blank'>
              <AiFillLinkedin />
            </a>
          </div>

          {/* DIV 4 */}
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-20 overflow-hidden md:w-96 md:h-96 dark:shadow-lg dark:shadow-slate-700'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>

        {/* SECTION 2 */}
        <section className='dark:text-white'>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-base py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-base py-2 leading-8 text-gray-800 dark:text-gray-400'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className='lg:flex gap-6'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:flex-1 dark:bg-slate-100'>
              <div className='flex justify-center'>
                <Image src={design} width={100} height={100} />
              </div>

              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-black'>
                Beautiful Designs
              </h3>
              <p className='py-2 dark:text-black'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Indesign</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:flex-1 dark:bg-slate-100'>
              <div className='flex justify-center'>
                <Image src={consulting} width={100} height={100} />
              </div>

              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-black'>
                Beautiful Designs
              </h3>
              <p className='py-2 dark:text-black'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Indesign</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:flex-1 dark:bg-slate-100'>
              <div className='flex justify-center'>
                <Image src={code} width={100} height={100} />
              </div>

              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-black'>
                Beautiful Designs
              </h3>
              <p className='py-2 dark:text-black'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Indesign</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className='py-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-base py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-base py-2 leading-8 text-gray-800 dark:text-gray-400'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className='flex flex-col gap-8 py-14 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web1}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web2}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web3}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web4}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web5}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web6}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
          </div>
        </section>

        <footer className='pt-8 pb-6 text-center'>
          <p className='text-xs md:text-sm dark:text-gray-300'>
            &copy; Developed by{' '}
            <span className='text-teal-500 font-medium'>Adil Ahamed</span>, All
            rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
