
import React, { useState } from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const attendanceChartConfig = {
    type: 'doughnut',
    data: {
        labels: ['Present', 'Late', 'Absent'],
        datasets: [{
            data: [250, 15, 5],
            backgroundColor: ['rgba(75, 192, 192, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(255, 99, 132, 0.7)'],
            borderColor: ['#4bc0c0', '#ffce56', '#ff6384'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'right', labels: { color: 'rgba(255, 255, 255, 0.8)', padding: 15 } },
            title: { display: true, text: 'Monthly Attendance Status', color: 'rgba(255, 255, 255, 0.9)', font: { size: 16 } }
        }
    }
};

const images = [
    'https://iili.io/Ku04n4I.jpg', // Dashboard
    'https://iili.io/Ku1AKNV.jpg'  // Report
];

const Slide6: React.FC<SlideProps> = ({ openFullscreen }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#26a69a_0%,_#00897b_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku04n4I.jpg')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-10 px-14">
                <header className="flex items-center mb-8">
                    <img src="https://iili.io/Ku24Krl.png" alt="Khaled" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mr-5" />
                    <div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-teal-200 text-transparent bg-clip-text">Attendance Monitoring System</h2>
                        <p className="text-lg text-teal-100">Presented by Khaled</p>
                    </div>
                </header>
                <div className="flex flex-grow gap-8 items-center">
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex-grow flex flex-col justify-center transition-all duration-300 hover:bg-white/15">
                            <div className="flex items-center mb-4"><i className="fas fa-user-check text-3xl mr-4 text-amber-300"></i><h3 className="text-3xl font-semibold">Core Features</h3></div>
                            <div className="grid grid-cols-2 gap-4 text-lg">
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-chart-pie mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Statistics</span> dashboard</div></div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-table mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Registration</span> table</div></div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-user-clock mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Status</span> recording</div></div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-filter mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Permission</span> filtering</div></div>
                                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors col-span-2 flex items-center"><i className="fas fa-clock mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Digital</span> clock display</div></div>
                            </div>
                        </div>
                        <div className="h-48 mt-auto"><BaseChart config={attendanceChartConfig as any} /></div>
                    </div>
                     <div
                        className="flex-1 flex flex-col justify-center items-center relative h-full"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {images.map((src, index) => (
                                <div key={src} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] transition-all duration-500 ease-in-out ${currentImage === index ? 'transform rotate-2 scale-100 z-10' : 'transform -rotate-4 scale-95 z-0 opacity-50'}`}>
                                    <ImageWithFullscreen
                                        src={src}
                                        alt={index === 0 ? "Attendance Dashboard" : "Attendance Report"}
                                        className="w-full rounded-2xl shadow-2xl border-4 border-white"
                                        onImageClick={openFullscreen}
                                    />
                                </div>
                            ))}
                            <button
                                onClick={() => setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                                aria-label="Previous image"
                                className={`absolute top-1/2 left-0 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 z-20 backdrop-blur-sm ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button
                                onClick={() => setCurrentImage(prev => (prev + 1) % images.length)}
                                aria-label="Next image"
                                className={`absolute top-1/2 right-0 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 z-20 backdrop-blur-sm ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                         <div className="absolute top-5 right-5 bg-white/15 backdrop-blur-sm rounded-full w-28 h-28 flex flex-col justify-center items-center shadow-lg p-2">
                             <div className="text-4xl font-bold text-amber-300">99.8%</div>
                             <div className="text-sm text-teal-100 text-center uppercase">Accuracy</div>
                        </div>
                        <div className="absolute bottom-4 text-lg text-center text-teal-100">Real-time attendance tracking and analytics</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide6;
