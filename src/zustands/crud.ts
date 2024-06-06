import { create } from "zustand";
import axios from "axios";

interface UseCrudType {
  data: CardType[];
  statusAddModal: boolean;
  statusChangeModal: boolean;
  setStatusChangeModal: (status: boolean) => void;
  setStatusAddModal: (status: boolean) => void;
  getData: () => void;
  addCard: (card: SubmitCardType) => void;
  handleDelete: (_id: number) => void;
  changeCardFunc: (card: SubmitCardType, _id: number) => void;
}

const useAppCrud = create<UseCrudType>((set) => ({
  data: [],
  statusAddModal: false,
  statusChangeModal: false,
  setStatusChangeModal: (status) => set({ statusChangeModal: status }),
  setStatusAddModal: (status) => set({ statusAddModal: status }),
  getData: async () => {
    const api: any = process.env.NEXT_PUBLIC_DB;
    const { data } = await axios.get<CardType[]>(api);
    set({ data });
  },
  addCard: async (card: SubmitCardType) => {
    const api: any = process.env.NEXT_PUBLIC_DB;
    const { data } = await axios.post<CardType[]>(api, card);
    set({ data });
  },
  handleDelete: async (_id) => {
    const api: any = process.env.NEXT_PUBLIC_DB;
    const { data } = await axios.delete<CardType[]>(api + _id);
    set({ data });
  },
  changeCardFunc: async (card, _id) => {
    const api: any = process.env.NEXT_PUBLIC_DB;
    const { data } = await axios.patch<CardType[]>(api + _id, card);
    set({ data });
  },
}));

const useCrud = () => useAppCrud((state) => state);
export default useCrud;
