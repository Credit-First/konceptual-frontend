import * as React from 'react';
import Link from 'next/link';

export default function ExhibitionsSectioin({ size }: { size: any }) {
  return (
    <div className='landing-section h-full w-full'>
      <div className='background-image absolute top-0 left-0 h-full w-full bg-[url("/images/landing/exhibition.png")] bg-cover bg-center'></div>
      <div className='background-color absolute top-0 left-0 h-full w-full bg-black bg-cover bg-center opacity-60'></div>
      <div className='center-title absolute mx-auto my-auto h-full w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center w-[700px]'>
          <div className='title my-6 flex flex-col items-center justify-center text-5xl font-bold text-white text-center'>
            A Solo Exhibition by Esterio Segura
          </div>
          <div className='detail text-center text-white'>
            Famous phrase or representative of the exhibition
          </div>
        </div>
      </div>
      <div className='explorer absolute right-14 bottom-14 text-white cursor-pointer animate-bounceVertical'>
        <Link href={'/exhibition'}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div >
  );
}
