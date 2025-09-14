
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';

const expertise = [
    { icon: 'fa-laptop-code', title: 'Full-Stack Development', desc: 'Building end-to-end applications' },
    { icon: 'fa-paint-brush', title: 'Responsive UI/UX Design', desc: 'Creating intuitive, beautiful interfaces' },
    { icon: 'fa-chart-line', title: 'Data Visualization', desc: 'Transforming data into actionable insights' },
    { icon: 'fa-tasks', title: 'Agile Project Management', desc: 'Delivering robust projects on time' },
];

const teamMembers = [
  { name: 'Abdallah', role: 'Team Leader', image: 'https://iili.io/Ku2Unmg.png' },
  { name: 'Noor', role: 'Login & Settings', image: 'https://sfile.chatglm.cn/images-ppt/9b96cc928d2d.jpg' },
  { name: 'Khaled', role: 'Security & Tasks', image: 'https://iili.io/Ku24Krl.png' },
  { name: 'Ahmed', role: 'HR System', image: 'https://i.ibb.co/LhYKfJpn/1704392526630.jpg' },
  { name: 'Amira', role: 'Manager System', image: 'https://sfile.chatglm.cn/images-ppt/fb0d7287a950.jpg' },
];


const Slide13: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#5c6bc0_0%,_#3949ab_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku2V28Q.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-1 md:mb-3 bg-gradient-to-r from-white to-indigo-100 text-transparent bg-clip-text">Ready to Build What's Next?</h1>
                <p className="text-sm md:text-lg lg:text-xl font-medium mb-4 md:mb-8 text-indigo-100 max-w-4xl">Our team turns complex ideas into elegant, functional solutions.</p>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-10">
                    <div className="w-full lg:flex-1">
                        <h2 className="text-xl md:text-3xl font-bold text-amber-300 mb-2 md:mb-4">Our Core Expertise</h2>
                        <div className="space-y-2 md:space-y-4">
                            {expertise.map(item => (
                                <div key={item.title} className="bg-white/10 backdrop-blur-md rounded-lg lg:rounded-xl p-2 md:p-4 flex items-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                    <i className={`fas ${item.icon} text-xl md:text-4xl mr-3 md:mr-5 text-amber-300 w-8 md:w-12 text-center`}></i>
                                    <div>
                                        <div className="text-sm md:text-xl font-semibold">{item.title}</div>
                                        <div className="text-xs md:text-base text-indigo-100">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:flex-1">
                        <h2 className="text-xl md:text-3xl font-bold text-amber-300 mb-2 md:mb-4">Meet the Innovators</h2>
                        <div className="space-y-2 md:space-y-3">
                             {teamMembers.map(member => (
                                <div key={member.name} className="bg-white/10 backdrop-blur-md rounded-lg lg:rounded-xl p-2 md:p-3 flex items-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                    <img src={member.image} alt={member.name} className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-md mr-4" />
                                    <div>
                                        <div className="text-sm md:text-xl font-semibold">{member.name}</div>
                                        <div className="text-xs md:text-base text-indigo-100">{member.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 md:mt-6 text-center bg-white/10 backdrop-blur-md rounded-lg lg:rounded-xl p-2 md:p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                            <h3 className="text-lg md:text-2xl font-semibold text-amber-300">Have a project in mind?</h3>
                            <p className="text-sm md:text-lg text-indigo-100 mt-1">Let's bring your ideas to life</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide13;
