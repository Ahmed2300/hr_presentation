
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const hrDashboardChartConfig = {
    type: 'bar',
    data: {
        labels: ['Eng', 'Sales', 'Mrkt', 'Supp', 'HR'],
        datasets: [{
            label: 'Employees per Department',
            data: [45, 25, 15, 20, 5],
            backgroundColor: 'rgba(255, 204, 128, 0.7)',
            borderColor: 'rgba(255, 204, 128, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: 'rgba(255, 255, 255, 0.7)', font: {size: 10} } },
            x: { grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: 'rgba(255, 255, 255, 0.7)', font: {size: 10} } }
        },
        plugins: { legend: { display: false } }
    }
};

const Slide10: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#ec407a_0%,_#c2185b_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://i.ibb.co/9k2yyZKJ/HR-Dashboard.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <header className="flex items-center mb-4 md:mb-8">
                    <img src="https://i.ibb.co/LhYKfJpn/1704392526630.jpg" alt="Ahmed" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 md:border-4 border-white shadow-lg mr-3 md:mr-5" />
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-pink-200 text-transparent bg-clip-text">HR System: Part 1</h2>
                        <p className="text-sm md:text-base lg:text-lg text-pink-100">HR Dashboard</p>
                    </div>
                </header>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-8">
                    <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-6 flex-grow flex flex-col justify-center transition-all duration-300 hover:bg-white/15">
                            <div className="flex items-center mb-2 md:mb-4"><i className="fas fa-tachometer-alt text-xl md:text-3xl mr-2 md:mr-4 text-amber-300"></i><h3 className="text-xl md:text-3xl font-semibold">Dashboard Features</h3></div>
                            <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-base lg:text-lg">
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-chart-line mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Statistics</span></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-chart-pie mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Trends</span></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-users mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Emp. Table</span></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-star mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Performers</span></div>
                                 <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors col-span-2 flex items-center"><i className="fas fa-file-export mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Data export</span> functionality</div>
                            </div>
                        </div>
                        <div className="h-32 md:h-40 lg:h-48 mt-auto"><BaseChart config={hrDashboardChartConfig as any} /></div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col justify-center items-center relative">
                        <ImageWithFullscreen
                            src="https://i.ibb.co/9k2yyZKJ/HR-Dashboard.png"
                            alt="HR Dashboard System"
                            className="w-full max-w-sm lg:max-w-lg rounded-xl lg:rounded-2xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 group-hover:scale-105"
                            onImageClick={openFullscreen}
                        />
                         <div className="absolute top-2 right-2 md:top-5 md:right-5 bg-white/15 backdrop-blur-sm rounded-full w-20 h-20 md:w-28 md:h-28 flex flex-col justify-center items-center shadow-lg p-2">
                             <div className="text-2xl md:text-4xl font-bold text-amber-300">5</div>
                             <div className="text-[10px] md:text-sm text-pink-100 text-center uppercase">Departments</div>
                        </div>
                        <div className="mt-2 md:mt-4 text-sm md:text-lg text-center text-pink-100">At-a-glance insights into company workforce</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide10;
