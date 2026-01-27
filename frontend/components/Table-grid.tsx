import { dummyData } from '@/utils/data/dummy';

export default function TableGrid() {
  return (
    <table className='overflow-x-auto table-auto border-collapse w-full text-sm table'>
      <thead>
        <tr className='border-b'>
          <th className='border-b border-gray-300 p-2'></th>
          <th className='border-b border-gray-300 p-2 text-left'>
            <select>
              <option>Name </option>
              <option>Name 1 1</option>
            </select>
          </th>
          <th className='border-b border-gray-300 p-2 text-left'>
            <select>
              <option>Status reason </option>
              <option>New</option>
            </select>
          </th>
          <th className='border-b border-gray-300 p-2 text-left'>
            <select className='px-3 py-2'>
              <option>Status</option>
              <option>New</option>
              <option>In Progress</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </th>
          <th className='border-b border-gray-300 p-2 text-left'>
            <select>
              <option>Created on </option>
              <option>Date </option>
            </select>
          </th>
        </tr>
      </thead>
      {dummyData.map((row) => (
        <tbody
          key={row.id}
          className='bg-white divide-y divide-indigo-100 text-sm not-italic font-normal font-inter text-gray-900 leading-[143%] tracking-[0.15px] '
        >
          <tr
            key={row.id}
            className='border-b border-slate-300 hover:bg-gray-100 transition-colors duration-200 cursor-pointer'
          >
            <td className='px-4 py-4 whitespace-nowrap tracking-[0.1px] hover:bg-gray-100 transition-colors duration-200 '>
              <input type='checkbox' />
            </td>
            <td className='px-4 py-4 whitespace-nowrap tracking-[0.1px] hover:bg-gray-100 transition-colors duration-200 '>
              {row.name}
            </td>
            <td className='px-4 py-4 whitespace-nowrap tracking-[0.1px] hover:bg-gray-100 transition-colors duration-200 '>
              {row.topic}
            </td>
            <td className='px-4 py-4 whitespace-nowrap tracking-[0.1px] hover:bg-gray-100 transition-colors duration-200 '>
              {' '}
              {row.statusReason}
            </td>
            <td className='px-4 py-4 whitespace-nowrap tracking-[0.1px] hover:bg-gray-100 transition-colors duration-200 '>
              {row.createdOn}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
