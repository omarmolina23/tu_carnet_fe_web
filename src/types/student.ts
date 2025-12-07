export interface StudentView {
    student_code: string;
    name: string;
    last_name: string;
    student_type: string;
    career: string;
    status: string;
    card_photo_key?: string | null;
}