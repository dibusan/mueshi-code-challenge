import { create } from "zustand";

interface useReofferModalStore {
    isOpen: boolean;
    offerId: string;
    onOpen: () => void;
    onClose: () => void;
};

export const useReofferModal = create<useReofferModalStore>((set) => ({
    isOpen: false, onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    offerId: "",
}));