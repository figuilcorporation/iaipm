<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AppController extends Controller
{
    public function dashboard()
    {
        $student = User::where('id', auth()->id())->with([
            'registration',
            'registration.mentor',
            'registration.mentor.registration.student',
            'registration.mentor.registration.level',
        ])->first();
        $godsonsIds = Registration::where('mentor_id', $student->id)->get();

        $godsons = [];
        if ($godsonsIds->count()) {
            $godsons = User::with(
                [
                    'registration',
                    'registration.level',
                    'registration.level',
                ]
            )->whereIn('id', $godsonsIds->pluck('student_id'))->get();
        }

        return Inertia::render('Dashboard', compact('student', 'godsons'));
    }
}
