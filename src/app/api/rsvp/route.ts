import { db } from "@/db/db";
import { guests } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        await db.insert(guests).values({
            name: body.name,
            isComingRegistration: body.isComingRegistration,
            isComingBanquet: body.isComingBanquet,
            hasChildren: body.hasChildren,
            additionalNames: body.additionalNames,
            preferredDrink: body.preferredDrink,
            dietaryNotes: body.dietaryNotes,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json(
            { error: "Не удалось сохранить данные" },
            { status: 500 },
        );
    }
}
