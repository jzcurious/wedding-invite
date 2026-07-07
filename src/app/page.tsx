import React from "react";
import Image from "next/image";

// Компонент формы RSVP (использует вашу схему DB)
import RSVPForm from "@/components/RSVPForm";

export default function WeddingPage() {
    return (
        <main className="min-h-screen bg-weddingCream text-stone-800 max-w-md mx-auto shadow-2xl overflow-x-hidden">
            {/* СЕКЦИЯ 1: ГЛАВНАЯ (Центральный скриншот) */}
            <section className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-white overflow-hidden">
                {/* Декоративные тени листьев (можно использовать SVG или картинку) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/leaf-shadow.png')] bg-cover" />

                <p className="font-script text-2xl mb-4 text-weddingRed">
                    в этот день...
                </p>
                <h1 className="font-serif text-4xl text-center mb-10 tracking-widest uppercase">
                    Алексей & Алена
                </h1>

                {/* Фото с эффектом марки */}
                <div className="relative w-64 h-80 border-12 border-white shadow-xl rotate-2">
                    <div className="absolute inset-0 border border-dashed border-stone-300 z-10" />
                    <Image
                        src="/couple.jpeg"
                        alt="Алексей и Алена"
                        fill // Заполнит родительский div
                        priority // Ускоряет загрузку (важно для первого экрана!)
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px" // Подсказка браузеру о размере
                    />
                </div>

                <div className="mt-12 text-center space-y-4">
                    <p className="font-serif text-xl italic leading-relaxed px-4">
                        Любовь — это начало истории, которую мы создаем вместе
                    </p>
                    <p className="font-script text-2xl text-weddingRed">
                        мы поженимся
                    </p>
                </div>
            </section>

            {/* СЕКЦИЯ 2: ТАЙМИНГ (Правый скриншот) */}
            <section className="min-h-screen bg-white border-x-16 border-weddingRed py-12 px-6 relative">
                {/* Эффект перфорации сверху */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-[url('/perforation.png')] bg-repeat-x" />

                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl mb-2">Тайминг дня</h2>
                    <p className="font-script text-xl text-weddingRed">
                        мы все продумали!
                    </p>
                </div>

                <div className="space-y-12 relative">
                    {/* Линия таймлайна */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-stone-200 border-dashed border-l" />

                    {[
                        {
                            time: "13:00",
                            title: "Welcome",
                            desc: "Легкая обстановка, знакомства, фотосессия",
                        },
                        {
                            time: "15:00",
                            title: "Выездная регистрация",
                            desc: "Торжественная церемония на территории ресторана",
                        },
                        {
                            time: "16:00",
                            title: "Начало банкета",
                            desc: "Самое время для вкусной еды и танцев",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="relative z-10 text-center bg-white py-2"
                        >
                            <div className="font-serif text-2xl text-weddingRed mb-1">
                                {item.time}
                            </div>
                            <div className="font-serif uppercase tracking-tight text-sm mb-1">
                                {item.title}
                            </div>
                            <div className="text-xs text-stone-500 max-w-40 mx-auto">
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* СЕКЦИЯ 3: ИНФОРМАЦИЯ И RSVP (Левый скриншот + форма) */}
            <section className="min-h-screen bg-weddingRed text-white p-8 relative">
                {/* Кружево сверху */}
                <div className="absolute top-0 left-0 w-full h-12 bg-[url('/lace.png')] bg-contain bg-repeat-x" />

                <div className="mt-12 text-center mb-12">
                    <h2 className="font-serif text-3xl uppercase tracking-widest">
                        Информация
                    </h2>
                    <p className="font-script text-xl opacity-90">
                        с любовью и заботой
                    </p>
                </div>

                {/* Карточка подарков */}
                <div className="bg-white text-stone-800 p-6 mb-8 transform -rotate-1 shadow-xl">
                    <h3 className="font-script text-2xl text-weddingRed mb-4">
                        Подарки
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Самое главное для нас в этот важный день — ваше
                        присутствие, а удобным форматом для подарков станут
                        конверты.
                    </p>
                </div>

                {/* Форма регистрации (привязка к вашей DB) */}
                <div className="bg-white text-stone-800 p-6 shadow-xl">
                    <h3 className="font-serif text-xl mb-6 text-center uppercase tracking-wider border-b pb-2">
                        Подтвердите участие
                    </h3>
                    <RSVPForm />
                </div>
            </section>
        </main>
    );
}
