import React, { PropsWithChildren } from 'react';
// import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import Table from '@/Components/Table';
import { formatDate } from '@/Utils/functions';
import { Registration, User } from '@/types';
import CustomLayout from '@/Layouts/CustomLayout';

const columns = [
  {
    name: 'Parrain',
    selector: (row: Registration) => row.mentor?.full_name,
    sortable: true,
  },
  {
    name: 'Filleuls',
    selector: (row: Registration) => row.student?.full_name,
    sortable: true,
  },
];

interface Props {
  registrations: Registration[];
}

const GodsonsAndMentors = ({ registrations }: PropsWithChildren<Props>) => {
  const filters = ['full_name', 'gender'];

  return (
    <CustomLayout
      title="Liste des filleuls et parrains"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-slate-800 leading-tight">
          Liste des filleuls et parrains
        </h2>
      )}
    >
      <Table
        searchPlaceholder="Rechercher par le nom"
        data={registrations}
        columns={columns}
        filters={filters}
        withSearch = {false}
      />
    </CustomLayout>
  );
};

export default GodsonsAndMentors;
