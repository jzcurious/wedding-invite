import React from "react";

const Timeline = () => {
    const events = [
        {
            time: "11:10",
            title: "Регистрация",
            desc: "Торжественная церемония регистрации брака",
            address: "ул. Декабрьских Событий, 106, Дворец бракосочетания",
            mapLink: "https://go.2gis.com/fcXK0",
        },
        {
            time: "16:00",
            title: "Начало банкета",
            desc: "Самое время для вкусной еды, веселья и танцев",
            address: "ул. Красный Путь, 70А, банкетный зал «Барракуда»",
            mapLink: "https://go.2gis.com/UvnMI",
        },
    ];

    return (
        <section className="relative min-h-screen bg-white border-x-16 border-wedding-red py-16 px-4 flex flex-col items-center">
            {/* Зубчатый край сверху */}
            <div
                className="absolute top-0 left-0 right-0 h-4 bg-repeat-x bg-contain"
                style={{ backgroundImage: "url('/images/perforation.svg')" }}
            />

            {/* Заголовок */}
            <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl uppercase tracking-widest text-stone-800 mb-2">
                    Тайминг дня
                </h2>
                <p className="font-marck text-2xl text-wedding-red">
                    мы все продумали!
                </p>
            </div>

            {/* Контейнер списка */}
            <div className="w-full max-w-70 flex flex-col items-center">
                {events.map((event, index) => (
                    <React.Fragment key={index}>
                        {/* БЛОК СОБЫТИЯ */}
                        <div className="text-center flex flex-col items-center">
                            {/* Время */}
                            <div className="mb-2">
                                <span className="font-cormorant text-5xl font-light text-wedding-red italic">
                                    {event.time}
                                </span>
                            </div>

                            {/* Название */}
                            <h3 className="font-playfair text-sm uppercase tracking-[0.2em] text-stone-700 mb-2">
                                {event.title}
                            </h3>

                            {/* Описание */}
                            <p className="font-cormorant text-stone-500 text-sm leading-relaxed italic px-4 mb-4">
                                {event.desc}
                            </p>

                            {/* АДРЕС И ССЫЛКА */}
                            <a
                                href={event.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center"
                            >
                                <div className="flex items-center gap-1 mb-1">
                                    {/* Иконка локации (SVG) */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-wedding-red opacity-60 group-hover:opacity-100 transition-opacity"
                                    >
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span className="font-cormorant text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-wedding-red transition-colors">
                                        посмотреть на карте
                                    </span>
                                </div>
                                <span className="font-cormorant text-xs text-stone-600 border-b border-stone-200 pb-0.5 group-hover:border-wedding-red transition-all text-balance max-w-[200px]">
                                    {event.address}
                                </span>
                            </a>
                        </div>

                        {/* ЛИНИЯ-СОЕДИНИТЕЛЬ */}
                        {index < events.length - 1 && (
                            <div className="py-10 flex flex-col items-center">
                                <div className="h-12 w-px border-l border-dashed border-stone-300" />
                                <div className="w-1.5 h-1.5 border border-stone-300 rotate-45 mt-2" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Боковые вырезы билета */}
            <div className="absolute top-1/2 -left-4 w-8 h-8 bg-wedding-cream rounded-full -translate-y-1/2" />
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-wedding-cream rounded-full -translate-y-1/2" />
        </section>
    );
};

export default Timeline;
