import React from "react";
import Image from "next/image";

// import RSVPForm from "./components/RSVPForm";
import Marquee from "@/components/Marquee";
import Timeline from "@/components/Timeline";
import Invitation from "@/components/Invitation";
import RSVPForm from "@/components/RSVPForm";

export default function WeddingPage() {
    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-wedding-cream flex flex-col items-center">
            <Marquee />
            {/* СЕКЦИЯ 1: ГЛАВНАЯ (Центральный скриншот) */}
            <section className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/leaf-shadow.jpg')] bg-cover" />

                <p className="font-marck italic text-2xl mb-4 text-wedding-red">
                    в этот день...
                </p>
                <h1 className="font-playfair text-4xl text-center mb-10 tracking-widest uppercase text-wedding-red">
                    Владимир & Александра
                </h1>

                <div className="relative w-64 h-80 border-12 border-white shadow-xl rotate-2">
                    <div className="absolute inset-0 border border-dashed border-stone-300 z-10" />
                    <Image
                        src="/couple.jpeg"
                        alt="Владимир & Александра"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                </div>

                <div className="mt-12 text-center space-y-4">
                    <p className="font-playfair text-xl leading-relaxed px-4">
                        Любовь — это начало истории, которую мы создаем вместе
                    </p>
                    <p className="font-marck italic text-2xl text-wedding-red">
                        мы поженимся
                    </p>
                </div>
            </section>

            <Invitation />
            <Timeline />
            <RSVPForm />
        </main>
    );
}
