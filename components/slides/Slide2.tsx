
import React from 'react';
import AnimatedBackground from '../AnimatedBackground';
import BaseChart from '../charts/BaseChart';

const problemChartConfig = {
    type: 'bar',
    data: {
        labels: ['Time Spent', 'Error Rate', 'Paperwork', 'Communication', 'Visibility'],
        datasets: [{
            label: 'Current HR Processes',
            data: [85, 65, 90, 70, 40],
            backgroundColor: 'rgba(255, 82, 82, 0.7)',
            borderColor: 'rgba(255, 82, 82, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true, max: 100, grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: 'rgba(255, 255, 255, 0.7)' } },
            x: { grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: 'rgba(255, 255, 255, 0.7)' } }
        },
        plugins: { legend: { display: false } }
    }
};

const solutionChartConfig = {
    type: 'radar',
    data: {
        labels: ['Efficiency', 'Accuracy', 'Organization', 'Collaboration', 'Insights'],
        datasets: [{
            label: 'Our HR System',
            data: [90, 95, 85, 88, 92],
            backgroundColor: 'rgba(102, 187, 106, 0.3)',
            borderColor: 'rgba(102, 187, 106, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(102, 187, 106, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: { beginAtZero: true, max: 100, grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: 'rgba(255, 255, 255, 0.7)', backdropColor: 'transparent' }, pointLabels: { color: 'rgba(255, 255, 255, 0.7)' } }
        },
        plugins: { legend: { display: false } }
    }
};

const Slide2: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[linear-gradient(135deg,_#5c6bc0_0%,_#3949ab_100%)] text-white">
      <div className="absolute inset-0 bg-[url('https://iili.io/Ku2V28Q.png')] bg-cover bg-center opacity-10 z-0"></div>
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col h-full p-10 px-16">
        <h1 className="text-6xl font-extrabold mb-3 bg-gradient-to-r from-white to-indigo-100 text-transparent bg-clip-text">Problem & Solution</h1>
        <p className="text-2xl font-medium mb-8 text-indigo-100">Transforming HR Management Through Digital Innovation</p>
        <div className="grid grid-cols-2 gap-8 flex-grow">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
            <div className="flex items-center mb-4">
              <i className="fas fa-exclamation-triangle text-3xl mr-4 text-amber-300"></i>
              <h3 className="text-3xl font-semibold">The Problem</h3>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center"><i className="fas fa-clock w-6 text-amber-300"></i><span>Manual HR processes are time-consuming</span></li>
              <li className="flex items-center"><i className="fas fa-exclamation-circle w-6 text-amber-300"></i><span>High risk of human error in calculations</span></li>
              <li className="flex items-center"><i className="fas fa-file-alt w-6 text-amber-300"></i><span>Paperwork overload and documentation chaos</span></li>
              <li className="flex items-center"><i className="fas fa-users-slash w-6 text-amber-300"></i><span>Poor communication between departments</span></li>
              <li className="flex items-center"><i className="fas fa-chart-line w-6 text-amber-300"></i><span>Limited visibility into employee performance</span></li>
            </ul>
            <div className="mt-auto h-56 pt-4"><BaseChart config={problemChartConfig as any} /></div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
            <div className="flex items-center mb-4">
              <i className="fas fa-lightbulb text-3xl mr-4 text-amber-300"></i>
              <h3 className="text-3xl font-semibold">Our Solution</h3>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center"><i className="fas fa-rocket w-6 text-amber-300"></i><span>Automated workflows save 60% of admin time</span></li>
              <li className="flex items-center"><i className="fas fa-calculator w-6 text-amber-300"></i><span>100% accurate payroll and attendance calculations</span></li>
              <li className="flex items-center"><i className="fas fa-cloud w-6 text-amber-300"></i><span>Digital documentation with secure storage</span></li>
              <li className="flex items-center"><i className="fas fa-comments w-6 text-amber-300"></i><span>Seamless communication across all roles</span></li>
              <li className="flex items-center"><i className="fas fa-chart-pie w-6 text-amber-300"></i><span>Real-time analytics and performance insights</span></li>
            </ul>
            <div className="mt-auto h-56 pt-4"><BaseChart config={solutionChartConfig as any} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
