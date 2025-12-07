import { Scanner } from "@yudiel/react-qr-scanner";
import { Button } from "@/components/ui/button";
import {
  validateQRFormat,
  extractTokenFromQR,
} from "@/utils/qr";

type QrScannerBoxProps = {
  onClose: () => void;
  onResult: (token: string) => void;
  onInvalid?: (message: string) => void; // ✅ nuevo (opcional)
};

export default function QrScannerBox({
  onClose,
  onResult,
  onInvalid,
}: QrScannerBoxProps) {
  const handleScanResult = (qrContent?: string) => {
    if (!qrContent) return;

    if (!validateQRFormat(qrContent)) {
      onInvalid?.("QR no válido");
      return;
    }

    const token = extractTokenFromQR(qrContent);

    console.log("✅ Token extraído del QR:", token);

    onResult(token);
  };

  return (
    <div className="mt-5 bg-ufps-blanco-favorito p-4 rounded-lg shadow-md border border-ufps-texto-principal">
      <p className="text-ufps-texto-oscuro text-sm font-semibold text-center mb-3">
        Escanea el código QR del estudiante
      </p>

      <div className="flex justify-center items-center mb-3">
        <Scanner
          onScan={(result) =>
            handleScanResult(result?.[0]?.rawValue)
          }
          constraints={{
            facingMode: "environment",
            aspectRatio: 1,
            width: { ideal: 320 },
            height: { ideal: 240 },
          }}
          styles={{
            container: {
              width: "300px",
              height: "300px",
              borderRadius: "10px",
              overflow: "hidden",
            },
          }}
        />
      </div>

      <div className="flex justify-center">
        <Button
          onClick={onClose}
          className="bg-ufps-color-principal text-ufps-blanco-favorito font-medium px-4 h-10 rounded-md"
        >
          Cerrar
        </Button>
      </div>
    </div>
  );
}
