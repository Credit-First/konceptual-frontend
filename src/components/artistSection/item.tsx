import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'
import DropdownBtn from '../components/dropdownBtn';

const itemList = [
  { img: '/images/artist/1.png', title: 'Anette Black', location: 'País' },
  { img: '/images/artist/2.png', title: 'Esther Miranda', location: 'País' },
  { img: '/images/artist/3.png', title: 'Black Jack', location: 'País' },
  { img: '/images/artist/1.png', title: 'Anette Black', location: 'País' },
  { img: '/images/artist/2.png', title: 'Esther Miranda', location: 'País' },
  { img: '/images/artist/3.png', title: 'Black Jack', location: 'País' },
  { img: '/images/artist/1.png', title: 'Anette Black', location: 'País' },
  { img: '/images/artist/2.png', title: 'Esther Miranda', location: 'País' },
  { img: '/images/artist/3.png', title: 'Black Jack', location: 'País' },
  { img: '/images/artist/1.png', title: 'Anette Black', location: 'País' },
  { img: '/images/artist/2.png', title: 'Esther Miranda', location: 'País' },
  { img: '/images/artist/3.png', title: 'Black Jack', location: 'País' },
];

export default function ArtistItem() {
  const router = useRouter();
  const { item } = router.query;

  const [pos, setPos] = React.useState(0);
  const [skip, setSkip] = React.useState(2);
  const [searchText, setSearchText] = React.useState('');
  const [list, setList] = React.useState(itemList);

  const tempList = list.filter((item: any, key: any) => {
    if (key >= pos && key <= pos + skip) {
      return item;
    }
  })

  const handleNext = () => {
    if ((pos + skip) > list.length) return;
    setPos(pos + skip);
  }

  const handlePrev = () => {
    if ((pos - skip) < 0) return;
    setPos(pos - skip);
  }

  const handleChangeSearchText = (event: any) => {
    setSearchText(event.target.value);
  }

  const handleSearch = () => {
    const newList = itemList.filter((item: any) => {
      const title = item.title.toLowerCase();
      const search = searchText.toLowerCase();

      if (title.indexOf(search) >= 0) return item;
    })
    setList(newList);
  }

  return (
    <>
      <div className='board flex items-start justify-center w-full h-full mt-24 px-24'>
        <div className='left w-1/2 flex flex-col items-center justify-start m-8'>
          <div className='link w-full flex items-center justify-start text-black mb-4'>
            <div className='pr-4'>
              Personal information
            </div>
            <svg width="135" height="1" viewBox="0 0 135 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-4.37114e-08" y1="0.5" x2="135" y2="0.499988" stroke="#232323" />
            </svg>
          </div>
          <div className='relative h-[350px] w-full my-2'>
            <Image src={'/images/artist/3.png'} layout='fill' objectFit='fill' />
          </div>
          <div className='flex flex-col w-full my-2'>
            <div className='font-bold border-b-[1px] border-b-black'>
              Artist name
            </div>
            <div className="col-span-6 sm:col-span-4 py-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder='Anette Black'
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className='flex flex-col w-full my-2'>
            <div className='font-bold border-b-[1px] border-b-black'>
              Country
            </div>
            <div className="col-span-6 sm:col-span-4 py-2">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder='USA'
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

        </div>
        <div className='right w-full flex flex-col item-center justify-center m-8'>
          <div className='refresh w-full flex items-center justify-start'>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.1003 10.9862H10.8916C10.7037 10.9862 10.5235 11.0609 10.3907 11.1937C10.2579 11.3265 10.1832 11.5067 10.1832 11.6946C10.1832 11.8824 10.2579 12.0626 10.3907 12.1954C10.5235 12.3283 10.7037 12.4029 10.8916 12.4029H12.5916C11.8102 13.2194 10.8026 13.7837 9.69814 14.0231C8.59368 14.2626 7.44284 14.1664 6.39349 13.7468C5.34414 13.3272 4.44422 12.6034 3.80936 11.6685C3.17449 10.7335 2.83369 9.63011 2.83073 8.49999C2.83073 8.31213 2.7561 8.13196 2.62326 7.99912C2.49042 7.86628 2.31026 7.79166 2.1224 7.79166C1.93453 7.79166 1.75437 7.86628 1.62153 7.99912C1.48869 8.13196 1.41406 8.31213 1.41406 8.49999C1.41781 9.88322 1.82647 11.2351 2.58961 12.3888C3.35276 13.5424 4.43699 14.4474 5.70851 14.992C6.98002 15.5366 8.38316 15.697 9.74478 15.4534C11.1064 15.2098 12.3669 14.5729 13.3707 13.6212V14.875C13.3707 15.0629 13.4454 15.243 13.5782 15.3759C13.711 15.5087 13.8912 15.5833 14.0791 15.5833C14.2669 15.5833 14.4471 15.5087 14.5799 15.3759C14.7128 15.243 14.7874 15.0629 14.7874 14.875V11.6875C14.7856 11.5045 14.7131 11.3293 14.585 11.1985C14.457 11.0678 14.2832 10.9917 14.1003 10.9862ZM8.4974 1.41666C6.6815 1.42184 4.93695 2.12422 3.62406 3.37874V2.12499C3.62406 1.93713 3.54943 1.75696 3.4166 1.62412C3.28376 1.49128 3.10359 1.41666 2.91573 1.41666C2.72787 1.41666 2.5477 1.49128 2.41486 1.62412C2.28202 1.75696 2.2074 1.93713 2.2074 2.12499V5.31249C2.2074 5.50035 2.28202 5.68052 2.41486 5.81336C2.5477 5.9462 2.72787 6.02082 2.91573 6.02082H6.10323C6.29109 6.02082 6.47126 5.9462 6.6041 5.81336C6.73693 5.68052 6.81156 5.50035 6.81156 5.31249C6.81156 5.12463 6.73693 4.94446 6.6041 4.81162C6.47126 4.67878 6.29109 4.60416 6.10323 4.60416H4.40323C5.18414 3.78806 6.19113 3.22397 7.29493 2.98427C8.39873 2.74458 9.54898 2.84023 10.598 3.25893C11.6471 3.67764 12.5471 4.40031 13.1825 5.33417C13.8179 6.26803 14.1597 7.37047 14.1641 8.49999C14.1641 8.68785 14.2387 8.86802 14.3715 9.00086C14.5044 9.1337 14.6845 9.20832 14.8724 9.20832C15.0603 9.20832 15.2404 9.1337 15.3733 9.00086C15.5061 8.86802 15.5807 8.68785 15.5807 8.49999C15.5807 7.56979 15.3975 6.64871 15.0415 5.78932C14.6856 4.92993 14.1638 4.14907 13.5061 3.49132C12.8483 2.83357 12.0675 2.31181 11.2081 1.95584C10.3487 1.59987 9.42759 1.41666 8.4974 1.41666Z" fill="#71B62F" />
            </svg>
            <div className='text-green-500 ml-2'>
              Changes saved successfully
            </div>
          </div>
          <div className='text-2xl font-bold border-b-[1px] border-b-black py-2 my-4'>
            Artist name
          </div>
          <div className='w-full rounded-md border-[1px] border-slate-400 text-slate-500 p-6 my-4'>
            <div className=''>
              Hello everyone, my name is Anette Black, I am a digital artist graduated from the University of Plastic Arts of Valencia. I invite you to learn about my works and do not forget to follow me on my social networks.
              Thank you! :)
            </div>
            <div className='mt-6'>
              Hello everyone, my name is Anette Black, I am a digital artist graduated from the University of Plastic Arts of Valencia. I invite you to learn about my works and do not forget to follow me on my social networks.
              Thank you! :)
            </div>
          </div>
          <div className='text-2xl font-bold border-b-[1px] border-b-black py-2 my-4'>
            Social media
          </div>
          <div className='w-full flex items-center justify-between py-2'>
            <div className='logo flex items-center justify-center'>
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1529_2561)">
                  <path d="M9.07471 27.1875C19.9574 27.1875 25.9114 17.8084 25.9114 9.67739C25.9114 9.41372 25.9058 9.14418 25.8945 8.88051C27.0527 8.00939 28.0523 6.93038 28.8462 5.69418C27.7675 6.19331 26.6222 6.51929 25.4494 6.66098C26.6842 5.8912 27.6088 4.6819 28.0518 3.25727C26.8901 3.97326 25.6197 4.47833 24.295 4.75082C23.4024 3.76451 22.2223 3.11146 20.9371 2.89262C19.6519 2.67379 18.3332 2.90137 17.1848 3.54018C16.0364 4.17899 15.1224 5.19344 14.584 6.4267C14.0455 7.65996 13.9128 9.04333 14.2062 10.3629C11.854 10.2402 9.55281 9.60469 7.4519 8.49768C5.35099 7.39068 3.49723 5.83686 2.01078 3.93696C1.25529 5.29162 1.02411 6.89462 1.36422 8.42018C1.70433 9.94573 2.59022 11.2794 3.84183 12.15C2.9022 12.119 1.98314 11.8559 1.16061 11.3825V11.4586C1.15977 12.8802 1.63233 14.2583 2.49797 15.3585C3.36361 16.4588 4.5689 17.2133 5.90895 17.4938C5.03853 17.7415 4.12498 17.7776 3.23899 17.5993C3.61713 18.8219 4.35285 19.8912 5.34347 20.658C6.3341 21.4248 7.53019 21.8508 8.76484 21.8766C6.66878 23.5889 4.07954 24.5177 1.41414 24.5133C0.941451 24.5126 0.46923 24.4824 0 24.4231C2.70776 26.2297 5.85761 27.1893 9.07471 27.1875Z" fill="#232323" />
                </g>
                <defs>
                  <clipPath id="clip0_1529_2561">
                    <rect width="28.8462" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className='name ml-4'>
                Twitter
              </div>
            </div>
            <div className='link flex items-center justify-end'>
              <div className='mr-4'>www.twitter.com</div>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49765 6.50001L11.9601 2.04459C12.0935 1.91121 12.1685 1.73031 12.1685 1.54168C12.1685 1.35305 12.0935 1.17214 11.9601 1.03876C11.8268 0.905377 11.6459 0.830444 11.4572 0.830444C11.2686 0.830444 11.0877 0.905377 10.9543 1.03876L6.4989 5.50126L2.04348 1.03876C1.9101 0.905377 1.7292 0.830445 1.54057 0.830445C1.35194 0.830445 1.17103 0.905377 1.03765 1.03876C0.904267 1.17214 0.829334 1.35305 0.829334 1.54168C0.829334 1.73031 0.904267 1.91121 1.03765 2.04459L5.50015 6.50001L1.03765 10.9554C0.971258 11.0213 0.918562 11.0996 0.882601 11.1859C0.84664 11.2723 0.828125 11.3648 0.828125 11.4583C0.828125 11.5519 0.84664 11.6444 0.882601 11.7308C0.918562 11.8171 0.971258 11.8954 1.03765 11.9613C1.1035 12.0276 1.18184 12.0803 1.26816 12.1163C1.35447 12.1523 1.44706 12.1708 1.54057 12.1708C1.63407 12.1708 1.72666 12.1523 1.81297 12.1163C1.89929 12.0803 1.97763 12.0276 2.04348 11.9613L6.4989 7.49876L10.9543 11.9613C11.0202 12.0276 11.0985 12.0803 11.1848 12.1163C11.2711 12.1523 11.3637 12.1708 11.4572 12.1708C11.5507 12.1708 11.6433 12.1523 11.7296 12.1163C11.816 12.0803 11.8943 12.0276 11.9601 11.9613C12.0265 11.8954 12.0792 11.8171 12.1152 11.7308C12.1512 11.6444 12.1697 11.5519 12.1697 11.4583C12.1697 11.3648 12.1512 11.2723 12.1152 11.1859C12.0792 11.0996 12.0265 11.0213 11.9601 10.9554L7.49765 6.50001Z" fill="#A8A7A7" />
              </svg>
            </div>
          </div>

          <div className='w-full flex items-center justify-between py-2'>
            <div className='logo flex items-center justify-center'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0313 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17188 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17188 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4688 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7813 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8105 1.17188 24.8262 0.791016C23.8711 0.421875 22.7813 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z" fill="#232323" />
                <path d="M15.002 7.29492C10.748 7.29492 7.29688 10.7461 7.29688 15C7.29688 19.2539 10.748 22.7051 15.002 22.7051C19.2559 22.7051 22.707 19.2539 22.707 15C22.707 10.7461 19.2559 7.29492 15.002 7.29492ZM15.002 19.998C12.2422 19.998 10.0039 17.7598 10.0039 15C10.0039 12.2402 12.2422 10.002 15.002 10.002C17.7617 10.002 20 12.2402 20 15C20 17.7598 17.7617 19.998 15.002 19.998Z" fill="#232323" />
                <path d="M24.8086 6.99018C24.8086 7.98627 24 8.78901 23.0098 8.78901C22.0137 8.78901 21.2109 7.98041 21.2109 6.99018C21.2109 5.99408 22.0195 5.19135 23.0098 5.19135C24 5.19135 24.8086 5.99994 24.8086 6.99018Z" fill="#232323" />
              </svg>
              <div className='name ml-4'>
                Instagram
              </div>
            </div>
            <div className='link flex items-center justify-end'>
              <div className='mr-4'>www.instagram.com</div>
              <div className=''>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49765 6.50001L11.9601 2.04459C12.0935 1.91121 12.1685 1.73031 12.1685 1.54168C12.1685 1.35305 12.0935 1.17214 11.9601 1.03876C11.8268 0.905377 11.6459 0.830444 11.4572 0.830444C11.2686 0.830444 11.0877 0.905377 10.9543 1.03876L6.4989 5.50126L2.04348 1.03876C1.9101 0.905377 1.7292 0.830445 1.54057 0.830445C1.35194 0.830445 1.17103 0.905377 1.03765 1.03876C0.904267 1.17214 0.829334 1.35305 0.829334 1.54168C0.829334 1.73031 0.904267 1.91121 1.03765 2.04459L5.50015 6.50001L1.03765 10.9554C0.971258 11.0213 0.918562 11.0996 0.882601 11.1859C0.84664 11.2723 0.828125 11.3648 0.828125 11.4583C0.828125 11.5519 0.84664 11.6444 0.882601 11.7308C0.918562 11.8171 0.971258 11.8954 1.03765 11.9613C1.1035 12.0276 1.18184 12.0803 1.26816 12.1163C1.35447 12.1523 1.44706 12.1708 1.54057 12.1708C1.63407 12.1708 1.72666 12.1523 1.81297 12.1163C1.89929 12.0803 1.97763 12.0276 2.04348 11.9613L6.4989 7.49876L10.9543 11.9613C11.0202 12.0276 11.0985 12.0803 11.1848 12.1163C11.2711 12.1523 11.3637 12.1708 11.4572 12.1708C11.5507 12.1708 11.6433 12.1523 11.7296 12.1163C11.816 12.0803 11.8943 12.0276 11.9601 11.9613C12.0265 11.8954 12.0792 11.8171 12.1152 11.7308C12.1512 11.6444 12.1697 11.5519 12.1697 11.4583C12.1697 11.3648 12.1512 11.2723 12.1152 11.1859C12.0792 11.0996 12.0265 11.0213 11.9601 10.9554L7.49765 6.50001Z" fill="#A8A7A7" />
                </svg>
              </div>
            </div>
          </div>

          <div className='w-full flex items-center justify-between py-2'>
            <div className='logo flex items-center justify-center'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.125 2.5H3.875C3.51033 2.5 3.16059 2.64487 2.90273 2.90273C2.64487 3.16059 2.5 3.51033 2.5 3.875V26.125C2.5 26.3056 2.53557 26.4844 2.60467 26.6512C2.67377 26.818 2.77505 26.9696 2.90273 27.0973C3.03041 27.225 3.18199 27.3262 3.34881 27.3953C3.51563 27.4644 3.69443 27.5 3.875 27.5H15.85V17.8125H12.6V14.0625H15.85V11.25C15.7827 10.5897 15.8606 9.92266 16.0784 9.29567C16.2962 8.66868 16.6485 8.09693 17.1106 7.62051C17.5727 7.1441 18.1335 6.77455 18.7535 6.5378C19.3736 6.30104 20.038 6.20281 20.7 6.25C21.6729 6.24401 22.6454 6.2941 23.6125 6.4V9.775H21.625C20.05 9.775 19.75 10.525 19.75 11.6125V14.025H23.5L23.0125 17.775H19.75V27.5H26.125C26.3056 27.5 26.4844 27.4644 26.6512 27.3953C26.818 27.3262 26.9696 27.225 27.0973 27.0973C27.225 26.9696 27.3262 26.818 27.3953 26.6512C27.4644 26.4844 27.5 26.3056 27.5 26.125V3.875C27.5 3.69443 27.4644 3.51563 27.3953 3.34881C27.3262 3.18199 27.225 3.03041 27.0973 2.90273C26.9696 2.77505 26.818 2.67377 26.6512 2.60467C26.4844 2.53557 26.3056 2.5 26.125 2.5Z" fill="black" />
              </svg>
              <div className='name ml-4'>
                Facebook
              </div>
            </div>
            <div className='link flex items-center justify-end'>
              <button className='flex items-center justify-center bg-black rounded-md border-2 border-black text-white py-2 px-6 mx-2 shadow-xl'>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.78906 4.45835H5.53906V1.20835C5.53906 1.06469 5.48199 0.92692 5.38041 0.825338C5.27883 0.723755 5.14105 0.666687 4.9974 0.666687C4.85374 0.666687 4.71596 0.723755 4.61438 0.825338C4.5128 0.92692 4.45573 1.06469 4.45573 1.20835V4.45835H1.20573C1.06207 4.45835 0.924295 4.51542 0.822713 4.617C0.721131 4.71859 0.664063 4.85636 0.664062 5.00002C0.664063 5.14368 0.721131 5.28145 0.822713 5.38304C0.924295 5.48462 1.06207 5.54169 1.20573 5.54169H4.45573V8.79169C4.45573 8.93535 4.5128 9.07312 4.61438 9.1747C4.71596 9.27629 4.85374 9.33335 4.9974 9.33335C5.14105 9.33335 5.27883 9.27629 5.38041 9.1747C5.48199 9.07312 5.53906 8.93535 5.53906 8.79169V5.54169H8.78906C8.93272 5.54169 9.0705 5.48462 9.17208 5.38304C9.27366 5.28145 9.33073 5.14368 9.33073 5.00002C9.33073 4.85636 9.27366 4.71859 9.17208 4.617C9.0705 4.51542 8.93272 4.45835 8.78906 4.45835Z" fill="white" />
                </svg>
                <div className=''>Add link</div>
              </button>
            </div>
          </div>

          <div className='w-full flex items-center justify-between py-2'>
            <div className='logo flex items-center justify-center'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5906 2.49999H4.41563C4.1776 2.49669 3.94125 2.5403 3.72008 2.62835C3.49891 2.71639 3.29725 2.84714 3.12662 3.01313C2.95599 3.17912 2.81973 3.3771 2.72561 3.59575C2.6315 3.81441 2.58139 4.04946 2.57812 4.28749V25.7125C2.58139 25.9505 2.6315 26.1856 2.72561 26.4042C2.81973 26.6229 2.95599 26.8209 3.12662 26.9869C3.29725 27.1528 3.49891 27.2836 3.72008 27.3716C3.94125 27.4597 4.1776 27.5033 4.41563 27.5H25.5906C25.8287 27.5033 26.065 27.4597 26.2862 27.3716C26.5073 27.2836 26.709 27.1528 26.8796 26.9869C27.0503 26.8209 27.1865 26.6229 27.2806 26.4042C27.3747 26.1856 27.4249 25.9505 27.4281 25.7125V4.28749C27.4249 4.04946 27.3747 3.81441 27.2806 3.59575C27.1865 3.3771 27.0503 3.17912 26.8796 3.01313C26.709 2.84714 26.5073 2.71639 26.2862 2.62835C26.065 2.5403 25.8287 2.49669 25.5906 2.49999ZM10.1156 23.425H6.36563V12.175H10.1156V23.425ZM8.24063 10.6C7.72345 10.6 7.22746 10.3945 6.86177 10.0288C6.49607 9.66315 6.29063 9.16716 6.29063 8.64999C6.29063 8.13282 6.49607 7.63683 6.86177 7.27113C7.22746 6.90544 7.72345 6.69999 8.24063 6.69999C8.51524 6.66885 8.79335 6.69606 9.05672 6.77985C9.32009 6.86363 9.5628 7.0021 9.76895 7.18619C9.97509 7.37028 10.14 7.59584 10.253 7.84809C10.3659 8.10035 10.4243 8.37361 10.4243 8.64999C10.4243 8.92637 10.3659 9.19963 10.253 9.45189C10.14 9.70414 9.97509 9.9297 9.76895 10.1138C9.5628 10.2979 9.32009 10.4364 9.05672 10.5201C8.79335 10.6039 8.51524 10.6311 8.24063 10.6ZM23.6406 23.425H19.8906V17.3875C19.8906 15.875 19.3531 14.8875 17.9906 14.8875C17.569 14.8906 17.1584 15.0228 16.8142 15.2665C16.47 15.5101 16.2087 15.8533 16.0656 16.25C15.9678 16.5438 15.9254 16.8532 15.9406 17.1625V23.4125H12.1906C12.1906 23.4125 12.1906 13.1875 12.1906 12.1625H15.9406V13.75C16.2813 13.1589 16.7768 12.6719 17.3737 12.3415C17.9706 12.0111 18.6463 11.8498 19.3281 11.875C21.8281 11.875 23.6406 13.4875 23.6406 16.95V23.425Z" fill="#232323" />
              </svg>
              <div className='name ml-4'>
                Linkedin
              </div>
            </div>
            <div className='link flex items-center justify-end'>
              <button className='flex items-center justify-center bg-black rounded-md border-2 border-black text-white py-2 px-6 mx-2 shadow-xl'>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.78906 4.45835H5.53906V1.20835C5.53906 1.06469 5.48199 0.92692 5.38041 0.825338C5.27883 0.723755 5.14105 0.666687 4.9974 0.666687C4.85374 0.666687 4.71596 0.723755 4.61438 0.825338C4.5128 0.92692 4.45573 1.06469 4.45573 1.20835V4.45835H1.20573C1.06207 4.45835 0.924295 4.51542 0.822713 4.617C0.721131 4.71859 0.664063 4.85636 0.664062 5.00002C0.664063 5.14368 0.721131 5.28145 0.822713 5.38304C0.924295 5.48462 1.06207 5.54169 1.20573 5.54169H4.45573V8.79169C4.45573 8.93535 4.5128 9.07312 4.61438 9.1747C4.71596 9.27629 4.85374 9.33335 4.9974 9.33335C5.14105 9.33335 5.27883 9.27629 5.38041 9.1747C5.48199 9.07312 5.53906 8.93535 5.53906 8.79169V5.54169H8.78906C8.93272 5.54169 9.0705 5.48462 9.17208 5.38304C9.27366 5.28145 9.33073 5.14368 9.33073 5.00002C9.33073 4.85636 9.27366 4.71859 9.17208 4.617C9.0705 4.51542 8.93272 4.45835 8.78906 4.45835Z" fill="white" />
                </svg>
                <div className=''>Add link</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='sub-board flex flex-col items-start justify-center w-full h-full px-24'>
        <div className='w-full text-xl font-bold p-8'>published works</div>
        <div className='action w-full flex items-center justify-between p-8'>
          <div className="flex items-center justify-center">
            <div className="flex border-2 rounded">
              <input type="text" className="px-4 py-2 w-80 border-transparent focus:border-transparent" placeholder="Search..." value={searchText} onChange={handleChangeSearchText} />
              <button className="flex items-center justify-center px-4 border-l"
                onClick={handleSearch}>
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>
          <div className='w-full flex items-center justify-end'>
            <button className='flex items-center justify-center bg-black rounded-md border-2 border-black text-white py-2 px-6 mx-2 shadow-xl'>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.78906 4.45835H5.53906V1.20835C5.53906 1.06469 5.48199 0.92692 5.38041 0.825338C5.27883 0.723755 5.14105 0.666687 4.9974 0.666687C4.85374 0.666687 4.71596 0.723755 4.61438 0.825338C4.5128 0.92692 4.45573 1.06469 4.45573 1.20835V4.45835H1.20573C1.06207 4.45835 0.924295 4.51542 0.822713 4.617C0.721131 4.71859 0.664063 4.85636 0.664062 5.00002C0.664063 5.14368 0.721131 5.28145 0.822713 5.38304C0.924295 5.48462 1.06207 5.54169 1.20573 5.54169H4.45573V8.79169C4.45573 8.93535 4.5128 9.07312 4.61438 9.1747C4.71596 9.27629 4.85374 9.33335 4.9974 9.33335C5.14105 9.33335 5.27883 9.27629 5.38041 9.1747C5.48199 9.07312 5.53906 8.93535 5.53906 8.79169V5.54169H8.78906C8.93272 5.54169 9.0705 5.48462 9.17208 5.38304C9.27366 5.28145 9.33073 5.14368 9.33073 5.00002C9.33073 4.85636 9.27366 4.71859 9.17208 4.617C9.0705 4.51542 8.93272 4.45835 8.78906 4.45835Z" fill="white" />
              </svg>
              <div className=''>Add link</div>
            </button>
            <div className='filter flex'>
              <DropdownBtn
                title='Filter By'
                menu={[
                  { name: 'From A to Z', onclick: () => { } },
                  { name: 'From Z to A', onclick: () => { } },
                  { name: 'More recent', onclick: () => { } },
                  { name: 'See work', onclick: () => { } },
                  { name: 'Edit work', onclick: () => { } },
                ]}
              />
            </div>
          </div>
        </div>
        <div className='list-wrapper w-full flex flex-col items-center justify-center'>
          <div className='list flex h-full w-full flex-wrap items-center justify-center md:justify-start'>
            {
              tempList.length > 0 ?
                tempList.map((item, key) => (
                  <div
                    key={key}
                    className='item px-2 sm:w-3/3 my-4 flex flex-col items-center justify-center md:w-2/4 lg:w-1/3'
                  >
                    <div className='item-image relative h-[340px] w-[288px]'>
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
                )) : (
                  <div className='w-full h-[340px] flex items-center justify-center'>
                    <div>There is no item.</div>
                  </div>
                )}
          </div>
          <div className='pagination w-full flex items-center justify-end my-6'>
            <div className='flex cursor-pointer'>
              <div onClick={handlePrev}>
                <ArrowLeftIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </div>
              <div onClick={handleNext}>
                <ArrowRightIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}