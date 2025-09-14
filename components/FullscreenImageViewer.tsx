
import React from 'react';

interface FullscreenImageViewerProps {
  src: string | null;
  onClose: () => void;
}

const FullscreenImageViewer: React.FC<FullscreenImageViewerProps> = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-8 animate-[fade-in_0.3s_ease-out]"
      onClick={onClose}
    >
      <button 
        className="absolute top-5 right-5 text-white text-4xl hover:text-amber-300 transition-colors z-50"
        aria-label="Close fullscreen image"
      >
        <i className="fas fa-times"></i>
      </button>
      <img
        src={src}
        alt="Fullscreen view"
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
      />
    </div>
  );
};

export default FullscreenImageViewer;
