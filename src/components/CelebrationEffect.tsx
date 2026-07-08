"use client";
import React from "react";
import { motion } from "framer-motion";

const CelebrationEffect = () => {
    // Генерируем массив данных без Math.random и без useEffect
    // Используем остаток от деления (%), чтобы числа казались случайными
    const hearts = Array.from({ length: 20 }).map((_, i) => {
        return {
            id: i,
            // Псевдо-рандом на основе индекса i
            xStart: ((i * 37) % 100) - 50, // от -50 до 50
            xEnd: ((i * 83) % 200) - 100, // от -100 до 100
            yEnd: -300 - ((i * 17) % 200), // от -300 до -500
            duration: 2 + (i % 3), // 2, 3 или 4 секунды
            delay: (i * 0.2) % 2, // задержка от 0 до 2 сек
            size: 12 + (i % 15), // размер от 12 до 27px
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute bottom-0 left-1/2 text-wedding-red/30"
                    initial={{
                        opacity: 0,
                        x: heart.xStart,
                        y: 0,
                        scale: 0,
                    }}
                    whileInView={{
                        opacity: [0, 1, 0.5, 0],
                        x: heart.xEnd,
                        y: heart.yEnd,
                        scale: [0, 1.2, 1],
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        ease: "easeOut",
                    }}
                >
                    <svg
                        width={heart.size}
                        height={heart.size}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

export default CelebrationEffect;
