
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
        <div className="flex items-center mb-2 md:mb-4">
            <i className="material-icons text-xl md:text-3xl mr-2 md:mr-4 text-amber-300">{icon}</i>
            <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>
        </div>
        <div className="space-y-1 md:space-y-2 text-sm md:text-base lg:text-lg">
            {children}
        </div>
    </div>
);

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center">
        <i className="material-icons text-sky-300 mr-2 text-base md:text-lg">check_circle</i>
        <span>{children}</span>
    </div>
);


const Slide4: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#5c6bc0_0%,_#3949ab_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku2V28Q.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <header className="flex items-center mb-4 md:mb-8">
                    <img src="https://iili.io/Ku2Unmg.png" alt="Abdallah" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 md:border-4 border-white shadow-lg mr-3 md:mr-5" />
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text">Employee System: Attendance</h2>
                        <p className="text-sm md:text-base lg:text-lg text-indigo-100">Presented by Abdallah</p>
                    </div>
                </header>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-8 items-center">
                    <div className="w-full lg:flex-1 flex flex-col justify-center gap-3 md:gap-5">
                        <FeatureCard icon="calendar_today" title="Attendance Page">
                           <FeatureItem>Interactive FullCalendar</FeatureItem>
                           <FeatureItem>Monthly attendance statistics</FeatureItem>
                           <FeatureItem>Attendance history with pagination</FeatureItem>
                        </FeatureCard>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col justify-center items-center relative">
                        <ImageWithFullscreen
                            src="https://iili.io/Ku2V28Q.png"
                            alt="Employee System Interface"
                            className="w-full max-w-sm lg:max-w-lg rounded-xl lg:rounded-2xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 group-hover:scale-105"
                            onImageClick={openFullscreen}
                        />
                        <div className="mt-2 md:mt-4 text-sm md:text-lg text-center text-indigo-100">A clean & modern employee interface</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide4;
