"use client";
import React, { useState } from "react";

const RSVPForm = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            isComing: formData.get("attending") === "yes",
            additionalNames: formData.get("additionalNames"),
            dietaryNotes: formData.get("dietary"),
            preferredDrink: formData.getAll("drinks").join(", "),
        };

        // Здесь будет ваш fetch к API
        console.log("Отправка данных:", data);

        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="bg-[#333] text-white p-12 text-center font-playfair animate-fade-in">
                <h3 className="text-2xl mb-4">Благодарим!</h3>
                <p className="font-cormorant opacity-80">
                    Ваш ответ успешно сохранен.
                </p>
            </div>
        );
    }

    return (
        <section className="relative bg-wedding-red p-4 sm:p-8">
            <div className="max-w-md mx-auto relative bg-[#333] text-white/90 p-8 sm:p-12 shadow-2xl overflow-hidden">
                {/* ДЕКОРАТИВНАЯ СКРЕПКА */}
                <div className="absolute top-0 left-10 -translate-y-4 z-20">
                    <svg
                        width="40"
                        height="100"
                        viewBox="0 0 40 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-lg"
                    >
                        <path
                            d="M12 85V15C12 10.5817 15.5817 7 20 7C24.4183 7 28 10.5817 28 15V75C28 77.7614 25.7614 80 23 80C20.2386 80 18 77.7614 18 75V25"
                            stroke="#c5a059"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* ФОНОВАЯ ТЕНЬ ЛИСТЬЕВ (Опционально) */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/images/leaves-pattern.png')] bg-cover" />

                <div className="relative z-10">
                    <h2 className="font-playfair text-4xl text-center mb-2">
                        Анкета гостя
                    </h2>
                    <p className="font-cormorant text-center text-sm opacity-60 mb-12 italic">
                        Просим вас заполнить анкету <br /> до 01.08.2026 года
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* ВОПРОС: ПРИДЕТЕ ЛИ? */}
                        <div className="space-y-4">
                            <p className="font-cormorant text-lg">
                                Вы придете?
                            </p>
                            <div className="space-y-3">
                                {["Конечно, да", "К сожалению, не смогу"].map(
                                    (option, i) => (
                                        <label
                                            key={i}
                                            className="flex items-center group cursor-pointer"
                                        >
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name="attending"
                                                    value={
                                                        i === 0 ? "yes" : "no"
                                                    }
                                                    required
                                                    className="peer appearance-none w-5 h-5 border border-white/30 checked:border-wedding-gold transition-all"
                                                />
                                                <div className="absolute w-2 h-2 bg-wedding-gold scale-0 peer-checked:scale-100 transition-transform" />
                                            </div>
                                            <span className="ml-4 font-cormorant text-base group-hover:text-wedding-gold transition-colors">
                                                {option}
                                            </span>
                                        </label>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* ТЕКСТОВЫЕ ПОЛЯ */}
                        <div className="space-y-8">
                            {[
                                {
                                    id: "name",
                                    label: "Ваше имя и фамилия",
                                    placeholder: "",
                                },
                                {
                                    id: "additionalNames",
                                    label: "Если вы будете с парой или семьей, то внесите все имена",
                                    placeholder: "",
                                },
                                {
                                    id: "dietary",
                                    label: "Если у вас есть аллергия на продукты, пожалуйста, укажите их",
                                    placeholder: "",
                                },
                            ].map((field) => (
                                <div key={field.id} className="relative">
                                    <label
                                        htmlFor={field.id}
                                        className="block font-cormorant text-lg mb-2"
                                    >
                                        {field.label}
                                    </label>
                                    <input
                                        id={field.id}
                                        name={field.id}
                                        type="text"
                                        required={field.id === "name"}
                                        className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-wedding-gold transition-colors font-cormorant"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* ПОЖЕЛАНИЯ ПО АЛКОГОЛЮ */}
                        <div className="space-y-4">
                            <p className="font-cormorant text-lg">
                                Пожелания по алкоголю
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    "Игристое вино",
                                    "Белое вино",
                                    "Красное вино",
                                    "Крепкие напитки",
                                    "Безалкогольные",
                                ].map((drink) => (
                                    <label
                                        key={drink}
                                        className="flex items-center group cursor-pointer"
                                    >
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                name="drinks"
                                                value={drink}
                                                className="peer appearance-none w-5 h-5 border border-white/30 checked:border-wedding-gold transition-all"
                                            />
                                            <div className="absolute w-2 h-2 bg-wedding-gold scale-0 peer-checked:scale-100 transition-transform" />
                                        </div>
                                        <span className="ml-4 font-cormorant text-base group-hover:text-wedding-gold transition-colors text-white/70">
                                            {drink}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* КНОПКА ОТПРАВКИ */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-transparent border border-wedding-gold/50 text-wedding-gold py-4 font-playfair uppercase tracking-widest hover:bg-wedding-gold hover:text-white transition-all disabled:opacity-50"
                        >
                            {loading ? "Отправка..." : "Отправить"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RSVPForm;
