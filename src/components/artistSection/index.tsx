import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Link } from 'react-scroll';

const list = [
  { id: 1, img: '/images/artist/1.png', title: 'Anette Black', location: 'País' },
  { id: 2, img: '/images/artist/2.png', title: 'Esther Miranda', location: 'País' },
  { id: 3, img: '/images/artist/3.png', title: 'Black Jack', location: 'País' },
  { id: 4, img: '/images/artist/1.png', title: 'Anette Black', location: 'País' },
  { id: 5, img: '/images/artist/2.png', title: 'Esther Miranda', location: 'País' },
  { id: 6, img: '/images/artist/3.png', title: 'Black Jack', location: 'País' },
  { id: 7, img: '/images/artist/1.png', title: 'Anette Black', location: 'País' },
  { id: 8, img: '/images/artist/2.png', title: 'Esther Miranda', location: 'País' },
  { id: 9, img: '/images/artist/3.png', title: 'Black Jack', location: 'País' },
  { id: 10, img: '/images/artist/1.png', title: 'Anette Black', location: 'País' },
  { id: 11, img: '/images/artist/2.png', title: 'Esther Miranda', location: 'País' },
  { id: 12, img: '/images/artist/3.png', title: 'Black Jack', location: 'País' },
];

export default function ArtistasSection() {
  const router = useRouter();

  const handleView = (item: any) => () => {
    router.push({
      pathname: `/artist/item`,
      query: { item_id: item.id },
    })
  }

  return (
    <>
      <div className='section h-screen w-full'>
        <div className='landing-section h-full w-full'>
          <div className='background-image absolute top-0 left-0 h-full w-full bg-[url("/images/landing/artist.jfif")] bg-cover bg-center'></div>
          <div className='background-color absolute top-0 left-0 h-full w-full bg-black bg-cover bg-center opacity-60'></div>
          <div className='center-title absolute mx-auto my-auto h-full w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center w-[700px]'>
              <div className='date w-full flex items-center justify-start text-white'>
                <div className='mx-6'>
                  <div>Meet our artists</div>
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
                Somos galeristas y curadores de ARTE contemporáneo.
              </div>
              <div className='detail text-center text-white'>
                Descubre como crear tu cuenta en nuestro Marketplace, como confirugar rapidamente tu cartera y que es lo que encontrarás aqui en Konceptual.
              </div>
            </div>
          </div>
          <div className='explorer absolute right-14 bottom-14 text-white cursor-pointer animate-bounceHorizontal'>
            <Link
              key={'explorer'}
              to={'explorer'}
              spy={true}
              smooth={true}
            >
              <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.9984 2.4375C20.3299 2.4375 20.6479 2.5659 20.8823 2.79446C21.1167 3.02302 21.2484 3.33302 21.2484 3.65625V32.4017L29.1134 24.7309C29.3481 24.502 29.6665 24.3735 29.9984 24.3735C30.3304 24.3735 30.6487 24.502 30.8834 24.7309C31.1181 24.9597 31.25 25.2701 31.25 25.5938C31.25 25.9174 31.1181 26.2278 30.8834 26.4566L20.8834 36.2066C20.7673 36.3201 20.6294 36.4102 20.4775 36.4716C20.3256 36.5331 20.1628 36.5647 19.9984 36.5647C19.834 36.5647 19.6712 36.5331 19.5193 36.4716C19.3675 36.4102 19.2295 36.3201 19.1134 36.2066L9.11342 26.4566C8.8787 26.2278 8.74684 25.9174 8.74684 25.5938C8.74684 25.2701 8.8787 24.9597 9.11342 24.7309C9.34813 24.502 9.66648 24.3735 9.99842 24.3735C10.3304 24.3735 10.6487 24.502 10.8834 24.7309L18.7484 32.4017V3.65625C18.7484 3.33302 18.8801 3.02302 19.1145 2.79446C19.349 2.5659 19.6669 2.4375 19.9984 2.4375Z" fill="white" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div id='explorer' className='flex flex-col p-16'>
        <div className='header my-12 px-4 flex items-center justify-start'>
          <div className='title mr-4'>Conoce nuestros artistas</div>
          <svg
            width='131'
            height='1'
            viewBox='0 0 131 1'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='4.37114e-08'
              y1='0.5'
              x2='131'
              y2='0.500011'
              stroke='#232323'
            />
          </svg>
        </div>
        <div className='list-wrapper flex items-center justify-center'>
          <div className='list flex h-full w-full flex-wrap items-center justify-center md:justify-start'>
            {list.map((item, key) => (
              <div
                key={key}
                className='item px-2 sm:w-3/3 my-4 flex flex-col items-center justify-center md:w-2/4 lg:w-1/3'
                onClick={handleView(item)}
              >
                <div className='item-image relative h-[288px] w-[288px]'>
                  <Image src={item.img} layout='fill' objectFit='fill' />
                </div>
                <div className='detail w-[288px] py-4'>
                  <div className='title color-black text-2xl font-bold'>
                    {item.title}
                  </div>
                  <div className='location w-full text-sm text-[grey]'>
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
