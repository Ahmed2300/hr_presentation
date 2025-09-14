import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';

const projectChartConfig = {
    type: 'doughnut',
    data: {
        labels: ['Employee System', 'Login & Settings', 'Attendance & Tasks', 'HR System', 'Manager System'],
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
                labels: { color: 'rgba(255, 255, 255, 0.8)', font: { size: 12 }, padding: 15 }
            }
        }
    }
};

const Slide12: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#5c6bc0_0%,_#3949ab_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku2V28Q.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-10 px-14">
                <header className="flex items-center mb-8">
                    <img src="https://iili.io/Ku2Unmg.png" alt="Abdallah" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mr-5" />
                    <div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text">Project Summary</h2>
                        <p className="text-lg text-indigo-100">Presented by Abdallah - Team Leader</p>
                    </div>
                </header>
                <div className="flex flex-grow gap-8">
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/15">
                            <h3 className="text-2xl font-semibold mb-3 flex items-center"><i className="fas fa-chart-line mr-3 text-amber-300"></i>Project Achievements</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"><div className="text-4xl font-bold text-amber-300">12</div><div className="text-sm uppercase tracking-wider text-indigo-100">HTML Pages</div></div>
                                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"><div className="text-4xl font-bold text-amber-300">31</div><div className="text-sm uppercase tracking-wider text-indigo-100">JavaScript Files</div></div>
                                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"><div className="text-4xl font-bold text-amber-300">9</div><div className="text-sm uppercase tracking-wider text-indigo-100">CSS Files</div></div>
                                <div className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"><div className="text-4xl font-bold text-amber-300">4</div><div className="text-sm uppercase tracking-wider text-indigo-100">User Roles</div></div>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 hover:bg-white/15">
                             <h3 className="text-2xl font-semibold mb-3 flex items-center"><i className="fas fa-code mr-3 text-amber-300"></i>Technologies Used</h3>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-white/10 rounded-lg p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fab fa-html5 text-2xl mr-2 text-sky-300"></i> HTML5</div>
                                <div className="bg-white/10 rounded-lg p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fab fa-css3-alt text-2xl mr-2 text-sky-300"></i> CSS3</div>
                                <div className="bg-white/10 rounded-lg p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fab fa-bootstrap text-2xl mr-2 text-sky-300"></i> Bootstrap 5</div>
                                <div className="bg-white/10 rounded-lg p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fab fa-js text-2xl mr-2 text-sky-300"></i> JavaScript</div>
                                <div className="bg-white/10 rounded-lg p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fas fa-calendar-alt text-2xl mr-2 text-sky-300"></i> FullCalendar</div>
                                <div className="bg-white/10 rounded-lg p-3 flex items-center hover:bg-white/20 transition-colors"><i className="fas fa-chart-bar text-2xl mr-2 text-sky-300"></i> Chart.js</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex-grow flex flex-col transition-all duration-300 hover:bg-white/15">
                            <h3 className="text-2xl font-semibold mb-3 flex items-center"><i className="fas fa-tasks mr-3 text-amber-300"></i>Feature Distribution</h3>
                            <div className="flex-grow h-64"><BaseChart config={projectChartConfig as any} /></div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex items-center justify-center text-center transition-all duration-300 hover:bg-white/15">
                            <div>
                                <h3 className="text-3xl font-bold text-amber-300">Thank You!</h3>
                                <p className="text-lg text-indigo-100 mt-1">We're ready for any questions or inquiries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide12;