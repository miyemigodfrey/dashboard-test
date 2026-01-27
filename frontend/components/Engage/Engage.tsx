'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

import { BsStars } from 'react-icons/bs';
import teamImage1 from '@/public/assets/teamImage1.jpg';
import logo from '@/public/assets/logo.png';
import logo2 from '@/public/assets/logo2.png';
import copilot from '@/public/assets/copilot.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  FaEdit,
  FaIdBadge,
  FaShare,
  FaThumbsDown,
  FaThumbsUp,
} from 'react-icons/fa';

export default function Engage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=' bg-[#efefef] flex flex-col items-center gap-3'>
      <div className='w-full flex items-center gap-3'>
        <div className='flex gap-2 w-[26px] h-[26px]'>
          <Image
            src={copilot}
            alt='COO'
            className='w-[26px] h-[26px] object-cover'
          />
        </div>
        <h1 className='font-bold'>Engage with Jane Reyes</h1>
      </div>

      <div className='w-full flex items-center justify-start gap-1 bg-slate-50 rounded-xl p-2'>
        <div className='flex gap-2 w-[34px] h-[34px] rounded-full'>
          <Image
            src={teamImage1}
            alt='COO'
            className='w-[34px] h-[34px] rounded-full object-cover'
          />
        </div>

        <div className='text-xs'>
          <p className='font-bold'>Jane Reyes</p>
          <p className='text-slate-400'>COO, Northwind Traders</p>
        </div>
      </div>

      <div className='w-full flex items-center justify-between p-2 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-xl shadow-md'>
        <div className='flex items-center gap-2 text-slate-100'>
          <BsStars className='text-sm' />
          <p className='text-xs leading-5'>
            Jane may be interested in upgrading espresso machines for her
            in-store coffee shops.
          </p>
        </div>

        <div className='flex items-center gap-1 text-xs'>
          <button className='flex items-center gap-2 px-2 py-1 text-slate-100'>
            <FaEdit />
            <p> Edit</p>
          </button>
          <button className='flex items-center gap-2 px-2 py-1 text-slate-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl'>
            <FaShare />
            <p> Approve and send</p>
          </button>
        </div>
      </div>

      <div className='w-full bg-[#f5f7ff] p-2 rounded-lg flex flex-col gap-3 shadow-lg'>
        <div className='bg-[#efefef] rounded-lg p-2'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-2'>
              <p className='text-xs font-bold text-blue-500'>
                Why I picked this lead
              </p>
            </div>

            <BsStars className='bg-white p-1' />
          </div>

          <ul className='px-3 py-2 text-xs leading-5 list-disc '>
            <li>
              Jane is a <strong>key decision maker</strong> and was browsing
              &lsquo;espresso machines on the First Coffee website
            </li>
            <li>
              Showcase people at their company have slowness durinf their
              service requests
            </li>
            <li>
              Northwind Traders currently see $200 in revenue from their in
              store coffee shops
            </li>
          </ul>

          <div className='hidden md:flex items-center gap-1 md:gap-4'>
            <div className='flex gap-2 items-center bg-slate-100 rounded-xl shadow-sm p-2'>
              <div className='flex gap-2 w-[39px] h-[39px]'>
                <Image
                  src={logo}
                  alt='COO'
                  className='w-[39px] h-[39px] object-cover'
                />
              </div>

              <div className='text-xs md:text-sm'>
                <p>Decision maker</p>
                <span className='font-semibold text-blue-600'>Yes</span>
              </div>
            </div>

            <div className='flex gap-1 md:gap-3 items-center bg-slate-100 rounded-xl shadow-sm p-2'>
              <div className='flex gap-2 w-[39px] h-[39px]'>
                <Image
                  src={copilot}
                  alt='COO'
                  className='w-[39px] h-[39px] object-cover'
                />
              </div>

              <div className='text-xs md:text-sm'>
                <p>Potential value</p>
                <span className='font-semibold text-blue-600'>$1M </span>
              </div>
            </div>

            <div className='flex gap-2 items-center bg-slate-100 rounded-xl shadow-sm p-2'>
              <div className='flex gap-2 w-[39px] h-[39px]'>
                <Image
                  src={logo2}
                  alt='COO'
                  className='w-[39px] h-[39px] object-cover'
                />
              </div>

              <div className='text-xs md:text-sm'>
                <p>Intent</p>
                <span className='font-semibold text-blue-600'>High</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-2'>
          <div className='flex items-start md:items-center gap-2 '>
            <FaIdBadge className=' bg-slate-200 text-base text-yellow-500 rounded-lg border border-slate-300' />
            <span className='p-1 text-xs bg-slate-200 rounded-lg border border-slate-300'>
              D365 Sales
            </span>
            <span className='p-1 text-xs bg-slate-200 rounded-lg border border-slate-300'>
              +2
            </span>
          </div>

          <div className='flex items-center gap-2 text-xs'>
            <span className='p-1 bg-slate-200 rounded-lg border border-slate-300'>
              AI generated content may be incorrect
            </span>
            <FaThumbsUp className='text-blue-500' />
            <FaThumbsDown className='text-blue-500' />
          </div>
        </div>
      </div>

      <div className='hidden md:flex flex-col w-full bg-[#fefefe] shadow-lg p-4 pb-6 rounded-xl'>
        <div className='flex items-center justify-between cursor-pointer '>
          <p className='font-bold text-sm'>About Jane</p>
          <button onClick={toggleAccordion} className=' text-2xl'>
            {isOpen ? (
              <IoIosArrowUp className='text-base' />
            ) : (
              <IoIosArrowDown className='text-base' />
            )}
          </button>
        </div>

        {isOpen && (
          <div className='w-full p-2 text-xs'>
            Jane Reyes, the Chief Operating Officer of Northwind Traders, is a
            dynamic leader with a proven track record in optimizing operations
            and enhancing customer experiences. Under her guidance, Northwind
            Traders&lsquo; in-store coffee shops have flourished, becoming a
            hallmark of quality and innovation. Jane&lsquo;s commitment to
            excellence makes her an ideal partner for First Coffee. She is
            always seeking top-tier equipment to elevate her coffee shops&lsquo;
            offerings, ensuring consistent, high-quality service.
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
}
