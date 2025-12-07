// src/services/student/service.ts
import api from "../../api/axios";
import type { StudentView } from "../../types/student";

export const getStudentByCode = async (
  code: string
): Promise<StudentView> => {
  const { data } = await api.get<any>(`student/code/${code}`);

  console.log("🔵 RAW BACKEND RESPONSE:", data);

  const student: StudentView = {
    student_code: data.student_code,
    name: data.name,
    last_name: data.last_name,
    student_type: data.student_type,
    career: data.career,
    status: data.status,
    card_photo_key: data.card_photo_key,
  };

  console.log("✅ MAPPED StudentView:", student);

  return student;
};
