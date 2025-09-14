import React from 'react';
import AnimatedBackground from '../AnimatedBackground';

const teamMembers = [
  { name: 'Abdallah', role: 'Team Leader', image: 'https://iili.io/Ku2Unmg.png' },
  { name: 'Noor', role: 'Login & Settings', image: 'https://iili.io/KuGDkkx.png' },
  { name: 'Khaled', role: 'Security & Tasks', image: 'https://iili.io/Ku24Krl.png' },
  { name: 'Ahmed', role: 'HR System', image: 'https://i.ibb.co/LhYKfJpn/1704392526630.jpg' },
  { name: 'Amira', role: 'Manager System', image: 'https://iili.io/KuGmcN4.png' },
];

const projectStats = [
    { value: '12', label: 'HTML PAGES' },
    { value: '31', label: 'JAVASCRIPT FILES' },
    { value: '9', label: 'CSS FILES' },
    { value: '4', label: 'USER ROLES' },
];

const techIcons = [
  { icon: 'html5', prefix: 'fab' },
  { icon: 'css3-alt', prefix: 'fab' },
  { icon: 'bootstrap', prefix: 'fab' },
  { icon: 'js', prefix: 'fab' },
  { icon: 'calendar-alt', prefix: 'fas' },
  { icon: 'chart-bar', prefix: 'fas' },
];


const Slide1: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#5c6bc0_0%,_#3949ab_100%)] text-white">
      <div className="absolute inset-0 bg-[url('https://iili.io/Ku2V28Q.png')] bg-cover bg-center opacity-15 z-0"></div>
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col justify-center items-center h-full p-4 md:p-8 lg:p-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-1 md:mb-2 bg-gradient-to-r from-white to-indigo-100 text-transparent bg-clip-text text-shadow-lg tracking-tight">
          HR/Manager System
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-3xl font-medium mb-4 md:mb-6 lg:mb-10 text-indigo-100 tracking-wide">
          A Comprehensive Employee Management Solution
        </h2>
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 lg:gap-8 mt-2 md:mt-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col items-center relative">
              <img src={member.image} alt={member.name} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full object-cover border-2 md:border-4 border-white shadow-lg transition-all duration-300 group-hover:border-amber-300 group-hover:shadow-2xl group-hover:-translate-y-2" />
              <div className="mt-2 md:mt-4 text-center">
                <div className="text-sm md:text-lg lg:text-xl font-semibold">{member.name}</div>
                <div className="text-xs md:text-sm text-indigo-100 mt-1">{member.role}</div>
              </div>
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0.5 md:h-1 bg-amber-300 transition-all duration-300 group-hover:w-4/5"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 md:mt-8 bg-black/20 backdrop-blur-md rounded-xl md:rounded-2xl px-2 py-2 md:px-6 md:py-4 flex items-center justify-around w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl shadow-lg">
            {projectStats.map((stat, index) => (
                <React.Fragment key={stat.label}>
                    <div className="text-center px-1 sm:px-2 md:px-4 flex-1">
                        <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-amber-300">{stat.value}</div>
                        <div className="text-[8px] sm:text-[10px] lg:text-sm uppercase tracking-wider text-indigo-100 mt-1">{stat.label}</div>
                    </div>
                    {index < projectStats.length - 1 && <div className="w-px h-10 md:h-12 lg:h-16 bg-white/20"></div>}
                </React.Fragment>
            ))}
        </div>

        <div className="flex gap-4 md:gap-8 mt-4 md:mt-8">
           {techIcons.map((item, index) => (
             <i key={index} className={`${item.prefix} fa-${item.icon} text-xl md:text-2xl lg:text-3xl text-indigo-100 opacity-80 transition-all duration-300 hover:text-amber-300 hover:scale-125`}></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide1;