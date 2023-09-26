import prismadb from '@/lib/prismadb';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    // await prisma.store.create({
    //     data: {
    //         id: "70092cc2-f57d-4a10-8cac-64fd4d46ba16",
    //         name: 'Shoes Store',
    //     }
    // },);
    // await prisma.product.createMany(
    //     {
    //         data: [
    //             {
    //                 id: "0d976fab-a55c-4533-896a-0491627eaad1",
    //                 storeId: "a4358b98-d081-4717-8abc-80a8bba814ff",
    //                 name: "Nike Jordans 1",
    //                 price: 250
    //             },
    //             {
    //                 id: "249560f2-3271-4241-b26f-19720aaa1997",
    //                 storeId: "a4358b98-d081-4717-8abc-80a8bba814ff",
    //                 name: "Nike Jordans 2",
    //                 price: 300
    //             },
    //             {
    //                 id: "df0c5744-cb87-44aa-9d1b-8fbd1ab728da",
    //                 storeId: "a4358b98-d081-4717-8abc-80a8bba814ff",
    //                 name: "Nike Jordans 3",
    //                 price: 350
    //             },
    //         ]
    //     }
    // );
    // await prisma.image.createMany({
    //     data: [
    //         {
    //             productId: "0d976fab-a55c-4533-896a-0491627eaad1",
    //             url: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwicvavivcOBAxXth1oFHTPBCskYABAGGgJ2dQ&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu3K3PmVOiboXoOjNLcuO7g_K4r89Q6Gdv36MumlkaqtCjWLYePnGJkaAowPEALw_wcB&ohost=www.google.com&cid=CAESbeD26nSR8GTwFs0tz05ZUWKjPU_yv7uiyL6glbetMMtCuUdkQGtixpXG-anHMlUI0j5zZ29bx6rqyMdtwcdgIr0I5WAVezF8DXItP2Emn596PLs_0lmTb911EwsFB4PWCNDA7H2JnpjNuWGLpQo&sig=AOD64_0HqpOaFJVg8R--d4Ie8mVOBfSllQ&ctype=5&q=&ved=2ahUKEwjml6PivcOBAxXOmIQIHdUuBfAQ9aACKAB6BAgDEBk&adurl=",
    //         },
    //         {
    //             productId: "249560f2-3271-4241-b26f-19720aaa1997",
    //             url: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwicvavivcOBAxXth1oFHTPBCskYABAGGgJ2dQ&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu3K3PmVOiboXoOjNLcuO7g_K4r89Q6Gdv36MumlkaqtCjWLYePnGJkaAowPEALw_wcB&ohost=www.google.com&cid=CAESbeD26nSR8GTwFs0tz05ZUWKjPU_yv7uiyL6glbetMMtCuUdkQGtixpXG-anHMlUI0j5zZ29bx6rqyMdtwcdgIr0I5WAVezF8DXItP2Emn596PLs_0lmTb911EwsFB4PWCNDA7H2JnpjNuWGLpQo&sig=AOD64_0HqpOaFJVg8R--d4Ie8mVOBfSllQ&ctype=5&q=&ved=2ahUKEwjml6PivcOBAxXOmIQIHdUuBfAQ9aACKAB6BAgDEBk&adurl=",
    //         },
    //         {
    //             productId: "df0c5744-cb87-44aa-9d1b-8fbd1ab728da",
    //             url: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwicvavivcOBAxXth1oFHTPBCskYABAGGgJ2dQ&gclid=Cj0KCQjwvL-oBhCxARIsAHkOiu3K3PmVOiboXoOjNLcuO7g_K4r89Q6Gdv36MumlkaqtCjWLYePnGJkaAowPEALw_wcB&ohost=www.google.com&cid=CAESbeD26nSR8GTwFs0tz05ZUWKjPU_yv7uiyL6glbetMMtCuUdkQGtixpXG-anHMlUI0j5zZ29bx6rqyMdtwcdgIr0I5WAVezF8DXItP2Emn596PLs_0lmTb911EwsFB4PWCNDA7H2JnpjNuWGLpQo&sig=AOD64_0HqpOaFJVg8R--d4Ie8mVOBfSllQ&ctype=5&q=&ved=2ahUKEwjml6PivcOBAxXOmIQIHdUuBfAQ9aACKAB6BAgDEBk&adurl=",
    //         },
    //     ]
    // });

    const order = await prisma.order.create({
        data: {
            value: 10,
            phone: "1",
            isPaid: true,
            address: "aaa",
            storeId: "67f3c5b8-1c07-458c-8905-2cf8b8ccb0d1",
        }
    });
    const order2 = await prisma.order.create({
        data: {
            value: 10,
            phone: "2",
            isPaid: true,
            address: "bbb",
            storeId: "67f3c5b8-1c07-458c-8905-2cf8b8ccb0d1",
        }
    });

    await prisma.orderItem.create({
        data: {
            productId: "ca3138e6-2164-41a6-8cf2-a3473d99e2ff",
            orderId: order.id,
        }
    });
    await prisma.orderItem.create({
        data: {
            productId: "ca3138e6-2164-41a6-8cf2-a3473d99e2ff",
            orderId: order2.id,
        }
    });

    const order3 = await prisma.order.create({
        data: {
            value: 10,
            phone: "3",
            isPaid: true,
            address: "ccc",
            storeId: "67f3c5b8-1c07-458c-8905-2cf8b8ccb0d1",
        }
    });

    await prisma.orderItem.create({
        data: {
            productId: "ebca3e18-49ae-42ed-9e28-63f0c6d4ea86",
            orderId: order3.id,
        }
    });

    const order4 = await prisma.order.create({
        data: {
            value: 10,
            phone: "4",
            isPaid: true,
            address: "ccc",
            storeId: "67f3c5b8-1c07-458c-8905-2cf8b8ccb0d1",
        }
    });
    const order5 = await prisma.order.create({
        data: {
            value: 10,
            phone: "5",
            isPaid: true,
            address: "ddd",
            storeId: "67f3c5b8-1c07-458c-8905-2cf8b8ccb0d1",
        }
    });

    await prisma.orderItem.create({
        data: {
            productId: "400fbba5-e261-46af-bcdc-762848a5855a",
            orderId: order4.id,
        }
    });
    await prisma.orderItem.create({
        data: {
            productId: "400fbba5-e261-46af-bcdc-762848a5855a",
            orderId: order5.id,
        }
    });
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
