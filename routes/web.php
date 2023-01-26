<?php

use App\Http\Controllers\Admin\SponsorshipController;
use App\Http\Controllers\Admin\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified', 'role:SuperAdmin|Admin'])->group(function(){
    Route::get('students/index', [StudentController::class, 'index'])->name('students.index');
    Route::get('sponsorship/allocate/choose-level', [SponsorshipController::class, 'chooseLevel'])->name('sponsorship.allocate.choose-level');
    Route::post('sponsorship/allocate-sponsors', [SponsorshipController::class, 'allocateSponsors'])->name('sponsorship.allocate-sponsors');
    Route::get('sponsorship/consult/choose-level', [SponsorshipController::class, 'chooseLevelToConsult'])->name('sponsorship.consult.choose-level');
    Route::get('sponsorship/consult/list-sponsors', [SponsorshipController::class, 'listSponsors'])->name('sponsorship.consult.list-sponsors');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
