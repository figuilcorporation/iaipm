<?php

namespace App\Actions\Fortify;

use App\Models\Registration;
use App\Models\Team;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'last_name' => ['required', 'string', 'max:255'],
            'level_id' => ['required', 'exists:levels,id'],
            'first_name' => ['nullable', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'phone' => ['required', 'string', 'max:20', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();
        $level_id = $input['level_id'];
        unset($input['level_id']);

        return DB::transaction(function () use ($input, $level_id) {
            return tap(User::create([
                'last_name' => $input['last_name'],
                'first_name' => $input['first_name'],
                'username' => $input['username'],
                'email' => $input['email'],
                'phone' => $input['phone'],
                'password' => Hash::make($input['password']),
            ]), function (User $user) use ($level_id) {
                $this->createTeam($user);
                $user->assignRole('Student');
                $this->createRegistration($user, $level_id);
            });
        });
    }

    /**
     * Create a personal team for the user.
     */
    protected function createTeam(User $user): void
    {
        $user->ownedTeams()->save(Team::forceCreate([
            'user_id' => $user->id,
            'name' => explode(' ', $user->first_name, 2)[0]."'s Team",
            'personal_team' => true,
        ]));
    }

    protected function createRegistration(User $user, $level_id): void
    {
        $user->registrations()->save(Registration::create([
            'student_id' => $user->id,
            'year' => "2022-2023",
            'level_id' => $level_id,
        ]));
    }
}
