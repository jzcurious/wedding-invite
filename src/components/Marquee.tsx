const Marquee = () => {
    const text =
        "28.08.2026 • СВАДЕБНОЕ ПРИГЛАШЕНИЕ • Владимир & Александра • 28.08.2026 • СВАДЕБНОЕ ПРИГЛАШЕНИЕ • Владимир & Александра • ";

    return (
        // Добавляем w-full и убеждаемся, что overflow-hidden на месте
        <div className="w-full overflow-hidden bg-wedding-red text-wedding-cream border-b border-wedding-gold/20">
            <div className="relative flex whitespace-nowrap">
                {/* Контейнер с анимацией */}
                <div className="flex animate-marquee min-w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-playfair py-2 px-4">
                        {text}
                    </span>
                    {/* Дубликат */}
                    <span className="text-[10px] uppercase tracking-[0.2em] font-playfair py-2 px-4">
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
