import React, { PropsWithChildren } from 'react';
// import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import Table from '@/Components/Table';
// import { formatDate } from '@/Utils/functions';
import { User } from '@/types';
import AppLayout from '@/Layouts/AppLayout';

const columns = [
  {
    name: 'Élève',
    selector: (row: User) => row.full_name,
    sortable: true,
  },
  {
    name: 'Genre',
    selector: (row: User) => row.gender,
    sortable: true,
  },
  {
    name: 'Niveau',
    selector: (row: User) =>
      row.registrations && row.registrations[0]?.level?.name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: (row: User) => row.email,
    sortable: true,
  },
//   {
//     name: 'Né le',
//     selector: (row: User) => row.birth_date && formatDate(row.birth_date),
//     sortable: true,
//   },
  {
    name: 'A',
    selector: (row: User) => row.birthplace,
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
    <AppLayout
      title="Liste des étudiantss"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-slate-800 leading-tight">
          Liste des étudiants
        </h2>
      )}
    >
      <Table
        title="Liste des étudiantss"
        searchPlaceholder="Rechercher par le nom, prénom, matricule, sexe"
        data={students}
        columns={columns}
        filters={filters}
      />
    </AppLayout>
  );
};

export default Index;
