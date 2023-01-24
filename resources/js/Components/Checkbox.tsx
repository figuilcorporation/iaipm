import classNames from 'classnames';
import React from 'react';

export default function Checkbox(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) {
  return (
    <input
      type="checkbox"
      {...props}
      className={classNames(
        'rounded border-slate-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50',
        props.className,
      )}
    />
  );
}
