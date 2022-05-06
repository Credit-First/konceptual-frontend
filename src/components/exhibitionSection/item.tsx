import Image from 'next/image';
import * as React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import DropdownBtn from '../components/dropdownBtn';
import PannelSection from '../components/pannel';

const Chart = dynamic(() =>
  import('../components/chart'),
  {
    loading: () => <p>...</p>,
    ssr: false
  }
)

const table = [
  {
    no: 'Anonymus2400', date: 'Hace 2 horas', price: 0.25
  },
  {
    no: 'Carlosrodri', date: 'Hace 4 horas', price: 0.25
  },
  {
    no: 'Pochie008', date: 'Hace 5 horas', price: 0.25
  },
  {
    no: 'MiniMie_001', date: 'Hace 7 horas', price: 0.25
  }
]

const chart = {
  options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
};

const eventTable = [
  {
    event: 'Venta', price: 0.25, from: 'BeautyStar', to: 'Anette Black', date: '12/12/2021'
  },
  {
    event: 'Venta', price: 0.25, from: 'BeautyStar', to: 'Anette Black', date: '12/12/2021'
  },
  {
    event: 'Venta', price: 0.25, from: 'BeautyStar', to: 'Anette Black', date: '12/12/2021'
  },
]
export default function ExhibitionItem() {
  const router = useRouter();
  const { item } = router.query;
  
  return (
    <>
      <div className='board p-24 mt-12'>
        <div className='w-full flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center'>
          <div className='left w-3/4 flex flex-col sm:items-center md:items-center lg:items-start justify-center lg:mr-8'>
            <div className='type text-3xl font-bold py-4'>
              Artista: Anette Black
            </div>
            <div className='title'>
              Leonora Carrington: Oneirism in bronze
            </div>
            <div className='detail'>
              Although born in England, Leonora Carrington was Mexican. She is remembered for having captured in her art all the oceans that lived in her imagination. Through surrealist works, the painter created eccentric figures that were mostly sculptures.
            </div>
            <div className='price flex items-center justify-center py-4'>
              <div className='text-slate-300'>
                Actual Price:
              </div>
              <div className='flex items-center justify-center mx-4'>
                <div className=''>
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1527_3323)">
                      <path d="M9.12276 8.64372L4.68003 11.4275L0.234375 8.64372L4.68003 0.820312L9.12276 8.64372ZM4.68003 12.3214L0.234375 9.53765L4.68003 16.1791L9.12569 9.53765L4.68003 12.3214Z" fill="#219653" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1527_3323">
                        <rect width="9.35928" height="15.3588" fill="white" transform="translate(0 0.820557)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='text-lg text-[#219653]'>0.25 ETH</div>
              </div>
            </div>
            <div className='action w-full flex items-center sm:justify-center md:justify-center lg:justify-start'>
              <button className='bg-black rounded-md border-2 border-black text-white py-2 px-6 mx-2 shadow-xl'>Collect</button>
              <button className='bg-yellow-500 rounded-md border-2 border-yellow-500 text-black py-2 px-6 mx-2 shadow-xl'>See 3D Gallery</button>
              <div className='mx-2'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1816_4392)">
                    <path d="M17.8754 4.06252C17.8753 3.10935 18.2104 2.18649 18.8219 1.45539C19.4335 0.724295 20.2827 0.231525 21.2209 0.0632948C22.1591 -0.104936 23.1266 0.0620862 23.9541 0.535138C24.7816 1.00819 25.4164 1.75715 25.7475 2.65098C26.0786 3.54481 26.0848 4.52659 25.7651 5.42455C25.4454 6.32252 24.8202 7.07948 23.9988 7.563C23.1773 8.04653 22.212 8.22583 21.2718 8.06953C20.3315 7.91323 19.4761 7.43129 18.8553 6.70802L7.93856 11.778C8.18952 12.5734 8.18952 13.4267 7.93856 14.222L18.8553 19.292C19.5115 18.5288 20.4278 18.0364 21.4264 17.9102C22.425 17.784 23.4349 18.033 24.2603 18.609C25.0858 19.185 25.6681 20.0469 25.8943 21.0277C26.1205 22.0085 25.9745 23.0384 25.4846 23.9177C24.9948 24.797 24.196 25.4632 23.2429 25.7871C22.2899 26.111 21.2506 26.0695 20.3264 25.6708C19.4022 25.2721 18.6589 24.5445 18.2406 23.6289C17.8223 22.7134 17.7588 21.6752 18.0623 20.7155L7.14556 15.6455C6.60514 16.2753 5.8848 16.7245 5.08145 16.9327C4.27809 17.1408 3.43026 17.0979 2.65201 16.8098C1.87375 16.5217 1.2024 16.0021 0.72828 15.321C0.254157 14.6399 0 13.8299 0 13C0 12.1701 0.254157 11.3602 0.72828 10.6791C1.2024 9.99795 1.87375 9.47838 2.65201 9.19024C3.43026 8.90211 4.27809 8.85923 5.08145 9.06738C5.8848 9.27553 6.60514 9.72472 7.14556 10.3545L18.0623 5.28452C17.938 4.88911 17.875 4.477 17.8754 4.06252Z" fill="#232323" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1816_4392">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className='right w-3/4 flex items-center justify-end'>
            <div className='image-wrap relative w-[480px] h-[330px]'>
              <Image src={'/images/artist/temp/1.png'} layout='fill' objectFit='fill' />
            </div>
          </div>
        </div>
        <div className='date-time border-2 border-slate-400 rounded-lg mt-12 p-8 flex flex-col items-center justify-center'>
          <div className='text-slate-400'>
            The sale ends on March 30, 2022 at 6:27 pm - GMT
          </div>
          <div className='mt-4 flex items-center justify-center'>
            <div className='mx-4 flex flex-col items-center justify-center'>
              <div className='text-3xl font-bold'>01</div>
              <div className='text-slate-400'>DIAS</div>
            </div>
            <div className='mx-4 flex flex-col items-center justify-center'>
              <div className='text-3xl font-bold'>23</div>
              <div className='text-slate-400'>HOURS</div>
            </div>
            <div className='mx-4 flex flex-col items-center justify-center'>
              <div className='text-3xl font-bold'>11</div>
              <div className='text-slate-400'>MINUTES</div>
            </div>
            <div className='mx-4 flex flex-col items-center justify-center'>
              <div className='text-3xl font-bold'>59</div>
              <div className='text-slate-400'>SECONDS</div>
            </div>
          </div>
        </div>
        <div className='flex sm:flex-col md:flex-col lg:flex-row items-start justify-center'>
          <div className='w-full p-8'>
            <PannelSection title={'Latest offers'}>
              <table className='w-full'>
                <thead className='w-full border-b-[1px] border-b-slate-300'>
                  <tr className='w-full'>
                    <th className='p-4 w-4 text-center'>No</th>
                    <th className='p-4 flex-auto text-center'>Date</th>
                    <th className='p-4 flex-auto text-center'>Offer Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    table.map((item: any, key: any) => {
                      return (
                        <tr key={key} className='border-b-[1px] border-b-slate-300'>
                          <td className='p-4 w-4 text-center'>{item.no}</td>
                          <td className='p-4 flex-auto text-center'>{item.date}</td>
                          <td className='p-4 flex-auto text-center flex items-center justify-center'>
                            <div className=''>
                              <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1527_3323)">
                                  <path d="M9.12276 8.64372L4.68003 11.4275L0.234375 8.64372L4.68003 0.820312L9.12276 8.64372ZM4.68003 12.3214L0.234375 9.53765L4.68003 16.1791L9.12569 9.53765L4.68003 12.3214Z" fill="#219653" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1527_3323">
                                    <rect width="9.35928" height="15.3588" fill="white" transform="translate(0 0.820557)" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className='text-lg text-[#219653] px-2'>{item.price} ETH</div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </PannelSection>
          </div>
          <div className='w-full p-8'>
            <PannelSection title={'price history'}>
              <div className='filter'>
                <DropdownBtn
                  title='Filter By'
                  menu={[
                    { name: 'All', onclick: () => console.log('all') },
                    { name: 'Last 7 Days', onclick: () => console.log('last 7 days') },
                    { name: 'Last 6 months', onclick: () => console.log('last 6 months') },
                    { name: 'Last Year', onclick: () => console.log('last year') },
                  ]}
                />
              </div>
              <Chart data={chart} />
            </PannelSection>
          </div>
        </div>

        <div className='flex sm:flex-col md:flex-col lg:flex-row items-start justify-center'>
          <div className='w-full p-8'>
            <PannelSection title={'Additional Information'}>
              <div className='add-info flex flex-col'>
                <div className='flex items-center justify-between py-4'>
                  <div className='left'>
                    Dirección del contrato
                  </div>
                  <div className='right text-sky-500  '>
                    0x49567f...7b5e1
                  </div>
                </div>
                <div className='flex items-center justify-between py-4'>
                  <div className='left'>
                    ID del Token
                  </div>
                  <div className='right text-[grey]'>
                    5856021627633783...
                  </div>
                </div>
                <div className='flex items-center justify-between py-4'>
                  <div className='left'>
                    Blockchain
                  </div>
                  <div className='right text-[grey]'>
                    Ethereum
                  </div>
                </div>
                <div className='flex items-center justify-between py-4'>
                  <div className='left'>
                    Standard del Token
                  </div>
                  <div className='right text-[grey]'>
                    ERC - 1155
                  </div>
                </div>
                <div className='flex items-center justify-between py-4'>
                  <div className='left'>
                    Metadata
                  </div>
                  <div className='right text-[grey]'>
                    Centralizada
                  </div>
                </div>
              </div>
            </PannelSection>
          </div>
          <div className='w-full p-8'>
            <PannelSection title={'Last Activity'}>
              <table className='w-full'>
                <thead className='w-full border-b-[1px] border-b-slate-300'>
                  <tr className='w-full'>
                    <th className='p-4 text-center'>Event</th>
                    <th className='p-4 flex-auto text-center'>Price</th>
                    <th className='p-4 flex-auto text-center'>From</th>
                    <th className='p-4 flex-auto text-center'>To</th>
                    <th className='p-4 flex-auto text-center'>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    eventTable.map((item: any, key: any) => {
                      return (
                        <tr key={key} className='border-b-[1px] border-b-slate-300'>
                          <td className='p-4 w-2 text-center'>
                            <div className='flex items-center justify-center'>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3.50002C1.86739 3.50002 1.74021 3.5527 1.64645 3.64647C1.55268 3.74024 1.5 3.86741 1.5 4.00002C1.5 4.13263 1.55268 4.25981 1.64645 4.35357C1.74021 4.44734 1.86739 4.50002 2 4.50002H3.11L4.422 9.75002C4.5335 10.195 4.932 10.5 5.3905 10.5H11.6255C12.077 10.5 12.4605 10.2 12.579 9.76502L13.875 5.00002H12.828L11.625 9.50002H5.39L4.0785 4.25002C4.02432 4.03464 3.89944 3.84366 3.72384 3.70768C3.54824 3.5717 3.33209 3.49857 3.11 3.50002H2ZM11 10.5C10.1775 10.5 9.5 11.1775 9.5 12C9.5 12.8225 10.1775 13.5 11 13.5C11.8225 13.5 12.5 12.8225 12.5 12C12.5 11.1775 11.8225 10.5 11 10.5ZM6.5 10.5C5.6775 10.5 5 11.1775 5 12C5 12.8225 5.6775 13.5 6.5 13.5C7.3225 13.5 8 12.8225 8 12C8 11.1775 7.3225 10.5 6.5 10.5ZM8 3.50002V6.00002H6.5L8.5 8.00002L10.5 6.00002H9V3.50002H8ZM6.5 11.5C6.782 11.5 7 11.718 7 12C7 12.282 6.782 12.5 6.5 12.5C6.218 12.5 6 12.282 6 12C6 11.718 6.218 11.5 6.5 11.5ZM11 11.5C11.282 11.5 11.5 11.718 11.5 12C11.5 12.282 11.282 12.5 11 12.5C10.718 12.5 10.5 12.282 10.5 12C10.5 11.718 10.718 11.5 11 11.5Z" fill="#232323" />
                              </svg>
                              <div>{item.event}</div>
                            </div>
                          </td>
                          <td className='p-4 text-center font-bold'>
                            <div className='flex items-center justify-center'>
                              <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1527_3323)">
                                  <path d="M9.12276 8.64372L4.68003 11.4275L0.234375 8.64372L4.68003 0.820312L9.12276 8.64372ZM4.68003 12.3214L0.234375 9.53765L4.68003 16.1791L9.12569 9.53765L4.68003 12.3214Z" fill="#219653" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1527_3323">
                                    <rect width="9.35928" height="15.3588" fill="white" transform="translate(0 0.820557)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <div>{item.price}ETH</div>
                            </div>
                          </td>
                          <td className='p-4 text-center text-sky-500'>
                            <div>{item.from}</div>
                          </td>
                          <td className='p-4 text-center text-sky-500'>
                            <div>{item.to}</div>
                          </td>
                          <td className='p-4 text-center'>
                            <div>{item.date}</div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </PannelSection>
          </div>
        </div>
      </div>
    </>
  )
}