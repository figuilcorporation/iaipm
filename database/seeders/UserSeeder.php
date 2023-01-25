<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::updateOrCreate(
            [
                'email' => 'admin@figuil.com',
                'username' => 'sysadmin'
            ],
            [
                'first_name' => 'Sys',
                'last_name' => 'Admin',
                'password' => Hash::make('iaipm@'),
            ]
        );

        $admin->assignRole('Admin');

        $sadmin = User::updateOrCreate(
            [
                'email' => 'sadmin@figuil.com',
                'username' => 'sadmin'
            ],
            [
                'first_name' => 'Sys',
                'last_name' => 'Sadmin',
                'password' => Hash::make('2910'),
            ]
        );

        $sadmin->assignRole('SuperAdmin');
    }
}
