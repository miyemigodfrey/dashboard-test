'use client';

import teamImage1 from '@/public/assets/teamImage1.jpg';

import { BsPlusLg } from 'react-icons/bs';
import { CiCircleList, CiImageOn } from 'react-icons/ci';
import { FaRegShareSquare } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { LuDatabaseZap } from 'react-icons/lu';
import { PiArrowClockwiseFill } from 'react-icons/pi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsStars } from 'react-icons/bs';
import { BsEnvelopeArrowDown } from 'react-icons/bs';

import { Tooltip } from 'react-tooltip';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-slate-100 sticky top-0 z-[80] w-full shadow-md'>
      <div className='flex items-center justify-between gap-2 px-2 sm:px-4 md:px-6 py-2 rounded-md'>
        {/* Left: "My open leads" label */}
        <div className='ml-10 md:ml-0 shrink-0'>
          <div
            data-tooltip-id='my-tooltip'
            className='flex items-center justify-center gap-2 whitespace-nowrap'
          >
            <p className='font-sans text-xs'>My open leads</p>
            <IoIosArrowDown className='text-base' />
          </div>
          <Tooltip
            id='my-tooltip'
            place='right'
            style={{
              backgroundColor: 'rgb(255, 255, 255)',
              color: '#222',
              zIndex: '100000',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
            }}
          >
            <div className='flex items-center justify-start gap-1'>
              <div className='flex gap-2 w-[26px] h-[26px] rounded-full'>
                <Image
                  src={teamImage1}
                  alt='COO'
                  className='w-[26px] h-[26px] rounded-full object-cover'
                />
              </div>

              <div className='text-xs'>
                <p className='font-bold'>Jane Reyes</p>
                <p className='text-slate-400'>COO . Northwind Traders</p>
              </div>
            </div>

            <div className=' p-2 rounded-lg bg-[#ecebeb]'>
              <div className='flex items-start justify-between'>
                <div className='flex items-center gap-2'>
                  <BsEnvelopeArrowDown />
                  <p className='text-xs font-bold'>Engage with Jane Reyes</p>
                </div>

                <BsStars className='bg-white p-1' />
              </div>

              <p className='text-xs leading-5'>
                Jane may be interested in upgrading espresso machines for her
                in-store coffee shops.
              </p>
            </div>

            <div className='text-xs text-gray-500 divide-x divide-gray-200'>
              <span className='p-1'>Expand business </span>
              <span className='p-1'>High buying intent</span>
            </div>
          </Tooltip>
        </div>

        {/* Right: Action toolbar */}
        <div className='flex items-center gap-1 sm:gap-2 md:gap-3'>
          {/* Primary actions */}
          <ul className='flex items-center gap-0.5 sm:gap-1 md:gap-2 text-xs whitespace-nowrap'>
            <Link href={`/dashboard/chart_analysis`}>
              <li className='flex items-center gap-1 hover:text-slate-100 p-1 sm:p-1.5 md:p-2 hover:bg-blue-500 rounded-md transition duration-300'>
                <CiImageOn className='text-sm md:text-base' />
                <span className='hidden md:inline'>Show chart</span>
              </li>
            </Link>

            <li className='flex items-center gap-1 hover:text-slate-100 p-1 sm:p-1.5 md:p-2 hover:bg-blue-500 rounded-md transition duration-300'>
              <CiCircleList className='text-sm md:text-base' />
              <span className='hidden md:inline'>Focused view</span>
            </li>
            <li className='flex items-center gap-1 hover:text-slate-100 p-1 sm:p-1.5 md:p-2 hover:bg-blue-500 rounded-md transition duration-300'>
              <BsPlusLg className='text-sm md:text-base' />
              <span className='hidden md:inline'>New</span>
            </li>
            <li className='hidden lg:flex items-center gap-1 hover:text-slate-100 p-2 hover:bg-blue-500 rounded-md transition duration-300'>
              <PiArrowClockwiseFill className='text-base' />
              <span>Refresh</span>
            </li>

            <li className='flex items-center gap-1 divide-x divide-slate-300 hover:text-slate-100 p-1 hover:bg-blue-500 rounded-md transition duration-300'>
              <div className='flex gap-1 p-0.5 sm:p-1'>
                <RiDeleteBinLine className='text-sm md:text-base' />
                <span className='hidden md:inline'>Delete</span>
              </div>
              <div className='p-0.5 sm:p-1'>
                <IoIosArrowDown className='text-sm md:text-base text-slate-400 hover:text-white' />
              </div>
            </li>
          </ul>

          {/* Separator dots */}
          <button className='shrink-0'>
            <HiOutlineDotsVertical />
          </button>

          {/* Smart data button */}
          <div className='flex items-center gap-1 sm:gap-2 text-xs whitespace-nowrap'>
            <button className='flex items-center gap-1 p-1 sm:p-1.5 md:p-2 border hover:text-slate-100 hover:bg-blue-500 rounded-md transition duration-300'>
              <LuDatabaseZap className='text-sm md:text-base' />
              <span className='hidden sm:inline'>Smart data</span>
            </button>
          </div>

          {/* Share button */}
          <button className='flex items-center border rounded bg-blue-700 text-slate-100 py-1.5 sm:py-2 shrink-0'>
            <div className='flex divide-x divide-white'>
              <div className='px-2 sm:px-3 md:px-4'>
                <FaRegShareSquare className='text-sm md:text-base' />
              </div>
              <div className='hidden md:block px-2'>
                <IoIosArrowDown className='text-base' />
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
