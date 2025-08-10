import React from "react";

interface IconButtonProps {
  label: string;
  icon: React.ReactNode;
  color: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  icon,
  color,
}) => {
  return (
    <a
      style={{ "--hover-from": color } as React.CSSProperties}
      className="group relative flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-electric-purple to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[var(--hover-from)]"
    >
      <span className="text-4xl w-10">{icon}</span>
      <span
        className="absolute opacity-0 group-hover:opacity-100 
                   group-hover:text-gray-100 group-hover:text-sm
                   group-hover:-translate-y-10 duration-300"
      >
        {label}
      </span>
    </a>
  );
};
