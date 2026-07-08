"use client";
import { motion } from "motion/react";

const ZoomIn = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <motion.div
        className={className}
        style={{ willChange: "transform, opacity" }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

export default ZoomIn;
