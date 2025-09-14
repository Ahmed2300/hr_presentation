import React, { useState, useEffect, MouseEvent as ReactMouseEvent, WheelEvent as ReactWheelEvent, useRef } from 'react';

interface FullscreenImageViewerProps {
  src: string | null;
  onClose: () => void;
}

const FullscreenImageViewer: React.FC<FullscreenImageViewerProps> = ({ src, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startDragPoint = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    resetZoom();
  }, [src]);

  if (!src) return null;

  const handleMouseDown = (e: ReactMouseEvent<HTMLImageElement>) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    startDragPoint.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    if (imageRef.current) {
        imageRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLImageElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - startDragPoint.current.x,
      y: e.clientY - startDragPoint.current.y,
    });
  };

  const handleMouseUpOrLeave = (e: ReactMouseEvent<HTMLImageElement>) => {
    if (isDragging) {
        e.preventDefault();
        setIsDragging(false);
        if (imageRef.current) {
            imageRef.current.style.cursor = 'grab';
        }
    }
  };

  const handleWheel = (e: ReactWheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = 1.1;
    if (e.deltaY < 0) {
      // Zoom in
      setScale(prev => Math.min(prev * zoomFactor, 8));
    } else {
      // Zoom out
      setScale(prev => Math.max(prev / zoomFactor, 1));
    }
  };

  const handleZoomIn = () => setScale(prev => Math.min(prev * 1.5, 8));
  const handleZoomOut = () => setScale(prev => Math.max(prev / 1.5, 1));

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-[fade-in_0.3s_ease-out] overflow-hidden"
      onClick={onClose}
      onWheel={handleWheel}
    >
      <button 
        className="absolute top-4 right-4 text-white text-3xl hover:text-amber-300 transition-colors z-50"
        aria-label="Close fullscreen image"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <i className="fas fa-times"></i>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center gap-2 z-50">
        <button onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} className="w-10 h-10 text-white text-xl rounded-full hover:bg-white/20 transition-colors" aria-label="Zoom out"><i className="fas fa-search-minus"></i></button>
        <button onClick={(e) => { e.stopPropagation(); resetZoom(); }} className="w-10 h-10 text-white text-xl rounded-full hover:bg-white/20 transition-colors" aria-label="Reset zoom"><i className="fas fa-redo"></i></button>
        <button onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} className="w-10 h-10 text-white text-xl rounded-full hover:bg-white/20 transition-colors" aria-label="Zoom in"><i className="fas fa-search-plus"></i></button>
      </div>
      
      <div className="w-full h-full flex items-center justify-center">
        <img
          ref={imageRef}
          src={src}
          alt="Fullscreen view"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-100 ease-out"
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: scale > 1 ? 'grab' : 'default',
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default FullscreenImageViewer;
