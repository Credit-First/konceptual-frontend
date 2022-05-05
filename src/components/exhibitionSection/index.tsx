import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const list = [
  { title: 'Anette Black', location: 'País' },
  { title: 'Esther Miranda', location: 'País' },
  { title: 'Black Jack', location: 'País' },
  { title: 'Anette Black', location: 'País' },
  { title: 'Esther Miranda', location: 'País' },
  { title: 'Black Jack', location: 'País' },
  { title: 'Anette Black', location: 'País' },
  { title: 'Esther Miranda', location: 'País' },
  { title: 'Black Jack', location: 'País' },
  { title: 'Anette Black', location: 'País' },
  { title: 'Esther Miranda', location: 'País' }
];

export default function ExhibitionSection() {
  return (
    <>
      <div className='section h-screen w-full'><div className='landing-section h-full w-full'>
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
        <div className='explorer absolute right-14 bottom-14 text-white cursor-pointer animate-bounceHorizontal'>
          <ScrollLink
            key={'explorer'}
            to={'explorer'}
            spy={true}
            smooth={true}
          >
            <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.9984 2.4375C20.3299 2.4375 20.6479 2.5659 20.8823 2.79446C21.1167 3.02302 21.2484 3.33302 21.2484 3.65625V32.4017L29.1134 24.7309C29.3481 24.502 29.6665 24.3735 29.9984 24.3735C30.3304 24.3735 30.6487 24.502 30.8834 24.7309C31.1181 24.9597 31.25 25.2701 31.25 25.5938C31.25 25.9174 31.1181 26.2278 30.8834 26.4566L20.8834 36.2066C20.7673 36.3201 20.6294 36.4102 20.4775 36.4716C20.3256 36.5331 20.1628 36.5647 19.9984 36.5647C19.834 36.5647 19.6712 36.5331 19.5193 36.4716C19.3675 36.4102 19.2295 36.3201 19.1134 36.2066L9.11342 26.4566C8.8787 26.2278 8.74684 25.9174 8.74684 25.5938C8.74684 25.2701 8.8787 24.9597 9.11342 24.7309C9.34813 24.502 9.66648 24.3735 9.99842 24.3735C10.3304 24.3735 10.6487 24.502 10.8834 24.7309L18.7484 32.4017V3.65625C18.7484 3.33302 18.8801 3.02302 19.1145 2.79446C19.349 2.5659 19.6669 2.4375 19.9984 2.4375Z" fill="white" />
            </svg>
          </ScrollLink>
        </div>
      </div >
      </div>
      <div id='explorer' className='bg-black w-full h-full flex text-white p-24'>
        <div className='left w-3/5'>
          <div className='title text-5xl font-bold'>
            What is it about?
          </div>
          <div className='content py-8'>
            In the record of history, Atotoztli is absent as tlatoani, but there are data that indicate the opposite and the possibility that he did rule after his father. Fray Toribio de Benavente, Motolinia, speaks of her in History of the Indians of New Spain; the Ramírez Codex names her as an Aztec queen and a key character for the regeneration of the lineage of the Toltec-Mexica dynasty. An illustration of Atotoztli's name appears in the Codex Azcatitlán produced after the conquest.
          </div>
          <div className='content'>
            As the position of tlatoani was one of the highest functions of the Mexica political system, the historical sources do not mention his period of government
          </div>
        </div>
        <div className='right w-2/5 p-8 flex items-center justify-center'>
          <div className='cursor-pointerflex bg-white text-black rounded-lg border-2 py-4 px-6 text-sm focus:outline-none focus:ring-2'>
            <button className='font-bold'>Go to the 3D Gallery</button>
          </div>
        </div>
      </div>
      <div className='video relative w-full h-[475px]'>
        <Image src={'/images/exhibition/1.png'} layout='fill' objectFit='fill' />
        <div className='absolute top-12 left-16 flex items-center justify-start text-white'>
          <div className='mx-6'>
            <div>Discover the exhibition</div>
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
        <div className='play-video absolute w-full h-full m-auto flex items-center justify-center'>
          <svg width="100" height="95" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5.9375C25.8398 5.9375 6.25 24.5479 6.25 47.5C6.25 70.4521 25.8398 89.0625 50 89.0625C74.1602 89.0625 93.75 70.4521 93.75 47.5C93.75 24.5479 74.1602 5.9375 50 5.9375ZM50 82.0117C29.9414 82.0117 13.6719 66.5557 13.6719 47.5C13.6719 28.4443 29.9414 12.9883 50 12.9883C70.0586 12.9883 86.3281 28.4443 86.3281 47.5C86.3281 66.5557 70.0586 82.0117 50 82.0117Z" fill="white" />
            <path d="M70.2539 46.3032L41.3379 26.3569C41.106 26.1954 40.8314 26.0983 40.5448 26.0763C40.2582 26.0543 39.9708 26.1084 39.7146 26.2325C39.4584 26.3566 39.2436 26.5458 39.0939 26.7791C38.9443 27.0124 38.8658 27.2805 38.8672 27.5537V67.4463C38.8672 68.6616 40.3125 69.3481 41.3379 68.6431L70.2539 48.6968C70.4536 48.5601 70.6162 48.3803 70.7283 48.1723C70.8404 47.9642 70.8989 47.7338 70.8989 47.5C70.8989 47.2662 70.8404 47.0358 70.7283 46.8277C70.6162 46.6197 70.4536 46.4399 70.2539 46.3032ZM45.0977 58.7349V36.2651L61.377 47.5L45.0977 58.7349Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className='bg-white w-full h-full flex text-black p-24'>
        <div className='left w-3/5'>
          <div className='title text-5xl font-bold'>
            Learn more about Esterio Segura
          </div>
          <div className='content py-8'>
            Contemporary Cuban artist. From a young age, he showed a marked interest in the field of visual arts and had a broad education in this regard. From 1982 to 1985 he studied at the Elementary School of Plastic Arts in Camagüey, Cuba and, just after, he began the intermediate level at the Provincial School of Plastic Arts and Ballet also in Camagüey.
          </div>
          <div className='content flex'>
            <div className='link'>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.3125 10.5001C1.3125 10.326 1.38164 10.1591 1.50471 10.0361C1.62778 9.91299 1.7947 9.84385 1.96875 9.84385H17.4471L13.3166 5.71472C13.1934 5.5915 13.1242 5.42436 13.1242 5.2501C13.1242 5.07583 13.1934 4.9087 13.3166 4.78547C13.4399 4.66225 13.607 4.59302 13.7812 4.59302C13.9555 4.59302 14.1226 4.66225 14.2459 4.78547L19.4959 10.0355C19.557 10.0964 19.6055 10.1688 19.6386 10.2486C19.6716 10.3283 19.6887 10.4138 19.6887 10.5001C19.6887 10.5864 19.6716 10.6719 19.6386 10.7516C19.6055 10.8313 19.557 10.9038 19.4959 10.9647L14.2459 16.2147C14.1226 16.3379 13.9555 16.4072 13.7812 16.4072C13.607 16.4072 13.4399 16.3379 13.3166 16.2147C13.1934 16.0915 13.1242 15.9244 13.1242 15.7501C13.1242 15.5758 13.1934 15.4087 13.3166 15.2855L17.4471 11.1563H1.96875C1.7947 11.1563 1.62778 11.0872 1.50471 10.9641C1.38164 10.8411 1.3125 10.6741 1.3125 10.5001Z" fill="black" />
              </svg>
            </div>
            <div className='font-bold pl-4'>See artist profile</div>
          </div>
        </div>
        <div className='right w-2/5 p-8 flex items-center justify-center'>
          <div className='image relative w-[350px] h-[220px]'>
            <Image src={'/images/exhibition/2.png'} layout='fill' objectFit='fill' />
          </div>
        </div>
      </div>
      <div className='relative bg-black p-24 w-full h-full flex'>
        <div className='absolute top-16 left-16 flex items-center justify-start text-white'>
          <div className='mx-6'>
            <div>
              <Link href='/exhibition/main'>
                Meet some of the works
              </Link>
            </div>
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
        <div className='list mt-6 flex w-full h-full items-center justify-center'>
          <div className='p-4 w-1/3'>
            <div className='relative h-[500px]'>
              <Image src={'/images/exhibition/works/1.png'} layout='fill' objectFit='fill' />
            </div>
          </div>
          <div className='p-4 w-1/3'>
            <div className='relative h-[500px]'>
              <Image src={'/images/exhibition/works/2.png'} layout='fill' objectFit='fill' />
            </div>
          </div>
          <div className='p-4 w-1/3'>
            <div className='relative h-[500px]'>
              <Image src={'/images/exhibition/works/3.png'} layout='fill' objectFit='fill' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
