"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function AnimatedText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={clsx(className)}
    >
      {children}
    </motion.p>
  );
}
