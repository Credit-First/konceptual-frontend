import * as React from 'react';
import { Fragment, useRef } from 'react'
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { actionLogin } from '../../store/actions';
import { useDispatch } from 'react-redux';
interface props {
  modal: any,
  setModal: any
}

export default function Login({ modal, setModal }: props) {
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null)
  const [step, setStep] = React.useState(0);
  const [inputData, setInputData] = React.useState({
    email: '',
    password: '',
    wallet_address: '111'
  });

  const handleSelectType = (type: any) => {
    setStep(1);
  }

  const handleChangeInput = (key:any) => (event:any) => {
      setInputData((state:any) => ({...state, [key]: event.target.value}));
  }

  const handleLogin = () => {
    dispatch(actionLogin(inputData));
  }
  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setModal}>
        <div className="flex items-end justify-center min-h-screen text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
              <div className="bg-white">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:text-left">
                    <div className='w-full h-full flex'>
                      <div className='flex-0'>
                        <div className='relative w-[200px] h-full'>
                          <Image src={'/images/login/login.png'} layout='fill' objectFit='fill' />
                        </div>
                      </div>
                      <div className='flex-1 p-8 flex flex-col items-center justify-start'>
                        <div className='close w-full flex justify-end'>
                          <div className='cursor-pointer' onClick={() => setModal(false)}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.29131 7.99993L15.0663 2.23409C15.2389 2.06148 15.3359 1.82737 15.3359 1.58326C15.3359 1.33915 15.2389 1.10504 15.0663 0.932426C14.8937 0.759814 14.6596 0.662842 14.4155 0.662842C14.1714 0.662842 13.9373 0.759814 13.7646 0.932426L7.99881 6.70743L2.23297 0.932426C2.06036 0.759814 1.82625 0.662842 1.58214 0.662842C1.33803 0.662842 1.10392 0.759814 0.931305 0.932426C0.758693 1.10504 0.661721 1.33915 0.661721 1.58326C0.661721 1.82737 0.758693 2.06148 0.931305 2.23409L6.70631 7.99993L0.931305 13.7658C0.845387 13.851 0.777192 13.9524 0.730654 14.0641C0.684117 14.1758 0.660156 14.2956 0.660156 14.4166C0.660156 14.5376 0.684117 14.6574 0.730654 14.7691C0.777192 14.8808 0.845387 14.9822 0.931305 15.0674C1.01652 15.1533 1.11791 15.2215 1.22961 15.2681C1.34131 15.3146 1.46113 15.3386 1.58214 15.3386C1.70315 15.3386 1.82296 15.3146 1.93467 15.2681C2.04637 15.2215 2.14776 15.1533 2.23297 15.0674L7.99881 9.29243L13.7646 15.0674C13.8499 15.1533 13.9512 15.2215 14.0629 15.2681C14.1746 15.3146 14.2945 15.3386 14.4155 15.3386C14.5365 15.3386 14.6563 15.3146 14.768 15.2681C14.8797 15.2215 14.9811 15.1533 15.0663 15.0674C15.1522 14.9822 15.2204 14.8808 15.267 14.7691C15.3135 14.6574 15.3375 14.5376 15.3375 14.4166C15.3375 14.2956 15.3135 14.1758 15.267 14.0641C15.2204 13.9524 15.1522 13.851 15.0663 13.7658L9.29131 7.99993Z" fill="#232323" />
                            </svg>
                          </div>
                        </div>
                        <div className='px-8 w-full h-full flex flex-col items-center justify-center'>
                          <div className='logo relative mt-6 mb-4 w-[350px] h-[150px]'>
                            <Image src={'/images/logo.png'} layout='fill' objectFit='fill' />
                          </div>
                          <div className='summary'>
                            Welcome! Explore and collect the art of your interest with the help of Konceptual
                          </div>
                          {
                            step == 0 ? (
                              <>
                                <div className='action flex items-center justify-center my-8'>
                                  <button
                                    type="button"
                                    className="mt-3 w-[250px] h-[40px] inline-flex justify-center rounded-md border border-black shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleSelectType}
                                  >
                                    Are you already an artist?
                                  </button>
                                  <button
                                    type="button"
                                    className="mt-3 w-[250px] h-[40px] inline-flex justify-center rounded-md border border-black shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleSelectType}
                                  >
                                    I am a collector
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className='my-2 w-full'>
                                  <div className="col-span-6 sm:col-span-4 py-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-black">
                                      Email:
                                    </label>
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      autoComplete="email"
                                      value={inputData.email}
                                      onChange={handleChangeInput('email')}
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-4 py-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-black">
                                      Password:
                                    </label>
                                    <input
                                      type="text"
                                      name="password"
                                      id="password"
                                      autoComplete="email"
                                      value={inputData.password}
                                      onChange={handleChangeInput('password')}
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
                                  <div className='action flex items-center justify-center my-4'>
                                    <button
                                      type="button"
                                      className="mt-3 w-[150px] h-[40px] inline-flex justify-center rounded-md border border-[#71B62F] shadow-sm px-4 py-2 bg-[#71B62F] text-base font-medium text-white hover:bg-[#71B62F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#71B62F] sm:mt-0 sm:ml-3 sm:text-sm"
                                      onClick={handleLogin}
                                    >
                                      Continue
                                    </button>
                                  </div>
                                  <div className='link flex items-center justify-center py-4'>
                                    <div className=''>Sign in with: </div>
                                    <div className='mx-2'>
                                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.01 6.87375C11.352 6.23855 10.5151 5.91513 9.58304 5.91513C7.9295 5.91513 6.52991 7.04274 6.03067 8.55789C5.9037 8.9425 5.83155 9.35335 5.83155 9.77584C5.83155 10.1983 5.90369 10.6092 6.03066 10.9938C6.5299 12.5089 7.9295 13.6365 9.58304 13.6365C10.4372 13.6365 11.1644 13.4092 11.7329 13.0246C12.4053 12.5701 12.8526 11.8912 12.9998 11.0899H9.58303V8.61035H15.5623C15.6373 9.02992 15.6777 9.46699 15.6777 9.92153C15.6777 11.8737 14.9852 13.5171 13.7847 14.6331C12.7343 15.6121 11.2972 16.186 9.58304 16.186C7.1013 16.186 4.9543 14.7496 3.90965 12.6546C3.47968 11.7892 3.23438 10.8102 3.23438 9.77584C3.23438 8.74147 3.47966 7.76245 3.90964 6.89707C4.95429 4.80209 7.10129 3.3656 9.58304 3.3656C11.2943 3.3656 12.7314 4.0008 13.8309 5.03518L12.01 6.87375Z" fill="#232323" />
                                      </svg>
                                    </div>
                                    <div className=''>
                                      ó
                                    </div>
                                    <div className='mx-2'>
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.64542" cy="8.40128" r="7.59073" fill="#232323" />
                                        <path d="M9.32445 5.40984H10.3307V3.70776C9.84351 3.6571 9.35398 3.63209 8.86415 3.63283C7.40828 3.63283 6.41273 4.52133 6.41273 6.14847V7.55081H4.76953V9.45628H6.41273V14.3377H8.38243V9.45628H10.0203L10.2665 7.55081H8.38243V6.33581C8.38243 5.7738 8.53229 5.40984 9.32445 5.40984Z" fill="white" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className='url my-2'>
                                    <div className='flex items-center justify-center'>
                                      <div>Did you forget your password?</div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                      <a className='text-sky-500'> Login here to get her back</a>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child >
        </div >
      </Dialog >
    </Transition.Root >
  )
}
