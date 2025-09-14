import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const approvalsChartConfig = {
    type: 'doughnut',
    data: {
        labels: ['Pending', 'Approved', 'Rejected'],
        datasets: [{
            data: [12, 45, 3],
            backgroundColor: ['rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 99, 132, 0.7)'],
            borderColor: ['#ffce56', '#4bc0c0', '#ff6384'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'right', labels: { color: 'rgba(255, 255, 255, 0.8)', padding: 10, font: {size: 10} } },
            title: { display: true, text: 'Request Statuses', color: 'rgba(255, 255, 255, 0.9)', font: { size: 12 } }
        }
    }
};

const Slide12: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#ff7043_0%,_#e64a19_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku2TNM7.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <header className="flex items-center mb-4 md:mb-8">
                    <img src="https://iili.io/KuGmcN4.png" alt="Amira" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 md:border-4 border-white shadow-lg mr-3 md:mr-5" />
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-orange-200 text-transparent bg-clip-text">Manager System: Part 1</h2>
                        <p className="text-sm md:text-base lg:text-lg text-orange-100">Approvals Queue</p>
                    </div>
                </header>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-8">
                    <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-6 flex-grow flex flex-col justify-center transition-all duration-300 hover:bg-white/15">
                            <div className="flex items-center mb-2 md:mb-4"><i className="fas fa-clipboard-check text-xl md:text-3xl mr-2 md:mr-4 text-amber-300"></i><h3 className="text-xl md:text-3xl font-semibold">Approval Features</h3></div>
                            <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-base lg:text-lg">
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-chart-line mr-3 text-orange-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Stats</span></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-table mr-3 text-orange-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Req. table</span></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-check-circle mr-3 text-orange-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Workflow</span></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-comment mr-3 text-orange-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Comments</span></div>
                            </div>
                        </div>
                        <div className="h-32 md:h-40 lg:h-48 mt-auto"><BaseChart config={approvalsChartConfig as any} /></div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col justify-center items-center relative">
                        <ImageWithFullscreen
                            src="https://iili.io/Ku2TNM7.png"
                            alt="Manager Approvals Interface"
                            className="w-full max-w-sm lg:max-w-lg rounded-xl lg:rounded-2xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 group-hover:scale-105"
                            onImageClick={openFullscreen}
                        />
                        <div className="absolute top-2 right-2 md:top-5 md:right-5 bg-white/15 backdrop-blur-sm rounded-full w-20 h-20 md:w-28 md:h-28 flex flex-col justify-center items-center shadow-lg p-2">
                             <div className="text-2xl md:text-4xl font-bold text-amber-300">24h</div>
                             <div className="text-[10px] md:text-sm text-orange-100 text-center uppercase">Response</div>
                        </div>
                        <div className="mt-2 md:mt-4 text-sm md:text-lg text-center text-orange-100">Streamlined approval process for managers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide12;