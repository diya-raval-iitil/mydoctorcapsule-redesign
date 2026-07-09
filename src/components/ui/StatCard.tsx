import { memo } from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { cn } from '@/utils/cn';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  className?: string;
}

function StatCardComponent({
  value,
  suffix = '',
  label,
  decimals = 0,
  className,
}: StatCardProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="text-[40px] font-bold tracking-tight text-primary sm:text-[48px]">
        <AnimatedCounter value={value} suffix={suffix} decimals={decimals} />
      </div>
      <p className="mt-2 text-base font-medium tracking-tight text-muted">{label}</p>
    </div>
  );
}

export const StatCard = memo(StatCardComponent);
