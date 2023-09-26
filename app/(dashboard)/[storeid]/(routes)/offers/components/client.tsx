"use client";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { columns, OrderColumn } from "./columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

interface OrderClientProps {
    data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {
    const params = useParams();
    const router = useRouter();
    return (
        <>
            <Heading title={`Offers (${data.length})`} description="Manage offers for your store" />
            <Separator />
            <DataTable searchKey="products" columns={columns} data={data} />
        </>
    );
};