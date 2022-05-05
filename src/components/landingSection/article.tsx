import Link from 'next/link';
import * as React from 'react';

export default function AboutSectioin({ size }: { size: any }) {
  return (
    <div className='landing-section h-full w-full'>
      <div className='background-image absolute top-0 left-0 h-full w-full bg-[url("/images/landing/article.png")] bg-cover bg-center'></div>
      <div className='background-color absolute top-0 left-0 h-full w-full bg-black bg-cover bg-center opacity-60'></div>
      <div className='center-title absolute mx-auto my-auto h-full w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center w-[700px]'>
          <div className='date w-full flex items-center justify-start text-white'>
            <div className='mx-6'>
              <div>Learn more about Conceptual</div>
            </div>
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
          <div className='title my-6 flex flex-col items-center justify-center text-5xl font-bold text-white text-center'>
            We are gallery owners and curators of contemporary ART.
          </div>
        </div>
      </div>
      <div className='explorer absolute right-14 bottom-14 text-white cursor-pointer animate-bounceHorizontal'>
        <Link href='/article'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
