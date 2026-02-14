export interface PhotoResponse {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const fetchPhoto = async (): Promise<PhotoResponse> => {
  const res = await fetch('https://picsum.photos/id/0/info');
  if (!res.ok) {
    throw new Error('사진 조회 실패');
  }
  return res.json();
};
