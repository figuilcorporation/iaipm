import React, { PropsWithChildren, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { filterPlainArray } from '@/Utils/functions';
import { MdArrowDropDown } from 'react-icons/md';
import ContentCard from '@/Components/ContentCard';
import Empty from '@/Components/Empty';

interface Props {
  data: any;
  columns: any;
  filters: any;
  title?: string;
  searchPlaceholder?: string;
  withSearch: boolean;
}

export default function Table({
  data,
  columns,
  filters,
  title,
  searchPlaceholder = 'Rechercher...',
  withSearch = true,
  ...rest
}: PropsWithChildren<Props>) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const founds = filterPlainArray(data, filters, search);
    setFilteredData(founds);
  }, [search]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    // <ContentCard disablePadding className="py-4">
      <DataTable
        fixedHeader
        sortIcon={<MdArrowDropDown />}
        pagination
        striped
        highlightOnHover
        paginationRowsPerPageOptions={[10, 15, 20, 25, 50, 100]}
        noDataComponent={<Empty title="Pas de donnée à afficher." />}
        columns={columns}
        data={filteredData}
        subHeader={withSearch}
        subHeaderComponent= {withSearch &&
          data.length > 0 && (
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="input text-sm py-2 my-4 shadow-none w-full md:w-1/2 lg:w-2/6"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
          )
        }
        {...rest}
      />
// </ContentCard>
  );
}
