import * as React from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

const list = [
  { id: 1, img: '/images/artist/1.png', title: 'Anette Black', price: '0.10 ETH' },
  { id: 2, img: '/images/artist/2.png', title: 'Esther Miranda', price: '0.10 ETH' },
  { id: 3, img: '/images/artist/3.png', title: 'Black Jack', price: '0.10 ETH' },
  { id: 4, img: '/images/artist/1.png', title: 'Anette Black', price: '0.10 ETH' },
  { id: 5, img: '/images/artist/2.png', title: 'Esther Miranda', price: '0.10 ETH' },
  { id: 6, img: '/images/artist/3.png', title: 'Black Jack', price: '0.10 ETH' },
];

export default function ExhibitionSection() {
  return (
    <>
      {/* <iframe src='https://storage.net-fs.com/hosting/2727323/454/#media=1&yaw=135.04&pitch=-19.12&son=floor_00' width={'100%'} height={'100%'}></iframe> */}
      {/* <iframe src=' https://alt.3dvista.com/samples/real_estate_virtual_tour.html' width={'100%'} height={'100%'}></iframe> */}

      <div className='section h-screen w-full'><div className='landing-section h-full w-full'>
        <div className='background-image absolute top-0 left-0 h-full w-full bg-[url("/images/landing/gallery.png")] bg-cover bg-center'></div>
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
        <div className='left w-1/2'>
          <div className='title text-3xl font-bold'>
            About me
          </div>
          <div className='content py-8'>
            Hello everyone, my name is Anette Black, I am a digital artist graduated from the University of Plastic Arts of Valencia. I invite you to learn about my works and do not forget to follow me on my social networks.
            Thank you! :)
          </div>
          <div className='content'>
            Hello everyone, my name is Anette Black, I am a digital artist graduated from the University of Plastic Arts of Valencia. I invite you to learn about my works and do not forget to follow me on my social networks.
            Thank you! :)
          </div>
        </div>
        <div className='right w-1/2 flex items-start justify-center'>
          <div className='w-full flex flex-col items-start justify-start ml-8'>
            <div className='title text-3xl font-bold'>
              Redes Sociales
            </div>
            <div className='flex my-8'>
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1521_3148)">
                  <path d="M9.07471 27.1874C19.9574 27.1874 25.9114 17.8083 25.9114 9.67727C25.9114 9.41359 25.9058 9.14406 25.8945 8.88039C27.0527 8.00927 28.0523 6.93026 28.8462 5.69406C27.7675 6.19319 26.6222 6.51917 25.4494 6.66086C26.6842 5.89107 27.6088 4.68178 28.0518 3.25715C26.8901 3.97314 25.6197 4.4782 24.295 4.7507C23.4024 3.76439 22.2223 3.11133 20.9371 2.8925C19.6519 2.67367 18.3332 2.90125 17.1848 3.54006C16.0364 4.17887 15.1224 5.19332 14.584 6.42658C14.0455 7.65984 13.9128 9.04321 14.2062 10.3628C11.854 10.2401 9.55281 9.60457 7.4519 8.49756C5.35099 7.39055 3.49723 5.83674 2.01078 3.93684C1.25529 5.29149 1.02411 6.8945 1.36422 8.42005C1.70433 9.94561 2.59022 11.2792 3.84183 12.1499C2.9022 12.1189 1.98314 11.8558 1.16061 11.3823V11.4585C1.15977 12.8801 1.63233 14.2582 2.49797 15.3584C3.36361 16.4586 4.5689 17.2131 5.90895 17.4937C5.03853 17.7414 4.12498 17.7774 3.23899 17.5991C3.61713 18.8217 4.35285 19.8911 5.34347 20.6579C6.3341 21.4247 7.53019 21.8507 8.76484 21.8765C6.66878 23.5888 4.07954 24.5176 1.41414 24.5132C0.941451 24.5125 0.46923 24.4823 0 24.423C2.70776 26.2296 5.85761 27.1892 9.07471 27.1874Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1521_3148">
                    <rect width="28.8462" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className=''>
                AnetteBlack
              </div>
            </div>
            <div className='flex my-8'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0313 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17188 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17188 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4688 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7813 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8105 1.17188 24.8262 0.791016C23.8711 0.421875 22.7813 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z" fill="white" />
                <path d="M15.002 7.29492C10.748 7.29492 7.29688 10.7461 7.29688 15C7.29688 19.2539 10.748 22.7051 15.002 22.7051C19.2559 22.7051 22.707 19.2539 22.707 15C22.707 10.7461 19.2559 7.29492 15.002 7.29492ZM15.002 19.998C12.2422 19.998 10.0039 17.7598 10.0039 15C10.0039 12.2402 12.2422 10.002 15.002 10.002C17.7617 10.002 20 12.2402 20 15C20 17.7598 17.7617 19.998 15.002 19.998Z" fill="white" />
                <path d="M24.8086 6.99024C24.8086 7.98633 24 8.78907 23.0098 8.78907C22.0137 8.78907 21.2109 7.98047 21.2109 6.99024C21.2109 5.99414 22.0195 5.19141 23.0098 5.19141C24 5.19141 24.8086 6 24.8086 6.99024Z" fill="white" />
              </svg>
              <div className=''>
                @AnettesPlace_
              </div>
            </div>
          </div>
          <div className='w-full h-full flex items-center justify-center cursor-pointerfle'>
            <div className='bg-white text-black rounded-lg border-2 py-4 px-6 text-sm focus:outline-none focus:ring-2'>
              <button className='font-bold'>Go to the 3D Gallery</button>
            </div>
          </div>
        </div>
      </div>

      <div className='video relative w-full h-[475px]'>
        {/* <Image src={'/images/exhibition/1.png'} layout='fill' objectFit='fill' /> */}
        <iframe src=' https://alt.3dvista.com/samples/real_estate_virtual_tour.html' width={'100%'} height={'100%'}></iframe>
        <div className='absolute top-12 left-16 flex items-center justify-start text-white'>
          <div className='mx-6'>
            <div>Learn more about the artist</div>
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
        {/* <div className='play-video absolute w-full h-full m-auto flex items-center justify-center'>
          <svg width="100" height="95" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5.9375C25.8398 5.9375 6.25 24.5479 6.25 47.5C6.25 70.4521 25.8398 89.0625 50 89.0625C74.1602 89.0625 93.75 70.4521 93.75 47.5C93.75 24.5479 74.1602 5.9375 50 5.9375ZM50 82.0117C29.9414 82.0117 13.6719 66.5557 13.6719 47.5C13.6719 28.4443 29.9414 12.9883 50 12.9883C70.0586 12.9883 86.3281 28.4443 86.3281 47.5C86.3281 66.5557 70.0586 82.0117 50 82.0117Z" fill="white" />
            <path d="M70.2539 46.3032L41.3379 26.3569C41.106 26.1954 40.8314 26.0983 40.5448 26.0763C40.2582 26.0543 39.9708 26.1084 39.7146 26.2325C39.4584 26.3566 39.2436 26.5458 39.0939 26.7791C38.9443 27.0124 38.8658 27.2805 38.8672 27.5537V67.4463C38.8672 68.6616 40.3125 69.3481 41.3379 68.6431L70.2539 48.6968C70.4536 48.5601 70.6162 48.3803 70.7283 48.1723C70.8404 47.9642 70.8989 47.7338 70.8989 47.5C70.8989 47.2662 70.8404 47.0358 70.7283 46.8277C70.6162 46.6197 70.4536 46.4399 70.2539 46.3032ZM45.0977 58.7349V36.2651L61.377 47.5L45.0977 58.7349Z" fill="white" />
          </svg>
        </div> */}
      </div>
      
      <div className='flex flex-col p-16'>
        <div className='header my-12 px-4 flex items-center justify-start'>
          <div className='title mr-4'>artist's works</div>
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
                // onClick={handleView(item)}
              >
                <div className='item-image relative h-[288px] w-[288px]'>
                  <Image src={item.img} layout='fill' objectFit='fill' />
                </div>
                <div className='detail w-[288px] py-4'>
                  <div className='title color-black text-2xl font-bold'>
                    {item.title}
                  </div>
                  <div className='location w-full text-sm text-[green]'>
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='video relative w-full h-[475px]'>
        {/* <Image src={'/images/exhibition/1.png'} layout='fill' objectFit='fill' /> */}
        <iframe src='https://storage.net-fs.com/hosting/2727323/396/index.htm' width={'100%'} height={'100%'}></iframe>
        <div className='absolute top-24 left-12 flex items-center justify-start text-white'>
          <div className=''>
            <div>Discover the building</div>
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
      </div>
    </>
  );
}
