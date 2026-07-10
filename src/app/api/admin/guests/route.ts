import { db } from "@/db/db";
import { guests } from "@/db/schema";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const password = searchParams.get("password");

    // Пароль должен быть прописан в .env файле
    if (password !== process.env.ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const allGuests = await db
            .select()
            .from(guests)
            .orderBy(desc(guests.createdAt));
        return NextResponse.json(allGuests);
    } catch (error) {
        return NextResponse.json({ error: "Ошибка БД" }, { status: 500 });
    }
}
