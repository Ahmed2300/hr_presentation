
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const managerChartConfig = {
    type: 'radar',
    data: {
        labels: ['Approvals', 'Attendance', 'Task Management', 'Team Analytics', 'Communication'],
        datasets: [{
            label: 'Manager System Features',
            data: [90, 85, 95, 80, 88],
            backgroundColor: 'rgba(255, 204, 128, 0.2)',
            borderColor: 'rgba(255, 204, 128, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 204, 128, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: { beginAtZero: true, max: 100, ticks: { display: false }, pointLabels: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 12 } }, grid: { color: 'rgba(255, 255, 255, 0.1)' }, angleLines: { color: 'rgba(255, 255, 255, 0.1)' } }
        },
        plugins: { legend: { display: false } }
    }
};

const Slide11: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#ff7043_0%,_#e64a19_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku1tGoX.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-10 px-14">
                <header className="flex items-center mb-8">
                    <img src="https://sfile.chatglm.cn/images-ppt/fb0d7287a950.jpg" alt="Amira" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mr-5" />
                    <div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-orange-200 text-transparent bg-clip-text">Manager System: Part 2</h2>
                        <p className="text-lg text-orange-100">Team Management</p>
                    </div>
                </header>
                <div className="flex flex-grow gap-8">
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex-grow flex flex-col justify-center transition-all duration-300 hover:bg-white/15">
                            <div className="flex items-center mb-4"><i className="fas fa-users-cog text-3xl mr-4 text-amber-300"></i><h3 className="text-3xl font-semibold">Team Management Features</h3></div>
                            <div className="grid grid-cols-2 gap-4 text-lg">
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-calendar-check mr-3 text-orange-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Attendance</span></div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-th mr-3 text-orange-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Heatmap</span></div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-history mr-3 text-orange-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Detailed</span> history</div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-tasks mr-3 text-orange-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Task</span> assignment</div>
                            </div>
                        </div>
                        <div className="h-48 mt-auto"><BaseChart config={managerChartConfig as any} /></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center relative">
                        <ImageWithFullscreen
                            src="https://iili.io/Ku1tGoX.png"
                            alt="Team Management Interface"
                            className="w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-orange-400/30"
                            onImageClick={openFullscreen}
                        />
                        <div className="absolute top-5 right-5 bg-white/15 backdrop-blur-sm rounded-full w-28 h-28 flex flex-col justify-center items-center shadow-lg p-2">
                             <div className="text-4xl font-bold text-amber-300">10+</div>
                             <div className="text-sm text-orange-100 text-center uppercase">Team Members</div>
                        </div>
                        <div className="mt-4 text-lg text-center text-orange-100">Comprehensive team overview and task assignment</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide11;
