import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name } = await req.json();
        const store = await prismadb.store.create({ data: { name } });

        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }

        return NextResponse.json(store);
    } catch (error) {
        console.log('[STORES_POST]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}