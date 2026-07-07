"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// 1. ВЫНОСИМ TimeUnit НАРУЖУ
const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <span className="font-playfair text-3xl sm:text-4xl text-white">
            {String(value).padStart(2, "0")}
        </span>
        <span className="font-cormorant text-[10px] uppercase tracking-widest text-white/50 mt-1">
            {label}
        </span>
    </div>
);

const CountdownTimer = () => {
    // Целевая дата: 28 августа 2026
    const targetDate = new Date("2026-08-28T11:10:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                    ),
                    minutes: Math.floor(
                        (distance % (1000 * 60 * 60)) / (1000 * 60),
                    ),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="relative bg-[#1a1a1a] pt-24 pb-32 flex flex-col items-center overflow-hidden">
            {/* ЗАГОЛОВОК */}
            <div className="text-center mb-12 px-6">
                <h2 className="font-playfair text-3xl text-white leading-tight mb-2">
                    До дня свадьбы <br /> совсем немного:
                </h2>
                <p className="font-marck text-2xl text-wedding-gold italic">
                    мы очень ждем!
                </p>
            </div>

            {/* ЦИФРЫ ТАЙМЕРА */}
            <div className="flex gap-6 sm:gap-10">
                <TimeUnit value={timeLeft.days} label="дней" />
                <TimeUnit value={timeLeft.hours} label="часа" />
                <TimeUnit value={timeLeft.minutes} label="минут" />
                <TimeUnit value={timeLeft.seconds} label="секунд" />
            </div>
        </section>
    );
};

export default CountdownTimer;
