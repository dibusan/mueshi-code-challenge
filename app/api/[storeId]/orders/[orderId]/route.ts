import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function PATCH(
    req: Request,
    { params }: { params: { orderId: string } }
) {
    try {
        const body = await req.json();

        const { value } = body;

        if (!value) {
            return new NextResponse("Value is required", { status: 400 });
        }

        const order = await prismadb.order.findFirst({
            where: {
                id: params.orderId,
            }
        });

        if (!order) {
            return new NextResponse("Unauthorized", { status: 405 });
        }

        const orderUpdated = await prismadb.order.update({
            where: {
                id: params.orderId,
            },
            data: {
                value: value
            }
        });

        return NextResponse.json(orderUpdated);
    } catch (error) {
        console.log('[ORDER_PATCH]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};