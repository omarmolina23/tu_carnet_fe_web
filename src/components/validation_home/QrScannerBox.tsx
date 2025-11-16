import { Scanner } from "@yudiel/react-qr-scanner";
import { Button } from "@/components/ui/button";

type QrScannerBoxProps = {
  onClose: () => void;
  onResult: (data: string) => void; // <-- nuevo prop
};

export default function QrScannerBox({ onClose, onResult }: QrScannerBoxProps) {
  return (
    <div className="mt-5 bg-ufps-blanco-favorito p-4 rounded-lg shadow-md border border-ufps-texto-principal">
      {/* Centered text */}
      <p className="text-ufps-texto-oscuro text-sm font-semibold text-center mb-3">
        Escanea el código QR del estudiante
      </p>

      {/* Centered scanner */}
      <div className="flex justify-center items-center mb-3">
        <Scanner
          onScan={(result) => onResult(result[0]?.rawValue)}
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

      {/* Button */}
      <div className="flex justify-center">
        <Button
          onClick={onClose}
          className="bg-ufps-color-principal text-ufps-blanco-favorito font-medium px-4 h-10 rounded-md flex-1"
        >
          Cerrar
        </Button>
      </div>
    </div>
  );
}
