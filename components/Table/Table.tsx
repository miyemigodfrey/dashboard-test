'use client';

import { useState } from 'react';

import AppInput from '../SearchBox/Search';
import TableGrid from '../Table-grid';
import Grid from '../Grid';

import { IoGridOutline } from 'react-icons/io5';
import { FaTable } from 'react-icons/fa';

export default function Table() {
  const [search, setSearch] = useState('');
  const [isGrid, setIsGrid] = useState(false);
  return (
    <div className='bg-slate-50 p-5 '>
      <div className='flex flex-col-reverse sm:flex-row-reverse items-stretch sm:items-center justify-between gap-3 sm:gap-5 px-2 sm:px-4 py-2 mb-4'>
        <AppInput
          type='search'
          value={search}
          onChange={(value) => setSearch(value)}
          placeholder='Search by name or email address'
        />
        <button
          onClick={() => setIsGrid(!isGrid)}
          className=' px-4 py-2 bg-blue-500 text-white rounded'
        >
          {isGrid ? <FaTable /> : <IoGridOutline />}
        </button>
      </div>

      {isGrid ? <Grid /> : <TableGrid />}
    </div>
  );
}
