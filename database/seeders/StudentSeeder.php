<?php

namespace Database\Seeders;

use App\Models\InterestArea;
use App\Models\Level;
use App\Models\Registration;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $interest_areas = InterestArea::get();
        for ($i=0; $i < 1000; $i++) {
            $level = Level::inRandomOrder()->first();
            $student = User::create(
                [
                    'last_name' => fake('fr_FR')->lastName(),
                    'first_name' => fake('fr_FR')->firstName(),
                    'email' => $i.fake('fr_FR')->safeEmail(),
                    'email_verified_at' => now(),
                    'username' => substr(fake('fr_FR')->userName(), 0, 16).$i,
                    'password' => Hash::make(env('DEFAULT_PASSWORD', 'iaipm@')),
                ]
            );
            $student->assignRole('Student');
            $student->interest_areas()->sync($interest_areas->random(rand(2, 5)));

            Registration::create([
                'year' => '2022-2023',
                'student_id' => $student->id,
                'level_id' => $level->id,
            ]);
        }
    }
}
