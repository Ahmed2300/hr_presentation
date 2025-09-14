
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';

const ComponentCircle: React.FC<{ icon: string; title: string; desc: string; className?: string }> = ({ icon, title, desc, className }) => (
    <div className={`absolute w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full flex flex-col justify-center items-center bg-white/20 backdrop-blur-md border-2 border-white/40 shadow-lg z-10 transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-2xl ${className}`}>
        <i className={`fas ${icon} text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 text-amber-300`}></i>
        <div className="text-sm md:text-base lg:text-lg font-semibold text-center">{title}</div>
        <div className="text-[10px] md:text-xs text-center text-indigo-100 mt-1">{desc}</div>
    </div>
);

const FeatureCard: React.FC<{icon: string; title: string; desc: string}> = ({icon, title, desc}) => (
    <div className="bg-white/10 backdrop-blur-md rounded-lg lg:rounded-xl p-2 md:p-4 flex items-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg">
        <i className={`fas ${icon} text-xl md:text-3xl mr-2 md:mr-4 text-amber-300 w-8 md:w-10 text-center`}></i>
        <div>
            <div className="text-sm md:text-lg font-semibold">{title}</div>
            <div className="text-xs md:text-sm text-indigo-100">{desc}</div>
        </div>
    </div>
)

const Slide3: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#5c6bc0_0%,_#3949ab_100%)] text-white">
            <div className="absolute inset-0 bg-[url('https://iili.io/Ku2V28Q.png')] bg-cover bg-center opacity-10 z-0"></div>
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col h-full p-4 md:p-8 lg:p-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-1 md:mb-3 bg-gradient-to-r from-white to-indigo-100 text-transparent bg-clip-text">System Architecture</h1>
                <p className="text-base md:text-xl lg:text-2xl font-medium mb-4 md:mb-8 text-indigo-100">How our components interact seamlessly</p>
                <div className="flex flex-col lg:flex-row flex-grow gap-4 lg:gap-8">
                    <div className="flex-[3] relative bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-2 md:p-5 min-h-[250px] md:min-h-0">
                        <svg width="100%" height="100%" className="absolute top-0 left-0 z-0">
                            {/* Lines from roles to central database */}
                            <line x1="50%" y1="25%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
                            <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
                            <line x1="75%" y1="50%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
                            <line x1="50%" y1="75%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
                        </svg>
                        
                        {/* 4 Roles */}
                        <ComponentCircle icon="fa-user" title="Employee" desc="Attendance & Requests" className="top-[10%] left-1/2 -translate-x-1/2" />
                        <ComponentCircle icon="fa-user-tie" title="Manager" desc="Approvals & Team" className="top-1/2 left-[15%] -translate-y-1/2" />
                        <ComponentCircle icon="fa-users-cog" title="HR" desc="Payroll & Analytics" className="top-1/2 right-[15%] -translate-y-1/2" />
                        <ComponentCircle icon="fa-shield-alt" title="Security" desc="Attendance Monitoring" className="bottom-[10%] left-1/2 -translate-x-1/2" />
                        
                        {/* Central Database */}
                        <ComponentCircle icon="fa-database" title="Database" desc="Central Storage" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-24 !h-24 md:!w-28 md:!h-28 lg:!w-32 lg:!h-32" />

                        {/* Data Flow Labels */}
                        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] md:text-sm text-amber-300 bg-[#5c6bc0]/80 px-2 py-1 rounded-full z-20">Requests & Data</div>
                        <div className="absolute top-1/2 left-[35%] -translate-y-1/2 text-[10px] md:text-sm text-amber-300 bg-[#5c6bc0]/80 px-2 py-1 rounded-full z-20">Approvals</div>
                        <div className="absolute top-1/2 right-[35%] -translate-y-1/2 text-[10px] md:text-sm text-amber-300 bg-[#5c6bc0]/80 px-2 py-1 rounded-full z-20">Analytics</div>
                        <div className="absolute top-[63%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] md:text-sm text-amber-300 bg-[#5c6bc0]/80 px-2 py-1 rounded-full z-20">Attendance Data</div>
                    </div>
                    <div className="flex-[2] flex flex-col gap-2 md:gap-4 justify-center">
                        <FeatureCard icon="fa-sync-alt" title="Real-time Sync" desc="Instant data updates across all roles"/>
                        <FeatureCard icon="fa-shield-alt" title="Role-based Access" desc="Secure permissions for each user type"/>
                        <FeatureCard icon="fa-chart-line" title="Data Analytics" desc="Visual insights for decision making"/>
                        <FeatureCard icon="fa-mobile-alt" title="Responsive Design" desc="Access from any device, anywhere"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide3;
