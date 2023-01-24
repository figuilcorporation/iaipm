import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function SecondaryButton({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={classNames(
        'inline-flex items-center px-4 py-2 bg-white border border-slate-300 rounded-md font-semibold text-xs text-slate-700 uppercase tracking-widest shadow-sm hover:text-slate-500 focus:outline-none focus:border-slate-300 focus:ring focus:ring-slate-200 active:text-slate-800 active:bg-slate-50 disabled:opacity-25 transition',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
