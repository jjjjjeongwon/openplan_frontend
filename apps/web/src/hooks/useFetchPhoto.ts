import { useMutation } from '@tanstack/react-query';
import { fetchPhoto } from '../api/photo';
import { usePhotoStore } from '../store/usePhotoStore';
import type { PhotoResponse } from '../api/photo';

export const useFetchPhoto = () => {
  const setPhoto = usePhotoStore((state: any) => state.setPhoto);

  const mutation = useMutation<PhotoResponse, Error, void>({
    mutationFn: fetchPhoto,
    onSuccess: (data) => setPhoto(data),
  });

  return {
    fetchPhoto: mutation.mutate,
    status: mutation.status,
    data: mutation.data,
    error: mutation.error,
  };
};
