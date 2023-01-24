import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome() {
  return (
    <div>
      <div className="p-6 sm:px-20 bg-white border-b border-slate-200">
        <div>
          <ApplicationLogo className="block h-12 w-auto" />
        </div>

        <div className="mt-8 text-2xl">
          Bienvenue dans le tableau de bord de IAIPM Parrainage
        </div>

        <div className="mt-6 text-slate-500">
          Laravel Jetstream provides a beautiful, robust starting point for your
          next Laravel application. Laravel is designed to help you build your
          application using a development environment that is simple, powerful,
          and enjoyable. We believe you should love expressing your creativity
          through programming, so we have spent time carefully crafting the
          Laravel ecosystem to be a breath of fresh air. We hope you love it.
        </div>
      </div>
    </div>
  );
}
