"use client";
import React, { useState, useEffect } from "react";
import FadeIn from "@/components/FadeIn";

// 1. КОМПОНЕНТ ЯЧЕЙКИ ТАЙМЕРА (сделали числа плотнее)
const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]">
        {/* Изменено: font-medium вместо font-light, добавлен tracking-tighter */}
        <span className="font-playfair text-4xl sm:text-5xl text-wedding-red font-medium tracking-tighter leading-none">
            {String(value).padStart(2, "0")}
        </span>
        <span className="font-cormorant text-[10px] uppercase tracking-[0.1em] text-stone-400 mt-2">
            {label}
        </span>
    </div>
);

const CountdownTimer = () => {
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
        <section className="relative bg-wedding-cream pt-8 pb-0 flex flex-col items-center overflow-hidden">
            {/* ЗАГОЛОВОК */}
            <FadeIn direction="down">
                <div className="text-center mb-10 px-6 mt-10">
                    <h2 className="font-playfair text-3xl text-stone-800 leading-tight mb-2 uppercase tracking-wide">
                        До дня свадьбы <br /> совсем немного
                    </h2>
                    <p className="font-marck text-2xl text-wedding-red/80">
                        мы очень ждем!
                    </p>
                </div>

                {/* ЦИФРЫ ТАЙМЕРА (Сделали общую верстку компактнее) */}
                <div className="flex gap-2 sm:gap-5 bg-white/60 p-6 py-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.02)] border border-white">
                    <TimeUnit value={timeLeft.days} label="дней" />
                    <div className="text-stone-300 self-center font-light text-2xl pb-5 px-1">
                        :
                    </div>
                    <TimeUnit value={timeLeft.hours} label="часа" />
                    <div className="text-stone-300 self-center font-light text-2xl pb-5 px-1">
                        :
                    </div>
                    <TimeUnit value={timeLeft.minutes} label="минут" />
                    <div className="text-stone-300 self-center font-light text-2xl pb-5 px-1">
                        :
                    </div>
                    <TimeUnit value={timeLeft.seconds} label="секунд" />
                </div>
            </FadeIn>

            {/* ВАШ НОВЫЙ КОМПОНЕНТ ДЕЛИМИТЕР (вместо старой верстки) */}
            {/* <Delimiter className="mt-16" /> */}
        </section>
    );
};

export default CountdownTimer;
