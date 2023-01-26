import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';
import PrimaryButtonOutline from '@/Components/PrimaryButtonOutline';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
}

export default function Welcome({
  canLogin,
  canRegister,
  laravelVersion,
  phpVersion,
}: Props) {
  const route = useRoute();
  const page = useTypedPage();

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-slate-100 dark:bg-slate-90 sm:items-center sm:pt-0">
      <Head title="Welcome" />

      {canLogin ? (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
          {page.props.user ? (
            <InertiaLink
              href={route('dashboard')}
              className="text-slate-700 dark:text-slate-500 underline"
            >
              Dashboard
            </InertiaLink>
          ) : (
            <>
              <InertiaLink
                href={route('login')}
                className="text-slate-700"
              >
                <PrimaryButtonOutline>Connexion</PrimaryButtonOutline>
              </InertiaLink>

              {canRegister ? (
                <InertiaLink
                  href={route('register')}
                  className="ml-4 text-slate-700"
                >
                  <PrimaryButton>Inscription</PrimaryButton>
                </InertiaLink>
              ) : null}
            </>
          )}
        </div>
      ) : null}

      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center pt-8 items-center sm:justify-start sm:pt-0 flex-col">
          <img src="/IAIPM/IAIPM.png" alt="Figuil" className="h-[380px]" />
          <h1 className="font-extrabold text-slate-600 text-2xl sm:text-4xl md:text-6xl uppercase">
            Parrainage
          </h1>
        </div>
      </div>
      <a
        href="https://figuil.com"
        target="_blank"
        className="text-slate-600 absolute justify-center items-center bottom-10 flex flex-col"
      >
        <p className="">from</p>
        <img
          src="/Figuil/Figuil Corporation.png"
          alt="Figuil"
          className="w-[80px]"
        />
      </a>
    </div>
  );
}
