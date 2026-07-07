import React from "react";

const Invitation = () => {
    const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

    // Август 2026 начинается в субботу.
    // Нам нужно пропустить 5 дней (ПН, ВТ, СР, ЧТ, ПТ) перед 1-м числом.
    const emptyDays = Array.from({ length: 5 }, (_, i) => null);
    const augustDays = Array.from({ length: 31 }, (_, i) => i + 1);

    // Объединяем пустые ячейки и дни месяца в один массив для сетки grid
    const calendarGrid = [...emptyDays, ...augustDays];

    return (
        <section className="bg-wedding-red text-white p-8 flex flex-col items-center text-center">
            {/* ПРИВЕТСТВЕННЫЙ ТЕКСТ */}
            <div className="max-w-xs space-y-6 mb-12">
                <h2 className="font-playfair text-3xl leading-tight">
                    Дорогие и близкие <br />
                    <span className="font-marck text-2xl lowercase opacity-90">
                        мы спешим сообщить!
                    </span>
                </h2>

                <div className="space-y-4 font-cormorant text-base leading-relaxed opacity-90">
                    <p>
                        С огромной радостью и трепетом в сердце мы приглашаем
                        вас разделить с нами самый важный и счастливый день
                        нашей жизни — день нашего бракосочетания!
                    </p>
                    <p>
                        Мы будем счастливы видеть вас рядом, ведь именно вы — те
                        люди, которые делают нашу жизнь ярче и счастливее.
                    </p>
                </div>
            </div>

            {/* РАЗДЕЛИТЕЛЬ С СЕРДЦЕМ */}
            <div className="w-full flex items-center justify-center gap-4 mb-12">
                <div className="h-px bg-white/30 flex-1" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="h-px bg-white/30 flex-1" />
            </div>

            {/* КАЛЕНДАРЬ */}
            <div className="w-full max-w-[300px]">
                <h3 className="font-playfair text-4xl uppercase tracking-widest mb-2">
                    28 АВГУСТА 2026
                </h3>
                <p className="font-marck text-2xl text-white/90 mb-8">
                    наш день семьи
                </p>

                {/* Дни недели */}
                <div className="grid grid-cols-7 mb-4">
                    {daysOfWeek.map((day) => (
                        <div
                            key={day}
                            className="font-cormorant text-xs tracking-widest opacity-70 py-2"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Сетка чисел */}
                <div className="grid grid-cols-7 gap-y-2">
                    {calendarGrid.map((day, index) => {
                        // Если ячейка пустая (первые 5 дней)
                        if (day === null) {
                            return (
                                <div key={`empty-${index}`} className="h-10" />
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
                                        {/* SVG Сердце */}
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            className="w-10 h-10 drop-shadow-md"
                                        >
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                )}
                                <span
                                    className={`relative z-10 ${isSpecialDay ? "text-wedding-red font-bold pt-0.5" : ""}`}
                                >
                                    {day}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Invitation;
