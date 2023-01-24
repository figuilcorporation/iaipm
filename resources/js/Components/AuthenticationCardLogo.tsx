import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

export default function AuthenticationCardLogo() {
  return (
    <InertiaLink href="/">
      <img src="/IAIPM/Logo.png" alt="Figuil" className="h-[180px]" />
    </InertiaLink>
  );
}
