import React from 'react';

interface ImageWithFullscreenProps {
  src: string;
  alt: string;
  className?: string;
  onImageClick: (src: string) => void;
}

const ImageWithFullscreen: React.FC<ImageWithFullscreenProps> = ({ src, alt, className, onImageClick }) => {
  return (
    <div 
      className="relative group cursor-pointer"
      onDoubleClick={() => onImageClick(src)}
    >
      <img src={src} alt={alt} className={className} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onImageClick(src)
        }}
        className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-10 h-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 hover:scale-110"
        aria-label="View image in fullscreen"
      >
        <i className="fas fa-expand"></i>
      </button>
    </div>
  );
};

export default ImageWithFullscreen;