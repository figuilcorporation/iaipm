<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class InterestArea extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug'
    ];

    /**
     * The users that belong to the InterestArea
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'student_interest_areas', 'interest_area_id', 'student_id');
    }
}
