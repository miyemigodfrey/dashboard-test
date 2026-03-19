'use client';

import React from 'react';

function AppInput({
  type = 'text',
  readOnly,
  id,
  value = '',
  placeholder,
  name = '',
  disabled = false,
  onChange,
}: {
  type?: string;
  label?: string;
  id?: string;
  icon?: React.ReactNode;
  readOnly?: boolean;
  value?: string;
  placeholder?: string;
  name?: string;
  classes?: string;
  disabled?: boolean;
  onChange?: (e: string) => void;
}) {
  return (
    <div className='w-full md:w-[50%] lg:w-[30%] h-auto bg-white border border-blue-500 rounded-md font-inter'>
      <input
        type={type}
        className='w-full text-xs not-italic disabled:text-gray-500 disabled:bg-white outline-none rounded-md font-normal leading-5 text-gray-900 p-2'
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={(event) => onChange && onChange(event.target.value)}
      />
    </div>
  );
}

export default AppInput;
