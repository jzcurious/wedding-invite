"use client";
import React, { useState, useRef, useEffect } from "react";
import FadeIn from "@/components/FadeIn";

const RSVPForm = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formTopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (submitted && formTopRef.current) {
            formTopRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [submitted]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            isComingRegistration:
                formData.get("isComingRegistration") === "yes",
            isComingBanquet: formData.get("isComingBanquet") === "yes",
            hasChildren: formData.get("hasChildren") === "yes",
            additionalNames: formData.get("additionalNames"),
            preferredDrink: formData.getAll("drinks").join(", "),
        };

        try {
            const response = await fetch("/api/rsvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const err = await response.json();
                alert(err.error || "Произошла ошибка");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Ошибка сети. Проверьте соединение.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div
                ref={formTopRef}
                className="bg-wedding-cream text-wedding-red mt-20 py-24 p-16 text-center animate-fade-in border-y border-wedding-red/10"
            >
                <h3 className="font-playfair text-3xl mb-4">Благодарим!</h3>
                <p className="font-cormorant text-stone-600 italic">
                    Ваш ответ успешно сохранен. <br /> До встречи на свадьбе!
                </p>
            </div>
        );
    }

    return (
        <section
            ref={formTopRef}
            className="relative bg-wedding-cream py-16 px-6 pb-0"
        >
            <FadeIn>
                <div className="max-w-md mx-auto relative bg-white p-10 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">
                    {/* СКРЕПКА */}
                    <div className="absolute top-0 left-12 -translate-y-6 z-20">
                        <svg
                            width="35"
                            height="90"
                            viewBox="0 0 40 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="drop-shadow-md"
                        >
                            <path
                                d="M12 85V15C12 10.5817 15.5817 7 20 7C24.4183 7 28 10.5817 28 15V75C28 77.7614 25.7614 80 23 80C20.2386 80 18 77.7614 18 75V25"
                                stroke="#c5a059"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <h2 className="font-playfair text-4xl text-center text-wedding-red mb-2">
                            Анкета гостя
                        </h2>
                        <p className="font-marck text-center text-xl text-stone-400 mb-12">
                            просим заполнить до 01.08.2026
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-12">
                            {/* ВОПРОС 1: РЕГИСТРАЦИЯ */}
                            <div className="space-y-5">
                                <p className="font-cormorant text-xl text-stone-800 italic border-b border-stone-100 pb-2 text-balance">
                                    Придете на регистрацию? (11:10)
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Да, с удовольствием",
                                        "К сожалению, не смогу",
                                    ].map((option, i) => (
                                        <label
                                            key={`reg-${i}`}
                                            className="relative flex items-center group cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="isComingRegistration"
                                                value={i === 0 ? "yes" : "no"}
                                                required
                                                className="peer appearance-none w-5 h-5 border border-stone-200 checked:border-wedding-red transition-all rounded-full"
                                            />
                                            {/* Индикатор (точка) */}
                                            <div className="absolute left-0 w-5 h-5 flex items-center justify-center pointer-events-none scale-0 peer-checked:scale-100 transition-transform">
                                                <div className="w-2 h-2 bg-wedding-red rounded-full" />
                                            </div>
                                            <span className="ml-8 font-cormorant text-lg text-stone-600 group-hover:text-wedding-red transition-colors">
                                                {option}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* ВОПРОС 2: БАНКЕТ */}
                            <div className="space-y-5">
                                <p className="font-cormorant text-xl text-stone-800 italic border-b border-stone-100 pb-2 text-balance">
                                    Будете ли вы на банкете? (16:00)
                                </p>
                                <div className="space-y-3">
                                    {["Да, буду", "Не получится"].map(
                                        (option, i) => (
                                            <label
                                                key={`banquet-${i}`}
                                                className="relative flex items-center group cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name="isComingBanquet"
                                                    value={
                                                        i === 0 ? "yes" : "no"
                                                    }
                                                    required
                                                    className="peer appearance-none w-5 h-5 border border-stone-200 checked:border-wedding-red transition-all rounded-full"
                                                />
                                                <div className="absolute left-0 w-5 h-5 flex items-center justify-center pointer-events-none scale-0 peer-checked:scale-100 transition-transform">
                                                    <div className="w-2 h-2 bg-wedding-red rounded-full" />
                                                </div>
                                                <span className="ml-8 font-cormorant text-lg text-stone-600 group-hover:text-wedding-red transition-colors">
                                                    {option}
                                                </span>
                                            </label>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* ВОПРОС 3: ДЕТИ */}
                            <div className="space-y-5">
                                <p className="font-cormorant text-xl text-stone-800 italic border-b border-stone-100 pb-2 text-balance">
                                    Будут ли с вами дети?
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Да, планируем быть с детьми",
                                        "Нет, будем без детей",
                                    ].map((option, i) => (
                                        <label
                                            key={`kids-${i}`}
                                            className="relative flex items-center group cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="hasChildren"
                                                value={i === 0 ? "yes" : "no"}
                                                required
                                                className="peer appearance-none w-5 h-5 border border-stone-200 checked:border-wedding-red transition-all rounded-full"
                                            />
                                            <div className="absolute left-0 w-5 h-5 flex items-center justify-center pointer-events-none scale-0 peer-checked:scale-100 transition-transform">
                                                <div className="w-2 h-2 bg-wedding-red rounded-full" />
                                            </div>
                                            <span className="ml-8 font-cormorant text-lg text-stone-600 group-hover:text-wedding-red transition-colors">
                                                {option}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* ТЕКСТОВЫЕ ПОЛЯ */}
                            <div className="space-y-10">
                                {[
                                    { id: "name", label: "Ваше имя и фамилия" },
                                    {
                                        id: "additionalNames",
                                        label: "С кем вы будете? (имена)",
                                    },
                                ].map((field) => (
                                    <div
                                        key={field.id}
                                        className="relative group"
                                    >
                                        <label
                                            htmlFor={field.id}
                                            className="block font-cormorant text-xl text-stone-800 mb-1 italic"
                                        >
                                            {field.label}
                                        </label>
                                        <input
                                            id={field.id}
                                            name={field.id}
                                            type="text"
                                            required={field.id === "name"}
                                            placeholder="ответ здесь..."
                                            className="w-full bg-transparent border-b border-stone-200 py-2 focus:outline-none focus:border-wedding-red transition-colors font-cormorant text-lg placeholder:text-stone-300 placeholder:italic"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* ПОЖЕЛАНИЯ ПО АЛКОГОЛЮ (ЧЕКБОКСЫ) */}
                            <div className="space-y-5">
                                <p className="font-cormorant text-xl text-stone-800 italic border-b border-stone-100 pb-2">
                                    Пожелания по алкоголю
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        "Игристое вино",
                                        "Белое вино",
                                        "Красное вино",
                                        "Крепкие напитки",
                                        "Безалкогольные",
                                    ].map((drink) => (
                                        <label
                                            key={drink}
                                            className="relative flex items-center group cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                name="drinks"
                                                value={drink}
                                                className="peer appearance-none w-5 h-5 border border-stone-200 checked:border-wedding-red transition-all"
                                            />
                                            {/* Квадратик-индикатор */}
                                            <div className="absolute left-0 w-5 h-5 flex items-center justify-center pointer-events-none scale-0 peer-checked:scale-100 transition-transform">
                                                <div className="w-2.5 h-2.5 bg-wedding-red" />
                                            </div>
                                            <span className="ml-8 font-cormorant text-lg text-stone-600 group-hover:text-wedding-red transition-colors">
                                                {drink}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-wedding-red text-white py-5 font-playfair uppercase tracking-[0.2em] text-xs shadow-lg hover:bg-stone-800 transition-all disabled:opacity-50 mt-4"
                            >
                                {loading
                                    ? "Отправка..."
                                    : "Подтвердить участие"}
                            </button>
                        </form>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};

export default RSVPForm;
