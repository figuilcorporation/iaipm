import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome() {
  return (
    <div>
      <div className="p-6 sm:px-10 bg-white border-b border-slate-200">
        <div>
          <ApplicationLogo className="block h-12 w-auto" />
        </div>

        <div className="mt-8 text-2xl">
          Bienvenue dans le tableau de bord de IAIPM Parrainage
        </div>

        <div className="mt-6 text-slate-500">
          De nouvelles fonctionnalités seront bientôt disponibles.
        </div>
      </div>
    </div>
  );
}
