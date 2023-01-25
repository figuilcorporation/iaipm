import { InertiaLink, useForm, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import AuthenticationCard from '@/Components/AuthenticationCard';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { SelectOption } from '@/types';
import CustomSelect from '@/Components/CustomSelect';

const levels = [
  {
    value: 1,
    label: 'Niveau 1',
  },
  {
    value: 2,
    label: 'Niveau 2',
  },
  {
    value: 3,
    label: 'Niveau 3',
  },
];

export default function Register(props: any) {
  const [level, setLevel_id] = useState<SelectOption>(levels[0]);

  const page = useTypedPage();
  const route = useRoute();
  const form = useForm({
    first_name: '',
    level_id: levels[0].value,
    last_name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    terms: false,
  });

  useEffect(() => {
    console.log({level});
    form.setData('level_id', level.value);
  }, [level]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form.data);

    form.post(route('register'), {
      onFinish: () => form.reset('password', 'password_confirmation'),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Register" />

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <InputLabel htmlFor="first_name">
            Nom <small className="text-red-500">*</small>
          </InputLabel>
          <TextInput
            id="first_name"
            type="text"
            className="mt-1 block w-full"
            value={form.data.first_name}
            onChange={e => form.setData('first_name', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="first_name"
          />
          <InputError className="mt-2" message={form.errors.first_name} />
        </div>
        <div className="mb-3">
          <InputLabel htmlFor="last_name">Prénom</InputLabel>
          <TextInput
            id="last_name"
            type="text"
            className="mt-1 block w-full"
            value={form.data.last_name}
            onChange={e => form.setData('last_name', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="last_name"
          />
          <InputError className="mt-2" message={form.errors.last_name} />
        </div>
        <div className="mb-3">
          <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
          <TextInput
            id="username"
            type="text"
            className="mt-1 block w-full"
            value={form.data.username}
            onChange={e => form.setData('username', e.currentTarget.value)}
            required
            autoFocus
          />
          <InputError className="mt-2" message={form.errors.username} />
        </div>

        <div className="mb-3">
          <InputLabel htmlFor="email">
            Email <small className="text-red-500">*</small>
          </InputLabel>
          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={form.data.email}
            onChange={e => form.setData('email', e.currentTarget.value)}
            required
          />
          <InputError className="mt-2" message={form.errors.email} />
        </div>

        <div className="mb-3">
          <InputLabel htmlFor="phone">
            Téléphone <small className="text-red-500">*</small>
          </InputLabel>
          <TextInput
            id="phone"
            type="text"
            className="mt-1 block w-full"
            value={form.data.phone}
            onChange={e => form.setData('phone', e.currentTarget.value)}
            required
            autoFocus
            autoComplete="phone"
          />
          <InputError className="mt-2" message={form.errors.phone} />
        </div>

        <div className="mb-3">
        <CustomSelect
          label="Niveau"
          required
          selectData={levels}
          errors={form.errors}
          defaultValue={level}
          name="level_id"
          onChange={setLevel_id}
        />
        </div>

        <div className="mt-3">
          <InputLabel htmlFor="password">
            Password <small className="text-red-500">*</small>
          </InputLabel>
          <TextInput
            id="password"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password}
            onChange={e => form.setData('password', e.currentTarget.value)}
            required
            autoComplete="new-password"
          />
          <InputError className="mt-2" message={form.errors.password} />
        </div>

        <div className="mt-3">
          <InputLabel htmlFor="password_confirmation">
            Confirm Password <small className="text-red-500">*</small>
          </InputLabel>
          <TextInput
            id="password_confirmation"
            type="password"
            className="mt-1 block w-full"
            value={form.data.password_confirmation}
            onChange={e =>
              form.setData('password_confirmation', e.currentTarget.value)
            }
            required
            autoComplete="new-password"
          />
          <InputError
            className="mt-2"
            message={form.errors.password_confirmation}
          />
        </div>

        {page.props.jetstream.hasTermsAndPrivacyPolicyFeature && (
          <div className="mt-3">
            <InputLabel htmlFor="terms">
              <div className="flex items-center">
                <Checkbox
                  name="terms"
                  id="terms"
                  checked={form.data.terms}
                  onChange={e => form.setData('terms', e.currentTarget.checked)}
                  required
                />

                <div className="ml-2">
                  I agree to the
                  <a
                    target="_blank"
                    href={route('terms.show')}
                    className="underline text-sm text-slate-600 hover:text-slate-900"
                  >
                    Terms of Service
                  </a>
                  and
                  <a
                    target="_blank"
                    href={route('policy.show')}
                    className="underline text-sm text-slate-600 hover:text-slate-900"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <InputError className="mt-2" message={form.errors.terms} />
            </InputLabel>
          </div>
        )}

        <div className="flex items-center justify-end mt-3">
          <InertiaLink
            href={route('login')}
            className="underline text-sm text-slate-600 hover:text-slate-900"
          >
            Déjà inscrit?
          </InertiaLink>

          <PrimaryButton
            className={classNames('ml-4', { 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            M'inscrire
          </PrimaryButton>
        </div>
      </form>
    </AuthenticationCard>
  );
}
