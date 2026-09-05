import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';

export const QuickStats: React.FC = () => {
  return (
    <section className="relative z-20 py-8 bg-[#0B1020]/60 border-y border-surface-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start p-4 rounded-xl bg-bg-primary/40 border border-surface-border/50 hover:border-accent-cyan/30 transition-all"
            >
              <span className="font-tech font-bold text-2xl sm:text-3xl text-accent-cyan tracking-tight">
                {stat.label}
              </span>
              <span className="text-surface-muted text-xs sm:text-sm font-mono mt-1 uppercase tracking-wider">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
