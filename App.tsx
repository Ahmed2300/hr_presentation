
import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';
import Slide13 from './components/slides/Slide13';
import Slide14 from './components/slides/Slide14';
import Slide15 from './components/slides/Slide15';
import FullscreenImageViewer from './components/FullscreenImageViewer';

// Declare libraries from CDN for TypeScript
declare const html2canvas: any;
declare const jspdf: any;

const App: React.FC = () => {
  const [slideState, setSlideState] = useState({
    current: 0,
    previous: -1,
    direction: 'none' as 'next' | 'prev' | 'jump' | 'none',
  });
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const openFullscreen = (src: string) => setFullscreenImage(src);
  const closeFullscreen = useCallback(() => setFullscreenImage(null), []);

  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" openFullscreen={openFullscreen} />,
    <Slide5 key="5" openFullscreen={openFullscreen} />,
    <Slide6 key="6" openFullscreen={openFullscreen} />,
    <Slide7 key="7" openFullscreen={openFullscreen} />,
    <Slide8 key="8" openFullscreen={openFullscreen} />,
    <Slide9 key="9" openFullscreen={openFullscreen} />,
    <Slide10 key="10" openFullscreen={openFullscreen} />,
    <Slide11 key="11" openFullscreen={openFullscreen} />,
    <Slide12 key="12" openFullscreen={openFullscreen} />,
    <Slide13 key="13" openFullscreen={openFullscreen} />,
    <Slide14 key="14" />,
    <Slide15 key="15" />,
  ];

  const exportToPDF = useCallback(async () => {
    setIsExporting(true);

    const { jsPDF } = jspdf;
    const pdf = new jsPDF('landscape', 'px', [1280, 720]);
    const exportContainer = document.getElementById('pdf-export-container');

    if (!exportContainer) {
      console.error('Export container not found!');
      setIsExporting(false);
      return;
    }
    
    const exportRoot = createRoot(exportContainer);

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      
      await new Promise<void>(resolve => {
        exportRoot.render(slide);
        // Wait for rendering and animations (like charts)
        setTimeout(resolve, 500); 
      });

      exportContainer.classList.add('is-exporting-pdf');

      const canvas = await html2canvas(exportContainer, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
      });

      exportContainer.classList.remove('is-exporting-pdf');

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      if (i > 0) {
        pdf.addPage([1280, 720], 'landscape');
      }
      
      pdf.addImage(imgData, 'JPEG', 0, 0, 1280, 720);
    }
    
    pdf.save('presentation.pdf');
    exportRoot.render(null); // Clear the container
    setIsExporting(false);

  }, [slides]);

  const nextSlide = useCallback(() => {
    setSlideState(prev => {
      if (prev.direction !== 'none') return prev;
      const newIndex = (prev.current + 1) % slides.length;
      return { current: newIndex, previous: prev.current, direction: 'next' };
    });
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setSlideState(prev => {
      if (prev.direction !== 'none') return prev;
      const newIndex = (prev.current - 1 + slides.length) % slides.length;
      return { current: newIndex, previous: prev.current, direction: 'prev' };
    });
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setSlideState(prev => {
      if (prev.direction !== 'none' || index === prev.current) return prev;
      return { current: index, previous: prev.current, direction: 'jump' };
    });
  }, []);
  
  const handleAnimationEnd = useCallback(() => {
    setSlideState(prev => ({ ...prev, previous: -1, direction: 'none' }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreenImage) {
        if (e.key === 'Escape') closeFullscreen();
        return;
      }

      // PDF Export Shortcut
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        exportToPDF();
        return;
      }
      
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, fullscreenImage, closeFullscreen, exportToPDF]);

  return (
    <main className="w-screen h-screen bg-gray-900 flex justify-center items-center overflow-hidden p-2 sm:p-4">
      {isExporting && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex flex-col justify-center items-center text-white">
          <svg className="animate-spin h-10 w-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <h2 className="text-2xl font-semibold">Exporting to PDF...</h2>
          <p className="mt-2">This may take a few moments.</p>
        </div>
      )}
      <div className="w-full max-w-[1280px] aspect-[16/9] relative shadow-2xl rounded-lg overflow-hidden" style={{ perspective: '1500px' }}>
        
        {slides.map((slide, index) => {
          const isCurrent = index === slideState.current;
          const isPrevious = index === slideState.previous;

          if (!isCurrent && !isPrevious) return null;

          let animationClass = '';
          if (isCurrent && slideState.direction !== 'none') {
            if (slideState.direction === 'next') animationClass = 'animate-enter-from-right';
            else if (slideState.direction === 'prev') animationClass = 'animate-enter-from-left';
            else if (slideState.direction === 'jump') animationClass = 'animate-fade-in';
          } else if (isPrevious && slideState.direction !== 'none') {
            if (slideState.direction === 'next') animationClass = 'animate-exit-to-left';
            else if (slideState.direction === 'prev') animationClass = 'animate-exit-to-right';
            else if (slideState.direction === 'jump') animationClass = 'animate-fade-out';
          }
          
          return (
             <div
                key={index}
                className={`w-full h-full absolute top-0 left-0 ${animationClass}`}
                onAnimationEnd={isCurrent ? handleAnimationEnd : undefined}
             >
                {slide}
            </div>
          );
        })}
        
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute top-1/2 left-1 sm:left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex justify-center items-center transition-all duration-300 z-20 backdrop-blur-sm">
          <i className="fas fa-chevron-left text-xs md:text-base"></i>
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-1 sm:right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex justify-center items-center transition-all duration-300 z-20 backdrop-blur-sm">
          <i className="fas fa-chevron-right text-xs md:text-base"></i>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                slideState.current === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
      <FullscreenImageViewer src={fullscreenImage} onClose={closeFullscreen} />
    </main>
  );
};

export default App;