import React, { PropsWithChildren } from 'react';
// import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import Table from '@/Components/Table';
import { formatDate } from '@/Utils/functions';
import { User } from '@/types';
import CustomLayout from '@/Layouts/CustomLayout';

const columns = [
  {
    name: 'Étudiant',
    selector: (row: User) => row.full_name,
    sortable: true,
  },
  {
    name: 'Niveau',
    selector: (row: User) =>
      row.registration && row.registration?.level?.name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row: User) => row.email,
    sortable: true,
  },
  {
    name: 'Téléphone',
    selector: (row: User) => row.phone,
    sortable: true,
  },
  // {
  //     name: "Actions",
  //     cell: (row: User) => (
  //         <div className="inline-flex space-x-2 justify-between whitespace-nowrap">
  //             <Link
  //                 className="btn-outline-sm"
  //                 href={route("registrations.students.show", row.id)}
  //             >
  //                 <IoCreateOutline />
  //             </Link>
  //             <button
  //                 onClick={() =>
  //                     confirmDelete(
  //                         route(
  //                             "registrations.students.destroy",
  //                             row.id
  //                         ),
  //                         row.id,
  //                         "Voulez-vous supprimer cet élève?"
  //                     )
  //                 }
  //                 className="btn-outline-red-sm block"
  //             >
  //                 <IoTrashOutline className="inline-block" />
  //             </button>
  //         </div>
  //     ),
  // },
];

interface Props {
  students: User[];
}

const Index = ({ students }: PropsWithChildren<Props>) => {
  const filters = ['full_name', 'gender'];

  return (
    <CustomLayout
      title="Liste des étudiantss"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-slate-800 leading-tight">
          Liste des étudiants
        </h2>
      )}
    >
      <Table
        searchPlaceholder="Rechercher par le nom, prénom, matricule, sexe"
        data={students}
        columns={columns}
        filters={filters}
      />
    </CustomLayout>
  );
};

export default Index;
