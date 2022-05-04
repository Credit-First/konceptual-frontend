import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';

export default function FaqSection() {
  return (
    <>
      <div className='section h-screen w-full'>
        <div className='landing-section h-full w-full'>
          <div className='background-image absolute top-0 left-0 h-full w-full bg-[url("/images/article/faq/landing.png")] bg-cover bg-center'></div>
          <div className='background-color absolute top-0 left-0 h-full w-full bg-black bg-cover bg-center opacity-60'></div>
          <div className='center-title mx-auto my-auto absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center'>
            <div className='w-4/5 flex flex-col items-start'>
              <div className='date flex items-center justify-center text-white'>
                <div className='py-6'>About NFTs</div>
                <svg
                  width='91'
                  height='1'
                  viewBox='0 0 91 1'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line
                    x1='4.37114e-08'
                    y1='0.5'
                    x2='91'
                    y2='0.500008'
                    stroke='white'
                  />
                </svg>
              </div>
              <div className='title text-center text-5xl text-white font-bold py-4'>
                Check our FAQ
              </div>
              <div className='detail text-left text-white'>
                If you don't know much about the NFTs Marketplace, here we tell you a little about what they deal with as well as the commonly used terminology.
              </div>
            </div>
          </div>
          <div className='explorer absolute right-14 bottom-14 text-white cursor-pointer animate-bounceHorizontal'>
            <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.9984 2.4375C20.3299 2.4375 20.6479 2.5659 20.8823 2.79446C21.1167 3.02302 21.2484 3.33302 21.2484 3.65625V32.4017L29.1134 24.7309C29.3481 24.502 29.6665 24.3735 29.9984 24.3735C30.3304 24.3735 30.6487 24.502 30.8834 24.7309C31.1181 24.9597 31.25 25.2701 31.25 25.5938C31.25 25.9174 31.1181 26.2278 30.8834 26.4566L20.8834 36.2066C20.7673 36.3201 20.6294 36.4102 20.4775 36.4716C20.3256 36.5331 20.1628 36.5647 19.9984 36.5647C19.834 36.5647 19.6712 36.5331 19.5193 36.4716C19.3675 36.4102 19.2295 36.3201 19.1134 36.2066L9.11342 26.4566C8.8787 26.2278 8.74684 25.9174 8.74684 25.5938C8.74684 25.2701 8.8787 24.9597 9.11342 24.7309C9.34813 24.502 9.66648 24.3735 9.99842 24.3735C10.3304 24.3735 10.6487 24.502 10.8834 24.7309L18.7484 32.4017V3.65625C18.7484 3.33302 18.8801 3.02302 19.1145 2.79446C19.349 2.5659 19.6669 2.4375 19.9984 2.4375Z" fill="white" />
            </svg>
          </div>
          <div className='h-full w-full'></div>
        </div>
      </div>
      <div className='section w-full flex'>
        <div className='list-wrapper flex items-center justify-center'>
          <div className='list flex h-full w-3/5 items-center justify-center md:justify-start'>
            <div className='summary'>
              <div className='title text-3xl font-bold my-6'>
                If I am a collector, can I publish any work?
              </div>
              <div className='content'>
                "The pain itself is a lot of pain he likes to be clumsy and shuns the pain that no one can pay for. They are the exception to the blinds they are craved for, they do not see, they are at fault for those who abandon their offices, that is the hardships that soothes the soul."
              </div>
              <div className='sub-title text-2xl font-bold my-6'>
                What benefits do artists have by exhibiting at Konceptual?
              </div>
              <div className=''>
                "The pain itself is a lot of pain he likes to be clumsy and shuns the pain that no one can pay for. They are the exception to the blinds they are craved for, they do not see, they are at fault for those who abandon their offices, that is the hardships that soothes the soul."
              </div>
              <div className='sub-title text-2xl font-bold my-6'>
                Who sets the price of a work of art?
              </div>
              <div className=''>
                "The pain itself is a lot of pain he likes to be clumsy and shuns the pain that no one can pay for. They are the exception to the blinds they are craved for, they do not see, they are at fault for those who abandon their offices, that is the hardships that soothes the soul."
              </div>
              <div className='sub-title text-2xl font-bold my-6'>
                Can I sell a work that I have bought as a collector?
              </div>
              <div className=''>
                "The pain itself is a lot of pain he likes to be clumsy and shuns the pain that no one can pay for. They are the exception to the blinds they are craved for, they do not see, they are at fault for those who abandon their offices, that is the hardships that soothes the soul."
              </div>
              <div className='sub-title text-2xl font-bold my-6'>
                What about copyright?
              </div>
              <div className=''>
                "The pain itself is a lot of pain he likes to be clumsy and shuns the pain that no one can pay for. They are the exception to the blinds they are craved for, they do not see, they are at fault for those who abandon their offices, that is the hardships that soothes the soul."
              </div>
              <div className='sub-title text-2xl font-bold my-6'>
                How can I get in touch with someone from Konceptual?
              </div>
              <div className=''>
                "The pain itself is a lot of pain he likes to be clumsy and shuns the pain that no one can pay for. They are the exception to the blinds they are craved for, they do not see, they are at fault for those who abandon their offices, that is the hardships that soothes the soul."
              </div>
              <div className='my-14 w-full h-1 bg-[grey]'>
              </div>
              <div className='mb-8'>
                <div className='text-2xl font-bold my-2'>
                  Artículos relacionados
                </div>
                <div className='my-2'>
                  <ul>
                    <li className='text-sky-500 py-2'>
                      ¿Qué es un Marketplace de NFTS?
                    </li>
                    <li className='text-sky-500 py-2'>
                      ¿Qué es una wallet?
                    </li>
                    <li className='text-sky-500 py-2'>
                      Compra tu primer NFTs
                    </li>
                    <li className='text-sky-500 py-2'>
                      Consulta nuestro FAQ
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


