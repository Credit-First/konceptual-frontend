import Image from 'next/image';
import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const list = [
  { img: '/images/exhibition/temp/1.png', date: 'From March 24 to April 8', title: 'Leonora Carrington: Oneirism in bronze', detail: 'Although born in England, Leonora Carrington was Mexican. She is remembered for having captured in her art all the oceans that lived in her imagination. Through surrealist works, the painter created eccentric figures that were mostly sculptures.' },
  { img: '/images/exhibition/temp/2.png', date: 'From March 24 to April 8', title: 'Melancholia', detail: 'Melancholy is perhaps one of the most present feelings in art. For this reason, the MUNAL decided to curate pure Mexican works that alluded to this concept. From New Spain to contemporary pieces, the museum took a tour of sad and distressing scenes.' },
  { img: '/images/exhibition/temp/1.png', date: 'From March 24 to April 8', title: 'Leonora Carrington: Oneirism in bronze', detail: 'Although born in England, Leonora Carrington was Mexican. She is remembered for having captured in her art all the oceans that lived in her imagination. Through surrealist works, the painter created eccentric figures that were mostly sculptures.' },
  { img: '/images/exhibition/temp/2.png', date: 'From March 24 to April 8', title: 'Melancholia', detail: 'Melancholy is perhaps one of the most present feelings in art. For this reason, the MUNAL decided to curate pure Mexican works that alluded to this concept. From New Spain to contemporary pieces, the museum took a tour of sad and distressing scenes.' },
];

export default function ExhibitionMainSection() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleSelectedTab = (index: any) => () => {
    setSelectedTab(index);
  }

  const handleView = (item: any) => () => {
    router.push({
      pathname: `/exhibition/item`,
      query: { item: item },
    })
  }
  return (
    <>
      <div className='flex flex-col p-4 md:p-16 lg:p-16 mt-4'>
        <div className='header mt-12 flex items-center justify-center'>
          <ul className='tab flex w-5/6'>
            <li
              className={clsx('m-2 p-2 border-b-2 font-bold', selectedTab == 0 ? 'border-b-black' : 'border-b-transparent')}
              onClick={handleSelectedTab(0)}
            >
              current
            </li>
            <li
              className={clsx('m-2 p-2 border-b-2 font-bold', selectedTab == 1 ? 'border-b-black' : 'border-b-transparent')}
              onClick={handleSelectedTab(0)}
            >
              passed
            </li>
          </ul>
        </div>
        <div className='list-wrapper flex items-center justify-center'>
          <div className='list flex-col h-full w-full items-center justify-center'>
            {
              list.map((item: any, key: any) => {
                const row_reverse = key % 2 == 0 ? 'flex-row-reverse' : 'flex-row';
                return (
                  <div key={key} className={`item w-full flex flex-col sm:flex-col md:flex-col lg:${row_reverse} items-center justify-center p-2 md:p-4 lg:p-8 sm:mb-12`}
                    onClick={(handleView(item))}
                  >
                    <div className='left w-full p-2 md:p-4 lg:p-12 flex items-center justify-center'>
                      <div className='image relative w-[550px] h-[410px]'>
                        <Image src={item.img} layout='fill' objectFit='fill' />
                      </div>
                    </div>
                    <div className='right w-full p-2 md:p-4 lg:p-12 sm:pt-2 flex flex-col items-center justify-center'>
                      <div className='date text-[grey] text-center md:text-left lg:text-left'>{item.date}</div>
                      <div className='title text-5xl font-bold py-6 sm:text-center'>{item.title}</div>
                      <div className='detail text-[grey] sm:text-center sm:pb-2'>{item.detail}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
