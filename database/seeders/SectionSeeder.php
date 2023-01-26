<?php

namespace Database\Seeders;

use App\Models\Section;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Section::updateOrCreate(
            [   
                'name' => 'Francophone',
                'slug' => 'francophone',
            ],
            [
                'name' => 'Francophone',
                'slug' => 'francophone',
            ],
        );
        Section::updateOrCreate(
            [
                'name' => 'Anglophone',
                'slug' => 'anglophone',
            ],
            [
                'name' => 'Anglophone',
                'slug' => 'anglophone',
            ],
        );
    }
}
