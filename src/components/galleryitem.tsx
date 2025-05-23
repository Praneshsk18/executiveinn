// Create a new component file, e.g. GalleryItem.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function GalleryItem({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
        scaleY: isInView ? 1 : 0,
      }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ transformOrigin: "top" }}
      className="flex items-center justify-center h-auto"
    >
      <div className="w-full h-auto">
        <Image
          src={src}
          alt={`Gallery ${index + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          width={1000}
          height={1000}
          unoptimized
          onClick={onClick}
        />
      </div>
    </motion.div>
  );
}
