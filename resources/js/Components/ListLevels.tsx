import ContentCard from '@/Components/ContentCard';
import Empty from '@/Components/Empty';
import PrimaryButton from '@/Components/PrimaryButton';
import useRoute from '@/Hooks/useRoute';
import CustomLayout from '@/Layouts/CustomLayout';
import { Level } from '@/types';
import { InertiaLink } from '@inertiajs/inertia-react';
import React, { PropsWithChildren } from 'react';
import { IoChevronBack } from 'react-icons/io5';

interface Props {
  next_route: string;
  levels: Level[];
  grid?: string;
  method?: string;
  as?: string;
}

export default function ListLevels({
  next_route,
  levels,
  grid = 'grid-cols-1 sm:grid-cols-2',
  method = 'GET',
  as = 'button',
}: PropsWithChildren<Props>) {
  const route = useRoute();
  return (
    <CustomLayout
      title="Liste des niveaux"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-slate-800 leading-tight">
          Choisir un niveau pour continuer.
        </h2>
      )}
    >
      <div className="mt-10">
        <div className="px-1 h-auto">
          <div className="container mx-auto max-w-full">
            <div className="my-3">
              {levels?.length ? (
                <div className={`grid ${grid} gap-6`}>
                  {levels.map((item: Level) => (
                    <div key={item.id} className="relative">
                      <div className="p-3 rounded-md border shadow-md">
                        <h4 className="text-xl md:text-2xl text-slate-600 mb-3 font-bold">
                          {item.name}
                        </h4>
                        <InertiaLink
                          method={method}
                          as={as}
                          href={route(next_route, {
                            _query: {
                              level: item.id,
                            },
                          })}
                          className="btn-gradient-blue"
                        >
                            Choisir
                        </InertiaLink>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Empty title="Liste des niveaux vide." />
              )}
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
