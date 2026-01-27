'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import teamImage1 from '@/public/assets/teamImage1.jpg';
import teamImage2 from '@/public/assets/teamImage2.jpg';
import copilot from '@/public/assets/copilot.png';
import logo from '@/public/assets/logo.png';
import logo2 from '@/public/assets/logo2.png';

import Modal from '../Modal';

import { BsStars } from 'react-icons/bs';
import { BsEnvelopeArrowDown } from 'react-icons/bs';

import { LuCalendarDays } from 'react-icons/lu';
import Engage from '../Engage/Engage';

export default function LeadsAccordion() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className='w-full p-2 md:p-0'>
      <div className='p-[0.125rem] mt-14 md:mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl'>
        <div className='w-full bg-[#fefefe] shadow-2xl p-4 pb-6 rounded-xl'>
          <div className='flex items-center justify-between cursor-pointer'>
            <div className='flex items-center gap-2'>
              <div className='flex gap-2 w-[26px] h-[26px]'>
                <Image
                  src={copilot}
                  alt='COO'
                  className='w-[26px] h-[26px] object-cover'
                />
              </div>
              <p className='font-bold leading-2 -tracking-wide '>
                Hi Mona, <span className='text-purple-800'>68%</span> of goal
                achieved by focusing on 20 top leads.
              </p>
            </div>

            <button onClick={toggleAccordion} className=' text-2xl'>
              {isOpen ? (
                <IoIosArrowUp className='text-base' />
              ) : (
                <IoIosArrowDown className='text-base' />
              )}
            </button>
          </div>

          {isOpen && (
            <div
              className={`w-full p-2 flex flex-col md:flex-row transition-[max-height] duration-300 divide-x divide-slate-300 ${
                !isOpen && 'max-h-0'
              }`}
            >
              <div className='w-full lg:w-[60%]'>
                <p className=' text-sm '>
                  Copilot has pinpointed 20 key leads that show strong purchase
                  intent and are actively engaging. These leads needs your
                  focus.
                </p>

                <ul className='flex flex-col md:flex-row gap-3 p-3'>
                  <li
                    onClick={() => setModalOpen(true)}
                    className='flex flex-col gap-3 border p-2 rounded-xl hover:bg-[#e1e3ec] '
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
                        <p className='text-slate-400'>
                          COO . Northwind Traders
                        </p>
                      </div>
                    </div>

                    <div className='bg-[#f5f7ff] p-2 rounded-lg'>
                      <div className='flex items-start justify-between'>
                        <div className='flex items-center gap-2'>
                          <BsEnvelopeArrowDown />
                          <p className='text-xs font-bold'>
                            Engage with Jane Reyes
                          </p>
                        </div>

                        <BsStars className='bg-white p-1' />
                      </div>

                      <p className='text-xs leading-5'>
                        Jane may be interested in upgrading espresso machines
                        for her in-store coffee shops.
                      </p>
                    </div>

                    <div className='text-xs text-gray-500 divide-x divide-gray-200'>
                      <span className='p-1'>Expand business </span>
                      <span className='p-1'>High buying intent</span>
                    </div>
                  </li>

                  <li
                    onClick={() => setModalOpen(true)}
                    className='flex flex-col gap-3 border p-2 rounded-xl hover:bg-[#e1e3ec] '
                  >
                    <div className='flex items-center justify-start gap-1'>
                      <div className='flex gap-2 w-[26] h-[26] rounded-full '>
                        <Image
                          src={teamImage2}
                          alt='COO'
                          className='w-[26px] h-[26px] rounded-full object-cover'
                        />
                      </div>

                      <div className='text-xs'>
                        <p className='font-bold'>Allan Munger</p>
                        <p className='text-slate-400'>
                          Head of Real Estate Development . Contoso Coffee
                        </p>
                      </div>
                    </div>

                    <div className='bg-[#f5f7ff] p-2 rounded-lg'>
                      <div className='flex items-start justify-between'>
                        <div className='flex items-center gap-2'>
                          <LuCalendarDays />
                          <p className='text-xs font-bold'>
                            Prepare for meeting with Allan
                          </p>
                        </div>
                        <BsStars className='bg-white p-1' />
                      </div>

                      <p className='text-xs leading-5'>
                        Prepare for high-buying intent meeting Copilot scheduled
                        for 2 PM regarding upgrading service contract.
                      </p>
                    </div>

                    <div className='text-xs text-gray-500 divide-x divide-gray-200'>
                      <span className='p-1'>Upcoming meeting </span>
                      <span className='p-1'>Due today</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='hidden w-[40%] p-5 lg:flex flex-col items-start justify-center gap-3'>
                <p className='w-full text-balance text-sm text-gray-500'>
                  Other key activities
                </p>
                <ul className='w-full flex flex-col items-start gap-1'>
                  <li className='w-full border rounded-2xl px-5 py-2 shadow-sm'>
                    <div className='flex items-start justify gap-1 mb-1'>
                      <div className='flex gap-2 w-[26px] h-[26px]'>
                        <Image
                          src={logo2}
                          alt='COO'
                          className='w-[26px] h-[26px] object-cover'
                        />
                      </div>
                      <div className='flex flex-col items-start justify-center'>
                        <h2 className='font-bold text-[14px]'>
                          Cafe A100 for Woodland Bank
                        </h2>
                        <span className='text-xs font-normal text-gray-500'>
                          Woodland Bank . $280,000 . 8 days to close
                        </span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between gap-1'>
                      <div className='w-full bg-[#f5f7ff] rounded-lg px-2 py-1 flex items-center gap-2'>
                        <BsEnvelopeArrowDown />
                        <span className='text-sm'>
                          Review draft and reply to Chris Naido
                        </span>
                      </div>
                      <BsStars />
                    </div>
                  </li>

                  <li className='w-full border rounded-2xl px-5 py-2 shadow-sm'>
                    <div className='flex items-start justify gap-1 mb-1'>
                      <div className='flex gap-2 w-[26px] h-[26px]'>
                        <Image
                          src={logo}
                          alt='COO'
                          className='w-[26px] h-[26px] object-cover'
                        />
                      </div>
                      <div className='flex flex-col items-start justify-center'>
                        <h2 className='font-bold text-[14px]'>
                          Partnership opportunity for Fabrikam
                        </h2>
                        <span className='text-xs font-normal text-gray-500'>
                          Fabrikam . $5,000,000 . 12 days to close
                        </span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between gap-1'>
                      <div className='w-full bg-[#f5f7ff] rounded-lg px-2 py-1 flex items-center gap-2'>
                        <LuCalendarDays />
                        <span className='text-sm'>
                          Prepare me for Fabrikam&lsquo;s key stakeholder
                          meeting
                        </span>
                      </div>
                      <BsStars />
                    </div>
                  </li>
                </ul>
                <span className='text-xs font-semibold text-blue-800'>
                  Show all Activities
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          title='Welcome'
        >
          <Engage />
        </Modal>
      )}
    </div>
  );
}
