<?php

namespace Database\Seeders;

use App\Models\Option;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Option::updateOrCreate(
            [
                'name' => 'Systemes et Réseaux',
                'slug' => 'systemes-et-reseaux',
            ],
            [
                'code' => 'SR',
            ]
        );
        Option::updateOrCreate(
            [
                'name' => 'Génie Logiciel',
                'slug' => 'genie-logiciel',
            ],
            [
                'code' => 'GL',
            ]
        );
        Option::updateOrCreate(
            [
                'name' => 'Sofware Engenieering',
                'slug' => 'software-engeneering',
            ],
            [
                'code' => 'SE',
            ]
        );
        Option::updateOrCreate(
            [
                'name' => 'Sofware Engenieering',
                'slug' => 'software-engeneering',
            ],
            [
                'code' => 'BA',
            ]
        );
    }
}
