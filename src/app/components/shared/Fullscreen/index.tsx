"use client";

import { memo, ReactNode } from "react";

interface FullscreenProps {
  children?: ReactNode;
  background: string;
  needsTopShadow?: boolean;
  needsBottomShadow?: boolean;
}

const Fullscreen = ({
  children,
  background,
  needsTopShadow = false,
  needsBottomShadow = false,
}: FullscreenProps) => {
  return (
    <div
      className="w-screen h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {needsTopShadow && (
        <div className="absolute inset-x-0 top-0 left-0 h-1/5 bg-gradient-to-t from-transparent via-black/70 to-black opacity-100 pointer-events-none" />
      )}
      <div>{children}</div>
      {needsBottomShadow && (
        <div className="absolute inset-x-0 bottom-0 left-0 h-1/5 bg-gradient-to-t from-black via-black/70 to-transparent opacity-100 pointer-events-none" />
      )}
    </div>
  );
};

export default memo(Fullscreen);