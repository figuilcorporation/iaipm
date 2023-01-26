<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;
use \LaravelArchivable\Archivable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use HasTeams;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use SoftDeletes;
    use Archivable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string<int, string>
     */
    protected $fillable = [
        'last_name',
        'first_name',
        'username',
        'phone',
        'is_worker',
        'birth_date',
        'birthplace',
        'gender',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
        'full_name',
        'interest_areas'
    ];

    public function getFullNameAttribute()
    {
        return "$this->first_name $this->last_name";
    }

    /**
     * Get all of the registrations for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function registrations(): HasMany
    {
        return $this->hasMany(Registration::class, 'student_id');
    }

    public function getInterestAreasAttribute(){
        return $this->interest_areas()->get();
    }

    /**
     * The users that belong to the InterestArea
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function interest_areas(): BelongsToMany
    {
        return $this->belongsToMany(InterestArea::class, 'student_interest_areas', 'student_id', 'interest_area_id')->withTimestamps();
    }
}
