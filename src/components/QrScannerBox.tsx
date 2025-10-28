import { Scanner } from "@yudiel/react-qr-scanner";

type QrScannerBoxProps = {
  onClose: () => void;
  onResult: (data: string) => void; // <-- nuevo prop
};

export default function QrScannerBox({ onClose, onResult }: QrScannerBoxProps) {
  return (
    <div className="mt-5 bg-white p-4 rounded-lg shadow-md border border-gray-300">
      {/* Centered text */}
      <p className="text-gray-700 font-semibold text-center mb-3">
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
        <button
          onClick={onClose}
          className=" bg-ufps-red text-white px-3 py-1 rounded hover:bg-ufps-hover-red transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
