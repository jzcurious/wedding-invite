"use client";
import React, { useState } from "react";
import { guests } from "@/db/schema";

type Guest = typeof guests.$inferSelect;

const AdminPage = () => {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setData] = useState<Guest[]>([]);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(`/api/admin/guests?password=${password}`);

        if (res.ok) {
            const guestsData: Guest[] = await res.json();
            setData(guestsData);
            setIsAuthenticated(true);
        } else {
            alert("Неверный код доступа");
        }
        setLoading(false);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-wedding-cream flex items-center justify-center p-6">
                <form
                    onSubmit={handleLogin}
                    className="bg-white p-10 shadow-xl border border-stone-100 max-w-sm w-full text-center"
                >
                    <h1 className="font-playfair text-2xl mb-8 text-stone-800 italic">
                        Управление RSVP
                    </h1>
                    <input
                        type="password"
                        placeholder="Введите пароль"
                        className="w-full border-b border-stone-200 py-3 mb-8 outline-none focus:border-wedding-red text-center font-cormorant text-xl"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="w-full bg-stone-800 text-white py-4 hover:bg-wedding-red transition-colors font-playfair uppercase text-[10px] tracking-[0.2em]">
                        {loading ? "Вход..." : "Показать список"}
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-wedding-cream p-6 md:p-12 font-cormorant">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="font-playfair text-4xl text-stone-800 mb-2">
                            Список гостей
                        </h1>
                        <p className="text-xl text-stone-500 italic">
                            Всего получено анкет: {data.length}
                        </p>
                    </div>
                    <button
                        onClick={() => window.print()}
                        className="bg-white border border-stone-200 px-8 py-3 font-playfair text-[10px] uppercase tracking-widest hover:bg-stone-50 transition-colors shadow-sm"
                    >
                        Печать / PDF
                    </button>
                </div>

                <div className="bg-white shadow-sm border border-stone-100 rounded-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-lg">
                            <thead>
                                <tr className="bg-stone-50 border-b border-stone-200 font-playfair text-[10px] uppercase tracking-widest text-stone-400">
                                    <th className="p-5">Основной гость</th>
                                    <th className="p-5 text-center">Рег.</th>
                                    <th className="p-5 text-center">Банкет</th>
                                    <th className="p-5 text-center">Дети</th>
                                    <th className="p-5">С кем будет</th>
                                    <th className="p-5">Алкоголь</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((guest) => (
                                    <tr
                                        key={guest.id}
                                        className="border-b border-stone-50 hover:bg-stone-50/50 transition-colors"
                                    >
                                        <td className="p-5 font-bold text-stone-800">
                                            {guest.name}
                                        </td>
                                        <td className="p-5 text-center text-2xl">
                                            {guest.isComingRegistration
                                                ? "💍"
                                                : "—"}
                                        </td>
                                        <td className="p-5 text-center text-2xl">
                                            {guest.isComingBanquet ? "🥂" : "—"}
                                        </td>
                                        <td className="p-5 text-center text-2xl">
                                            {guest.hasChildren ? "👶" : "—"}
                                        </td>
                                        <td className="p-5 text-stone-500 italic text-base leading-tight max-w-[200px]">
                                            {guest.additionalNames || "—"}
                                        </td>
                                        <td className="p-5 text-sm text-stone-600 leading-tight max-w-[200px]">
                                            {guest.preferredDrink || "—"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Статистика */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="bg-white p-8 border border-stone-100 shadow-sm text-center">
                        <span className="block text-stone-400 text-[10px] uppercase tracking-[0.2em] mb-3">
                            Идут на регистрацию
                        </span>
                        <span className="text-4xl text-wedding-red">
                            {data.filter((g) => g.isComingRegistration).length}
                        </span>
                    </div>
                    <div className="bg-white p-8 border border-stone-100 shadow-sm text-center">
                        <span className="block text-stone-400 text-[10px] uppercase tracking-[0.2em] mb-3">
                            Будут на банкете
                        </span>
                        <span className="text-4xl text-wedding-red">
                            {data.filter((g) => g.isComingBanquet).length}
                        </span>
                    </div>
                    <div className="bg-white p-8 border border-stone-100 shadow-sm text-center">
                        <span className="block text-stone-400 text-[10px] uppercase tracking-[0.2em] mb-3">
                            Кол-во анкет с детьми
                        </span>
                        <span className="text-4xl text-wedding-red">
                            {data.filter((g) => g.hasChildren).length}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
