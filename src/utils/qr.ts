// src/utils/qr.ts

const QR_PREFIX = "UFPSCARNET:";

/**
 * Valida que el QR tenga el formato UFPSCARNET:token
 */
export const validateQRFormat = (qrContent: string): boolean => {
  return (
    qrContent.startsWith(QR_PREFIX) &&
    qrContent.length > QR_PREFIX.length
  );
};

/**
 * Extrae el token JWT del QR
 */
export const extractTokenFromQR = (qrContent: string): string => {
  return qrContent.replace(QR_PREFIX, "").trim();
};
