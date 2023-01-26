import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function PrimaryButton({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={classNames(
        'inline-flex items-center px-4 py-2 bg-gradient-to-b from-blue-500 to-blue-400 text-white focus:border-blue-100 focus:ring focus:ring-blue-300/75 rounded-md hover:bg-gradient-to-b hover:from-blue-600 hover:to-blue-500 cursor-pointer transition duration-300 ease-in-out disabled:cursor-default disabled:bg-blue-300/50',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
