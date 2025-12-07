import { useState } from "react";
import type { StudentView } from "../types/student";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import Footer from "../components/validation_home/Footer";
import StudentCard from "../components/validation_home/StudentCard";
import QrScannerBox from "../components/validation_home/QrScannerBox";
import { getStudentByCode } from "../services/student/service";
import { validateQrToken } from "../services/qr/service";

export default function ValidatePage() {
  const [code, setCode] = useState("");
  const [student, setStudent] = useState<StudentView | null>(null);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [hasValidated, setHasValidated] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleValidate = async (code: string) => {
    if (!code) return;

    setHasValidated(true);
    setLoading(true);

    try {
      console.log("🔎 Validating code:", code);

      const studentFromApi = await getStudentByCode(code);

      setStudent(studentFromApi);
      setValid(true);
    } catch (error) {
      setStudent(null);
      setValid(false);
    } finally {
      setLoading(false);
      setCode("");
    }
  };

  const handleValidateQr = async (token: string) => {
  setShowScanner(false);
  setHasValidated(true);
  setLoading(true);

  try {
    const result = await validateQrToken(token);

    if (!result.valid || !result.student) {
      throw new Error("QR inválido o expirado");
    }

    setStudent(result.student);
    setValid(true);
  } catch (error) {
    setStudent(null);
    setValid(false);
  } finally {
    setLoading(false);
  }
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
            Código{" "}
            <span className="text-ufps-color-principal italic font-bold">
              UFPS
            </span>
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
              {loading ? (
                <div className="mt-6 bg-ufps-informacion-claro text-ufps-informacion-oscuro py-2 rounded-md text-sm font-semibold">
                  Validando estudiante...
                </div>
              ) : student ? (
                <>
                  {/* MENSAJE SEGÚN STATUS */}
                  {student.status === "MATRICULADO" ? (
                    <div className="mt-6 bg-ufps-success-claro text-ufps-success-oscuro py-2 rounded-md text-sm font-semibold">
                      El estudiante pertenece a la UFPS
                    </div>
                  ) : (
                    <div className="mt-6 bg-ufps-error-claro text-ufps-error-principal py-2 rounded-md text-sm font-semibold">
                      El estudiante NO se encuentra activo
                    </div>
                  )}

                  {/* SIEMPRE SE MUESTRA EL CARD SI EXISTE */}
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
              onResult={(token) => handleValidateQr(token)}
              onInvalid={(msg) => {
                setHasValidated(true);
                setValid(false);
                setStudent(null);
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
