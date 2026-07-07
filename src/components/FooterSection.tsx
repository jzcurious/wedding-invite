import React from "react";
import Image from "next/image";

const FooterSection = () => {
    return (
        <section className="relative bg-[#1a1a1a] min-h-[80vh] flex flex-col items-center justify-center px-8 py-24 overflow-hidden">
            {/* ОГРОМНОЕ ФОНОВОЕ СЕРДЦЕ */}
            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-90">
                <svg
                    viewBox="0 0 24 24"
                    className="w-[120%] h-[120%] text-wedding-red fill-current"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>

            {/* КОНТЕНТ */}
            <div className="relative z-10 text-center flex flex-col items-center max-w-xs">
                {/* Заголовок */}
                <h2 className="font-playfair text-white text-4xl mb-2 leading-tight">
                    До скорой <br /> встречи
                </h2>

                {/* Подзаголовок (Рукописный) */}
                <p className="font-marck text-white text-2xl mb-12">
                    Родные и близкие
                </p>

                {/* Основной текст */}
                <p className="font-cormorant text-white/90 text-lg leading-relaxed mb-16 italic">
                    Берите с собой хорошее настроение, желание много танцевать и
                    отмечать с нами праздник любви!
                </p>

                {/* Изображение кольца */}
                <div className="relative w-32 h-32 mt-4 animate-float">
                    <Image
                        src="/images/ring.png"
                        alt="Свадебное кольцо"
                        fill
                        className="object-contain drop-shadow-[0_10px_20px_rgba(255,255,255,0.2)]"
                    />
                </div>
            </div>

            {/* Копирайт (необязательно, но для порядка) */}
            <div className="absolute bottom-8 font-cormorant text-[10px] text-white/30 uppercase tracking-[0.3em]">
                В & А • 2026
            </div>
        </section>
    );
};

export default FooterSection;
