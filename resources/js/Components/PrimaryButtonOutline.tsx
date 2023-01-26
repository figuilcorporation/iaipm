import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function PrimaryButtonOutline({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={classNames(
        'inline-flex items-center px-4 py-2 text-blue-500 bg-transparent border border-blue-500 focus:border-blue-100 focus:ring focus:ring-blue-300/75 rounded-md hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-400 hover:text-white cursor-pointer transition duration-300 ease-in-out',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
