import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import ImageWithFullscreen from '../ImageWithFullscreen';

interface SlideProps {
    openFullscreen: (src: string) => void;
}

const Slide6: React.FC<SlideProps> = ({ openFullscreen }) => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#7e57c2_0%,_#5e35b1_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Kudb3ml.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <header className="flex items-center mb-4 md:mb-8">
                    <img src="https://iili.io/KuGDkkx.png" alt="Noor" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 md:border-4 border-white shadow-lg mr-3 md:mr-5" />
                    <div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">Login & Settings: Part 1</h2>
                        <p className="text-sm md:text-base lg:text-lg text-purple-200">Secure Authentication</p>
                    </div>
                </header>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 md:gap-8 items-center">
                    <div className="w-full lg:flex-1 flex flex-col">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 md:p-6 transition-all duration-300 hover:bg-white/15 h-full flex flex-col justify-center">
                             <div className="flex items-center mb-2 md:mb-4"><i className="fas fa-sign-in-alt text-xl md:text-3xl mr-2 md:mr-4 text-amber-300"></i><h3 className="text-xl md:text-3xl font-semibold">Authentication Features</h3></div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-xs md:text-base lg:text-lg">
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-shield-alt mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Modern UI</span> with validation</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-key mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Email/password</span> auth</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-random mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Role-based</span> redirection</div></div>
                                <div className="bg-white/10 rounded-lg p-2 md:p-4 hover:bg-white/20 transition-colors flex items-center"><i className="fas fa-save mr-3 text-sky-300 w-6 text-center"></i><div><span className="font-semibold text-amber-300">Persistent</span> login sessions</div></div>
                             </div>
                        </div>
                    </div>
                    <div className="w-full lg:flex-1 flex flex-col justify-center items-center relative">
                        <div className="absolute top-0 right-0 bg-white/15 backdrop-blur-sm rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex flex-col justify-center items-center shadow-lg">
                             <div className="text-xl md:text-3xl lg:text-4xl font-bold text-amber-300">4</div>
                             <div className="text-[10px] md:text-xs lg:text-sm text-purple-200 uppercase">User Roles</div>
                        </div>
                        <ImageWithFullscreen 
                            src="https://iili.io/Kudb3ml.png"
                            alt="Login System Interface"
                            className="w-full max-w-sm lg:max-w-lg rounded-xl lg:rounded-2xl shadow-2xl border-2 md:border-4 border-white transition-all duration-300 group-hover:scale-105"
                            onImageClick={openFullscreen}
                        />
                        <div className="mt-2 md:mt-4 text-sm md:text-lg text-center text-purple-200">Smart authentication with role-based redirection</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide6;