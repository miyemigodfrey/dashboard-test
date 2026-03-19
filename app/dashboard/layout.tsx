'use client';

import Sidebar from '@/components/SideBar/Sidebar';
import Header from '@/components/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full flex flex-row h-screen font-inter'>
      <Sidebar />
      <div className='overflow-auto no-scrollbar flex-1 md:ml-[210px]'>
        <Header />
        {children}
      </div>
    </div>
  );
}
