<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index(){
        return Inertia::render('Students/Index', [
            'students' => User::role('Student')->orderBy('last_name', 'ASC')->get(),
        ]);
    }
}
