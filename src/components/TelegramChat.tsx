import React from "react";

const TelegramChat = ({ telegramLink }: { telegramLink: string }) => {
    return (
        <section className="bg-wedding-cream py-12 px-6 flex justify-center">
            <div className="relative w-full max-w-sm bg-white p-8 shadow-xl border border-stone-100">
                {/* Декоративный элемент (ключик или линия, можно добавить свой) */}
                <div className="absolute -top-4 -right-4 w-12 h-12 opacity-20">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-wedding-gold"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                </div>

                {/* Заголовок */}
                <h3 className="font-playfair text-2xl text-wedding-red mb-4">
                    Чат гостей
                </h3>

                {/* Описание */}
                <p className="font-cormorant text-stone-600 leading-relaxed mb-8 italic">
                    Мы хотим сделать этот день особенным и будем очень рады,
                    если вы поделитесь с нами чудесными снимками в общем чате!
                </p>

                {/* Кнопка */}
                <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-wedding-red text-white py-4 font-playfair uppercase tracking-widest text-sm hover:bg-stone-800 transition-all shadow-md"
                >
                    Вступить в чат
                </a>
            </div>
        </section>
    );
};

export default TelegramChat;
