import api from "@/api/awsApi";

export interface GetPhotoResponse {
  url: string;
}

export const getPhoto = async (photoKey: string): Promise<string> => {
  const { data } = await api.post<GetPhotoResponse>("photo/signedUrl", {
    photoKey,
  });

  console.log("🖼️ Signed photo URL:", data.url);

  return data.url;
};
