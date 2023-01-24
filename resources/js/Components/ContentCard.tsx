import React, { PropsWithChildren } from 'react';
interface Props {
  title?: string;
  bg?: string;
  color?: string;
  disablePadding: boolean;
  className?: string;
}

const ContentCard = ({
  title,
  children,
  bg = 'bg-slate-100',
  color = 'text-slate-600',
  disablePadding = false,
  className = '',
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`w-full bg-white rounded-lg relative shadow-md ${
        disablePadding ? '' : 'p-2 md:p-4'
      } ${className}`}
    >
      {title && (
        <div
          className={`${bg} ${color} -mt-10 mb-4 ${
            disablePadding ? 'mx-2 md:mx-4' : ''
          } rounded-lg grid border items-center w-full h-16 md:py-4 px-8 justify-start shadow-lg-orange`}
        >
          <h2 className="text-xl leading-tight md:text-2xl font-bold">
            {title}
          </h2>
        </div>
      )}
      <div
        className={`${
          disablePadding ? '' : ''
        } rounded-lg py-2 lg:py-3 break-all text-left`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
