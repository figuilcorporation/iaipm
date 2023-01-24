<?php

namespace Database\Seeders;

use App\Models\Level;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $level1 = Level::updateOrCreate(
            [
                'name' => 'Niveau 1',
                'slug' => 'niveau-1'
            ],
            [
                'index' => 1
            ]
        );

        $level2 = Level::updateOrCreate(
            [
                'name' => 'Niveau 2',
                'slug' => 'niveau-2'
            ],
            [
                'index' => 2
            ]
        );

        $level3 = Level::updateOrCreate(
            [
                'name' => 'Niveau 3',
                'slug' => 'niveau-3'
            ],
            [
                'index' => 3
            ]
        );
    }
}
