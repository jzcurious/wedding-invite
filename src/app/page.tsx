import { db } from "@/db/db";
import { guests } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function Home() {
    async function addGuest(formData: FormData) {
        "use server";
        const name = formData.get("name") as string;
        if (name) {
            await db.insert(guests).values({ name });
            revalidatePath("/");
        }
    }

    const allGuests = await db.select().from(guests);

    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-slate-50">
            <h1 className="text-3xl font-bold mb-8">Список гостей</h1>

            <form action={addGuest} className="mb-8 flex gap-2">
                <input
                    name="name"
                    className="border p-2 rounded text-black"
                    placeholder="Имя гостя"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Добавить
                </button>
            </form>

            <ul>
                {allGuests.map((guest) => (
                    <li key={guest.id} className="text-slate-800 border-b py-1">
                        {guest.name}
                    </li>
                ))}
            </ul>
        </main>
    );
}
