import { useState } from "react";
import type { Student } from "../types/student";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";

export default function ValidatePage() {
  const [code, setCode] = useState("");
  const [student, setStudent] = useState<Student | null>(null);
  const [valid, setValid] = useState(false);
  const [hasValidated, setHasValidated] = useState(false);

  const handleValidate = () => {
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    setHasValidated(false);
    setStudent(null);
    setValid(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="grow flex flex-col items-center mt-10 px-4">
        <div className="w-full max-w-3xl text-center">
          <label className="block text-left font-semibold mb-2 text-lg">
            Código <span className="text-ufps-red italic font-bold">UFPS</span>
          </label>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleValidate();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              placeholder="Ingresa tu código de estudiante"
              value={code}
              onChange={handleChange}
              className="border border-gray-300 bg-white rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="bg-ufps-red text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Validar código
            </button>

            <button
              type="button"
              className="bg-ufps-gray text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
            >
              Escanear código QR
            </button>
          </form>

          {/* Mensaje solo si ya presionó el botón */}
          {hasValidated && (
            <>
              {valid && student ? (
                <>
                  <div className="mt-6 bg-green-200 text-green-900 py-2 rounded-md font-semibold">
                    El estudiante pertenece a la{" "}
                    <span className="text-red-600">UFPS</span>
                  </div>
                  <StudentCard student={student} />
                </>
              ) : (
                <div className="mt-6 bg-red-200 text-red-900 py-2 rounded-md font-semibold">
                  Código no válido o estudiante no encontrado
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
