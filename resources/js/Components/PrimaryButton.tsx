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
        'inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:border-blue-600 focus:ring focus:ring-blue-300 disabled:opacity-25 transition',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
