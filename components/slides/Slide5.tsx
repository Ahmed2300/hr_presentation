
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const settingsChartConfig = {
    type: 'radar',
    data: {
        labels: ['Security', 'Flexibility', 'UX', 'Custom', 'Integration'],
        datasets: [{
            label: 'Settings System',
            data: [90, 85, 95, 88, 92],
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
            r: {
                beginAtZero: true, max: 100,
                ticks: { display: false },
                pointLabels: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 10 } },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                angleLines: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        },
        plugins: { legend: { display: false } }
    }
};

const Slide5: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#7e57c2_0%,_#5e35b1_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/KucpFyB.jpg')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <header className="flex items-center mb-4 md:mb-8">
                    <img src="https://sfile.chatglm.cn/images-ppt/9b96cc928d2d.jpg" alt="Noor" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 md:border-4 border-white shadow-lg mr-3 md:mr-5" />
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">Login & Settings: Part 2</h2>
                        <p className="text-sm md:text-base lg:text-lg text-purple-200">Flexible Configuration</p>
                    </div>
                </header>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-8 items-center">
                    <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-5">
                         <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-6 flex-grow flex flex-col transition-all duration-300 hover:bg-white/15">
                             <div className="flex items-center mb-2 md:mb-4"><i className="fas fa-cogs text-xl md:text-3xl mr-2 md:mr-4 text-amber-300"></i><h3 className="text-xl md:text-3xl font-semibold">System Configuration</h3></div>
                             <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-base lg:text-lg">
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-clock mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Late penalties</span></div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-user-times mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Absence</span> deduction</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-business-time mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Overtime</span> multipliers</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-tasks mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Task penalties</span></div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors col-span-2 flex items-center"><i className="fas fa-calendar-week mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Weekend settings</span></div></div>
                             </div>
                        </div>
                        <div className="h-32 md:h-40 lg:h-48 mt-auto"><BaseChart config={settingsChartConfig as any} /></div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col justify-center items-center relative">
                        <div className="absolute top-0 right-0 bg-white/15 backdrop-blur-sm rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 p-2 flex flex-col justify-center items-center shadow-lg">
                             <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-300">10+</div>
                             <div className="text-[10px] md:text-xs lg:text-sm text-purple-200 text-center uppercase">Configurable Settings</div>
                        </div>
                        <ImageWithFullscreen
                            src="https://iili.io/KucpFyB.jpg"
                            alt="Settings System Interface"
                            className="w-full max-w-sm lg:max-w-lg rounded-xl lg:rounded-2xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 group-hover:scale-105"
                            onImageClick={openFullscreen}
                        />
                        <div className="mt-2 md:mt-4 text-sm md:text-lg text-center text-purple-200">Fine-tune the system to your policies</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide5;
