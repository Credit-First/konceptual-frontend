import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';

export default function MarketplaceSection() {
  return (
    <>
      <div className='section h-screen w-full'>
        <div className='landing-section h-full w-full'>
          <div className='background-image absolute top-0 left-0 h-full w-full bg-[url("/images/article/marketplace/landing.png")] bg-cover bg-center'></div>
          <div className='background-color absolute top-0 left-0 h-full w-full bg-black bg-cover bg-center opacity-60'></div>
          <div className='center-title mx-auto my-auto absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center'>
            <div className='w-4/5 flex flex-col items-start'>
              <div className='date flex items-center justify-center text-white'>
                <div className='py-6'>Sobre NFTs</div>
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
                ¿Qué es un Marketplace de NFTs?
              </div>
              <div className='detail text-left text-white'>
                <div>Si no conoces mucho sobre los Marketplace de NFTs, aquí te</div>
                <div>comentamos un poco de que tratan así como la terminología</div>
                <div>comúnmente utilizada.</div>
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
                Non-fungible tokens
              </div>
              <div className='content'>
                Conocidos en español como “Tokens no fungibles” representan activos únicos digitales, que equivalen a certificados digitales de autenticidad de la propiedad de un elemento digital, estos son verificados a través de una Blockchain o “cadena de bloques” la cual permite almacenar dicho elemento y poder venderlo en el mndo digital.
              </div>
              <div className='w-full flex items-center justify-center'>
                <div className='relative w-3/4 h-[400px] my-8'>
                  <Image src={'/images/article/marketplace/1.png'} layout='fill' objectFit='fill' />
                </div>
              </div>
              <div className=''>
                Aunque pueden ser confundidos con las cryptodivisas, claramente los NFTs son únicos y por lo tanto tienen varias analogías con las obras de arte, ya que, cada una de estas tiene único propietario y puede certificarse para diferenciarlo de una copia realizada.
              </div>
              <div className='text-3xl py-8 font-bold'>
                Algunas características de los NFTs y los Marketplace
              </div>
              <div className=''>
                <div className='py-4 flex'>
                  <div className=''>-</div>
                  <div className=''>Se basan principalmente de los estandares de la red Ethereum y su cadena de bloques.</div>
                </div>
                <div className='py-4 flex'>
                  <div className=''>-</div>
                  <div className=''>Es facil operar con estos a la hora de comprarlos o venderlos, ya que servicios como la cartera de MetaMask o MyEtherWallet facilitan la identificación y transacción de un NFTs.</div>
                </div>
                <div className='py-4 flex'>
                  <div className=''>-</div>
                  <div className=''>Cuentan con un contrato inteligente (Smart Contract) que impide que se puedan destruir, eliminar o replicar en la web.</div>
                </div>
                <div className='py-4 flex'>
                  <div className=''>-</div>
                  <div className=''>Son verificables y permiten crear un historial de quien ha comprado o vendido un NFT y quien se convierte en su propietario actual, teniendo como base el creado original del activo digital.</div>
                </div>
                <div className='py-4 flex'>
                  <div className=''>-</div>
                  <div className=''>Los Marketplace funcionan como un modelo de negocio que permite a empresarios y emprendedores aprovechar las ventas que se realizan por internet dado el flujo tan alto de usuarios que frecuentan las redes sociales o el mundo digital.</div>
                </div>
                <div className='py-4 flex'>
                  <div className=''>-</div>
                  <div className=''>Generalmente verás el término de “mint” dentro de los Marketplace más conocidos a nivel mundial. Dicho término hace referencia a la creación o publicación de un activo digital, que en nuestro caso corresponden a las obras de nuestros artistas, basicamente se realiza una conversión de un archivo digital a uno crypto coleccionable.</div>
                </div>
                <div className='py-4 flex'>
                  <div className=''>-</div>
                  <div className=''>El término “holdear” hace referencia a almacenar criptomonedas sin utilizarlas por un cierto periodo de tiempo. Aunque este término es más a nivel de las cadenas de Blockchain y el mundo de las monedas digitales, estas son el principal medio por el cual a través de la red de Ethereum se hace la adquisición de una obra digital.</div>
                </div>
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


