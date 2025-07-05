import { cn } from '@/lib/utils';
import {
  // Core skills
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  
  // Advanced skills
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiGit,
  
  // For Zustand and TanStack Query
  SiZap,
  SiReactquery,
} from 'react-icons/si';

interface SkillBadgeProps {
  name: string;
  level: number;
  icon?: string;
}

const getSkillIcon = (iconName?: string) => {
  const iconClass = "h-4 w-4 text-primary";
  
  switch (iconName) {
    case 'react':
      return <SiReact className={iconClass} />;
    case 'nextjs':
      return <SiNextdotjs className={iconClass} />;
    case 'javascript':
      return <SiJavascript className={iconClass} />;
    case 'typescript':
      return <SiTypescript className={iconClass} />;
    case 'html':
      return <SiHtml5 className={iconClass} />;
    case 'css':
      return <SiCss3 className={iconClass} />;
    case 'tailwind':
      return <SiTailwindcss className={iconClass} />;
    case 'nodejs':
      return <SiNodedotjs className={iconClass} />;
    case 'express':
      return <SiExpress className={iconClass} />;
    case 'mongodb':
      return <SiMongodb className={iconClass} />;
    case 'redux':
      return <SiRedux className={iconClass} />;
    case 'zustand':
      return <SiZap className={iconClass} />;
    case 'reactquery':
      return <SiReactquery className={iconClass} />;
    case 'firebase':
      return <SiFirebase className={iconClass} />;
    case 'git':
      return <SiGit className={iconClass} />;
    default:
      return <SiZap className={iconClass} />;
  }
};

export const SkillBadge = ({ name, level, icon }: SkillBadgeProps) => {
  return (
    <div className="w-full max-w-xs">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          {icon && getSkillIcon(icon)}
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={cn(
            'h-2 rounded-full',
            level > 85 ? 'bg-chart-1' : level > 70 ? 'bg-chart-4' : 'bg-chart-3'
          )}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};