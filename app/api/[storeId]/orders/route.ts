import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function POST(
  req: Request,
) {
  try {
    const storeByUserId = await prismadb.store.findFirst();

    const products = await prismadb.product.findMany();

    const order = await prismadb.order.create({
      data: {
        value: 10,
        storeId: storeByUserId?.id!,
        isPaid: false,
        orderItems: {
          create: products.map((product) => ({
            product: {
              connect: {
                id: product.id
              }
            }
          }))
        }
      }
    });

    return NextResponse.json(order);

  } catch (error) {
    console.log('[ORDER_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { searchParams } = new URL(req.url)
    const isFeatured = searchParams.get('isFeatured');

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const products = await prismadb.product.findMany({
      where: {
        storeId: params.storeId,
        // isFeatured: isFeatured ? true : undefined,
        // isArchived: false,
      },
      include: {
        images: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log('[PRODUCTS_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};