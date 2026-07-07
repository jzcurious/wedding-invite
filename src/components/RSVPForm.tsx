"use client";
import { useState } from "react";

export default function RSVPForm() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            isComingRegistration: formData.get("isComingRegistration") === "on",
            isComingBanquet: formData.get("isComingBanquet") === "on",
            hasChildren: formData.get("hasChildren") === "on",
            preferredDrink: formData.get("preferredDrink"),
            dietaryNotes: formData.get("dietaryNotes"),
        };

        const res = await fetch("/api/guests", {
            method: "POST",
            body: JSON.stringify(data),
        });

        if (res.ok) setStatus("Спасибо! Ждем вас!");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm font-sans">
            <div>
                <label className="block mb-1 text-stone-500 uppercase text-[10px]">
                    Ваше Имя
                </label>
                <input
                    name="name"
                    required
                    className="w-full border-b border-stone-300 py-1 focus:outline-none focus:border-weddingRed"
                />
            </div>

            <div className="flex flex-col gap-2 pt-2">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="isComingRegistration"
                        className="accent-weddingRed"
                    />
                    <span>Приду на регистрацию</span>
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="isComingBanquet"
                        className="accent-weddingRed"
                    />
                    <span>Приду на банкет</span>
                </label>
            </div>

            <div>
                <label className="block mb-1 text-stone-500 uppercase text-[10px]">
                    Пожелания по напиткам
                </label>
                <select
                    name="preferredDrink"
                    className="w-full border-b border-stone-300 py-1 bg-transparent"
                >
                    <option>Вино (красное/белое)</option>
                    <option>Шампанское</option>
                    <option>Крепкий алкоголь</option>
                    <option>Безалкогольные</option>
                </select>
            </div>

            <button className="w-full bg-weddingRed text-white py-3 mt-4 uppercase tracking-widest text-xs hover:bg-red-900 transition-colors">
                Подтвердить
            </button>

            {status && (
                <p className="text-center text-green-600 mt-2">{status}</p>
            )}
        </form>
    );
}
