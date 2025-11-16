import { useState } from "react";
import type { Student } from "../types/student";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import Footer from "../components/validation_home/Footer";
import StudentCard from "../components/validation_home/StudentCard";
import QrScannerBox from "../components/validation_home/QrScannerBox";

export default function ValidatePage() {
  const [code, setCode] = useState("");
  const [student, setStudent] = useState<Student | null>(null);
  const [valid, setValid] = useState(false);
  const [hasValidated, setHasValidated] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleValidate = (code: string) => {
    setHasValidated(true);
    {
      /* Validate code simulation */
    }
    if (code === "1152669") {
      setValid(true);
      setStudent({
        name: "Dua Lipa",
        code: "1152669",
        career: "Ingeniería de Sistemas",
        status: "Matriculado",
        image:
          "https://www.hola.com/horizon/square/f7cf22f58810-dua-lipa-fotos-infancia-modelo-t.jpg",
      });
    } else if (code === "1152670") {
      setValid(true);
      setStudent({
        name: "Tate McRae",
        code: "1152670",
        career: "Ingeniería de Sistemas",
        status: "Matriculado",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/tate-mcrae-attends-the-brit-awards-2024-at-the-o2-arena-on-news-photo-1710255013.jpg?crop=0.663xw:1.00xh;0.169xw,0&resize=1200:*",
      });
    } else {
      setValid(false);
      setStudent(null);
    }
    setCode("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    setHasValidated(false);
    setStudent(null);
    setValid(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-ufps-gris-principal">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="grow flex flex-col items-center mt-10 mb-10 px-4">
        <div className="w-full max-w-3xl text-center">
          <label className="block text-left font-medium mb-2 text-medium">
            Código <span className="text-ufps-color-principal italic font-bold">UFPS</span>
          </label>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleValidate(code);
            }}
            className="flex flex-col sm:flex-row gap-3 items-stretch"
          >
            <Input
              type="text"
              placeholder="Ingresa tu código de estudiante"
              value={code}
              onChange={handleChange}
              className="border border-ufps-texto-principal bg-ufps-blanco-favorito rounded-md px-4 h-10 flex-3 placeholder:text-sm
               focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <Button
              type="submit"
              className="bg-ufps-color-principal text-ufps-blanco-favorito font-medium px-4 h-10 rounded-md flex-1"
            >
              Validar código
            </Button>

            <Button
              type="button"
              onClick={() => setShowScanner(true)}
              className="bg-ufps-informacion-oscuro text-ufps-blanco-favorito font-medium px-4 h-10 rounded-md flex-1"
            >
              Escanear código QR
            </Button>

          </form>

          {/* Student card */}
          {hasValidated && (
            <>
              {valid && student ? (
                <>
                  <div className="mt-6 bg-ufps-success-claro text-ufps-success-oscuro py-2 rounded-md text-sm font-semibold">
                    El estudiante pertenece a la UFPS
                  </div>
                  <StudentCard student={student} />
                </>
              ) : (
                <div className="mt-6 bg-ufps-error-claro text-ufps-error-principal py-2 rounded-md text-sm font-semibold">
                  Código no válido o estudiante no encontrado
                </div>
              )}
            </>
          )}

          {/* QrScannerBox component */}
          {showScanner && (
            <QrScannerBox
              onClose={() => setShowScanner(false)}
              onResult={(value) => {
                handleValidate(value); // ✅ ejecuta tu función con el valor escaneado
              }}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
