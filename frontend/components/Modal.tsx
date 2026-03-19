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
      className='modal fixed inset-0 z-[200] flex items-center justify-center backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-transparent w-full h-full p-0 m-0 max-w-full max-h-full'
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <div className='p-[0.125rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl w-[92vw] sm:w-[85vw] md:w-[70vw] lg:w-[42rem] mx-auto'>
        <div className='bg-[#efefef] rounded-xl shadow-2xl w-full max-h-[85vh] overflow-y-auto'>
          <header className='sticky top-0 bg-[#efefef] z-10 px-4 py-3 flex justify-between items-center border-b border-gray-200 rounded-t-xl'>
            <span className='text-sm font-semibold text-gray-600'>Details</span>
            <button
              onClick={onClose}
              aria-label='Close Modal'
              className='w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 text-lg transition-colors'
            >
              &times;
            </button>
          </header>

          <main className='p-3 sm:p-4'>{children}</main>

          <footer className='sticky bottom-0 bg-[#efefef] px-4 py-3 flex justify-end border-t border-gray-200 rounded-b-xl'>
            <button
              onClick={onClose}
              className='px-4 py-1.5 text-sm bg-white text-slate-700 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm'
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
