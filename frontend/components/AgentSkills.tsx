'use client';

import { useState } from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import { FaRegShareSquare } from 'react-icons/fa';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { RiFileList3Line } from 'react-icons/ri';
import { MdOutlineNoteAlt } from 'react-icons/md';

import React from 'react';
import Image from 'next/image';
import copilot from '@/public/assets/copilot.png';
import outlook from '@/public/assets/outlook.png';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function AgentSkills() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='flex flex-col items-start gap-3 px-6'>
        <div className='w-full flex items-center gap-3'>
          <div className='flex gap-2 w-[26px] h-[26px]'>
            <Image
              src={copilot}
              alt='COO'
              className='w-[26px] h-[26px] object-cover'
            />
          </div>
          <h1 className='font-bold'>Agent Skills</h1>
        </div>

        <div className='w-full bg-[#fefefe] shadow-lg p-4 pb-6 rounded-xl'>
          <div className='flex items-center justify-between cursor-pointer '>
            <p className='font-bold text-sm md:text-base'>
              Check if on-hand inventory will allow all sale orders to ship
              without delay
            </p>
            <button onClick={toggleAccordion} className=' text-2xl'>
              {isOpen ? (
                <IoIosArrowUp className='text-base' />
              ) : (
                <IoIosArrowDown className='text-base' />
              )}
            </button>
          </div>

          {isOpen && (
            <div className='w-full px-2 py-6 text-xs md:text-sm'>
              <p className='leading-6'>
                When
                <span className='inline-flex items-center justify-center bg-[#efefef] text-blue-500 px-2 py-0 gap-1 rounded-3xl'>
                  <AiOutlineUser className='text-sm' /> <p> any vendor</p>
                </span>
                sends an email with changes to
                <span className='inline-flex items-center justify-center bg-[#efefef] text-blue-500 px-2 py-0 gap-1 rounded-3xl'>
                  <LiaFileInvoiceSolid className='text-sm' />
                  <p>confirmed purchase orders</p>
                </span>
                , check if the resulting
                <span className='inline-flex items-center justify-center bg-[#efefef] text-blue-500 px-2 py-0 gap-1 rounded-3xl'>
                  <RiFileList3Line className='text-sm' />
                  <p>on-hand inventory</p>
                </span>
                will allow
                <span className='inline-flex items-center justify-center bg-[#efefef] text-blue-500 px-2 py-0 gap-1 rounded-3xl'>
                  <MdOutlineNoteAlt className='text-sm' />
                  <p> all sales orders</p>
                </span>
                to
                <span className='inline-flex items-center justify-center bg-[#efefef] text-blue-500 px-2 py-0 gap-1 rounded-3xl'>
                  <FaRegShareSquare className='text-sm' />
                  <p>ship without delay</p>
                </span>
                .If so,
                <span className='inline-flex items-center justify-center bg-[#efefef] text-blue-500 px-2 py-0 gap-1 rounded-3xl'>
                  <FaRegShareSquare className='text-sm' />
                  <p>update the purchase order</p>
                </span>
                to reflect the change.
              </p>
            </div>
          )}
        </div>

        <div className='w-full flex flex-col items-start gap-3'>
          <div className='flex items-start gap-3'>
            <div className='flex gap-2 w-[26px] h-[26px]'>
              <Image
                src={outlook}
                alt='COO'
                className='w-[26px] h-[26px] object-cover'
              />
            </div>
            <h1 className='font-semibold text-sm md:text-base'>
              Enable email access
            </h1>
          </div>

          <p className='text-xs md:text-sm'>
            Allow the agent to access email inboxes to read mail from known
            vendors
          </p>

          <div className='w-full flex items-center gap-2'>
            <input
              type='text'
              className='w-[60%] border p-2 rounded-md outline-none'
            />
            <button className='w-[40%] p-2 text-xs md:text-sm bg-blue-600 text-slate-50 rounded-md hover:bg-slate-50 hover:border-2 hover:border-blue-500 hover:text-blue-500'>
              Allow access
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
