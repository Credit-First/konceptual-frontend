import * as React from 'react';
import { Fragment, useRef } from 'react'
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { actionRegister } from '../../store/actions/index';
import { useDispatch } from 'react-redux';
interface props {
  modal: any,
  setModal: any
}

export default function Register({ modal, setModal }: props) {
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null)
  const [step, setStep] = React.useState(0);
  const [inputData, setInputData] = React.useState({
    username: '',
    email: '',
    password: '',
    wallet_address: ''
  });

  const handleSelectType = (type: any) => {
    setStep(1);
  }

  const handleChangeInput = (key: any) => (event: any) => {
    setInputData((state: any) => ({ ...state, [key]: event.target.value }));
  }

  const handleLogin = () => {
    dispatch(actionRegister(inputData));
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
            <div className="relative inline-block align-bottom bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
              <div className="bg-black">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:text-left">
                    <div className='w-full h-full flex'>
                      <div className='flex-0'>
                        <div className='relative w-[200px] h-full'>
                          <Image src={'/images/register/register.png'} layout='fill' objectFit='fill' />
                        </div>
                      </div>
                      <div className='flex-1 p-8 flex flex-col items-center justify-center'>
                        <div className='close w-full flex justify-end'>
                          <div className='cursor-pointer' onClick={() => setModal(false)}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.29131 7.99993L15.0663 2.23409C15.2389 2.06148 15.3359 1.82737 15.3359 1.58326C15.3359 1.33915 15.2389 1.10504 15.0663 0.932426C14.8937 0.759814 14.6596 0.662842 14.4155 0.662842C14.1714 0.662842 13.9373 0.759814 13.7646 0.932426L7.99881 6.70743L2.23297 0.932426C2.06036 0.759814 1.82625 0.662842 1.58214 0.662842C1.33803 0.662842 1.10392 0.759814 0.931305 0.932426C0.758693 1.10504 0.661721 1.33915 0.661721 1.58326C0.661721 1.82737 0.758693 2.06148 0.931305 2.23409L6.70631 7.99993L0.931305 13.7658C0.845387 13.851 0.777192 13.9524 0.730654 14.0641C0.684117 14.1758 0.660156 14.2956 0.660156 14.4166C0.660156 14.5376 0.684117 14.6574 0.730654 14.7691C0.777192 14.8808 0.845387 14.9822 0.931305 15.0674C1.01652 15.1533 1.11791 15.2215 1.22961 15.2681C1.34131 15.3146 1.46113 15.3386 1.58214 15.3386C1.70315 15.3386 1.82296 15.3146 1.93467 15.2681C2.04637 15.2215 2.14776 15.1533 2.23297 15.0674L7.99881 9.29243L13.7646 15.0674C13.8499 15.1533 13.9512 15.2215 14.0629 15.2681C14.1746 15.3146 14.2945 15.3386 14.4155 15.3386C14.5365 15.3386 14.6563 15.3146 14.768 15.2681C14.8797 15.2215 14.9811 15.1533 15.0663 15.0674C15.1522 14.9822 15.2204 14.8808 15.267 14.7691C15.3135 14.6574 15.3375 14.5376 15.3375 14.4166C15.3375 14.2956 15.3135 14.1758 15.267 14.0641C15.2204 13.9524 15.1522 13.851 15.0663 13.7658L9.29131 7.99993Z" fill="white" />
                            </svg>
                          </div>
                        </div>
                        <div className='px-8 w-full h-full flex flex-col items-center justify-center'>
                          <div className='logo relative mt-6 mb-4 w-[350px] h-[150px] flex items-center justify-center'>
                            <svg width="204" height="39" viewBox="0 0 204 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M25.9947 1.58496H0V38.9914H25.9947V1.58496Z" fill="white" />
                              <path d="M27.9258 17.0531C27.9258 10.5574 30.4433 7.30957 35.4785 7.30957C40.5136 7.30957 43.034 10.5574 43.0398 17.0531C43.0398 23.543 40.5193 26.7879 35.4785 26.7879C30.4376 26.7879 27.92 23.543 27.9258 17.0531ZM35.4785 9.37952C31.9435 9.37952 30.1761 11.9374 30.1761 17.0531C30.1761 22.1688 31.9435 24.7266 35.4785 24.7266C39.0134 24.7266 40.7809 22.1688 40.7809 17.0531C40.7809 11.9374 39.0105 9.37952 35.4699 9.37952H35.4785Z" fill="white" />
                              <path d="M50.3925 7.55219L50.4701 9.13714C52.4412 8.08182 54.6129 7.45893 56.8416 7.30969C57.5918 7.27412 58.3402 7.41176 59.0292 7.71204C59.7182 8.01232 60.3295 8.46724 60.8162 9.04187C61.8466 10.41 62.3599 12.1012 62.2647 13.814V26.4762H60.161V13.8313C60.2087 12.6815 59.8751 11.5483 59.2126 10.6095C58.8712 10.1904 58.4345 9.85991 57.9394 9.64587C57.4442 9.43183 56.9051 9.34052 56.3674 9.37964C55.1029 9.37964 53.1371 9.95703 50.4701 11.1118V26.4762H48.375V7.59549L50.3925 7.55219Z" fill="white" />
                              <path d="M81.2961 8.18445L80.8219 10.2544C79.364 9.70996 77.8248 9.41713 76.2696 9.38831C75.4496 9.33285 74.6289 9.48824 73.8852 9.83981C73.1415 10.1914 72.4993 10.7275 72.0191 11.3976C70.9879 13.0694 70.497 15.0207 70.6137 16.9839C70.5099 18.9728 71.0057 20.9468 72.0363 22.6481C72.5043 23.3318 73.1395 23.883 73.8809 24.2486C74.6224 24.6141 75.445 24.7818 76.2696 24.7354C77.9001 24.6602 79.5063 24.3088 81.0202 23.6961L81.6496 25.6881C79.9525 26.3804 78.144 26.756 76.3127 26.7967C75.1889 26.8635 74.0652 26.6631 73.033 26.2116C72.0008 25.7601 71.0892 25.0704 70.3723 24.1984C68.9986 22.4663 68.3146 20.047 68.3203 16.9406C68.3261 13.8342 68.9986 11.4554 70.3378 9.80404C71.6828 8.15269 73.6601 7.32413 76.2696 7.31836C77.9813 7.32552 79.6799 7.6182 81.2961 8.18445Z" fill="white" />
                              <path d="M87.5898 17.0099C87.5898 13.9613 88.2192 11.5882 89.4694 9.87331C90.0977 9.0179 90.9276 8.33265 91.8848 7.87914C92.8419 7.42563 93.8961 7.21805 94.9529 7.27504C95.9732 7.20228 96.9957 7.38218 97.9307 7.79895C98.8658 8.21572 99.6847 8.85663 100.316 9.66544C101.562 11.5405 102.167 13.7717 102.04 16.0225L101.919 18.0059H89.8401C89.8886 19.7377 90.44 21.4175 91.4265 22.8387C91.864 23.4375 92.4409 23.9195 93.1068 24.2426C93.7726 24.5657 94.5071 24.72 95.246 24.6921C97.2013 24.6245 99.1323 24.2354 100.962 23.5402L101.557 25.5235C99.6377 26.3027 97.5918 26.7196 95.5219 26.7534C94.4016 26.8224 93.281 26.6227 92.2526 26.171C91.2242 25.7192 90.3175 25.0282 89.6073 24.1551C88.2681 22.4345 87.5956 20.0527 87.5898 17.0099ZM95.108 9.33633C91.7858 9.33633 90.0298 11.5766 89.8401 16.0572H99.8155C99.8155 11.5824 98.2464 9.3421 95.108 9.33633Z" fill="white" />
                              <path d="M107.772 34.0635V10.9736L107.41 7.50923L109.393 7.27539L109.747 9.42329C111.309 8.14717 113.236 7.40665 115.247 7.31003C116.3 7.26207 117.349 7.47379 118.302 7.9267C119.255 8.37961 120.083 9.05995 120.714 9.9083C121.998 11.6405 122.645 13.9962 122.645 17.0189C122.645 20.0415 121.938 22.4233 120.515 24.1728C119.793 25.0384 118.88 25.7237 117.85 26.1746C116.819 26.6255 115.698 26.8297 114.575 26.7711C112.949 26.739 111.347 26.3735 109.867 25.6971V34.0462L107.772 34.0635ZM120.395 17.0709C120.492 15.112 120.025 13.1664 119.05 11.4673C118.651 10.804 118.082 10.2604 117.402 9.89329C116.723 9.52615 115.958 9.34889 115.187 9.37999C113.207 9.49906 111.328 10.3005 109.867 11.6491V23.5752C110.602 23.8994 111.364 24.1574 112.144 24.346C112.91 24.5685 113.7 24.6965 114.497 24.7271C115.336 24.7627 116.17 24.5929 116.929 24.2323C117.687 23.8716 118.347 23.331 118.851 22.6571C119.957 21.0132 120.499 19.052 120.395 17.0709Z" fill="white" />
                              <path d="M126.723 10.0204V8.0371H130.525V3.22164L132.629 2.82324V8.01978H141.733V10.0204H132.663V19.1144C132.663 21.1353 132.95 22.5787 133.525 23.4448C134.12 24.3109 135.181 24.7786 136.707 24.7786C137.61 24.7436 138.509 24.6423 139.397 24.4755C140.24 24.3635 141.073 24.184 141.888 23.9385L142.371 25.8872C141.474 26.1675 140.553 26.3674 139.621 26.4848C138.658 26.6616 137.684 26.7688 136.707 26.8053C134.339 26.8053 132.718 26.1759 131.844 24.9172C130.97 23.6585 130.531 21.7531 130.525 19.201V10.0204H126.723Z" fill="white" />
                              <path d="M159.09 26.4763L159.012 24.848C157.084 25.9923 154.918 26.6712 152.684 26.8314C151.93 26.8684 151.177 26.7315 150.484 26.4313C149.79 26.131 149.175 25.6754 148.683 25.0992C147.646 23.7374 147.13 22.0475 147.226 20.3357V7.55225H149.321V20.2751C149.274 21.4141 149.602 22.5371 150.253 23.471C150.586 23.8962 151.018 24.233 151.511 24.4519C152.004 24.6708 152.543 24.7652 153.081 24.7268C154.345 24.7268 156.322 24.0628 159.012 22.7348V7.55225H161.116V26.4763H159.09Z" fill="white" />
                              <path d="M189.594 26.4762V24.4842H195.629V1.96592H189.74L189.697 0.0258789H197.733V24.4669H203.984V26.4762H189.594Z" fill="white" />
                              <path d="M184.289 24.9C183.935 24.9646 183.571 24.9416 183.229 24.8329C182.886 24.7242 182.575 24.5332 182.323 24.2764C181.521 23.4969 181.659 22.5442 181.659 21.2191V18.3004C181.659 17.9251 181.659 17.544 181.659 17.1572C181.659 16.7241 181.659 16.2911 181.659 15.9186V8.12384H179.581V9.60485C178.894 8.85965 178.049 8.27784 177.11 7.90178C176.17 7.52573 175.159 7.36489 174.15 7.43097C169.114 7.43097 166.6 10.6701 166.605 17.1485C166.611 23.6268 169.126 26.866 174.15 26.866C176.84 26.866 178.805 25.922 180.055 24.0686C180.306 24.7093 180.675 25.297 181.142 25.8007C181.944 26.6668 182.814 26.7448 184.297 26.6668L184.289 24.9ZM174.141 24.8047C170.606 24.8047 168.841 22.2555 168.847 17.1572C168.853 12.0588 170.617 9.5067 174.141 9.50093C177.67 9.50093 179.432 12.053 179.426 17.1572C179.42 22.2613 177.659 24.8105 174.141 24.8047Z" fill="white" />
                              <path d="M19.752 33.3703H22.1144L13.5702 18.4909L21.4074 7.31836L18.9071 7.353L8.24191 22.6395V7.34434H6.20717V25.5495L6.16406 25.6102L6.19855 28.9966L6.20717 28.9793V33.3876H8.24191V26.0865L12.2769 20.327L19.752 33.3703Z" fill="black" />
                            </svg>
                          </div>
                          <div className='summary text-white'>
                            Discover the digital art you want by creating your Konceptual account
                          </div>
                          {
                            step == 0 ? (
                              <>
                                <div className='action flex items-center justify-center my-8'>
                                  <button
                                    type="button"
                                    className="mt-2 w-[250px] h-[60px] inline-flex items-center justify-center rounded-lg border border-white shadow-sm px-4 py-2 bg-white text-xl font-bold text-black hover:bg-slate-500 sm:mt-0 sm:ml-3"
                                    onClick={handleSelectType}
                                  >
                                    I am an artist
                                  </button>
                                  <button
                                    type="button"
                                    className="mx-4 mt-2 w-[250px] h-[60px] inline-flex items-center justify-center rounded-lg border border-white shadow-sm px-4 py-2 bg-white text-xl font-bold text-black hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white sm:mt-0 sm:ml-3"
                                    onClick={handleSelectType}
                                  >
                                    I am a collector
                                  </button>
                                </div>
                                <div className='rounded-lg w-[550px] bg-white my-8 p-6'>
                                  <div className=''>
                                    Artist: As an artist you have gone through a selection process by Konceptual in order to establish your profile and your works to be published on our Marketplace.
                                  </div>
                                  <div className=''>
                                    Collector: Being a collector you can acquire works of other artists and sell them or see the works that other users have acquired.
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className='my-2 w-full'>
                                  <div className="col-span-6 sm:col-span-4 py-2">
                                    <label htmlFor="username" className="block text-sm font-medium text-white ">
                                      Username:
                                    </label>
                                    <input
                                      type="text"
                                      name="username"
                                      id="username"
                                      autoComplete="username"
                                      value={inputData.username}
                                      onChange={handleChangeInput('username')}
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-4 py-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-white ">
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
                                    <label htmlFor="wallet_address" className="block text-sm font-medium text-white ">
                                      Wallet Address:
                                    </label>
                                    <input
                                      type="text"
                                      name="wallet_address"
                                      id="wallet_address"
                                      autoComplete="wallet_address"
                                      value={inputData.wallet_address}
                                      onChange={handleChangeInput('wallet_address')}
                                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                                    />
                                  </div>
                                  <div className="col-span-6 sm:col-span-4 py-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-white ">
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
