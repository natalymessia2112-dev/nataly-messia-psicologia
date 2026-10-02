import React from 'react';
import { SITE_CONFIG } from '../config/site';

interface CtaButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline' | 'terracotta';
  size?: 'normal' | 'large' | 'compact';
  customMessage?: string;
  onClick?: () => void;
  text?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'normal',
  customMessage,
  onClick,
  text = 'AGENDAR ATENDIMENTO',
}) => {
  const whatsappUrl = SITE_CONFIG.whatsapp.getLink(customMessage);

  const baseStyles =
    'inline-flex items-center justify-center font-sans tracking-[0.16em] text-xs font-semibold rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3482F] cursor-pointer text-center select-none active:scale-[0.98] shadow-sm';

  const sizeStyles = {
    compact: 'px-4 py-2.5 text-[11px]',
    normal: 'px-6 py-3 sm:px-7 sm:py-3.5 text-xs',
    large: 'px-8 py-3.5 sm:px-9 sm:py-4 text-[13px]',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#A3482F] text-[#FAF5EE] hover:bg-[#8C3B24] hover:shadow-[0_6px_20px_-4px_rgba(163,72,47,0.4)] border border-[#A3482F]',
    terracotta:
      'bg-[#8C3B24] text-[#FAF5EE] hover:bg-[#77311D] hover:shadow-[0_6px_20px_-4px_rgba(140,59,36,0.4)] border border-[#8C3B24]',
    secondary:
      'bg-[#2A3B26] text-[#FAF5EE] hover:bg-[#1E2B1B] hover:shadow-[0_6px_20px_-4px_rgba(42,59,38,0.4)] border border-[#2A3B26]',
    light:
      'bg-[#FAF5EE] text-[#8C3B24] hover:bg-[#FFFFFF] hover:text-[#77311D] hover:shadow-[0_6px_20px_-4px_rgba(250,245,238,0.3)] border border-[#FAF5EE]',
    outline:
      'bg-transparent text-[#20130C] border-2 border-[#20130C] hover:bg-[#20130C] hover:text-[#FAF5EE]',
  }[variant];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={`${text} via WhatsApp com Nataly Messia`}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      <span>{text}</span>
    </a>
  );
};
