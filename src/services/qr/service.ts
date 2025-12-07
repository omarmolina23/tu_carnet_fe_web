import api from "@/api/axios";
import type { StudentView } from "@/types/student";

export interface ValidateQrResponse {
  valid: boolean;
  student?: StudentView;
}

export const validateQrToken = async (
  token: string
): Promise<ValidateQrResponse> => {
  const { data } = await api.post<ValidateQrResponse>(
    "qr/validate",
    { token }
  );

  console.log("✅ QR validation response:", data);
  return data;
};
