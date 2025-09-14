
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const tasksChartConfig = {
    type: 'bar',
    data: {
        labels: ['To-Do', 'In Progress', 'Done'],
        datasets: [{
            label: 'Task Distribution',
            data: [12, 8, 15],
            backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(75, 192, 192, 0.7)'],
            borderColor: ['#ff6384', '#ffce56', '#4bc0c0'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 10 } } },
            x: { grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 10 } } }
        },
        plugins: { legend: { display: false } }
    }
};

const Slide7: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#26a69a_0%,_#00897b_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku1E52S.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <header className="flex items-center mb-4 md:mb-8">
                    <img src="https://iili.io/Ku24Krl.png" alt="Khaled" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 md:border-4 border-white shadow-lg mr-3 md:mr-5" />
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-teal-200 text-transparent bg-clip-text">Tasks Management</h2>
                        <p className="text-sm md:text-base lg:text-lg text-teal-100">Presented by Khaled</p>
                    </div>
                </header>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-8 items-center">
                    <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-5">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-6 flex-grow flex flex-col justify-center transition-all duration-300 hover:bg-white/15">
                            <div className="flex items-center mb-2 md:mb-4"><i className="fas fa-tasks text-xl md:text-3xl mr-2 md:mr-4 text-amber-300"></i><h3 className="text-xl md:text-3xl font-semibold">Kanban Board Features</h3></div>
                            <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-base lg:text-lg">
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-columns mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Kanban</span> board</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-flag mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Priority</span> coding</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-mouse-pointer mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Drag & Drop</span></div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-magic mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Interactive</span> UI</div></div>
                            </div>
                        </div>
                        <div className="h-32 md:h-40 lg:h-48 mt-auto"><BaseChart config={tasksChartConfig as any} /></div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col justify-center items-center relative">
                         <ImageWithFullscreen
                            src="https://iili.io/Ku1E52S.png"
                            alt="Tasks Management Board"
                            className="w-full max-w-sm lg:max-w-lg rounded-xl lg:rounded-2xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 group-hover:scale-105"
                            onImageClick={openFullscreen}
                        />
                         <div className="absolute top-2 right-2 md:top-5 md:right-5 bg-white/15 backdrop-blur-sm rounded-full w-20 h-20 md:w-28 md:h-28 flex flex-col justify-center items-center shadow-lg p-2">
                             <div className="text-2xl md:text-4xl font-bold text-amber-300">3</div>
                             <div className="text-[10px] md:text-sm text-teal-100 text-center uppercase">Columns</div>
                        </div>
                        <div className="mt-2 md:mt-4 text-sm md:text-lg text-center text-teal-100">Visual task management with drag-and-drop</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide7;
