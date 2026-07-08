import React from "react";
import FadeIn from "@/components/FadeIn";

const Invitation = () => {
    const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

    // Август 2026 начинается в субботу (5 пустых ячеек)
    const emptyDays = Array.from({ length: 5 }, (_, i) => null);
    const augustDays = Array.from({ length: 31 }, (_, i) => i + 1);
    const calendarGrid = [...emptyDays, ...augustDays];

    return (
        // Изменили фон на wedding-cream и текст на wedding-red
        <section className="bg-wedding-cream text-wedding-red p-8 py-16 flex flex-col items-center text-center">
            {/* ПРИВЕТСТВЕННЫЙ ТЕКСТ */}
            <div className="max-w-xs space-y-6 mb-12">
                <FadeIn>
                    <h2 className="font-playfair text-3xl leading-tight">
                        Дорогие и близкие <br />
                        <span className="font-marck text-2xl lowercase text-wedding-red/80">
                            мы спешим сообщить!
                        </span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="space-y-4 font-cormorant text-base leading-relaxed text-stone-700">
                        <p>
                            С огромной радостью и трепетом в сердце мы
                            приглашаем вас разделить с нами самый важный и
                            счастливый день нашей жизни — день нашего
                            бракосочетания!
                        </p>
                        <p>
                            Мы будем счастливы видеть вас рядом, ведь именно вы
                            — те люди, которые делают нашу жизнь ярче и
                            счастливее.
                        </p>
                    </div>
                </FadeIn>
            </div>

            {/* РАЗДЕЛИТЕЛЬ С СЕРДЦЕМ (теперь линии и сердце красные) */}
            <div className="w-full flex items-center justify-center gap-4 mb-12 max-w-sm">
                <div className="h-px bg-wedding-red/20 flex-1" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-wedding-red"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="h-px bg-wedding-red/20 flex-1" />
            </div>

            {/* КАЛЕНДАРЬ */}
            <FadeIn direction="right" delay={0.5}>
                <div className="w-full max-w-[300px]">
                    <h3 className="font-playfair text-4xl uppercase tracking-widest mb-2">
                        28 АВГУСТА 2026
                    </h3>
                    <p className="font-marck text-2xl text-wedding-red/70 mb-8">
                        наш день семьи
                    </p>

                    {/* Дни недели (сделали чуть бледнее) */}
                    <div className="grid grid-cols-7 mb-4">
                        {daysOfWeek.map((day) => (
                            <div
                                key={day}
                                className="font-cormorant text-xs tracking-widest text-stone-400 py-2"
                            >
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Сетка чисел */}
                    <div className="grid grid-cols-7 gap-y-2">
                        {calendarGrid.map((day, index) => {
                            if (day === null) {
                                return (
                                    <div
                                        key={`empty-${index}`}
                                        className="h-10"
                                    />
                                );
                            }

                            const isSpecialDay = day === 28;

                            return (
                                <div
                                    key={`day-${day}`}
                                    className="relative h-10 flex items-center justify-center font-cormorant text-lg"
                                >
                                    {isSpecialDay && (
                                        <div className="absolute inset-0 flex items-center justify-center z-0">
                                            {/* Теперь сердце КРАСНОЕ */}
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="w-10 h-10 fill-wedding-red drop-shadow-sm"
                                            >
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </div>
                                    )}
                                    <span
                                        className={`relative z-10 transition-colors ${
                                            isSpecialDay
                                                ? "text-white font-bold pt-0.5" // Текст внутри красного сердца — белый
                                                : "text-stone-800" // Обычные числа — почти черные для контраста
                                        }`}
                                    >
                                        {day}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};

export default Invitation;
