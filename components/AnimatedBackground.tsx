
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <span className="left-[25%] w-20 h-20 animation-delay-[0s]"></span>
      <span className="left-[10%] w-5 h-5 animation-delay-[2s] animation-duration-[12s]"></span>
      <span className="left-[70%] w-5 h-5 animation-delay-[4s]"></span>
      <span className="left-[40%] w-16 h-16 animation-delay-[0s] animation-duration-[18s]"></span>
      <span className="left-[65%] w-5 h-5 animation-delay-[0s]"></span>
      <span className="left-[75%] w-[110px] h-[110px] animation-delay-[3s]"></span>
      <span className="left-[35%] w-[150px] h-[150px] animation-delay-[7s]"></span>
      <span className="left-[50%] w-6 h-6 animation-delay-[15s] animation-duration-[45s]"></span>
      <span className="left-[20%] w-4 h-4 animation-delay-[2s] animation-duration-[35s]"></span>
      <span className="left-[85%] w-[150px] h-[150px] animation-delay-[0s] animation-duration-[11s]"></span>
    </div>
  );
};

export default AnimatedBackground;
