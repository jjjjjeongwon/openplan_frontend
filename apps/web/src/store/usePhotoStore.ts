import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PhotoResponse } from '../api/photo';

interface PhotoState {
  photo: PhotoResponse | null;
  setPhoto: (photo: PhotoResponse) => void;
  clearPhoto: () => void;
}

export const usePhotoStore = create<PhotoState>()(
  persist<PhotoState>(
    (set) => ({
      photo: null,
      setPhoto: (photo: PhotoResponse) => set({ photo }),
      clearPhoto: () => set({ photo: null }),
    }),
    {
      name: 'photo-storage', // localStorage key
    },
  ),
);
