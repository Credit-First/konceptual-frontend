import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';

export default function StartSection() {
  return (
    <>
      <div className='section h-screen w-full'>
        <div className='landing-section h-full w-full'>
          <div className='background-image absolute top-0 left-0 h-full w-full bg-[url("/images/article/start/landing.png")] bg-cover bg-center'></div>
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
                ¿Por dónde empezar?
              </div>
              <div className='detail text-left text-white'>
                <div>Descubre como crear tu cuenta en nuestro Marketplace,</div>
                <div>como confirugar rapidamente tu cartera y que</div>
                <div>es lo que encontrarás aqui en Konceptual. </div>
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
                ¿Como crear una cuenta en Konceptual?
              </div>
              <div className='content'>
                Esta guía explica lo que necesitarás saber para abrir tu cuenta y comenzar a comprar obras en el Marketplace de Konceptual. Pero si no tienes muy claro que es muy Marketplace de NFTs te invitamos a revisar esta sección.
              </div>
              <div className='sub-title text-2xl font-bold my-6'>
                Accede a nuestro Marketplace
              </div>
              <div className=''>
                Si tienes una cuenta de Google o Facebook, o si simplemente quieres vincular el correo electrónico de tu preferencia ¡No hay ningun problema!. Ingresa a la página de nuestro Marketplace y en el menú superior encontrarás la opción de “Regístrate”.
              </div>
              <div className='w-full flex items-center justify-center'>
                <div className='relative w-3/4 h-[400px] my-8'>
                  <Image src={'/images/article/start/1.png'} layout='fill' objectFit='fill' />
                </div>
              </div>
              <div className=''>
                Ten en cuenta que contamos con la creación de un perfil para nuestros Artistas y nuestros Coleccionistas. Sin embargo, como Coleccionista no es posible publicar obras de ARTE dentro de tu perfil, por lo que si estas buscando ver y adquirir obras, tu perfil correspondería al de un Coleccionista.
              </div>
              <div className='w-full flex items-center justify-center'>
                <div className='relative w-3/4 h-[400px] my-8'>
                  <Image src={'/images/article/start/2.png'} layout='fill' objectFit='fill' />
                </div>
              </div>
              <div className=''>
                <div>A partir de este punto, tendrás la opción de seleccionar la forma de registro que desees. En caso de que sea Google o Facebook directamente te enviaremos a la sección de configuración de tu perfil de Coleccionista o Artista.</div>
                <div>Al registrarte con tu correo y creando una contraseña, no olvides realizar el proceso de verificación de tu cuenta a través de un código que enviamos a tu correo de esta forma podrás proceder a configurar tu perfil de usuario siendo Coleccionista o Artista. </div>
              </div>
              <div className='w-full flex items-center justify-center'>
                <div className='relative w-3/4 h-[400px] my-8'>
                  <Image src={'/images/article/start/3.png'} layout='fill' objectFit='fill' />
                </div>
              </div>
              <div className='w-full flex items-center justify-center'>
                <div className='relative w-3/4 h-[400px] my-8'>
                  <Image src={'/images/article/start/4.png'} layout='fill' objectFit='fill' />
                </div>
              </div>
              <div className=''>
                <div className=''>
                  ¡Eso es todo! A partir de este momento, serás redirigido a nuestra sección para configurar tu perfil agregar un poco de información sobre ti y tus redes sociales según las que tenemos establecidas. Además podrás disfrutar del contenido de nuestras exhibiciones y descubrir nuevos artistas.
                </div>
                <div className=''>
                  ¿No sabes por donde empezar? Haz click aquí para conocer nuestras últimas exhibiciones.
                  ¿Aún tienes dudas sobre como funcionamos siendo un Marketplace? Ingresa a esta sección para más información.
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


