<?php

namespace App\Models;

use Database\Factories\PortfolioItemFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortfolioItem extends Model
{
    /** @use HasFactory<PortfolioItemFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'url',
        'tags',
        'sort_order',
        'is_visible',
    ];

    protected $casts = [
        'tags' => 'array',
        'is_visible' => 'boolean',
    ];
}
