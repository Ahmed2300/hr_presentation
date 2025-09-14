
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';

const projectChartConfig = {
    type: 'doughnut',
    data: {
        labels: ['Employee', 'Login', 'Tasks', 'HR', 'Manager'],
        datasets: [{
            data: [20, 15, 15, 25, 25],
            backgroundColor: ['#ffcc80', '#81d4fa', '#b2dfdb', '#f8bbd0', '#ffccbc'],
            borderColor: ['#5c6bc0'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: { color: 'rgba(255, 255, 255, 0.8)', font: { size: 10 }, padding: 10 }
            }
        }
    }
};

const Slide12: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#5c6bc0_0%,_#3949ab_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku2V28Q.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <header className="flex items-center mb-4 md:mb-8">
                    <img src="https://iili.io/Ku2Unmg.png" alt="Abdallah" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 md:border-4 border-white shadow-lg mr-3 md:mr-5" />
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text">Project Summary</h2>
                        <p className="text-sm md:text-base lg:text-lg text-indigo-100">Presented by Abdallah</p>
                    </div>
                </header>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-8">
                    <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-5 transition-all duration-300 hover:bg-white/15">
                            <h3 className="text-lg md:text-2xl font-semibold mb-3 flex items-center"><i className="fas fa-chart-line mr-3 text-amber-300"></i>Achievements</h3>
                            <div className="grid grid-cols-2 gap-2 md:gap-4">
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 text-center hover:bg-white/20 transition-colors"><div className="text-2xl md:text-4xl font-bold text-amber-300">12</div><div className="text-[10px] md:text-sm uppercase tracking-wider text-indigo-100">HTML Pages</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 text-center hover:bg-white/20 transition-colors"><div className="text-2xl md:text-4xl font-bold text-amber-300">31</div><div className="text-[10px] md:text-sm uppercase tracking-wider text-indigo-100">JS Files</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 text-center hover:bg-white/20 transition-colors"><div className="text-2xl md:text-4xl font-bold text-amber-300">9</div><div className="text-[10px] md:text-sm uppercase tracking-wider text-indigo-100">CSS Files</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 text-center hover:bg-white/20 transition-colors"><div className="text-2xl md:text-4xl font-bold text-amber-300">4</div><div className="text-[10px] md:text-sm uppercase tracking-wider text-indigo-100">User Roles</div></div>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-5 transition-all duration-300 hover:bg-white/15">
                             <h3 className="text-lg md:text-2xl font-semibold mb-3 flex items-center"><i className="fas fa-code mr-3 text-amber-300"></i>Technologies</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 text-xs md:text-base">
                                <div className="bg-white/10 rounded-lg p-2 md:p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fab fa-html5 text-lg md:text-2xl mr-2 text-sky-300"></i> HTML5</div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fab fa-css3-alt text-lg md:text-2xl mr-2 text-sky-300"></i> CSS3</div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fab fa-bootstrap text-lg md:text-2xl mr-2 text-sky-300"></i> Bootstrap</div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fab fa-js text-lg md:text-2xl mr-2 text-sky-300"></i> JavaScript</div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fas fa-calendar-alt text-lg md:text-2xl mr-2 text-sky-300"></i> FullCalendar</div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fas fa-chart-bar text-lg md:text-2xl mr-2 text-sky-300"></i> Chart.js</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-5 flex-grow flex flex-col transition-all duration-300 hover:bg-white/15">
                            <h3 className="text-lg md:text-2xl font-semibold mb-3 flex items-center"><i className="fas fa-tasks mr-3 text-amber-300"></i>Feature Distribution</h3>
                            <div className="flex-grow h-40 md:h-64"><BaseChart config={projectChartConfig as any} /></div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-5 flex items-center justify-center text-center transition-all duration-300 hover:bg-white/15">
                            <div>
                                <h3 className="text-xl md:text-3xl font-bold text-amber-300">Thank You!</h3>
                                <p className="text-sm md:text-lg text-indigo-100 mt-1">Ready for questions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide12;
