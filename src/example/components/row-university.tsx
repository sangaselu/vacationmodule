import type { Student } from '../interfaces/student';
import { identifyAgeGroup } from '../helpers/identifiy-age-group';
import { StudentModal } from './student-modal';
import { useState } from 'react';

interface Props {
  student: Student;
}
export const RowUniversity = ({ student }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4">
        {identifyAgeGroup(student.name, student.age)}
      </td>
      <td className="px-6 py-4">{student.age}</td>

      <td className="px-6 py-4">
        <button onClick={() => setIsOpen(true)}>Editar</button>
      </td>
      <StudentModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
    </tr>
  );
};
