<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Level;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SponsorshipController extends Controller
{
    public function chooseLevel(){
        return Inertia::render('Sponsorship/ChooseLevel', [
            'levels' => Level::where('index', '<', 3)->orderBy('index', 'ASC')->get(),
            'next_route' => 'sponsorship.allocate-sponsors',
        ]);
    }

    public function chooseLevelToConsult(){
        return Inertia::render('Sponsorship/ChooseLevelConsult', [
            'levels' => Level::orderBy('index', 'ASC')->get(),
            'next_route' => 'sponsorship.consult.list-sponsors',
        ]);
    }

    public function allocateSponsors(Request $request){
        dd($request->all());

    }

    public function listSponsors(Request $request){
        dd($request->all());

    }
}
