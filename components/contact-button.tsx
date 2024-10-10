"use client";
import {
  useMotionValue,
  animate,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import QRCode from "qrcode.react";

export const ContactCard = ({
  text,
  email,
  className,
}: {
  text?: string;
  email: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [revealProgress, setRevealProgress] = useState(0);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsFullyRevealed(true);
      setRevealProgress(100);
    } else {
      setIsFullyRevealed(false);
      setRevealProgress(0);
    }
  }, [isMobile]);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    if (isMobile) return;

    let animation: any;
    if (isPressed && !isFullyRevealed) {
      animation = animate(0, 100, {
        duration: 0.3,
        onUpdate: (latest) => {
          setRevealProgress(latest);
          if (latest === 100) {
            setIsFullyRevealed(true);
            setIsPressed(false);
          }
        },
      });
    } else if (!isPressed && !isFullyRevealed) {
      animation = animate(revealProgress, 0, {
        duration: 0.3,
        onUpdate: (latest) => setRevealProgress(latest),
      });
    }

    return () => animation?.stop();
  }, [isPressed, isFullyRevealed, isMobile]);

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className,
      )}
    >
      <div
        onMouseMove={onMouseMove}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => {
          if (isMobile) return;
          setIsHovered(false);
          if (!isFullyRevealed) setIsPressed(false);
        }}
        onMouseDown={() => !isMobile && !isFullyRevealed && setIsPressed(true)}
        onMouseUp={() => !isMobile && !isFullyRevealed && setIsPressed(false)}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          email={email}
          revealProgress={revealProgress}
          isFullyRevealed={isFullyRevealed}
          isMobile={isMobile}
        />
        <AnimatePresence>
          {!isFullyRevealed && !isMobile && (
            <motion.div
              className="relative z-10 flex items-center justify-center"
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: 1 - revealProgress / 100,
                opacity: 1 - revealProgress / 100,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="relative h-40 w-40 rounded-full flex items-center justify-center text-white font-bold text-4xl">
                <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
                <span className="dark:text-white text-black z-20">
                  {isHovered ? "press" : text}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  email,
  revealProgress,
  isFullyRevealed,
  isMobile,
}: {
  mouseX: any;
  mouseY: any;
  email: string;
  revealProgress: number;
  isFullyRevealed: boolean;
  isMobile: boolean;
}) {
  let maskImage = useMotionTemplate`radial-gradient(${
    isMobile || isFullyRevealed ? "1000px" : revealProgress * 5 + 250 + "px"
  } at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] opacity-40"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4aff89ed] to-[#9e4eff] opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-100 mix-blend-overlay"
        style={style}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <QRCode
            value={`mailto:${email}`}
            size={256}
            level="H"
            includeMargin={true}
            renderAs="svg"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
