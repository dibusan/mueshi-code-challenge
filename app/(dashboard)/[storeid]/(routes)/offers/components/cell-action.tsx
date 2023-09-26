"use client";

import axios from "axios";
import { Check, CircleDollarSign, Copy, Edit, MoreHorizontal, Trash, XCircle } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { OrderColumn } from "./columns";
import { useReofferModal } from "@/hooks/use-reoffer-modal";
import { ReofferModal } from "@/components/modals/reoffer-modal";

interface CellActionProps {
  data: OrderColumn;
}

export const CellAction: React.FC<CellActionProps> = ({
  data,
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();
  const reofferModal = useReofferModal();

  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.patch(`/api/orders/${data.id}/accept`);
      toast.success('Offer accepted.');
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success('Product ID copied to clipboard.');
  }

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <ReofferModal />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              console.log("ACCEPT");
              onConfirm();
            }}>
            <Check className="mr-2 h-4 w-4" /> Accept
          </DropdownMenuItem>
          <DropdownMenuItem>
            <XCircle className="mr-2 h-4 w-4" /> Cancel
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => {
            setOpen(false);
            reofferModal.onOpen();
          }}>
            <CircleDollarSign className="mr-2 h-4 w-4" /> Re Offerr
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};