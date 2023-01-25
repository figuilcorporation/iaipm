import React, { PropsWithChildren } from 'react';
import AppLayout from './AppLayout';

interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

const CustomLayout = ({
  title,
  children,
  renderHeader,
}: PropsWithChildren<Props>) => {
  return (
    <AppLayout title={title} renderHeader={renderHeader}>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CustomLayout;
