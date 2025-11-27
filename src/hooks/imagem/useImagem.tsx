import { create } from "zustand";
import padrao from "../../assets/imagem.jpg"; 

type ImageStore = {
  imageUrl: string;
  setImageUrl: (url: string) => void;
};

export const useImageStore = create<ImageStore>((set) => ({
  imageUrl: padrao,
  setImageUrl: (url) => set({ imageUrl: url }),
}));
