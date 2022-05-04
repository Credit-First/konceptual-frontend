import { Fragment } from 'react'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuDropdownBtn({ title, menu, color }: { title: string, menu: any, color?: any }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={`flex items-center justify-between w-full h-full px-4 py-2 bg-transparent text-sm font-medium text-${color}`}>
          <div className={`relative border-2 border-${color} rounded-full w-10 h-10 mr-4`}>
            <Image className='rounded-full ' src={'/images/avatar/avatar.png'} layout='fill' objectFit='fill' />
          </div>
          <div className='text-lg'>
            {title}
          </div>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {
              menu.map((item: any, key: any) => {
                return (
                  <Menu.Item key={key}>
                    {({ active }) => (
                      <a
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={item.onClick}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                )
              })
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
