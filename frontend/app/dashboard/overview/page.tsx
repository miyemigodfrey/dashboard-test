'use client';
import LeadsAccordion from '@/components/Leads/Leads';
import Table from '@/components/Table/Table';

export default function OverviewPage() {
  return (
    <div className='overflow-auto no-scrollbar flex-1 flex flex-col gap-4 h-screen bg-[#f0f0f0] md:px-4 pt-4'>
      <LeadsAccordion />
      <Table />
    </div>
  );
}
