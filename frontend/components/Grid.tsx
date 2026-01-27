import { dummyData } from '@/utils/data/dummy'; // Import the dummy data

export default function Grid() {
  return (
    <div className='overflow-x-auto table-auto border-collapse w-full text-sm '>
      <div className='grid grid-cols-[auto_auto_auto_auto_auto] items-center justify-evenly'>
        <div className=' p-2'></div>
        <div className='text-left'>
          <select>
            <option>Name </option>
            <option>Name 1 1</option>
          </select>
        </div>
        <div className='text-left'>
          <select>
            <option>Status reason </option>
            <option>New</option>
          </select>
        </div>
        <div className='text-left'>
          <select className='px-3 py-2'>
            <option>Status</option>
            <option>New</option>
            <option>In Progress</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
        <div className='text-left'>
          <select>
            <option>Created on </option>
            <option>Date </option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-[auto_auto_auto_auto] items-center gap-3'>
        {dummyData.map((row) => (
          <div key={row.id}>
            <div
              key={row.id}
              className='text-xs font-semibold text-slate-500 w-full flex flex-col border border-gray-300'
            >
              <div className='px-2 py-3'>
                <input type='checkbox' />
              </div>
              <div className='p-2'>{row.name}</div>
              <div className='p-2'>{row.topic}</div>
              <div className='p-2'> {row.statusReason}</div>
              <div className='p-2'>{row.createdOn}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
