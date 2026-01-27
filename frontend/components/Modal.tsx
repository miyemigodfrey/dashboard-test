'use client';

import { ReactNode, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className='modal fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-full h-full'
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <div className='p-[0.125rem] mt-10 md:mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl '>
        <div className='bg-[#efefef] rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-2xl w-full max-h-fit '>
          <header className='p-2 flex justify-between items-center'>
            <button
              onClick={onClose}
              aria-label='Close Modal'
              className='text-gray-500 hover:text-gray-700 text-xl'
            >
              &times;
            </button>
          </header>

          <main className='p-2'>{children}</main>
          <footer className='p-2 flex justify-end'>
            <button
              onClick={onClose}
              className='px-3 py-1 bg-slate-50 text-slate-800 border-2 hover:text-white rounded hover:bg-blue-600'
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal-root')!
  );
}
