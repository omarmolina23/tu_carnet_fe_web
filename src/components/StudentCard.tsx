import type { Student } from "../types/student";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-4 rounded-md shadow-sm">
      <img
        src={student.image}
        alt={student.name}
        className="w-28 h-28 rounded-sm object-cover"
      />

      {/* Información centrada pero bien proporcionada */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="text-lg font-semibold text-gray-800">{student.name}</p>
        <p className="text-gray-700">
          <strong>Código:</strong> {student.code}
        </p>
        <p className="text-gray-700">
          <strong>Carrera:</strong> {student.career}
        </p>
        <p
          className={`font-semibold ${
            student.status === "Matriculado" ? "text-green-700" : "text-red-700"
          }`}
        >
          <strong>Estado:</strong> {student.status}
        </p>
      </div>
    </div>
  );
}
