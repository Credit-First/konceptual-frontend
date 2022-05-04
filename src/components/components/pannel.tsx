import * as React from 'react';
import clsx from 'clsx';
import { XIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

export default function PannelSection({ title, children }: { title: any, children: any }) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <div className='flex flex-col'>
      <div className='title-section cursor-pointer w-full flex items-start justify-between py-8' onClick={handleOpen}>
        <div className='title text-xl font-bold'>
          {title}
        </div>
        <div className='close'>
          {
            open ? <ChevronUpIcon className='block h-6 w-6' aria-hidden='true' /> : <ChevronDownIcon className='block h-6 w-6' aria-hidden='true' />
          }
        </div>
      </div>
      <div className={clsx('content w-full transaction-all duration-100', open ? '' : 'hidden')}>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}