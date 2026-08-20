import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Loader2, Check, AlertCircle } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  magnetic?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  isSuccess = false,
  isError = false,
  magnetic = false,
  icon,
  iconPosition = "right",
  className = "",
  disabled,
  children,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || shouldReduceMotion || disabled || isLoading) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Subtle magnetic attraction factor
    setPosition({ x: middleX * 0.18, y: middleY * 0.18 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5 rounded-lg",
    md: "px-6 py-3 text-sm gap-2 rounded-xl",
    lg: "px-8 py-4 text-base gap-2.5 rounded-xl font-medium",
  };

  const variantStyles = {
    primary:
      "relative text-white bg-gradient-to-r from-[#0284c7] via-[#9333ea] to-[#be123c] hover:from-[#38bdf8] hover:via-[#a855f7] hover:to-[#e11d48] shadow-lg shadow-purple-950/40 border border-white/15 active:scale-[0.98]",
    secondary:
      "bg-[#131a29] text-slate-100 hover:bg-[#1c263c] border border-slate-700/60 hover:border-slate-500/60 shadow-sm active:scale-[0.98]",
    outline:
      "bg-transparent text-slate-200 border border-slate-700/80 hover:border-cyan-400/60 hover:text-white hover:bg-slate-800/40 active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50 active:scale-[0.98]",
  };

  const statusStyles = isSuccess
    ? "bg-emerald-600/90 text-white border-emerald-500 shadow-emerald-950/50"
    : isError
    ? "bg-rose-600/90 text-white border-rose-500 shadow-rose-950/50"
    : "";

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.1 }}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center select-none font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f17] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer ${sizeStyles[size]} ${statusStyles || variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...(props as any)}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current shrink-0" />}
      {!isLoading && isSuccess && <Check className="w-4 h-4 text-white shrink-0" />}
      {!isLoading && isError && <AlertCircle className="w-4 h-4 text-white shrink-0" />}

      {!isLoading && !isSuccess && !isError && icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}

      <span>{children}</span>

      {!isLoading && !isSuccess && !isError && icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </motion.button>
  );
};
