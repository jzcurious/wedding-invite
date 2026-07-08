import React from "react";
import Image from "next/image";

const FooterSection = () => {
    return (
        <section className="relative bg-wedding-cream min-h-[70vh] flex flex-col items-center justify-center px-8 py-20 overflow-hidden pt-0">
            {/* ОГРОМНОЕ ФОНОВОЕ СЕРДЦЕ (теперь очень нежное и прозрачное) */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <svg
                    viewBox="0 0 24 24"
                    className="w-[130%] h-[130%] text-wedding-red opacity-[0.03] fill-current"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>

            {/* КОНТЕНТ */}
            <div className="relative z-10 text-center flex flex-col items-center max-w-xs">
                {/* Заголовок */}
                <h2 className="font-playfair text-wedding-red text-4xl mb-2 leading-tight uppercase tracking-wide">
                    До скорой <br /> встречи
                </h2>

                {/* Подзаголовок (Рукописный) */}
                <p className="font-marck text-wedding-red/70 text-2xl mb-10">
                    Родные и близкие
                </p>

                {/* Основной текст */}
                <p className="font-cormorant text-stone-600 text-lg leading-relaxed mb-12 italic px-4">
                    Берите с собой хорошее настроение, желание много танцевать и
                    отмечать с нами праздник любви!
                </p>

                {/* Изображение кольца */}
                <div className="relative w-28 h-28 animate-float">
                    <Image
                        src="/images/ring.png"
                        alt="Свадебное кольцо"
                        fill
                        className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.1)]"
                    />
                </div>
            </div>

            {/* Копирайт */}
            <div className="absolute bottom-10 font-cormorant text-[10px] text-stone-400 uppercase tracking-[0.4em]">
                А & А • 2026
            </div>
        </section>
    );
};

export default FooterSection;
