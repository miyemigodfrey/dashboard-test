'use client';

import { FaBars, FaTimes } from 'react-icons/fa';

import Modal from '../Modal';
import AgentSkills from '../AgentSkills';

import { useState } from 'react';
import { navigationData } from '../../types/navigation-data';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger toggle — visible only on small screens */}
      <div className='fixed left-0 top-0 z-[999] w-max px-2 bg-[#efefef] py-2 rounded-xl md:hidden'>
        <button onClick={toggleSidebar} className='p-2 text-lg text-black'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Backdrop overlay — mobile only */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-[90] md:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 left-0 min-w-[210px] w-[210px] z-[95] h-screen bg-[#efefef] pb-4 pt-[60px] md:pt-4 overflow-y-scroll no-scrollbar transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <nav className='w-full flex flex-col gap-4'>
          {navigationData.map((nav) => (
            <div key={nav.id} className='w-full flex flex-col gap-2'>
              {nav.label ? (
                <p className='m-0 font-sans text-xs font-bold px-4'>
                  {nav.label}
                </p>
              ) : null}
              <ul
                key={nav.id}
                className='flex flex-col gap-0 w-full transition-all duration-300 ease-in-out'
              >
                {nav.subNavs.map((subNav) => (
                  <li
                    key={subNav.id}
                    className='w-full flex items-center justify-start gap-2 px-2 py-2 cursor-pointer hover:bg-white transition duration-300 group'
                    onClick={() => {
                      if (subNav.shouldOpenModal) {
                        setModalOpen(true);
                      }
                      // Close sidebar on mobile after clicking a nav item
                      setIsOpen(false);
                    }}
                  >
                    <div className='h-[20px] w-[3px] rounded-[2px] transition invisible group-hover:bg-blue-500 group-hover:visible'></div>
                    {<subNav.icon className='text-base' />}
                    <span className='font-sans text-xs font-normal'>
                      {subNav.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
          <AgentSkills />
        </Modal>
      )}
    </>
  );
}
