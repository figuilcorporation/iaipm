import React, { PropsWithChildren } from 'react';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-100">
      <div>
        <AuthenticationCardLogo />
        <InertiaLink href='/'>
        {/* <img src="/IAIPM/IAIPM.png" alt="Figuil" className="h-[180px]" /> */}
        </InertiaLink>
      </div>

      <div className="w-full sm:max-w-md md:max-w-xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
