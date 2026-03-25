"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative py-2">
      {href ? (
        <Link
          href={href}
          className="cursor-pointer text-inherit hover:opacity-[0.9] text-[13px] font-medium block"
        >
          {item}
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-inherit hover:opacity-[0.9] text-[13px] font-medium"
        >
          {item}
        </motion.p>
      )}
      {active !== null && active === item && (
        <>
          {/* Invisible bridge so mouse doesn't lose hover crossing the gap */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-[200%] h-6" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
            className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.1] shadow-xl"
            >
              <motion.div
                layout
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center items-center space-x-6 px-6 h-[44px] rounded-full bg-white/70 backdrop-blur-2xl border border-gray-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="group flex flex-col items-center text-center">
      <div className="rounded-xl mb-3 overflow-hidden">
        <Image
          src={src}
          width={160}
          height={100}
          alt={title}
          className="object-cover w-[160px] h-[100px] group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h4 className="text-sm font-bold mb-0.5 text-black dark:text-white">
        {title}
      </h4>
      <p className="text-neutral-500 text-xs dark:text-neutral-400">
        {description}
      </p>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
