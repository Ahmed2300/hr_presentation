
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const payrollChartConfig = {
    type: 'doughnut',
    data: {
        labels: ['Base Salary', 'Overtime', 'Bonuses', 'Deductions'],
        datasets: [{
            data: [70, 15, 10, 5],
            backgroundColor: ['rgba(255, 204, 128, 0.8)', 'rgba(129, 212, 250, 0.8)', 'rgba(102, 187, 106, 0.8)', 'rgba(248, 187, 208, 0.8)'],
            borderColor: ['#ffcc80', '#81d4fa', '#66bb6a', '#f8bbd0'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'right', labels: { color: 'rgba(255, 255, 255, 0.8)', padding: 15 } },
            title: { display: true, text: 'Payroll Distribution', color: 'rgba(255, 255, 255, 0.9)', font: { size: 16 } }
        }
    }
};

const Slide9: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#ec407a_0%,_#c2185b_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://i.ibb.co/gFRcXYGG/Payroll-HR-System.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-10 px-14">
                <header className="flex items-center mb-8">
                    <img src="https://i.ibb.co/LhYKfJpn/1704392526630.jpg" alt="Ahmed" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mr-5" />
                    <div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-pink-200 text-transparent bg-clip-text">HR System: Part 2</h2>
                        <p className="text-lg text-pink-100">Automated Payroll System</p>
                    </div>
                </header>
                <div className="flex flex-grow gap-8">
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex-grow flex flex-col justify-center transition-all duration-300 hover:bg-white/15">
                            <div className="flex items-center mb-4"><i className="fas fa-money-check-alt text-3xl mr-4 text-amber-300"></i><h3 className="text-3xl font-semibold">Payroll Features</h3></div>
                             <div className="grid grid-cols-2 gap-4 text-lg">
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-calculator mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Salary</span> statistics</div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-table mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Detailed</span> tables</div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-clock mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Late penalties</span></div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-percentage mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">25% deduction cap</span></div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors col-span-2 flex items-center"><i className="fas fa-filter mr-3 text-pink-200 w-6 text-center"></i><span className="font-semibold text-amber-300">Advanced</span> filtering options</div>
                            </div>
                        </div>
                        <div className="h-48 mt-auto"><BaseChart config={payrollChartConfig as any} /></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center relative">
                        <ImageWithFullscreen
                            src="https://i.ibb.co/gFRcXYGG/Payroll-HR-System.png"
                            alt="Payroll System Interface"
                            className="w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-pink-400/30"
                            onImageClick={openFullscreen}
                        />
                        <div className="absolute top-5 right-5 bg-white/15 backdrop-blur-sm rounded-full w-28 h-28 flex flex-col justify-center items-center shadow-lg p-2">
                             <div className="text-4xl font-bold text-amber-300">100%</div>
                             <div className="text-sm text-pink-100 text-center uppercase">Accuracy</div>
                        </div>
                        <div className="mt-4 text-lg text-center text-pink-100">Automated and precise salary and deduction calculations</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide9;
