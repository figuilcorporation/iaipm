import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import ActionMessage from '@/Components/ActionMessage';
import FormSection from '@/Components/FormSection';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SecondaryButton from '@/Components/SecondaryButton';
import { InterestArea, SelectOption, User } from '@/types';
import CustomSelect from '@/Components/CustomSelect';

interface Props {
  user: User;
}

export default function UpdateProfileInformationForm({ user }: Props) {
    console.log({user});

  const form = useForm({
    _method: 'PUT',
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    phone: user.phone,
    email: user.email,
    interest_ids: [0],
    photo: null as File | null,
  });
  const route = useRoute();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const page = usePage<any>();
  const defaultInterestIds = user.interest_areas
    ? user.interest_areas?.map((item: InterestArea) => ({
        value: item.id,
        label: item.name,
      }))
    : [];
  const [interest_ids, setInterest_ids] =
    useState<SelectOption[]>(defaultInterestIds);

  useEffect(() => {
    interest_ids &&
      form.setData(
        'interest_ids',
        Array.from(interest_ids, (el: SelectOption) => el.value),
      );
  }, [interest_ids]);

  function updateProfileInformation() {
    form.post(route('user-profile-information.update'), {
      errorBag: 'updateProfileInformation',
      preserveScroll: true,
      onSuccess: () => clearPhotoFileInput(),
    });
  }

  function selectNewPhoto() {
    photoRef.current?.click();
  }

  function updatePhotoPreview() {
    const photo = photoRef.current?.files?.[0];

    if (!photo) {
      return;
    }

    form.setData('photo', photo);

    const reader = new FileReader();

    reader.onload = e => {
      setPhotoPreview(e.target?.result as string);
    };

    reader.readAsDataURL(photo);
  }

  function deletePhoto() {
    Inertia.delete(route('current-user-photo.destroy'), {
      preserveScroll: true,
      onSuccess: () => {
        setPhotoPreview(null);
        clearPhotoFileInput();
      },
    });
  }

  function clearPhotoFileInput() {
    if (photoRef.current?.value) {
      photoRef.current.value = '';
      form.setData('photo', null);
    }
  }

  return (
    <FormSection
      onSubmit={updateProfileInformation}
      title={'Profile Information'}
      description={`Update your account's profile information and email address.`}
      renderActions={() => (
        <>
          <ActionMessage on={form.recentlySuccessful} className="mr-3">
            Saved.
          </ActionMessage>

          <PrimaryButton
            className={classNames({ 'opacity-25': form.processing })}
            disabled={form.processing}
          >
            Save
          </PrimaryButton>
        </>
      )}
    >
      {/* <!-- Profile Photo --> */}
      {page.props.jetstream.managesProfilePhotos ? (
        <div className="col-span-6 sm:col-span-6">
          {/* <!-- Profile Photo File Input --> */}
          <input
            type="file"
            className="hidden"
            ref={photoRef}
            onChange={updatePhotoPreview}
          />

          <InputLabel htmlFor="photo" value="Photo" />

          {photoPreview ? (
            // <!-- New Profile Photo Preview -->
            <div className="mt-2">
              <span
                className="block rounded-full w-20 h-20"
                style={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundImage: `url('${photoPreview}')`,
                }}
              ></span>
            </div>
          ) : (
            // <!-- Current Profile Photo -->
            <div className="mt-2">
              <img
                src={user.profile_photo_url}
                alt={user.username}
                className="rounded-full h-20 w-20 object-cover"
              />
            </div>
          )}

          <SecondaryButton
            className="mt-2 mr-2"
            type="button"
            onClick={selectNewPhoto}
          >
            Select A New Photo
          </SecondaryButton>

          {user.profile_photo_path ? (
            <SecondaryButton
              type="button"
              className="mt-2"
              onClick={deletePhoto}
            >
              Remove Photo
            </SecondaryButton>
          ) : null}

          <InputError message={form.errors.photo} className="mt-2" />
        </div>
      ) : null}

      {/* <!-- First Name --> */}
      <div className="col-span-6 sm:col-span-6">
        <InputLabel htmlFor="first_name" value="Nom" />
        <TextInput
          id="first_name"
          type="text"
          className="mt-1 block w-full"
          value={form.data.first_name}
          onChange={e => form.setData('first_name', e.currentTarget.value)}
          autoComplete="first_name"
        />
        <InputError message={form.errors.first_name} className="mt-2" />
      </div>

      {/* <!-- Last Name --> */}
      <div className="col-span-6 sm:col-span-6">
        <InputLabel htmlFor="last_name" value="Prénom" />
        <TextInput
          id="last_name"
          type="text"
          className="mt-1 block w-full"
          value={form.data.last_name}
          onChange={e => form.setData('last_name', e.currentTarget.value)}
          autoComplete="last_name"
        />
        <InputError message={form.errors.last_name} className="mt-2" />
      </div>

      {/* <!-- Username --> */}
      <div className="col-span-6 sm:col-span-6">
        <InputLabel htmlFor="username" value="Nom d'utilisateur" />
        <TextInput
          id="username"
          type="text"
          className="mt-1 block w-full"
          value={form.data.username}
          onChange={e => form.setData('username', e.currentTarget.value)}
          autoComplete="username"
        />
        <InputError message={form.errors.username} className="mt-2" />
      </div>

      {/* <!-- Email --> */}
      <div className="col-span-6 sm:col-span-6">
        <InputLabel htmlFor="email" value="Email" />
        <TextInput
          id="email"
          type="email"
          className="mt-1 block w-full"
          value={form.data.email}
          onChange={e => form.setData('email', e.currentTarget.value)}
        />
        <InputError message={form.errors.email} className="mt-2" />
      </div>

      <div className="col-span-6 sm:col-span-6">
        <CustomSelect
          closeMenuOnSelect={false}
          label="Centre(s) d'intérêt(s)"
          isMulti
          selectData={page.props.interestAreas}
          placeholder="Centre(s) d'intérêt(s)"
          errors={form.errors}
          defaultValue={interest_ids}
          name="level_ids"
          onChange={setInterest_ids}
        />
      </div>
    </FormSection>
  );
}
