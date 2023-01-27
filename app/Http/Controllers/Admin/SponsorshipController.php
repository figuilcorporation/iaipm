<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Level;
use App\Models\Registration;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SponsorshipController extends Controller
{
    public function chooseLevel()
    {
        try {
            return Inertia::render('Sponsorship/ChooseLevel', [
                'levels' => Level::where('index', '!=', 3)->where('index', '!=', 6)->orderBy('index', 'ASC')->get(),
                'next_route' => 'sponsorship.allocate-sponsors',
            ]);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function chooseLevelToConsult()
    {
        return Inertia::render('Sponsorship/ChooseLevelConsult', [
            'levels' => Level::where('index', '!=', 3)->where('index', '!=', 6)->orderBy('index', 'ASC')->get(),
            'next_route' => 'sponsorship.consult.list-sponsors',
        ]);
    }

    private function fetchGodsons(Request $request)
    {
        $godsonsIds = Registration::where('level_id', $request->level)
            ->whereNull('mentor_id')
            ->where('registrations.year', '2022-2023')?->pluck('student_id');

        return User::with(['registration' => function ($query) use ($request) {
            return $query->where('year', '2022-2023');
        }])->role('Student')->with(['registration'])
            ->whereIn('id', $godsonsIds)
            ->notAdmin()->inRandomOrder()->get();
    }

    private function fetchGodsonsWithoutMentor($ids)
    {
        $levelsIds = Level::whereIn('index', $ids)->pluck('id');
        $godsonsIds = Registration::whereIn('level_id', $levelsIds)
            ->whereNull('mentor_id')
            ->where('year', '2022-2023')?->pluck('student_id');

        return User::with(['registration' => function ($query) {
            return $query->where('year', '2022-2023');
        }])->role('Student')->with(['registration'])
            ->whereIn('id', $godsonsIds)
            ->notAdmin()->inRandomOrder()->get();
    }

    private function fetchMentorsWithoutGodson($ids)
    {
        $mentorsIds = Registration::whereIn('level_id', $ids)
            ->where('registrations.year', '2022-2023')->pluck('student_id');

        return User::with(['registration' => function ($query) {
            return $query->where('year', '2022-2023');
        }])->role('Student')->with(['registration'])
            ->whereIn('id', $mentorsIds)
            ->notAdmin()->inRandomOrder()->get();
    }

    private function fetchMentors(Request $request)
    {
        $level = Level::findOrFail($request->level);
        $parent = Level::where('index', $level->index + 1)->firstOrFail();
        $mentorsIds = Registration::where('level_id', $parent->id)
            ->where('registrations.year', '2022-2023')->pluck('student_id');

        return User::with(['registration' => function ($query) use ($request) {
            return $query->where('year', '2022-2023');
        }])->role('Student')->with(['registration'])
            ->whereIn('id', $mentorsIds)
            ->notAdmin()->inRandomOrder()->get();
    }

    private function fetchMentorsWithLevel($ids)
    {
        $mentorsIds = Registration::whereIn('level_id', $ids)
            ->where('registrations.year', '2022-2023')->pluck('student_id');

        return User::with(['registration' => function ($query) {
            return $query->where('year', '2022-2023');
        }])->role('Student')->with(['registration'])
            ->whereIn('id', $mentorsIds)
            ->notAdmin()->inRandomOrder()->get();
    }

    private function allocate($godsons, $mentors)
    {
        if ($godsons->count() && $mentors->count()) {
            foreach ($mentors as $mentor) {
                if(!$godsons->count()){
                    break;
                }
                $godson = $godsons->random();

                $godsons = $godsons->reject(function ($value, $key) use ($godson) {
                    return $value->id === $godson->id;
                });
                $mentors = $mentors->reject(function ($value, $key) use ($mentor) {
                    return $value->id === $mentor->id;
                });

                $registration = $godson->registration;
                $registration->mentor_id = $mentor->id;
                $registration->save();
            }
        }
    }

    public function allocateSponsors(Request $request)
    {
        try {
            $level = Level::findOrFail($request->level);
            $godsons = $this->fetchGodsons($request);
            $mentors = $this->fetchMentors($request);

            if ($godsons->count())
                $this->allocate($godsons, $mentors);

            if ($level->index == 2) {
                $godsons = $this->fetchGodsonsWithoutMentor([1, 2]);
                $mentors = $this->fetchMentorsWithoutGodson([3]);

                if ($godsons->count()) {
                    if (!$mentors->count()) {
                        $mentors = $this->fetchMentorsWithLevel([3]);
                    }
                    $this->allocate($godsons, $mentors);
                }
            }

            if ($level->index == 5) {
                $godsons = $this->fetchGodsonsWithoutMentor([4]);
                $mentors = $this->fetchMentorsWithoutGodson([6]);

                if ($godsons->count()) {
                    if (!$mentors->count()) {
                        $mentors = $this->fetchMentorsWithLevel([6]);
                    }
                    $this->allocate($godsons, $mentors);
                }
            }

            return redirect(status: 302)->route('sponsorship.consult.list-sponsors', ['level' => $request->level]);
        } catch (\Throwable $th) {
            //throw $th;
            dd($th);
        }
    }

    private function fetchMentorsAndGodsons(Request $request)
    {
        // $level = Level::findOrFail($request->level);
        $registrations = Registration::where('level_id', $request->level)
        ->where('year', '2022-2023')
        ->with(['student', 'mentor'])
        ->get();
        return $registrations;
        // dd($registrations[0]);

        // return User::role('Student')
        //     ->notAdmin()
        //     ->with(['registration' => function ($query) use ($request) {
        //         return $query->where('year', '2022-2023');
        //     }, 'registration.student'])->with(['registration'])
        //     ->whereIn('id', $mentorsIds)
        //     ->orderBy('last_name', 'ASC')->get();
    }


    public function listSponsors(Request $request)
    {
        if(in_array($request->level, [3, 6])){
            abort(404, "Désolé l'ideentifiant fournit est invalid");
        }
        try {
            $registrations = $this->fetchMentorsAndGodsons($request);

            return Inertia::render('Sponsorship/GodsonsAndMentors', [
                'registrations' => $registrations,
            ]);
        } catch (\Throwable $th) {
            dd($th);
            //throw $th;
        }
    }
}
