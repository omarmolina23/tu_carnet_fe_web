import type { Student } from "../../types/student";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-4 rounded-md border border-ufps-texto-principal shadow-sm">
      <img
        src={student.image}
        alt={student.name}
        className="w-28 h-28 rounded-sm object-cover"
      />

      {/* Información centrada pero bien proporcionada */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="font-semibold text-ufps-texto-oscuro">{student.name}</p>
        <p className="text-sm text-ufps-texto-oscuro">
          <strong>Código:</strong> {student.code}
        </p>
        <p className="text-sm text-ufps-texto-oscuro">
          <strong>Carrera:</strong> {student.career}
        </p>
        <p
          className={`text-sm font-semibold ${
            student.status === "Matriculado" ? "text-ufps-success-principal" : "text-ufps-error-principal"
          }`}
        >
          <strong>Estado:</strong> {student.status}
        </p>
      </div>
    </div>
  );
}
