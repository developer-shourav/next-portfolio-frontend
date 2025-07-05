import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn(centered ? 'text-center' : 'text-left', className)}>
      {subtitle && (
        <p className="text-sm font-medium text-chart-1 dark:text-chart-3 mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="w-16 h-1 bg-chart-1 dark:bg-chart-3 mt-4 mx-auto" />
    </div>
  );
};