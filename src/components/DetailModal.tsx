'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function DetailModal({ isOpen, onClose, title, children }: DetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-blue/60 backdrop-blur-md z-[100] cursor-pointer"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              {/* Header */}
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="text-2xl font-bold text-brand-blue">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-400 hover:text-brand-blue"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {children}
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50 flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue-light transition-all shadow-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
