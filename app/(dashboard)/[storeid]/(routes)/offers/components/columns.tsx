"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action";

export type OrderColumn = {
    id: string;
    phone: string;
    address: string;
    isPaid: boolean;
    totalPrice: string;
    products: string;
    value: string;
    status: string;
    createdAt: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "products",
        header: "Products",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "totalPrice",
        header: "Total price",
    },
    {
        accessorKey: "value",
        header: "Value",
    }, {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "isPaid",
        header: "Paid",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];