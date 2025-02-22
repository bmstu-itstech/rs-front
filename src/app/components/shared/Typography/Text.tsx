"use client";

import { memo, type ReactNode } from "react";

function Text({
  children,
  size = 16,
  className = '',
}: {
  children?: ReactNode;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`text text-white block ${className} max-w-[90vw] h-fit`}
      style={{fontSize: `${size}px`}}>
      {children}
    </span>
  );
};

export default memo(Text);
