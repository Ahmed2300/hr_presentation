
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const FeatureSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
        <h3 className="text-base md:text-xl font-semibold mb-3 text-amber-300 flex items-center">
             <i className="fas fa-layer-group mr-3"></i> {title}
        </h3>
        <div className="space-y-2 md:space-y-3">
            {children}
        </div>
    </div>
);

const SubFeature: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-black/20 rounded-lg p-2 md:p-3 transition-all duration-300 hover:bg-black/30">
        <div className="flex items-start">
            <i className={`fas ${icon} text-orange-200 text-base md:text-lg w-6 md:w-8 mt-1 text-center flex-shrink-0`}></i>
            <div>
                <h4 className="font-semibold text-sm md:text-base text-white">{title}</h4>
                <p className="text-xs md:text-sm text-orange-100">{children}</p>
            </div>
        </div>
    </div>
);


const SlideManagerTasks: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#ff7043_0%,_#e64a19_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/KuNTHp1.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <header className="flex items-center mb-4 md:mb-6">
                    <img src="https://iili.io/KuGmcN4.png" alt="Amira" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 md:border-4 border-white shadow-lg mr-3 md:mr-5" />
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-orange-200 text-transparent bg-clip-text">Manager System: Part 3</h2>
                        <p className="text-sm md:text-base lg:text-lg text-orange-100">Team Task Management</p>
                    </div>
                </header>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-8 items-start">
                    <div className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-4 justify-center">
                        <FeatureSection title="Task Assignment & Tracking">
                            <SubFeature icon="fa-plus-circle" title="Assign Tasks with Ease">
                                Create tasks with title, priority, & due date.
                            </SubFeature>
                             <SubFeature icon="fa-columns" title="Visual Kanban Board">
                                Track progress on a visual Kanban board.
                            </SubFeature>
                            <SubFeature icon="fa-sort-amount-up" title="Task Prioritization">
                                Set priority levels (Low, High, Critical) to focus team.
                            </SubFeature>
                        </FeatureSection>
                        <FeatureSection title="Managerial Oversight & Control">
                             <SubFeature icon="fa-bell" title='"Needs Attention" Section'>
                                Flags overdue tasks & extension requests.
                            </SubFeature>
                            <SubFeature icon="fa-exclamation-triangle" title="Overdue Task Management">
                               Highlights overdue tasks and days late.
                            </SubFeature>
                            <SubFeature icon="fa-check-double" title="Extension Request Workflow">
                                One-click approval for extension requests.
                            </SubFeature>
                        </FeatureSection>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-2 md:gap-4">
                        <ImageWithFullscreen
                            src="https://iili.io/KuNTHp1.png"
                            alt="Task Assignment Form"
                            className="w-full rounded-lg md:rounded-xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 hover:scale-105"
                            onImageClick={openFullscreen}
                        />
                        <div className="grid grid-cols-2 gap-2 md:gap-4 w-full">
                             <ImageWithFullscreen
                                src="https://iili.io/KuNuuHB.png"
                                alt="Kanban Board View"
                                className="w-full rounded-lg md:rounded-xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 hover:scale-105"
                                onImageClick={openFullscreen}
                            />
                             <ImageWithFullscreen
                                src="https://iili.io/KuNAzss.png"
                                alt="Needs Attention Section"
                                className="w-full rounded-lg md:rounded-xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 hover:scale-105"
                                onImageClick={openFullscreen}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideManagerTasks;
