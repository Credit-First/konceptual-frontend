import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import MenuDropdownBtn from '../components/accountDropdownBtn';
import Login from '@/components/loginSection';
import Register from '../registerSection';

import { selectAuth, selectAuthItem } from '@/store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogout } from '@/store/actions';

const navigation = [
  { id: 0, name: 'Artists', href: '/artist', current: true },
  { id: 1, name: 'Exhibitions', href: '/exhibition', current: true },
  { id: 2, name: '3D gallery', href: '/gallery', current: true },
  { id: 3, name: 'About us', href: '/about', current: true },
  { id: 4, name: 'Articles', href: '/article', current: true },
];

declare const window: Window &
  typeof globalThis & {
    fullpage_api: any;
    pageYOffset: any;
  };

export default function Header({ sectionIdx, onClick, main }: { sectionIdx?: any, onClick?: any, main?: any }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectAuth);
  const successLog = useSelector(selectAuthItem('loginSuccess'));
  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const color = main ? 'black' : ((onClick || sectionIdx == 0) ? 'white' : 'black');
  const bgcolor = main ? 'white' : ((onClick || sectionIdx == 0) ? 'black' : 'white');

  const handleLogOut = () => {
    dispatch(actionLogout());
  }

  React.useEffect(() => {
  }, [successLog])
  return (
    <Disclosure as='nav' className={clsx('fixed top-0 z-10 w-full ', main ? 'shadow-md backdrop-blur-sm bg-white/[.7]' : ((!onClick && sectionIdx != 0) ? 'shadow-md backdrop-blur-sm bg-white/[.7]' : ''))}>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-4'>
            <div className='relative flex h-20 items-center justify-between'>
              <div className='flex flex-1 items-center sm:items-stretch sm:justify-between'>
                <div className='ml-10 flex flex-shrink-0 items-center cursor-pointer'>
                  <Link href='/'>
                    <svg
                      width='136'
                      height='28'
                      viewBox='0 0 136 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M17.3298 1.1377H0V27.9936H17.3298V1.1377Z'
                        fill={color}
                      />
                      <path
                        d='M18.6172 12.2434C18.6172 7.57982 20.2956 5.24805 23.6523 5.24805C27.0091 5.24805 28.6894 7.57982 28.6932 12.2434C28.6932 16.9028 27.0129 19.2325 23.6523 19.2325C20.2917 19.2325 18.6134 16.9028 18.6172 12.2434ZM23.6523 6.73417C21.2957 6.73417 20.1174 8.57057 20.1174 12.2434C20.1174 15.9162 21.2957 17.7526 23.6523 17.7526C26.0089 17.7526 27.1873 15.9162 27.1873 12.2434C27.1873 8.57057 26.007 6.73417 23.6466 6.73417H23.6523Z'
                        fill={color}
                      />
                      <path
                        d='M33.595 5.42219L33.6467 6.5601C34.9608 5.80243 36.4086 5.35523 37.8944 5.24808C38.3945 5.22255 38.8935 5.32137 39.3528 5.53695C39.8121 5.75253 40.2197 6.07914 40.5442 6.4917C41.2311 7.47393 41.5733 8.68811 41.5098 9.91786V19.0087H40.1073V9.93029C40.1391 9.10479 39.9168 8.2912 39.4751 7.61717C39.2475 7.31629 38.9564 7.07901 38.6262 6.92534C38.2961 6.77167 37.9367 6.70612 37.5783 6.7342C36.7352 6.7342 35.4247 7.14874 33.6467 7.97782V19.0087H32.25V5.45327L33.595 5.42219Z'
                        fill={color}
                      />
                      <path
                        d='M54.1974 5.8762L53.8813 7.36232C52.9093 6.97144 51.8832 6.7612 50.8464 6.74051C50.2997 6.7007 49.7526 6.81226 49.2568 7.06466C48.761 7.31707 48.3328 7.70199 48.0127 8.18311C47.3253 9.38334 46.998 10.7843 47.0758 12.1938C47.0066 13.6217 47.3372 15.0389 48.0242 16.2604C48.3362 16.7512 48.7597 17.1469 49.254 17.4094C49.7482 17.6719 50.2967 17.7922 50.8464 17.759C51.9334 17.7049 53.0042 17.4527 54.0135 17.0128L54.4331 18.4429C53.3017 18.9399 52.096 19.2097 50.8752 19.2389C50.1259 19.2868 49.3768 19.1429 48.6887 18.8188C48.0006 18.4946 47.3928 17.9994 46.9149 17.3734C45.9991 16.1298 45.5431 14.3929 45.5469 12.1627C45.5507 9.93247 45.9991 8.22456 46.8919 7.03898C47.7886 5.8534 49.1067 5.25854 50.8464 5.25439C51.9875 5.25954 53.1199 5.46966 54.1974 5.8762V5.8762Z'
                        fill={color}
                      />
                      <path
                        d='M58.3906 12.2124C58.3906 10.0236 58.8102 8.31983 59.6437 7.08865C60.0625 6.47451 60.6158 5.98254 61.2539 5.65694C61.892 5.33134 62.5948 5.18231 63.2993 5.22323C63.9795 5.17099 64.6612 5.30015 65.2846 5.59937C65.9079 5.89859 66.4538 6.35873 66.8745 6.93942C67.7051 8.28563 68.1085 9.88751 68.024 11.5035L67.9436 12.9274H59.8908C59.9231 14.1708 60.2908 15.3768 60.9484 16.3971C61.2401 16.827 61.6247 17.1731 62.0686 17.4051C62.5125 17.6371 63.0021 17.7478 63.4947 17.7278C64.7982 17.6793 66.0856 17.3999 67.3055 16.9008L67.7021 18.3247C66.4225 18.8841 65.0586 19.1834 63.6786 19.2077C62.9318 19.2572 62.1847 19.1139 61.4991 18.7895C60.8135 18.4652 60.2091 17.9691 59.7356 17.3423C58.8428 16.1069 58.3945 14.397 58.3906 12.2124ZM63.4027 6.70313C61.1879 6.70313 60.0173 8.31154 59.8908 11.5284H66.5411C66.5411 8.31569 65.495 6.70728 63.4027 6.70313Z'
                        fill={color}
                      />
                      <path
                        d='M71.8469 24.4557V7.87826L71.6055 5.39103L72.9275 5.22314L73.1631 6.76522C74.2045 5.84904 75.4895 5.31738 76.8303 5.24802C77.5323 5.21358 78.2314 5.36559 78.8667 5.69075C79.5019 6.01592 80.0539 6.50436 80.4744 7.11344C81.3308 8.35706 81.7619 10.0484 81.7619 12.2185C81.7619 14.3886 81.2906 16.0986 80.3422 17.3546C79.8607 17.9761 79.2524 18.4681 78.5651 18.7918C77.8779 19.1155 77.1305 19.2621 76.3819 19.22C75.2982 19.197 74.2302 18.9346 73.2436 18.449V24.4432L71.8469 24.4557ZM80.2617 12.2558C80.3265 10.8494 80.0152 9.45261 79.3651 8.23269C79.0991 7.7565 78.7198 7.36625 78.2669 7.10266C77.814 6.83907 77.3039 6.71181 76.79 6.73414C75.4698 6.81962 74.2173 7.39501 73.2436 8.36327V16.9256C73.7332 17.1583 74.2411 17.3435 74.761 17.479C75.2719 17.6387 75.7988 17.7306 76.3302 17.7526C76.8892 17.7781 77.4455 17.6562 77.9512 17.3973C78.4569 17.1384 78.8968 16.7503 79.2329 16.2664C79.9699 15.0862 80.3312 13.6782 80.2617 12.2558V12.2558Z'
                        fill={color}
                      />
                      <path
                        d='M84.4805 7.19408V5.77014H87.0153V2.31289L88.4178 2.02686V5.7577H94.4875V7.19408H88.4407V13.7231C88.4407 15.1739 88.6323 16.2103 89.0155 16.8321C89.4121 17.4539 90.1191 17.7897 91.1365 17.7897C91.7384 17.7645 92.3377 17.6918 92.9298 17.572C93.4921 17.4917 94.0476 17.3628 94.5909 17.1865L94.9128 18.5856C94.3145 18.7868 93.701 18.9304 93.0793 19.0146C92.4376 19.1416 91.7883 19.2185 91.1365 19.2447C89.5577 19.2447 88.4771 18.7929 87.8947 17.8892C87.3122 16.9855 87.0191 15.6175 87.0153 13.7852V7.19408H84.4805Z'
                        fill={color}
                      />
                      <path
                        d='M106.061 19.0089L106.01 17.8399C104.724 18.6614 103.28 19.1488 101.791 19.2638C101.288 19.2904 100.786 19.1921 100.324 18.9765C99.8615 18.761 99.451 18.4338 99.1236 18.0202C98.4323 17.0425 98.0877 15.8292 98.1522 14.6002V5.42236H99.5489V14.5567C99.5176 15.3745 99.7357 16.1807 100.17 16.8512C100.392 17.1565 100.68 17.3983 101.009 17.5555C101.337 17.7126 101.697 17.7804 102.055 17.7528C102.898 17.7528 104.216 17.2761 106.01 16.3226V5.42236H107.412V19.0089H106.061Z'
                        fill={color}
                      />
                      <path
                        d='M126.395 19.0086V17.5784H130.418V1.4114H126.492L126.464 0.0185547H131.82V17.566H135.988V19.0086H126.395Z'
                        fill={color}
                      />
                      <path
                        d='M122.859 17.877C122.624 17.9233 122.381 17.9068 122.153 17.8288C121.924 17.7508 121.717 17.6136 121.549 17.4293C121.014 16.8696 121.106 16.1856 121.106 15.2343V13.1388C121.106 12.8693 121.106 12.5957 121.106 12.318C121.106 12.0071 121.106 11.6962 121.106 11.4288V5.83254H119.721V6.89583C119.262 6.36081 118.7 5.9431 118.073 5.67311C117.447 5.40312 116.773 5.28765 116.1 5.3351C112.743 5.3351 111.066 7.66065 111.07 12.3118C111.074 16.9629 112.751 19.2885 116.1 19.2885C117.893 19.2885 119.204 18.6107 120.037 17.28C120.204 17.7401 120.45 18.162 120.761 18.5236C121.296 19.1454 121.876 19.2014 122.865 19.1454L122.859 17.877ZM116.094 17.8086C113.737 17.8086 112.561 15.9784 112.565 12.318C112.569 8.65762 113.745 6.82536 116.094 6.82122C118.447 6.82122 119.621 8.65348 119.617 12.318C119.614 15.9825 118.439 17.8127 116.094 17.8086V17.8086Z'
                        fill={color}
                      />
                      <path
                        d='M13.168 23.9584H14.7429L9.04678 13.2757L14.2716 5.25439L12.6047 5.27927L5.49461 16.2542V5.27305H4.13811V18.3434L4.10938 18.387L4.13237 20.8182L4.13811 20.8058V23.9708H5.49461V18.729L8.1846 14.5939L13.168 23.9584Z'
                        fill={bgcolor}
                      />
                    </svg>
                  </Link>
                </div>
                <div className='hidden lg:ml-6 lg:block'>
                  <div className='flex h-full items-center space-x-4'>
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {
                          onClick ? (
                            <div
                              className={clsx(
                                main ? 'text-black' : (item.current ? 'text-white' : 'text-black'),
                                'cursor-pointer px-3 py-2 text-sm font-medium border-b-2 transaction-all duration-500',
                                sectionIdx == item.id ? 'border-b-white' : 'border-b-transparent'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                              onClick={onClick(item.id)}
                            >
                              {item.name}
                            </div>
                          ) : (
                            <div
                              className={clsx(
                                main ? 'text-black' : (sectionIdx == 0 ? 'text-white' : 'text-black'),
                                'cursor-pointer px-3 py-2 text-sm font-medium border-b-2 transaction-all duration-500',
                                router.pathname.includes(item.href) ? `border-b-${color}` : 'border-b-transparent'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <Link
                                href={item.href}
                              >
                                {item.name}
                              </Link>
                            </div>
                          )
                        }
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <div className='relative ml-3 flex'>
                  {
                    user ? (
                      <MenuDropdownBtn
                        title={user.username}
                        color={color}
                        menu={[
                          {
                            name: 'profile', onClick: () => { },
                          },
                          {
                            name: 'Log out', onClick: handleLogOut,
                          }
                        ]}
                      />
                    ) : (
                      <>
                        <div className={clsx('cursor-pointerflex rounded-lg border-2 py-2 px-4 text-sm focus:outline-none focus:ring-2',
                          main ? 'border-[grey] bg-[grey] text-black' : ((onClick || sectionIdx == 0) ? 'border-white bg-white text-black' : 'border-[grey] bg-[grey] text-black')
                        )}
                          onClick={() => setLogin(true)}
                        >
                          <button>Log in</button>
                        </div>
                        <div className={clsx('cursor-pointer ml-4 flex rounded-lg border-2 py-2 px-4 text-sm text-white focus:outline-none focus:ring-2',
                          main ? 'border-black bg-black' : ((onClick || sectionIdx == 0) ? 'border-white' : 'border-black bg-black')
                        )}
                          onClick={() => setRegister(true)}
                        >
                          <button>Sign up</button>
                        </div>
                      </>
                    )
                  }
                  {
                    user ? (
                      <div className={`text-${color} flex items-center justify-center cursor-pointer ml-4 py-2 px-4`}>
                        {user.wallet_address.substring(0, 5)}...{user.wallet_address.substring(user.wallet_address.length - 4)}
                      </div>
                    ) : (
                      <div className='cursor-pointer ml-4 flex py-2 px-4'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M21.3329 9.99984H20.6663V5.99984C20.6663 5.82303 20.596 5.65346 20.471 5.52843C20.346 5.40341 20.1764 5.33317 19.9996 5.33317H3.9996C3.84174 5.33575 3.68809 5.28221 3.56601 5.1821C3.44393 5.082 3.36133 4.94181 3.33294 4.7865V4.5465C3.36133 4.3912 3.44393 4.25101 3.56601 4.1509C3.68809 4.05079 3.84174 3.99726 3.9996 3.99984H19.7196C19.8964 3.99984 20.066 3.9296 20.191 3.80458C20.316 3.67955 20.3863 3.50998 20.3863 3.33317C20.3863 3.15636 20.316 2.98679 20.191 2.86177C20.066 2.73674 19.8964 2.6665 19.7196 2.6665H3.9996C3.46917 2.6665 2.96046 2.87722 2.58539 3.25229C2.21032 3.62736 1.9996 4.13607 1.9996 4.6665C1.99492 4.74644 1.99492 4.82657 1.9996 4.9065V18.6198C2.00222 18.9788 2.07551 19.3337 2.2153 19.6643C2.35509 19.995 2.55863 20.2948 2.8143 20.5468C3.06997 20.7987 3.37277 20.9978 3.7054 21.1328C4.03803 21.2677 4.39399 21.3358 4.75294 21.3332H19.9996C20.1764 21.3332 20.346 21.2629 20.471 21.1379C20.596 21.0129 20.6663 20.8433 20.6663 20.6665V16.6665H21.3329C21.5097 16.6665 21.6793 16.5963 21.8043 16.4712C21.9294 16.3462 21.9996 16.1766 21.9996 15.9998V10.6665C21.9996 10.4897 21.9294 10.3201 21.8043 10.1951C21.6793 10.0701 21.5097 9.99984 21.3329 9.99984ZM19.3329 19.9998H4.75294C4.38214 20.0034 4.02492 19.8604 3.759 19.602C3.49307 19.3436 3.33995 18.9906 3.33294 18.6198V6.5865C3.54934 6.64922 3.77451 6.67624 3.9996 6.6665H19.3329V9.99984H14.6663C13.7822 9.99984 12.9344 10.351 12.3092 10.9761C11.6841 11.6013 11.3329 12.4491 11.3329 13.3332C11.3329 14.2172 11.6841 15.0651 12.3092 15.6902C12.9344 16.3153 13.7822 16.6665 14.6663 16.6665H19.3329V19.9998ZM20.6663 15.3332H14.6663C14.1358 15.3332 13.6271 15.1225 13.2521 14.7474C12.877 14.3723 12.6663 13.8636 12.6663 13.3332C12.6663 12.8027 12.877 12.294 13.2521 11.919C13.6271 11.5439 14.1358 11.3332 14.6663 11.3332H20.6663V15.3332Z'
                            fill={color}
                          />
                          <path
                            d='M15.3398 14.3335C15.8921 14.3335 16.3398 13.8858 16.3398 13.3335C16.3398 12.7812 15.8921 12.3335 15.3398 12.3335C14.7876 12.3335 14.3398 12.7812 14.3398 13.3335C14.3398 13.8858 14.7876 14.3335 15.3398 14.3335Z'
                            fill={color}
                          />
                        </svg>
                      </div>
                    )
                  }
                </div>
              </div>

              <div className='inset-y-0 right-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  className={clsx(
                    item.current
                      ? 'bg-gray-900/80 text-white'
                      : 'text-gray-300 hover:bg-gray-700/80 hover:text-white',
                    'hover:border-main block cursor-pointer rounded-md border border-transparent px-3 py-2 text-base font-medium backdrop-blur-sm hover:border'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          <Login modal={login} setModal={setLogin} />
          <Register modal={register} setModal={setRegister} />
        </>
      )}
    </Disclosure>
  );
}
