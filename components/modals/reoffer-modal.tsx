"use client";

import * as z from "zod";

import { useReofferModal } from "@/hooks/use-reoffer-modal";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(1),
});

export const ReofferModal = () => {
    const reofferModal = useReofferModal();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);
            const response = await axios.patch(`/api/orders/${reofferModal.offerId}`, values);
            window.location.assign(`/${response.data.id}`);
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal
            title="Make an offer"
            description="Change the offer value" isOpen={reofferModal.isOpen}
            onClose={reofferModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Value</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Value" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button disabled={loading} variant="outline" onClick={reofferModal.onClose}>Cancel</Button>
                                <Button disabled={loading} type="submit">Continue</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};