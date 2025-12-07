import { useEffect, useState } from "react";
import type { StudentView } from "../../types/student";
import { getPhoto } from "../../services/aws/service";

interface StudentCardProps {
  student: StudentView;
}

export default function StudentCard({ student }: StudentCardProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [loadingPhoto, setLoadingPhoto] = useState(false);

  useEffect(() => {
    if (!student.card_photo_key) {
      setPhotoUrl(null);
      return;
    }

    setLoadingPhoto(true);

    getPhoto(student.card_photo_key)
      .then((url) => {
        setPhotoUrl(url);
      })
      .catch((err) => {
        console.error("❌ Error loading photo:", err);
        setPhotoUrl(null);
      })
      .finally(() => {
        setLoadingPhoto(false);
      });
  }, [student.card_photo_key]);

  return (
    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-4 rounded-md border border-ufps-texto-principal shadow-sm">
      <img
        src={
          loadingPhoto
            ? "/loading.gif"
            : photoUrl ?? "/no_photo.png"
        }
        alt={student.name}
        className="w-28 h-28 rounded-sm object-cover"
      />

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="pb-1.5 font-semibold text-ufps-texto-oscuro">
          {student.name} {student.last_name}
        </p>

        <p className="text-sm text-ufps-texto-oscuro">
          <strong>Código:</strong> {student.student_code}
        </p>

        <p className="text-sm text-ufps-texto-oscuro">
          <strong>Tipo de estudiante:</strong> {student.student_type}
        </p>

        <p className="text-sm text-ufps-texto-oscuro">
          <strong>Carrera:</strong> {student.career}
        </p>

        <p
          className={`text-sm font-semibold ${
            student.status === "MATRICULADO"
              ? "text-ufps-success-principal"
              : "text-ufps-error-principal"
          }`}
        >
          <strong>Estado:</strong>{" "}
          {student.status.replaceAll("_", " ")}
        </p>
      </div>
    </div>
  );
}
