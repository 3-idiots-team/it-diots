import { HTMLAttributes } from 'react';

import { icons } from 'lucide-react';

import { cn } from '../lib/utils';

interface LucideIconProps extends HTMLAttributes<SVGElement> {
  name: keyof typeof icons;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  strokeWidth?: number;
}

const ICON_SIZE = {
  sm: 20,
  md: 24,
  lg: 28,
};

function Icon({ name, color, size = 'md', strokeWidth = 2, ...props }: LucideIconProps) {
  const SelectedLucideIcon = icons[name];
  const hasClickEvent = Boolean(props.onClick);

  const pointerStyle = hasClickEvent ? 'cursor-pointer' : '';

  return (
    <SelectedLucideIcon
      color={color}
      size={ICON_SIZE[size]}
      strokeWidth={strokeWidth}
      className={cn(pointerStyle, props.className)}
      {...props}
    />
  );
}

export { Icon };
