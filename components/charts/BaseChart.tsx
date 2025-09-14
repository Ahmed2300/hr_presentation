
import React, { useEffect, useRef } from 'react';
import { ChartConfiguration } from 'chart.js';

interface ChartProps {
    config: ChartConfiguration;
}

const BaseChart: React.FC<ChartProps> = ({ config }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstance.current = new (window as any).Chart(ctx, config);
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [config]);

    return <canvas ref={chartRef}></canvas>;
};

export default BaseChart;
