import React from 'react';
import { useCountUpOnView } from '../hooks/useCountUp';
import { STATS, SCROLL } from '../config/constants';
import { EASING } from '../config/animations';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ end, label, suffix = '', prefix = '' }) => {
  const { ref, count } = useCountUpOnView({
    end,
    start: 0,
    duration: 2000,
    suffix,
    prefix,
    easingFn: EASING.easeOutQuad,
  }, SCROLL.STATS_COUNT_UP_THRESHOLD);

  return (
    <div ref={ref as any} className="stats__item">
      <div className="stats__number">
        {count}
      </div>
      <div className="stats__label">
        {label}
      </div>
    </div>
  );
};

const StatItemStatic: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  return (
    <div className="stats__item">
      <div className="stats__number">
        {number}
      </div>
      <div className="stats__label">
        {label}
      </div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="stats__pattern">
        <div className="stats__pattern-inner"></div>
      </div>
      <div className="stats__container">
        <div className="stats__grid">
          <StatItem end={STATS.YEARS_OF_EXCELLENCE} label="Years of Excellence" suffix="+" />
          <StatItem end={10} label="Games in Database" suffix="M+" />
          <StatItem end={500} label="Users Worldwide" suffix="K+" />
          <StatItemStatic number="#1" label="Chess Database Software" />
        </div>
      </div>
    </section>
  );
};
