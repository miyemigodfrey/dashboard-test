'use client';

import Sidebar from '@/components/SideBar/Sidebar';
import Header from '@/components/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full flex flex-row h-screen font-inter divide-x-2 divide-[#e0e0e0]'>
      <Sidebar />
      <div className='overflow-auto no-scrollbar flex-1'>
        <Header />
        {children}
      </div>
    </div>
  );
}
