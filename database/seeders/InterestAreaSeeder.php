<?php

namespace Database\Seeders;

use App\Models\InterestArea;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InterestAreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ia = [
            'name' => 'Développement Mobile',
            'slug' => 'developement-mobile'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Développement Web',
            'slug' => 'developement-web'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Infograaphie',
            'slug' => 'infographie'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Machine Learning',
            'slug' => 'machine-learning'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Jeux Video',
            'slug' => 'jeux-video'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'PHP',
            'slug' => 'php'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Python',
            'slug' => 'python'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'JAVA',
            'slug' => 'java'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'JavaScript',
            'slug' => 'javascript'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Langage C',
            'slug' => 'langage-c'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'C++',
            'slug' => 'c-plus-plus'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'C#',
            'slug' => 'c-sharp'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Flutter',
            'slug' => 'flutter'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Laravel',
            'slug' => 'laravel'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Symfony',
            'slug' => 'symfony'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'React',
            'slug' => 'react'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Vuejs',
            'slug' => 'vuejs'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Angularjs',
            'slug' => 'angularjs'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Tailwindcss',
            'slug' => 'tailwindcss'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'Bootstrap',
            'slug' => 'bootstrap'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => 'React Native',
            'slug' => 'react-native'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );

        $ia = [
            'name' => '.NET',
            'slug' => 'dotnet'
        ];
        InterestArea::updateOrCreate(
            $ia,
            $ia,
        );
    }
}
