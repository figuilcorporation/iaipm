<?php

namespace Database\Seeders;

use App\Models\Level;
use App\Models\Section;
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
        $fr = Section::updateOrCreate(
            [
                'name' => 'Francophone',
                'slug' => 'francophone',
            ],
            [
                'name' => 'Francophone',
                'slug' => 'francophone',
            ],
        );
        $en = Section::updateOrCreate(
            [
                'name' => 'Anglophone',
                'slug' => 'anglophone',
            ],
            [
                'name' => 'Anglophone',
                'slug' => 'anglophone',
            ],
        );
        Level::updateOrCreate(
            [
                'name' => 'Niveau 1',
                'slug' => 'niveau-1'
            ],
            [
                'index' => 1,
                'section_id' => $fr->id,
            ]
        );

        Level::updateOrCreate(
            [
                'name' => 'Niveau 2',
                'slug' => 'niveau-2'
            ],
            [
                'index' => 2,
                'section_id' => $fr->id,
            ]
        );

        Level::updateOrCreate(
            [
                'name' => 'Niveau 3',
                'slug' => 'niveau-3'
            ],
            [
                'index' => 3,
                'section_id' => $fr->id,
            ]
        );
        Level::updateOrCreate(
            [
                'name' => 'BA1',
                'slug' => 'ba-one'
            ],
            [
                'index' => 4,
                'section_id' => $en->id,
            ]
        );
        Level::updateOrCreate(
            [
                'name' => 'BA2',
                'slug' => 'ba-two'
            ],
            [
                'index' => 5,
                'section_id' => $en->id,
            ]
        );
        Level::updateOrCreate(
            [
                'name' => 'SE3',
                'slug' => 'se-three'
            ],
            [
                'index' => 6,
                'section_id' => $en->id,
            ]
        );
    }
}
