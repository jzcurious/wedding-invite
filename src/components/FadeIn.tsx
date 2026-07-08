"use client";
import { motion } from "motion/react";
import React from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

const FadeIn = ({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: FadeInProps) => {
    // Начальные смещения в зависимости от направления
    const offset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                ...offset[direction],
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            // once: true — анимация сработает только один раз
            // amount: 0.2 — сработает, когда 20% блока попадет в экран
            transition={{
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1], // мягкая плавная кривая
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
